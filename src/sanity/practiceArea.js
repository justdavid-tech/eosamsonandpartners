export default {
  name: "practiceArea",
  title: "Practice Area",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "category",
      title: "Category (for mega-menu)",
      type: "string",
      options: {
        list: [
          "Litigation & Dispute Resolution",
          "Corporate & Commercial",
          "Property & Finance",
          "Personal & Family",
          "Regulatory & Advisory",
        ],
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    { name: "heroHeadline", title: "Hero Headline", type: "string" },
    { name: "heroSubheadline", title: "Hero Subheadline", type: "text" },
    { name: "overview", title: "Overview", type: "text" },
    {
      name: "servicesIncluded",
      title: "Services Included",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "whyChooseUs",
      title: "Why Choose Us",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          name: "faq",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
          ],
        },
      ],
    },
    {
      name: "relatedPracticeAreas",
      title: "Related Practice Areas",
      type: "array",
      of: [{ type: "reference", to: [{ type: "practiceArea" }] }],
    },
    {
      name: "cta",
      title: "Call to Action (CTA)",
      type: "object",
      fields: [
        { name: "text", title: "Button Text", type: "string" },
        { name: "link", title: "Button Link", type: "string" },
      ],
    },
    {
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      description: "Toggle on to showcase this practice area on the homepageHighlights grid.",
    },
  ],
};