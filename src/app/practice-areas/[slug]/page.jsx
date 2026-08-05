import { getPracticeAreaBySlug } from "@/data/practiceAreas";
import { urlFor } from "@/lib/sanity/image";
import FAQAccordion from "@/components/practice-areas/FAQAccordion";

export default async function PracticeAreaPage({ params }) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);

  if (!area) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
        <div>
          <p className="eyebrow mb-3">Not Found</p>
          <h1 className="font-display text-3xl text-navy mb-2">
            This practice area doesn't exist.
          </h1>
          <p className="text-slate">
            It may have been renamed or removed. Try the practice areas index instead.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* HERO — split composition, navy ground, image bleeds right */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <div className="py-20 lg:py-28 flex flex-col justify-center relative z-10">
            {area.category && (
              <p className="eyebrow mb-5 text-brass">{area.category}</p>
            )}
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] mb-6 max-w-xl">
              {area.heroHeadline || area.title}
            </h1>
            {area.heroSubheadline && (
              <p className="text-lg text-white/75 max-w-md leading-relaxed">
                {area.heroSubheadline}
              </p>
            )}
            <div className="mt-9 h-px w-24 bg-brass" />
          </div>

          {/* Image bleed, fades into navy on the left edge */}
          <div className="relative hidden lg:block animate-fade-in duration-700">
            {area.coverImage ? (
              <>
                <img
                  src={typeof area.coverImage === 'string' && area.coverImage.startsWith('http') ? area.coverImage : urlFor(area.coverImage).width(900).height(1100).fit("crop").url()}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-navy-light/20">
                <span className="font-display text-[14rem] text-white/[0.04] select-none leading-none">
                  &sect;
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BODY — content + sticky case-file sidebar */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1fr_320px] gap-16">
        <div className="min-w-0">
          {area.overview && (
            <p className="text-lg leading-[1.8] text-ink mb-16 first-letter:font-display first-letter:text-6xl first-letter:text-brass first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8] whitespace-pre-line">
              {area.overview}
            </p>
          )}

          {area.servicesIncluded && area.servicesIncluded.length > 0 && (
            <div className="mb-16">
              <p className="eyebrow mb-2">What We Handle</p>
              <div className="hairline mb-8" />
              <div className="space-y-5">
                {area.servicesIncluded.map((s, i) => (
                  <div key={i} className="flex gap-5 items-baseline">
                    <span className="font-display text-brass text-sm shrink-0 tabular-nums">
                       {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink text-[1.05rem] leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {area.whyChooseUs && area.whyChooseUs.length > 0 && (
            <div className="mb-16 bg-cream border-l-2 border-brass pl-8 py-2">
              <p className="eyebrow mb-4">Why Clients Choose Us Here</p>
              <ul className="space-y-3">
                {area.whyChooseUs.map((w, i) => (
                  <li key={i} className="text-ink leading-relaxed flex items-start gap-2">
                    <span className="text-brass font-bold">•</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {area.faqs && area.faqs.length > 0 && (
            <div>
              <p className="eyebrow mb-2">Frequently Asked Questions</p>
              <div className="hairline mb-2" />
              <FAQAccordion faqs={area.faqs} />
            </div>
          )}
        </div>

        {/* Sticky sidebar — the "case file" card */}
        <aside className="lg:sticky lg:top-28 self-start w-full">
          <div className="bg-navy text-white rounded-sm p-8 border-t-2 border-brass">
            <p className="eyebrow text-brass mb-5">Consult Our Team</p>
            <h3 className="font-display text-xl mb-3">
              Speak with a specialist in {area.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-7">
              Book a consultation and we'll respond within one business day.
            </p>
            <a
              href={area.cta?.link || "/book-consultation"}
              className="block text-center bg-brass text-navy font-semibold px-5 py-3.5 rounded-sm hover:bg-brass-light transition-colors text-sm"
            >
              {area.cta?.text || "Book Consultation"}
            </a>
          </div>

          {area.relatedPracticeAreas && area.relatedPracticeAreas.length > 0 && (
            <div className="mt-8">
              <p className="eyebrow mb-4">See Also</p>
              <ul className="space-y-3">
                {area.relatedPracticeAreas.map((related, i) => (
                  <li key={i}>
                    <a
                      href={`/practice-areas/${related.slug}`}
                      className="text-sm text-navy font-medium hover:text-brass transition-colors flex items-center gap-2"
                    >
                      <span className="text-brass">&rarr;</span> {related.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      {/* RELATED PRACTICE AREAS — full width case-file cards */}
      {area.relatedPracticeAreas && area.relatedPracticeAreas.length > 0 && (
        <section className="bg-cream border-t border-navy/10">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <p className="eyebrow mb-2">Related Filings</p>
            <div className="hairline mb-10 w-24" />
            <div className="grid md:grid-cols-3 gap-6">
              {area.relatedPracticeAreas.map((related, i) => (
                <a
                  key={i}
                  href={`/practice-areas/${related.slug}`}
                  className="group relative block bg-white border border-navy/10 p-7 hover:border-brass transition-colors duration-300"
                >
                  <div className="absolute top-0 right-0 w-6 h-6 bg-brass" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />

                  {related.category && (
                    <p className="eyebrow text-slate mb-4">{related.category}</p>
                  )}
                  <h3 className="font-display text-xl text-navy group-hover:text-brass transition-colors mb-3">
                    {related.title}
                  </h3>
                  {related.overview && (
                    <p className="text-sm text-slate leading-relaxed line-clamp-3 mb-5">
                      {related.overview}
                    </p>
                  )}
                  <span className="text-sm text-brass font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <span>&rarr;</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
