export default function CTABanner() {
  return (
    <section className="bg-brass">
      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-24 text-center">
        <p className="eyebrow text-navy/70 mb-5">Ready When You Are</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1] mb-8 max-w-2xl mx-auto">
          Speak with a legal team that puts your interests first
        </h2>
        <p className="text-navy/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Book a consultation today and get clear, practical guidance on your legal matter.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          
          <a href="/book-consultation"
            className="bg-navy text-white font-semibold px-8 py-4 rounded-sm hover:bg-navy-light transition-colors text-sm"
          >
            Book a Consultation
          </a>
          <a href="https://wa.me/2348063553009"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-navy text-navy font-semibold px-8 py-4 rounded-sm hover:bg-navy hover:text-white transition-colors text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}