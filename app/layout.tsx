import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/site/ClientLayout";
import { JsonLd } from "@/components/site/JsonLd";

const SITE_TITLE = "Elite Filing — Form, Launch, and Scale Your Business Globally";
const SITE_DESCRIPTION =
  "Elite Filing helps founders register companies, manage tax and compliance, and expand across the US, UK, UAE, Canada, and Pakistan — with transparent pricing and dedicated specialists.";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/11c8bb00-06e4-41e9-a6a9-fa14c9f5c6b6/id-preview-3a2679a0--01a2d092-3589-4764-a141-ad5ea2d3635c.lovable.app-1784806515030.png";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: { icon: "/favicon.png" },
  alternates: { canonical: "https://elite-filing.com" },
  openGraph: {
    siteName: "Elite Filing",
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1145AC",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elite Filing",
  url: "https://elite-filing.com",
  logo: "https://elite-filing.com/logo_new.png",
  description: SITE_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-302-555-0134",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://linkedin.com/company/elite-filing",
    "https://instagram.com/elitefiling",
    "https://twitter.com/elitefiling",
  ],
  areaServed: ["US", "GB", "AE", "CA", "PK"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
        />
        <JsonLd schema={organizationSchema} />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

