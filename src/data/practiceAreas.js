import categoriesData from "./practiceAreas.json";

// Flatten all practice areas with category info included
export const allPracticeAreas = categoriesData.flatMap(cat => 
  cat.practice_areas.map(area => ({
    title: area.name,
    slug: area.slug,
    category: cat.category,
    overview: area.overview,
    coverImage: area.imageUrl, // Map directly to coverImage for local compatibility
    imageUrl: area.imageUrl,
    heroHeadline: area.hero?.headline || area.name,
    heroSubheadline: area.hero?.subheadline || "",
    servicesIncluded: area.servicesIncluded || [],
    whyChooseUs: area.whyChooseUs || [],
    faqs: area.faq || [],
    cta: {
      text: area.ctaPrompt || "Book Consultation",
      link: "/book-consultation"
    },
    relatedSlugs: area.relatedPracticeAreas || []
  }))
);

// Map slug to practice area details
export function getPracticeAreaBySlug(slug) {
  const area = allPracticeAreas.find(p => p.slug === slug);
  if (!area) return null;

  // Resolve related practice areas
  const resolvedRelated = area.relatedSlugs
    .map(name => allPracticeAreas.find(p => p.title.toLowerCase() === name.toLowerCase()))
    .filter(Boolean)
    .map(p => ({
      title: p.title,
      slug: p.slug,
      coverImage: p.coverImage,
      category: p.category,
      overview: p.overview
    }));

  return {
    ...area,
    relatedPracticeAreas: resolvedRelated
  };
}

// Get featured practice areas
export function getFeaturedPracticeAreas() {
  // Select specific featured slugs
  const featuredSlugs = [
    "wealth-assets-protection",
    "civil-litigation",
    "corporate-commercial-law",
    "arbitration-adr",
    "property-real-estate-law",
    "intellectual-property"
  ];
  const featured = allPracticeAreas.filter(p => featuredSlugs.includes(p.slug));
  // Fallback to first 6 if none matched
  return featured.length > 0 ? featured : allPracticeAreas.slice(0, 6);
}

// Get practice area titles
export function getPracticeAreaTitles() {
  return allPracticeAreas.map(p => ({ title: p.title })).sort((a, b) => a.title.localeCompare(b.title));
}
