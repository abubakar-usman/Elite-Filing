import type { MetadataRoute } from "next";
import { servicesData } from "@/lib/data/services";
import { countriesData } from "@/lib/data/countries";
import { industriesData } from "@/lib/data/industries";
import { articlesData } from "@/lib/data/resources";

const BASE_URL = "https://elitefiling.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/countries", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/industries", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/pricing", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/resources", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const serviceEntries = servicesData.map((s) => ({
    path: `/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const countryEntries = countriesData.map((c) => ({
    path: `/countries/${c.slug}`,
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

  const all = [...staticEntries, ...serviceEntries, ...countryEntries, ...industryEntries, ...resourceEntries];

  return all.map((e) => ({
    url: `${BASE_URL}${e.path}`,
    lastModified: new Date(),
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
