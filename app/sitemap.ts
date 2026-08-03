import type { MetadataRoute } from "next";
import { servicesData } from "@/lib/data/services";
import { countriesData } from "@/lib/data/countries";
import { industriesData } from "@/lib/data/industries";
import { articlesData } from "@/lib/data/resources";

const BASE_URL = "https://elite-filing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/industries", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/resources", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const countryEntries = countriesData.map((c) => ({
    path: `/services/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const industryEntries = industriesData.map((i) => ({
    path: `/industries/${i.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const resourceEntries = articlesData.map((a) => ({
    path: `/resources/${a.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const all = [...staticEntries, ...countryEntries, ...industryEntries, ...resourceEntries];

  return all.map((e) => ({
    url: `${BASE_URL}${e.path}`,
    lastModified: new Date(),
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
