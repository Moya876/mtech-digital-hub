
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL (fragment identifier)
    if (hash) {
      // Wait a bit for the DOM to be fully rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          // If element not found, scroll to top
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      // No hash, just scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
