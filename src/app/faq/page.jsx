import FAQAccordion from "@/components/practice-areas/FAQAccordion";

const faqGroups = [
  {
    id: "general",
    title: "General",
    faqs: [
      {
        question: "What areas of law does E-O Samson & Partners practice?",
        answer: "We handle a broad range of practice areas including litigation & dispute resolution, corporate and commercial law, property and real estate transactions, family law, criminal defence, and regulatory advisory. Visit our Practice Areas page for a detailed list of our legal offerings.",
      },
      {
        question: "Where is your office located?",
        answer: "Our head office is located at 1, Ondo Street, Garki, FCT, Abuja, Nigeria. Visit our Contact page for interactive map directions, business hours, and phone directory.",
      },
      {
        question: "Do you handle matters outside Abuja?",
        answer: "Yes. E-O Samson & Partners regularly represents clients in courts and commercial transactions across Lagos, Port Harcourt, Kaduna, and other key jurisdictions throughout Nigeria, depending on the scope of the engagement.",
      },
      {
        question: "Are you available for urgent briefs or emergency representation?",
        answer: "Yes, we maintain a responsive legal team capable of handling time-sensitive briefs, including urgent interim injunctions, bail applications, and critical corporate regulatory deadlines.",
      },
    ],
  },
  {
    id: "consultation",
    title: "Consultation",
    faqs: [
      {
        question: "How do I book a consultation?",
        answer: "You can book directly through our website using the Book Consultation portal, or reach out by calling our office line or messaging us directly on WhatsApp.",
      },
      {
        question: "Do you offer remote or virtual consultations?",
        answer: "Yes, we conduct virtual consultations via Zoom, Microsoft Teams, Google Meet, or phone calls for international clients and those residing outside Abuja.",
      },
      {
        question: "How long does a consultation take?",
        answer: "Initial consultations typically last between 30 to 45 minutes. This provides sufficient time to review your case facts, analyze key documents, and outline potential legal strategies.",
      },
      {
        question: "What should I bring to my first consultation?",
        answer: "Please bring all relevant documents, including contracts, correspondence, court notices, land titles, or agreements. Having these documents on hand allows us to provide a more accurate assessment of your matter.",
      },
    ],
  },
  {
    id: "fees",
    title: "Fees",
    faqs: [
      {
        question: "How are your legal fees structured?",
        answer: "Our fees are structured based on the nature of the service. We utilize flat fees for standard filings (such as company incorporation or deed registration), hourly rates for complex commercial transactions, and retainer structures for ongoing corporate advisory.",
      },
      {
        question: "Do you charge for the initial consultation?",
        answer: "Yes, initial consultations are subject to a professional consultation fee, which covers the preliminary review of documents and initial strategic legal advice. This fee is discussed and agreed upon prior to booking.",
      },
      {
        question: "Do you offer flexible payment arrangements?",
        answer: "Yes, for extended litigation briefs or commercial transactions, we offer structured payment plans. These arrangements are formalized in our retainer agreement before work commences.",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate",
    faqs: [
      {
        question: "Can you assist with CAC company incorporation?",
        answer: "Yes, we handle the entire registration process with the Corporate Affairs Commission (CAC) for private limited companies, public companies, NGOs, and business names, along with post-incorporation filings.",
      },
      {
        question: "Do you review or draft commercial contracts?",
        answer: "Yes. We draft, review, and negotiate a wide range of commercial agreements, including Joint Venture agreements, partnership deeds, service level agreements (SLAs), and non-disclosure agreements (NDAs).",
      },
      {
        question: "What company secretarial services do you provide?",
        answer: "We offer ongoing board secretarial services, statutory filing maintenance, filing of annual returns, recording of board resolutions, and representation during statutory audits.",
      },
    ],
  },
  {
    id: "property",
    title: "Property",
    faqs: [
      {
        question: "Can you help verify land titles before purchase?",
        answer: "Yes, we conduct comprehensive due diligence searches at the AGIS (Abuja Geographic Information Systems) and relevant land registries to verify ownership, easements, encumbrances, or pending disputes before transaction finalization.",
      },
      {
        question: "What is title perfection and why is it necessary?",
        answer: "Title perfection involves obtaining Governor's Consent, paying stamp duties, and registering the title deed at the Land Registry. This formalizes your ownership and protects your property from third-party claims.",
      },
      {
        question: "Do you handle disputes over land ownership?",
        answer: "Yes, property litigation, tenancy disputes, and recovery of premises are core aspects of our dispute resolution practice.",
      },
    ],
  },
  {
    id: "family",
    title: "Family",
    faqs: [
      {
        question: "Do you handle divorce and custody matters?",
        answer: "Yes, we handle matrimonial causes, including judicial separation, divorce petitions, child custody, and maintenance claims, with the utmost sensitivity, privacy, and professionalism.",
      },
      {
        question: "Can you assist with wills and estate planning?",
        answer: "Yes, we assist clients in drafting legally binding Wills, establishing trusts, and navigating the administration of estates, including obtaining Letters of Administration or Grants of Probate.",
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