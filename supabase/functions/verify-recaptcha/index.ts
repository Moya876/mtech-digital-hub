import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const admin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const clip = (v: unknown, max = 200) =>
  typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;

async function logBlocked(entry: {
  reason: string;
  score?: number | null;
  name?: unknown;
  email?: unknown;
  page?: unknown;
  userAgent?: string | null;
}) {
  const { error } = await admin.from("blocked_submissions").insert({
    reason: entry.reason,
    score: entry.score ?? null,
    name: clip(entry.name, 100),
    email: clip(entry.email, 255),
    page: clip(entry.page, 300),
    user_agent: clip(entry.userAgent, 300),
  });
  if (error) console.error("failed to log blocked submission", error.message);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const siteKey = Deno.env.get("RECAPTCHA_SITE_KEY");
  const secretKey = Deno.env.get("RECAPTCHA_SECRET_KEY");
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    if (req.method === "GET") {
      return json({ siteKey: siteKey ?? null });
    }

    const body = await req.json();
    const { token, name, email, page } = body ?? {};
    const userAgent = req.headers.get("user-agent");

    if (!token || typeof token !== "string" || token.length > 5000) {
      await logBlocked({ reason: "missing_token", name, email, page, userAgent });
      return json({ success: false, error: "Missing token" }, 400);
    }

    if (!secretKey) return json({ success: false, error: "Not configured" }, 500);

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: token }),
    });
    const data = await res.json();
    const score = typeof data.score === "number" ? data.score : null;
    const success = Boolean(data.success) && (score ?? 0) >= 0.5;

    if (!success) {
      await logBlocked({
        reason: data.success ? "low_score" : `invalid_token:${(data["error-codes"] ?? []).join(",") || "unknown"}`,
        score,
        name,
        email,
        page,
        userAgent,
      });
    }

    return json({ success, score });
  } catch (e) {
    console.error("verify-recaptcha error", e);
    return json({ success: false, error: "Verification failed" }, 500);
  }
});
