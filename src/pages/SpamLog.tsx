import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Loader2, ShieldAlert, RefreshCw } from "lucide-react";


interface BlockedRow {
  id: string;
  created_at: string;
  reason: string;
  score: number | null;
  name: string | null;
  email: string | null;
  page: string | null;
  user_agent: string | null;
}

const SpamLog = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [rows, setRows] = useState<BlockedRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    const { data, error: loadError } = await supabase
      .from("blocked_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);
    if (loadError) {
      setError(loadError.message);
      toast.error("Failed to load blocked submissions", {
        description: loadError.message,
      });
    }
    setRows((data as BlockedRow[]) ?? []);
    setLoading(false);
  };


  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate("/auth", { replace: true });
        return;
      }
      const { data: roles, error: rolesError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sessionData.session.user.id);
      if (rolesError) {
        setError(rolesError.message);
        toast.error("Failed to verify admin access", {
          description: rolesError.message,
        });
      }
      const admin = (roles ?? []).some((r: { role: string }) => r.role === "admin");
      setIsAdmin(admin);
      setChecking(false);
      if (admin) load();

    };
    init();
  }, [navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  if (checking) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-mtechBlue-800" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blocked Submissions | MTech Corp Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold text-mtechGray-900 flex items-center gap-2">
            <ShieldAlert className="h-7 w-7 text-mtechOrange" /> Blocked Submissions
          </h1>
          <div className="flex gap-2">
            {isAdmin && (
              <Button variant="outline" onClick={load} disabled={loading}>
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} /> Refresh
              </Button>
            )}
            <Button variant="ghost" onClick={signOut}>Sign out</Button>
          </div>
        </div>

        {error && (
          <p className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            Could not load data: {error}
          </p>
        )}

        {!isAdmin ? (
          <p className="text-mtechGray-700">
            Your account does not have administrator access to this log.
          </p>
        ) : rows.length === 0 ? (
          <p className="text-mtechGray-700">No blocked submissions recorded yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-mtechGray-100 shadow-sm bg-white">
            <table className="w-full text-sm">
              <thead className="bg-mtechGray-50 text-left text-mtechGray-700">
                <tr>
                  <th className="p-3 font-semibold">When</th>
                  <th className="p-3 font-semibold">Reason</th>
                  <th className="p-3 font-semibold">Score</th>
                  <th className="p-3 font-semibold">Name</th>
                  <th className="p-3 font-semibold">Email</th>
                  <th className="p-3 font-semibold">Page</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-mtechGray-100 align-top">
                    <td className="p-3 whitespace-nowrap">{new Date(r.created_at).toLocaleString()}</td>
                    <td className="p-3">{r.reason}</td>
                    <td className="p-3">{r.score ?? "-"}</td>
                    <td className="p-3">{r.name ?? "-"}</td>
                    <td className="p-3 break-all">{r.email ?? "-"}</td>
                    <td className="p-3 break-all">{r.page ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default SpamLog;
