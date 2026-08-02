export default {
  name: "post",
  title: "Insight",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    { name: "excerpt", title: "Excerpt", type: "text" },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "category",
      title: "Category",
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
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
    { name: "authorName", title: "Author Name", type: "string" },
    {
      name: "authorImage",
      title: "Author Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "featured", title: "Show on Homepage", type: "boolean" },
  ],
};