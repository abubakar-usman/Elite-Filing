export interface SpecialtyService {
  slug: string;
  headline: string;
  intro: string;
  included: string[];
  ctaText: string;
}

export const specialtyServicesData: SpecialtyService[] = [
  {
    slug: "trademark-and-ip",
    headline: "Protect Your Brand Before Someone Else Does",
    intro: "Your name, logo, and brand identity are among your most valuable assets. Elite Filing helps you search, register, and monitor trademarks across the markets where you operate, and responds on your behalf if a registration is challenged.",
    included: [
      "Trademark search and clearance, including USPTO and UKIPO searches",
      "Trademark registration in the US, UK, UAE, Canada, and Pakistan",
      "Copyright registration for original creative and written work",
      "Class of goods and services selection",
      "Trademark monitoring for potential infringement",
      "Office action response and objection handling",
      "Brand protection strategy for founders expanding into new markets"
    ],
    ctaText: "Check Trademark Availability"
  },
  {
    slug: "vat-registration",
    headline: "Stay VAT Compliant Wherever You Sell",
    intro: "VAT rules differ by country and by revenue threshold, and getting registration timing wrong can mean penalties or missed input tax credits. Elite Filing determines whether your registration should be voluntary or mandatory, files your application, and manages your ongoing returns.",
    included: [
      "VAT registration in the UK and UAE",
      "Determination of mandatory versus voluntary registration",
      "Quarterly and annual VAT return filing",
      "VAT compliance review for multi-country sellers"
    ],
    ctaText: "Check My VAT Requirements"
  },
  {
    slug: "eori-number",
    headline: "Import and Export Legally Across UK and EU Borders",
    intro: "An EORI number is required for any business importing or exporting goods across UK and EU borders. Elite Filing handles the application and links it to your existing company registration.",
    included: [
      "EORI number application",
      "Guidance on import, export, or combined trading activity",
      "Support identifying your primary trading countries"
    ],
    ctaText: "Apply for an EORI Number"
  },
  {
    slug: "itin-application",
    headline: "Get Your US Individual Taxpayer Identification Number",
    intro: "If you are a non-US resident earning US-sourced income or need an ITIN to open a business bank account, Elite Filing prepares and submits your Form W-7 application with the required supporting documentation.",
    included: [
      "Form W-7 preparation and submission",
      "Supporting document review",
      "Guidance on when an ITIN is required versus an EIN"
    ],
    ctaText: "Apply for an ITIN"
  },
  {
    slug: "registered-agent",
    headline: "Meet Your Legal Presence Requirements, Without the Overhead",
    intro: "Most jurisdictions require a registered agent or registered office with a physical address in the country of incorporation. Elite Filing provides this service in every market we operate in, so you always have a reliable point of contact for legal and government correspondence.",
    included: [
      "Registered agent service in the US",
      "Registered office address in the UK",
      "Timely forwarding of legal and compliance notices",
      "Renewal management so your registration never lapses"
    ],
    ctaText: "Add Registered Agent Service"
  },
  {
    slug: "virtual-office",
    headline: "A Professional Business Address in Every Market You Operate",
    intro: "Whether you need a mailing address for your LLC, a registered office for your UK company, or a presence address in the UAE, Elite Filing provides virtual office solutions with mail scanning and forwarding.",
    included: [
      "US Business Address (virtual)",
      "UK Registered Office Address",
      "UAE Virtual Office",
      "Canada Business Address",
      "Digital mail scanning or physical forwarding, your choice"
    ],
    ctaText: "Get a Business Address"
  },
  {
    slug: "accounting-and-bookkeeping",
    headline: "Keep Your Books Audit-Ready, Every Month",
    intro: "Compliance does not end at registration. Elite Filing provides ongoing bookkeeping, annual compliance filing, and tax preparation so your financial records are always accurate and ready for review, whether that review comes from a tax authority, an investor, or your own leadership team.",
    included: [
      "Monthly bookkeeping",
      "Annual compliance filing",
      "Tax filing and audit support",
      "Financial recordkeeping aligned to each jurisdiction's requirements"
    ],
    ctaText: "Set Up Ongoing Bookkeeping"
  },
  {
    slug: "business-bank-account",
    headline: "Get Banked, in Any Currency You Need",
    intro: "Opening a business bank account as a foreign-owned company can be one of the hardest parts of getting started. Elite Filing guides you through documentation requirements and connects you with the right banking and payment partners for your business.",
    included: [
      "Guidance for opening business bank accounts in the US, UK, and UAE",
      "Multi-currency account setup",
      "Stripe, PayPal, Wise, and Payoneer setup support",
      "Merchant account advisory for ecommerce businesses"
    ],
    ctaText: "Get Banking Support"
  },
  {
    slug: "ecommerce-business-setup",
    headline: "Get Compliant and Ready to Sell on Amazon, Walmart, and Etsy",
    intro: "Marketplaces have their own registration and tax requirements on top of standard company formation. Elite Filing sets your business up correctly from the start, so your seller account, sales tax registration, and business structure all line up.",
    included: [
      "Business registration for Amazon, Walmart, Etsy, and Shopify sellers",
      "Guidance for existing versus new seller accounts",
      "Sales tax and compliance setup for marketplace sellers",
      "Support for sole proprietors, partnerships, and private limited entities",
      "Business consultancy and documentation support for marketplace approval"
    ],
    ctaText: "Set Up My Ecommerce Business"
  },
  {
    slug: "growth-and-marketing",
    headline: "Build the Brand and Online Presence Behind Your New Company",
    intro: "Once your company is registered, Elite Filing's growth partners can help you build the digital presence to support it, from your first website to a full-scale demand generation program.",
    included: [
      "Web Development",
      "Search Engine Optimization (SEO)",
      "Digital Marketing",
      "Lead Generation",
      "Affiliate Marketing",
      "Logo Design & Branding",
      "Company Logo Creation"
    ],
    ctaText: "Explore Growth Add-Ons"
  }
];
