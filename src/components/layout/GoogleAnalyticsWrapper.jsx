"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function GoogleAnalyticsWrapper({ gaId }) {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    // Check initial consent state from localStorage
    const currentConsent = localStorage.getItem("cookie-consent");
    setConsent(currentConsent);

    // Watch for changes (in case the user updates consent in the same or another tab)
    const handleConsentChange = () => {
      setConsent(localStorage.getItem("cookie-consent"));
    };

    window.addEventListener("storage", handleConsentChange);
    window.addEventListener("cookie-consent-updated", handleConsentChange);

    return () => {
      window.removeEventListener("storage", handleConsentChange);
      window.removeEventListener("cookie-consent-updated", handleConsentChange);
    };
  }, []);

  // Only inject the Google Analytics script if the user has accepted cookies
  if (consent !== "accepted" || !gaId) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
