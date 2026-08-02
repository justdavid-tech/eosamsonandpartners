export const practiceAreaBySlugQuery = `
  *[_type == "practiceArea" && slug.current == $slug][0]{
    title,
    coverImage,
    heroHeadline,
    heroSubheadline,
    overview,
    servicesIncluded,
    whyChooseUs,
    faqs,
    cta,
    "relatedPracticeAreas": relatedPracticeAreas[]->{ 
      title, 
      "slug": slug.current,
      coverImage,
      category,
      overview
    }
  }
`;

export const featuredPracticeAreasQuery = `
  *[_type == "practiceArea" && featured == true][0...6]{
    title,
    "slug": slug.current,
    category,
    overview
  }
`;

export const allPracticeAreasQuery = `
  *[_type == "practiceArea"]{
    title,
    "slug": slug.current,
    category,
    overview
  }
`;


export const latestPostsQuery = `
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    title,
    excerpt,
    "slug": slug.current,
    mainImage,
    category,
    publishedAt
  }
`;

export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    excerpt,
    "slug": slug.current,
    mainImage,
    category,
    publishedAt
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    body,
    mainImage,
    category,
    authorName,
    authorImage,
    publishedAt
  }
`;