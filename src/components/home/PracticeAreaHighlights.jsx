import { client } from "@/lib/sanity/client";
import { featuredPracticeAreasQuery } from "@/lib/sanity/queries";
import { getPracticeAreaIcon } from "@/lib/icons";

export default async function PracticeAreaHighlights() {
  const featuredAreas = await client.fetch(featuredPracticeAreasQuery);

  return (
    <div className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="eyebrow mb-3">Our Expertise</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy">
          Specialised Fields of Law
        </h2>
        <p className="text-slate text-lg mt-4 leading-relaxed">
          We provide clear, precise, and result-oriented counsel across a diverse range of legal disciplines.
        </p>
      </div>

      {featuredAreas && featuredAreas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAreas.map((area, i) => {
            const Icon = getPracticeAreaIcon(area.title);
            return (
              <a
                key={i}
                href={`/practice-areas/${area.slug}`}
                className="group relative block bg-white border border-navy/10 p-8 rounded-sm hover:border-brass hover:shadow-lg transition-all duration-300"
              >
                {/* Gold card fold top-right corner decoration */}
                <div
                  className="absolute top-0 right-0 w-6 h-6 bg-brass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />

                {/* Dynamic Lucide Icon representation */}
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-sm bg-cream text-brass group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {area.category && (
                  <p className="eyebrow text-slate mb-3 text-xs">{area.category}</p>
                )}
                <h3 className="font-display text-xl text-navy group-hover:text-brass transition-colors mb-3">
                  {area.title}
                </h3>
                {area.overview && (
                  <p className="text-sm text-slate leading-relaxed line-clamp-2 mb-6">
                    {area.overview}
                  </p>
                )}
                <span className="text-sm text-brass font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <span>&rarr;</span>
                </span>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-navy/15 rounded-lg bg-white/50">
          <p className="text-slate">No featured practice areas found.</p>
          <p className="text-xs text-slate/60 mt-1">Configure "Featured on Homepage" in Sanity Studio.</p>
        </div>
      )}

      {/* CTA at the bottom */}
      <div className="mt-16 text-center">
        <a
          href="/practice-areas"
          className="inline-block border border-navy text-navy hover:border-brass hover:text-brass font-semibold px-8 py-4 rounded-sm transition-colors text-sm tracking-wide"
        >
          View All Practice Areas &rarr;
        </a>
      </div>
    </div>
  );
}
