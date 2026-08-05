"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start fading out after 3.5s so it matches the 4s total display duration (0.5s transition time)
    const fadeTimeout = setTimeout(() => {
      setLoading(false);
      document.body.classList.add("loaded");
    }, 3500);

    // Completely unmount after 4s (3.5s wait + 0.5s CSS transition fade)
    const removeTimeout = setTimeout(() => {
      setShouldRender(false);
    }, 4000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
      document.body.classList.remove("loaded");
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div className={`loader-container ${!loading ? "fade-out" : ""}`}>
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </div>
  );
}
