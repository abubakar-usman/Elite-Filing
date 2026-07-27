export interface CountryItem {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  pageHeadline: string;
  intro: string;
  serviceCategories: {
    categoryName: string;
    items: string[];
  }[];
  packageOption?: string;
  sectionCta: string;
  faqPrompts: string;
  heroDesc?: string;
  stats?: { label: string; key: string }[];
  entities?: { name: string; bestFor: string; taxOverview: string; processingTime: string }[];
  taxation?: { authority: string; rate: string; filingDeadline: string; keyPoints: string[] };
  trademarks?: { authority: string; processDesc: string; avgTime: string };
  banking?: { options: string[]; recommendation: string; requirements: string[] };
  packages?: { name: string; price: string; features: string[]; popular?: boolean }[];
  faqs?: { q: string; a: string }[];
}

export const countriesData: CountryItem[] = [
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    tagline: "LLCs, C-Corps, and full IRS and state compliance support.",
    pageHeadline: "Register Your US Company From Anywhere in the World",
    intro: "The United States remains one of the most trusted jurisdictions for founders building a global business. Whether you need a Delaware LLC for an ecommerce brand or a C-Corporation ready to raise venture funding, Elite Filing handles formation, tax registration, and ongoing compliance so you can operate with confidence.",
    serviceCategories: [
      {
        categoryName: "Company Formation",
        items: [
          "LLC Registration",
          "C-Corporation Registration",
          "S-Corporation Advisory",
          "Registered Agent Services",
          "EIN Registration",
          "Annual Reports & Compliance Support"
        ]
      },
      {
        categoryName: "Tax & ITIN",
        items: [
          "ITIN Application (Form W-7)",
          "EIN Registration",
          "IRS Compliance Advisory",
          "Foreign-Owned LLC Compliance",
          "Form 5472 Filing",
          "Form 1120 Filing",
          "Form 1040-NR Filing",
          "Tax Residency Guidance",
          "IRS Notice Response Support"
        ]
      },
      {
        categoryName: "Trademark & IP",
        items: [
          "USPTO Trademark Search",
          "Trademark Registration",
          "Trademark Monitoring",
          "Office Action Response"
        ]
      },
      {
        categoryName: "Taxation & Audit",
        items: [
          "LLC Tax Filing",
          "Corporate Tax Returns",
          "Sales Tax Registration",
          "State Tax Compliance"
        ]
      },
      {
        categoryName: "Business Address",
        items: [
          "US Business Address (Virtual)"
        ]
      },
      {
        categoryName: "Banking & Payments",
        items: [
          "US Business Bank Account Guidance",
          "Multi-Currency Accounts",
          "Stripe Setup",
          "PayPal Business Setup",
          "Wise Business",
          "Payoneer Setup",
          "Merchant Account Advisory"
        ]
      }
    ],
    packageOption: "Complete Package — formation, EIN, registered agent, and first-year compliance bundled into a single fee, for founders who want the full setup handled in one engagement.",
    sectionCta: "Start Your US Company",
    faqPrompts: "FAQ prompts for content team to answer: Do I need to be a US resident to form an LLC? What is the difference between an LLC and a C-Corporation for a foreign founder? Do I need an ITIN before I can open a US bank account? How does Form 5472 affect a foreign-owned singlemember LLC?"
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "LTD registration, Companies House filings, and VAT support.",
    pageHeadline: "Set Up and Run a UK Company With Full Compliance Support",
    intro: "The UK offers a fast, well-regulated path to a registered company that global clients and partners trust. Elite Filing manages your Companies House registration, VAT, and annual filings so your business stays in good standing from day one.",
    serviceCategories: [
      {
        categoryName: "Company Formation",
        items: [
          "LTD Company Registration",
          "Companies House Registration",
          "UTR Registration",
          "Confirmation Statement Filing",
          "Registered Office Address",
          "Director Services",
          "Annual Accounts Filing"
        ]
      },
      {
        categoryName: "Ongoing Corporate Changes",
        items: [
          "Company Name Change",
          "Company Structural Change",
          "Company Closure & Dissolution"
        ]
      },
      {
        categoryName: "Trademark & IP",
        items: [
          "UKIPO Trademark Registration",
          "Brand Protection Services"
        ]
      },
      {
        categoryName: "Taxation & VAT",
        items: [
          "Corporation Tax Filing",
          "VAT Registration",
          "VAT Returns",
          "Annual Accounts"
        ]
      },
      {
        categoryName: "Trade & Customs",
        items: [
          "EORI Number Application"
        ]
      },
      {
        categoryName: "Business Address",
        items: [
          "UK Registered Office Address",
          "UK Shared Office Space"
        ]
      },
      {
        categoryName: "Banking & Payments",
        items: [
          "UK Business Banking Support"
        ]
      }
    ],
    sectionCta: "Start Your UK Company",
    faqPrompts: "FAQ prompts: How long does it take to register a UK LTD company? When is VAT registration mandatory versus voluntary? What is a confirmation statement and how often do I need to file one? Can a non-UK resident be a company director?"
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    tagline: "Mainland, Free Zone, and Offshore company formation.",
    pageHeadline: "Form Your UAE Company in the Mainland, Free Zone, or Offshore",
    intro: "The UAE gives founders a choice between Mainland, Free Zone, and Offshore structures, each with different ownership rules, tax treatment, and licensing requirements. Elite Filing helps you choose the right structure and manages licensing, banking introductions, and visa support from start to finish.",
    serviceCategories: [
      {
        categoryName: "Company Formation",
        items: [
          "Mainland Company Formation",
          "Free Zone Company Formation",
          "Offshore Company Formation",
          "Trade License Processing",
          "Corporate Bank Account Assistance",
          "Residency Visa Support",
          "PRO Services"
        ]
      },
      {
        categoryName: "Trademark & IP",
        items: [
          "Trademark Registration",
          "Brand Protection"
        ]
      },
      {
        categoryName: "Taxation & VAT",
        items: [
          "Corporate Tax Registration",
          "VAT Registration",
          "VAT Filing",
          "Corporate Tax Returns"
        ]
      },
      {
        categoryName: "Business Address",
        items: [
          "UAE Virtual Office"
        ]
      },
      {
        categoryName: "Banking & Payments",
        items: [
          "UAE Corporate Banking Assistance"
        ]
      }
    ],
    sectionCta: "Start Your UAE Company",
    faqPrompts: "FAQ prompts: What is the difference between Mainland, Free Zone, and Offshore company formation? Do I need a local sponsor to form a Mainland company? Am I eligible for a residency visa through my company? What are the current UAE corporate tax thresholds?"
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Federal and provincial incorporation with GST/HST registration.",
    pageHeadline: "Incorporate in Canada, Federally or Provincially",
    intro: "Canada offers founders a stable, internationally respected jurisdiction with straightforward federal and provincial incorporation paths. Elite Filing manages your name search, registration, and tax setup so your Canadian entity is ready to trade from day one.",
    serviceCategories: [
      {
        categoryName: "Company Formation",
        items: [
          "Federal Corporation Registration",
          "Provincial Corporation Registration",
          "NUANS Name Search",
          "GST/HST Registration",
          "Corporate Tax Registration",
          "Compliance Support"
        ]
      },
      {
        categoryName: "Trademark & IP",
        items: [
          "Trademark Registration",
          "IP Advisory"
        ]
      },
      {
        categoryName: "Taxation",
        items: [
          "GST/HST Registration",
          "Corporate Tax Filing",
          "Compliance Reporting"
        ]
      },
      {
        categoryName: "Business Address",
        items: [
          "Canada Business Address"
        ]
      }
    ],
    sectionCta: "Start Your Canadian Company",
    faqPrompts: "FAQ prompts: Should I incorporate federally or provincially? What is a NUANS name search and do I need one? When do I need to register for GST/HST? Can a non-resident own 100 percent of a Canadian corporation?"
  },
  {
    slug: "pakistan",
    name: "Pakistan",
    flag: "🇵🇰",
    tagline: "SECP registration, NTN, sales tax, and FBR compliance.",
    pageHeadline: "Register Your Company in Pakistan With SECP, FBR, and PSEB Support",
    intro: "From SECP registration to FBR tax compliance and PSEB registration for IT and software businesses, Elite Filing supports founders and companies building in Pakistan with complete, locally informed guidance.",
    serviceCategories: [
      {
        categoryName: "Company Formation",
        items: [
          "SECP Company Registration",
          "Single Member Company (SMC) Registration",
          "Private Limited Company Registration",
          "NTN Registration",
          "Sales Tax Registration",
          "Chamber Membership",
          "PSEB Registration",
          "PEC Registration (where applicable)"
        ]
      },
      {
        categoryName: "Trademark & IP",
        items: [
          "Trademark Search",
          "Trademark Registration",
          "IP Protection Support"
        ]
      },
      {
        categoryName: "Taxation",
        items: [
          "Income Tax Returns",
          "Sales Tax Returns",
          "Tax Advisory",
          "Tax Audit Support",
          "FBR Compliance"
        ]
      }
    ],
    sectionCta: "Start Your Pakistan Company",
    faqPrompts: "FAQ prompts: What is the difference between a Single Member Company and a Private Limited Company? Do I need PSEB registration for a software or IT services business? How often do I need to file sales tax returns? What documents do I need for SECP registration?"
  }
];
