import { client } from "@/lib/sanity/client";
import { latestPostsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export default async function LatestInsights() {
  const posts = await client.fetch(latestPostsQuery);

  if (!posts?.length) return null;

  return (
    <section className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="eyebrow mb-4">Latest Insights</p>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.15] max-w-lg">
              Perspectives from our legal team
            </h2>
          </div>
          <a
            href="/insights"
            className="text-sm font-semibold text-brass hover:text-brass-light transition-colors inline-flex items-center gap-2 shrink-0"
          >
            View all insights <span>&rarr;</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <a
              key={i}
              href={`/insights/${post.slug}`}
              className="group block"
            >
              <div className="aspect-[4/3] mb-5 overflow-hidden bg-white/5 border border-white/10">
                {post.mainImage ? (
                  <img
                    src={urlFor(post.mainImage).width(500).height(375).fit("crop").url()}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-white/10 text-5xl">
                      &sect;
                    </span>
                  </div>
                )}
              </div>
              {post.category && (
                <p className="text-xs text-brass font-semibold uppercase tracking-wider mb-2">
                  {post.category}
                </p>
              )}
              <h3 className="font-display text-lg text-white group-hover:text-brass transition-colors mb-2 leading-snug">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}