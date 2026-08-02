"use client";

import { useState, useMemo } from "react";
import { getPracticeAreaIcon } from "@/lib/icons";

const categories = [
  "All",
  "Litigation & Dispute Resolution",
  "Corporate & Commercial",
  "Property & Finance",
  "Personal & Family",
  "Regulatory & Advisory",
];

export default function PracticeAreasSearch({ initialAreas = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAreas = useMemo(() => {
    return initialAreas.filter((area) => {
      const matchesCategory =
        selectedCategory === "All" || area.category === selectedCategory;

      const matchesSearch =
        area.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.overview?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.category?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialAreas, searchQuery, selectedCategory]);

  return (
    <div className="w-full">
      {/* Search Input and Category Filter Panel */}
      <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-navy/5 mb-12">
        <div className="max-w-2xl mx-auto mb-8">
          <label htmlFor="search" className="block text-sm font-semibold text-navy mb-2 eyebrow text-center sm:text-left">
            Search Services
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              placeholder="e.g. litigation, contract, commercial..."
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

      {/* Results Section */}
      <div className="mb-6 flex justify-between items-center text-sm text-slate">
        <p>
          Showing {filteredAreas.length} of {initialAreas.length} practice areas
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

      {filteredAreas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area, i) => {
            const Icon = getPracticeAreaIcon(area.title);
            return (
              <a
                key={i}
                href={`/practice-areas/${area.slug}`}
                className="group relative block bg-white border border-navy/10 p-8 rounded-sm hover:border-brass hover:shadow-lg transition-all duration-300"
              >
                {/* Corner decorative folding fold */}
                <div
                  className="absolute top-0 right-0 w-6 h-6 bg-brass opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />

                {/* Dynamic Lucide Icon */}
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
        <div className="text-center py-20 bg-white border border-navy/10 rounded-sm">
          <span className="text-4xl block mb-4">🔍</span>
          <h3 className="font-display text-2xl text-navy mb-2">No matching practice areas</h3>
          <p className="text-slate">Try adjusting your search keywords or choosing a different category filter.</p>
        </div>
      )}
    </div>
  );
}
