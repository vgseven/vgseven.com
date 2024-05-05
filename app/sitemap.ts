import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vgseven.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://vgseven.com/projects",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
