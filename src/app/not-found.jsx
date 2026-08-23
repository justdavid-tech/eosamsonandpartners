import Link from "next/link";
import { Compass, ArrowLeft, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-navy text-white min-h-[85vh] flex items-center justify-center relative overflow-hidden px-6">
      {/* Background radial gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brass/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Animated Icon */}
        <div className="w-24 h-24 bg-brass/10 text-brass rounded-full flex items-center justify-center mx-auto mb-8 border border-brass/20 shadow-inner">
          <Compass className="w-12 h-12 text-brass animate-spin-slow" />
        </div>

        {/* 404 Header */}
        <p className="font-display text-brass text-lg md:text-xl font-semibold tracking-widest uppercase mb-3">
          Error 404
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-white/70 leading-relaxed mb-10 text-sm md:text-base max-w-md mx-auto">
          The legal resource, article, or page you are looking for might have been relocated, removed, or is temporarily offline. Let us guide you back to our primary channels.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto bg-brass hover:bg-brass-light text-navy font-semibold px-8 py-4 rounded-sm transition-colors text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto border border-white/20 hover:border-brass hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-sm transition-all text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4 text-brass" />
            <span>Contact Counsel</span>
          </Link>
        </div>
      </div>
    </div>
  );
}