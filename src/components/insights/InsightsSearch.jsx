"use client";

import { useState, useMemo } from "react";
import { urlFor } from "@/lib/sanity/image";

const categories = [
  "All",
  "Litigation & Dispute Resolution",
  "Corporate & Commercial",
  "Property & Finance",
  "Personal & Family",
  "Regulatory & Advisory",
];

export default function InsightsSearch({ initialPosts = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const matchesSearch =
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, searchQuery, selectedCategory]);

  return (
    <div className="w-full">
      {/* Search Input and Category Filter Panel */}
      <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-navy/5 mb-12">
        <div className="max-w-2xl mx-auto mb-8">
          <label htmlFor="search" className="block text-sm font-semibold text-navy mb-2 eyebrow text-center sm:text-left">
            Search Articles
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              placeholder="Search legal briefs, advice, rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 border border-navy/15 rounded-sm bg-cream/30 focus:bg-white focus:outline-none focus:border-brass text-ink font-body transition-colors placeholder:text-slate/60 text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate hover:text-navy text-sm font-semibold focus:outline-none"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Chips */}
        <div>
          <p className="block text-center text-xs font-semibold text-slate mb-4 uppercase tracking-wider">
            Filter by Category
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-brass border-brass text-navy shadow-sm"
                      : "bg-cream/40 border-navy/10 text-navy hover:border-brass hover:text-brass"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="mb-6 flex justify-between items-center text-sm text-slate">
        <p>
          Showing {filteredPosts.length} of {initialPosts.length} articles
        </p>
        {selectedCategory !== "All" || searchQuery ? (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-brass hover:underline font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        ) : null}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => {
            const formattedDate = post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : null;

            return (
              <a
                key={i}
                href={`/insights/${post.slug}`}
                className="group block bg-white border border-navy/10 overflow-hidden hover:border-brass hover:shadow-lg transition-all duration-300 rounded-sm flex flex-col justify-between"
              >
                <div>
                  {/* Aspect Cover Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-navy-light/10 relative">
                    {post.mainImage ? (
                      <img
                        src={urlFor(post.mainImage).width(600).height(375).fit("crop").url()}
                        alt={post.title}
                        style={{ viewTransitionName: `post-img-${post.slug}` }}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-navy text-brass/25">
                        <span className="font-display text-5xl">&sect;</span>
                      </div>
                    )}
                    {post.category && (
                      <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white bg-navy px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                        {post.category}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    {formattedDate && (
                      <time className="text-[11px] font-semibold text-slate uppercase tracking-wider block mb-2">
                        {formattedDate}
                      </time>
                    )}
                    <h3 className="font-display text-xl text-navy group-hover:text-brass transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-slate leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <span className="text-sm text-brass font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <span>&rarr;</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-white border border-navy/10 rounded-sm">
          <span className="text-4xl block mb-4">🔍</span>
          <h3 className="font-display text-2xl text-navy mb-2">No matching insights</h3>
          <p className="text-slate">Try searching for different terms or choosing another category filter.</p>
        </div>
      )}
    </div>
  );
}
