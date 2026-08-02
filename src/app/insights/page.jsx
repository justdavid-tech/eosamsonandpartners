import { client } from "@/lib/sanity/client";
import { allPostsQuery } from "@/lib/sanity/queries";
import InsightsSearch from "@/components/insights/InsightsSearch";
import Section from "@/components/layout/Section";

export const dynamic = "force-dynamic";

export default async function InsightsPage() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 md:py-20 text-center border-b border-brass/25">
        <div className="max-w-4xl mx-auto px-6">
          <p className="eyebrow text-brass mb-3">Perspectives</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Latest Insights
          </h1>
          <p className="text-white/70 text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Legal updates, regulatory analysis, and commercial insights straight from our legal practitioners in Abuja.
          </p>
        </div>
      </section>

      {/* Main Searchable Area */}
      <Section tone="cream">
        <InsightsSearch initialPosts={posts} />
      </Section>
    </div>
  );
}
