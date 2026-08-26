import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const SCRIPT_ID = "recaptcha-v3-script";

/**
 * Loads Google reCAPTCHA v3 using the site key served by the backend,
 * and exposes an executor that returns a fresh token for an action.
 */
export const useRecaptcha = () => {
  const [siteKey, setSiteKey] = useState<string | null>(null);
  const loaded = useRef(false);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      const { data, error } = await supabase.functions.invoke("verify-recaptcha", {
        method: "GET",
      });
      if (cancelled || error || !data?.siteKey) return;
      setSiteKey(data.siteKey);

      if (!document.getElementById(SCRIPT_ID)) {
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = `https://www.google.com/recaptcha/api.js?render=${data.siteKey}`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
      loaded.current = true;
    };

    init();
    return () => {
      cancelled = true;
    };
  }, []);

  const execute = async (action: string): Promise<string | null> => {
    if (!siteKey || !window.grecaptcha) return null;
    return new Promise((resolve) => {
      window.grecaptcha!.ready(async () => {
        try {
          resolve(await window.grecaptcha!.execute(siteKey, { action }));
        } catch {
          resolve(null);
        }
      });
    });
  };

  return { execute, ready: Boolean(siteKey) };
};
