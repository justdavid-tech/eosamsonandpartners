import { client } from "@/lib/sanity/client";
import { allPracticeAreasQuery } from "@/lib/sanity/queries";
import PracticeAreasSearch from "@/components/practice-areas/PracticeAreasSearch";
import Section from "@/components/layout/Section";

export const dynamic = "force-dynamic";

export default async function PracticeAreasPage() {
  const practiceAreas = await client.fetch(allPracticeAreasQuery);

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 md:py-20 text-center border-b border-brass/25">
        <div className="max-w-4xl mx-auto px-6">
          <p className="eyebrow text-brass mb-3">Our Expertise</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Practice Directory
          </h1>
          <p className="text-white/70 text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Search our comprehensive list of legal advisory, representation, and advisory services.
          </p>
        </div>
      </section>

      {/* Main Searchable Area */}
      <Section tone="cream">
        <PracticeAreasSearch initialAreas={practiceAreas} />
      </Section>
    </div>
  );
}
