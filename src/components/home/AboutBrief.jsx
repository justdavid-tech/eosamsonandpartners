export default function AboutBrief() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        {/* Image side */}
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] relative">
              <img src="/ceo.jpg" alt="E-O Samson, Esq., FICMC, AICMC, LL.M, B.L." className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/[0.04] border border-navy/10 flex items-center justify-center">
              <span className="font-display text-navy/[0.08] text-[9rem] leading-none select-none">
                &sect;
              </span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brass px-5 py-3">
              <p className="text-navy font-display text-xl leading-none">2014</p>
              <p className="text-navy/70 text-[0.65rem] uppercase tracking-wider mt-0.5">Founded</p>
            </div>
          </div>
        </div>

        {/* Copy side */}
        <div className="order-1 lg:order-2 md:text-center lg:text-left md:flex md:flex-col md:items-center lg:items-start">
          <p className="eyebrow mb-5">About Us</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy leading-[1.15] mb-6 max-w-lg md:mx-auto lg:mx-0">
            A firm built on judgment, not just credentials
          </h2>
          <p className="text-lg text-slate leading-relaxed mb-8 max-w-lg md:mx-auto lg:mx-0">
            E-O Samson & Partners is a full-service law firm committed to providing practical, innovative, and results-driven legal solutions to individuals, businesses, and institutions. We combine legal expertise with integrity, professionalism, and a client-focused approach to protect our clients' interests and help them achieve their objectives with unwavering commitment.
          </p>
          
            <a href="/about"
            className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-brass transition-colors group"
          >
            Learn more about our firm
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}