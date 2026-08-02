const reasons = [
  {
    title: "Proven Track Record",
    text: "Over two decades of successful representation across litigation, commercial transactions, and dispute resolution.",
  },
  {
    title: "Client-Centred Representation",
    text: "Every matter is handled with the client's specific goals and circumstances at the centre of our strategy.",
  },
  {
    title: "Confidentiality & Integrity",
    text: "Sensitive matters are handled with strict discretion and unwavering ethical standards, always.",
  },
  {
    title: "Transparent Communication",
    text: "Clients are kept informed at every stage, with clear guidance rather than legal jargon.",
  },
];

export default function WhyTrustUs() {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
          {/* Left: founder pull-quote */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-6">Why Clients Trust Us</p>
            <blockquote className="font-display text-2xl md:text-3xl leading-[1.35] text-white mb-6">
              &ldquo;Our role isn&rsquo;t just to interpret the law, it&rsquo;s to protect
              what our clients have worked to build, with judgment earned
              over two decades in practice.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-brass" />
              <div>
                <p className="text-sm font-semibold text-white">E-O Samson, Esq., FICMC, AICMC, LL.M, B.L.</p>
                <p className="text-xs text-white/60">Founder</p>
              </div>
            </div>
          </div>

          {/* Right: trust reasons as a letterhead-style list, not cards */}
          <div className="divide-y divide-white/10">
            {reasons.map((r, i) => (
              <div key={i} className="flex gap-6 py-7 first:pt-0 last:pb-0">
                <div className="shrink-0 w-9 h-9 rounded-full border border-brass/50 flex items-center justify-center mt-1">
                  <span className="text-brass text-sm">&#10003;</span>
                </div>
                <div>
                  <h3 className="font-display text-lg text-white mb-1.5">
                    {r.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-[0.95rem]">
                    {r.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}