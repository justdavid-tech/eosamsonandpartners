"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already answered
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-navy border border-brass/30 p-6 rounded-sm shadow-2xl z-50 animate-fade-in-up">
      <h5 className="font-display text-base text-white mb-2">Cookie Preferences</h5>
      <p className="text-white/60 text-xs leading-relaxed mb-4">
        We use cookies to improve your browsing experience, analyze our traffic, and personalize our services. By clicking &quot;Accept&quot;, you consent to our use of cookies.
      </p>
      <div className="flex gap-3 justify-end items-center">
        <button
          onClick={handleDecline}
          className="text-xs text-white/80 hover:text-brass transition-colors px-3 py-2"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="bg-brass hover:bg-brass-light text-navy text-xs font-semibold px-4 py-2 rounded-sm transition-colors shadow-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
