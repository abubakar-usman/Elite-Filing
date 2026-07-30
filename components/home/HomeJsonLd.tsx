import { JsonLd } from "@/components/site/JsonLd";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Elite Filing",
  url: "https://elite-filing.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://elite-filing.com/services?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export function HomeJsonLd() {
  return <JsonLd schema={websiteSchema} />;
}
