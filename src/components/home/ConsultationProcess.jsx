const steps = [
  {
    number: "01",
    title: "Book a Consultation",
    text: "Choose your practice area and a convenient date and time through our online booking form.",
  },
  {
    number: "02",
    title: "Share Your Case Details",
    text: "Describe your legal matter so our team can review it in advance and prepare properly.",
  },
  {
    number: "03",
    title: "Meet Your Legal Team",
    text: "We assess your situation, explain your options clearly, and outline a recommended path forward.",
  },
  {
    number: "04",
    title: "Engagement & Representation",
    text: "Once you decide to proceed, we formalize the engagement and begin work on your behalf.",
  },
];

export default function ConsultationProcess() {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-5">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.15]">
            A clear, guided path from first contact to representation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <p className="font-display text-5xl text-brass/30 mb-4 leading-none">
                {s.number}
              </p>
              <h3 className="font-display text-xl text-white mb-3">
                {s.title}
              </h3>
              <p className="text-white/65 leading-relaxed text-[0.95rem]">
                {s.text}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+1rem)] w-4 h-px bg-white/20" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          
           <a href="/book-consultation"
            className="inline-block bg-brass text-navy font-semibold px-7 py-3.5 rounded-sm hover:bg-brass-light transition-colors text-sm"
          >
            Start Step One. Book Now
          </a>
        </div>
      </div>
    </section>
  );
}