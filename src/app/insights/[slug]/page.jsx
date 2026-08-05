import { client } from "@/lib/sanity/client";
import { postBySlugQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";

const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-display text-2xl md:text-3xl text-navy mt-12 mb-6 border-b border-navy/5 pb-2 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl md:text-2xl text-navy mt-10 mb-4 tracking-tight">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-ink leading-[1.85] text-base md:text-lg mb-6 font-body text-gray-800">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative border-l-4 border-brass bg-cream/50 pl-8 pr-6 py-6 italic text-navy my-10 rounded-r-md">
        <span className="absolute top-2 left-3 font-display text-5xl text-brass/20 leading-none select-none pointer-events-none">
          &ldquo;
        </span>
        <div className="relative font-display text-lg md:text-xl leading-relaxed text-gray-900">
          {children}
        </div>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-800 text-base md:text-lg">{children}</ul>
    ),
  },
};

export default async function PostPage({ params }) {
  const { slug } = await params;
  let post = null;
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET) {
    try {
      post = await client.fetch(postBySlugQuery, { slug });
    } catch (err) {
      console.error("Sanity fetch error in dynamic post page:", err);
    }
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
        <div>
          <p className="eyebrow mb-3">Not Found</p>
          <h1 className="font-display text-3xl text-navy mb-2">
            This article doesn&rsquo;t exist.
          </h1>
          <p className="text-slate">
            It may have been unpublished or the link is incorrect.
          </p>
        </div>
      </div>
    );
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  // Author initials for avatar placeholder
  const authorInitials = post.authorName
    ? post.authorName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "EO";

  return (
    <article className="min-h-screen bg-cream/20">
      
      {/* Dynamic Header Banner */}
      <div className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/40 via-navy to-navy pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 relative z-10 text-center md:text-left">
          {post.category && (
            <span className="inline-block text-xs font-semibold text-brass bg-brass/10 px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              {post.category}
            </span>
          )}
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.12] mb-8 tracking-tight max-w-4xl">
            {post.title}
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/70 border-t border-white/10 pt-6">
            <div className="flex items-center gap-3">
              {/* Author Avatar Badge */}
              {post.authorImage ? (
                <div className="w-10 h-10 rounded-full overflow-hidden border border-brass/40 shadow-sm shrink-0">
                  <img
                    src={urlFor(post.authorImage).width(80).height(80).fit("crop").url()}
                    alt={post.authorName || "Author"}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-brass text-navy font-semibold text-sm flex items-center justify-center shadow-sm select-none shrink-0">
                  {authorInitials}
                </div>
              )}
              <div className="text-left">
                <p className="text-white font-medium">{post.authorName || "E-O Samson & Partners"}</p>
                <p className="text-xs text-white/50">Legal Specialist</p>
              </div>
            </div>
            {formattedDate && (
              <span className="hidden md:inline text-white/30">&bull;</span>
            )}
            {formattedDate && (
              <div className="text-left md:text-center">
                <p className="text-white/50 text-xs uppercase tracking-wider">Published</p>
                <p className="text-white font-medium">{formattedDate}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Styled Cover Image Frame */}
      {post.mainImage && (
        <div className="max-w-5xl mx-auto px-6 -mt-10 md:-mt-16 relative z-10">
          <div className="overflow-hidden rounded-xl shadow-xl border border-navy/5 bg-navy-light/10">
            <img
              src={urlFor(post.mainImage).width(1400).height(700).fit("crop").url()}
              alt={post.title}
              style={{ viewTransitionName: `post-img-${slug}` }}
              className="w-full aspect-[2/1] object-cover hover:scale-101 transition-transform duration-500"
            />
          </div>
        </div>
      )}

      {/* Editorial Content Grid */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        
        {/* Editorial Body Content */}
        <div className="prose max-w-none prose-navy">
          {post.body && (
            <PortableText value={post.body} components={portableTextComponents} />
          )}
        </div>

        {/* Newsletter Callout & Share widget */}
        <div className="mt-16 bg-white border border-navy/10 rounded-xl p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brass/5" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
          <h3 className="font-display text-2xl text-navy mb-3">Subscribe to Legal Updates</h3>
          <p className="text-sm text-slate leading-relaxed mb-6 max-w-md">
            Stay informed with current briefs, regulatory updates, and commercial advisory insights straight from our legal team in Abuja.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 border border-navy/15 rounded-sm bg-cream/10 focus:bg-white focus:outline-none focus:border-brass text-sm flex-1 transition-all"
            />
            <button className="bg-navy hover:bg-navy-light text-white font-semibold text-sm px-6 py-3 rounded-sm transition-colors cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

        {/* Back navigation footer */}
        <div className="mt-16 pt-10 border-t border-navy/10 text-center">
          <a
            href="/insights"
            className="text-sm font-semibold text-navy hover:text-brass transition-colors inline-flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to all insights
          </a>
        </div>
      </div>
    </article>
  );
}