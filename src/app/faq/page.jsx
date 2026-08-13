import FAQAccordion from "@/components/practice-areas/FAQAccordion";

const faqGroups = [
  {
    id: "general",
    title: "General Advisory",
    faqs: [
      {
        question: "What areas of law does E-O Samson & Partners practise?",
        answer: "We provide legal services across litigation, real estate, commercial law, dispute resolution, succession and estate planning, and general legal advisory.",
      },
      {
        question: "Do I need a lawyer before taking legal action?",
        answer: "It is advisable to seek legal advice before commencing or responding to legal proceedings. Early advice can help you understand your rights, obligations, and available options.",
      },
      {
        question: "Can you handle matters outside Abuja?",
        answer: "Yes. We handle matters across Nigeria, subject to the nature and location of the matter.",
      },
      {
        question: "Can I get legal advice without immediately commencing a case?",
        answer: "Yes. We provide legal consultations and advisory services to help clients understand their legal position and make informed decisions.",
      },
      {
        question: "Will my information be kept confidential?",
        answer: "Yes. Client confidentiality and professional responsibility are fundamental to our practice.",
      },
      {
        question: "What should I do if I have a legal problem?",
        answer: "Seek legal advice as early as possible. Early intervention can help preserve evidence, protect your rights, and identify practical solutions before the matter becomes more complicated.",
      },
    ],
  },
  {
    id: "engagement",
    title: "Engagement & Fees",
    faqs: [
      {
        question: "How do I engage the firm?",
        answer: "You may contact us by phone, email, or through our website to discuss your legal needs and schedule a consultation.",
      },
      {
        question: "How much do your legal services cost?",
        answer: "Legal fees depend on the nature, complexity, value, and scope of the matter. We discuss the applicable professional fees and terms with clients before undertaking an engagement.",
      },
    ],
  },
  {
    id: "specialized",
    title: "Specialized Services",
    faqs: [
      {
        question: "How do I know if I need a Will or a trust?",
        answer: "The appropriate succession structure depends on your assets, family circumstances, objectives, and long-term plans. We can advise you on the most suitable structure.",
      },
      {
        question: "Can the firm help with property transactions?",
        answer: "Yes. We advise on property acquisition, due diligence, title verification, documentation, conveyancing, and related disputes.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div>
      <section className="bg-navy text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="eyebrow mb-5">Support</p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/75 leading-relaxed">
            Answers to common questions about our services, process, and fees.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24 grid lg:grid-cols-[220px_1fr] gap-14">
          <aside className="lg:sticky lg:top-28 self-start">
            <p className="eyebrow mb-5">Categories</p>
            <ul className="space-y-3">
              {faqGroups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="text-navy font-medium text-sm hover:text-brass transition-colors"
                  >
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-16">
            {faqGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <h2 className="font-display text-2xl text-navy mb-2">
                  {group.title}
                </h2>
                <div className="hairline mb-2" />
                <FAQAccordion faqs={group.faqs} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <h3 className="font-display text-2xl mb-3">Still have a question?</h3>
          <p className="text-white/70 mb-7">
            Reach out directly and our team will get back to you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brass text-navy font-semibold px-7 py-3.5 rounded-sm hover:bg-brass-light transition-colors text-sm"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}