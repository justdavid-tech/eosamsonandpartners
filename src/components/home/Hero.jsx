import { Scale, FileText, ShieldCheck, Landmark } from "lucide-react";

const quickIcons = [
  { Icon: Scale, label: "Advocacy" },
  { Icon: FileText, label: "Advisory" },
  { Icon: ShieldCheck, label: "Defence" },
  { Icon: Landmark, label: "Property" },
];

const highlights = [
  { label: "Corporate & Commercial Advisory", href: "/practice-areas/corporate-commercial-law" },
  { label: "Family Law Consultation", href: "/practice-areas/family-law" },
  { label: "Property & Real Estate Support", href: "/practice-areas/property-real-estate-law" },
  { label: "Criminal Defence Representation", href: "/practice-areas/criminal-defence" },
];

const trustBar = [
  "Nigerian Bar Association",
  "International Chamber of Commerce",
  "Chartered Institute of Arbitrators",
];

export default function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brass/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Copy content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="inline-block text-xs font-semibold text-brass bg-brass/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
              Excellence In Advocacy
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight max-w-xl">
              Unraveling Legal Complexities <span className="text-brass">Together</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed mb-8">
              At E-O Samson & Partners, we transform legal complexity into strategic clarity. Our team delivers precise, personalized representation to protect what matters most to you.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-12 w-full">
              <a
                href="/book-consultation"
                className="bg-brass hover:bg-brass-light text-navy font-semibold px-8 py-4 rounded-sm transition-colors text-sm tracking-wide shadow-sm"
              >
                Consult Now
              </a>
              <a
                href="/practice-areas"
                className="border border-white/20 hover:border-brass text-white hover:text-brass font-medium px-8 py-4 rounded-sm transition-colors text-sm tracking-wide inline-flex items-center gap-2"
              >
                Explore Practices <span>&rarr;</span>
              </a>
            </div>

            {/* Desktop trust logos */}
            <div className="hidden md:flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 w-full">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block w-full mb-1">
                Recognised By
              </span>
              {trustBar.map((t, i) => (
                <span key={i} className="text-xs text-white/40 font-medium tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Statue Image + Overlays */}
          <div className="w-full">
            
            {/* Quick Features Row */}
            <div className="grid grid-cols-4 gap-3 mb-6 max-w-md mx-auto lg:max-w-none lg:mx-0">
              {quickIcons.map(({ Icon, label }, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-3 rounded-sm flex flex-col items-center justify-center text-center hover:border-brass/35 transition-colors group"
                >
                  <Icon className="w-5 h-5 text-brass group-hover:scale-110 transition-transform mb-1" />
                  <span className="text-[10px] text-white/60 font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch max-w-md mx-auto lg:max-w-none lg:mx-0">
              
              {/* Highlight Practice Areas Card */}
              <div className="md:col-span-5 bg-white/5 border border-white/10 p-6 flex flex-col justify-between rounded-sm">
                <div>
                  <p className="text-xs font-semibold text-brass uppercase tracking-wider mb-3">
                    &#9670; Core Practices
                  </p>
                  <p className="text-white/60 text-xs leading-relaxed mb-6">
                    Key areas where we offer prompt representation:
                  </p>
                  <ul className="space-y-3.5">
                    {highlights.map((h, i) => (
                      <li key={i}>
                        <a
                          href={h.href}
                          className="text-xs text-white/80 hover:text-brass transition-colors flex items-start gap-2"
                        >
                          <span className="text-brass shrink-0">&bull;</span>
                          <span>{h.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cover Statue Image */}
              <div className="md:col-span-7 relative aspect-[4/5] md:aspect-auto overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?fm=jpg&q=80&w=800&auto=format&fit=crop"
                  alt="Lady Justice statue representing advocacy"
                  className="w-full h-full object-cover rounded-sm hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-brass/30 rounded-sm -z-10" />
              </div>
              
            </div>

            {/* Dynamic statistics counter block */}
            <div className="flex justify-center lg:justify-end gap-10 mt-8">
              <div className="text-center lg:text-right">
                <p className="font-display text-3xl text-brass mb-1">150+</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">Cases Handled</p>
              </div>
              <div className="text-center lg:text-right">
                <p className="font-display text-3xl text-brass mb-1">98%</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">Satisfaction Rate</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Trust bar shown below everything on mobile/tablet screens */}
      <div className="md:hidden border-t border-white/10 bg-navy-light/40 py-6 text-center">
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-3">
          Recognised By
        </span>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-6">
          {trustBar.map((t, i) => (
            <span key={i} className="text-xs text-white/50 font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}