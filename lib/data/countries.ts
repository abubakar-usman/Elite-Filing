export interface CountryItem {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  pageHeadline: string;
  intro: string;
  serviceCategories: {
    categoryName: string;
    items: { name: string; price: number }[];
  }[];
  packageOption?: string;
  sectionCta: string;
  heroDesc?: string;
  stats?: { label: string; key: string }[];
  entities?: { name: string; bestFor: string; taxOverview: string; processingTime: string }[];
  taxation?: { authority: string; rate: string; filingDeadline: string; keyPoints: string[] };
  trademarks?: { authority: string; processDesc: string; avgTime: string };
  banking?: { options: string[]; recommendation: string; requirements: string[] };
  packages?: { name: string; price: string; features: string[]; popular?: boolean }[];
  faqs?: { q: string; a: string }[];
  heroImage?: string;
  heroImagePosition?: string;
  comingSoon?: boolean;
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
          { name: "LLC Registration", price: 299 },
          { name: "C-Corporation Registration", price: 399 },
          { name: "S-Corporation Advisory", price: 199 },
          { name: "Registered Agent Services", price: 150 },
          { name: "EIN Registration", price: 100 },
          { name: "Annual Reports & Compliance Support", price: 250 }
        ]
      },
      {
        categoryName: "Tax & ITIN",
        items: [
          { name: "ITIN Application (Form W-7)", price: 350 },
          { name: "EIN Registration", price: 100 },
          { name: "IRS Compliance Advisory", price: 200 },
          { name: "Foreign-Owned LLC Compliance", price: 400 },
          { name: "Form 5472 Filing", price: 300 },
          { name: "Form 1120 Filing", price: 500 },
          { name: "Form 1040-NR Filing", price: 450 },
          { name: "Tax Residency Guidance", price: 200 },
          { name: "IRS Notice Response Support", price: 150 }
        ]
      },
      {
        categoryName: "Trademark & IP",
        items: [
          { name: "USPTO Trademark Search", price: 199 },
          { name: "Trademark Registration", price: 899 },
          { name: "Trademark Monitoring", price: 299 },
          { name: "Office Action Response", price: 499 }
        ]
      },
      {
        categoryName: "Taxation & Audit",
        items: [
          { name: "LLC Tax Filing", price: 450 },
          { name: "Corporate Tax Returns", price: 650 },
          { name: "Sales Tax Registration", price: 299 },
          { name: "State Tax Compliance", price: 350 }
        ]
      },
      {
        categoryName: "Business Address",
        items: [
          { name: "US Business Address (Virtual)", price: 199 }
        ]
      },
      {
        categoryName: "Banking & Payments",
        items: [
          { name: "US Business Bank Account Guidance", price: 150 },
          { name: "Multi-Currency Accounts", price: 100 },
          { name: "Stripe Setup", price: 199 },
          { name: "PayPal Business Setup", price: 199 },
          { name: "Wise Business", price: 99 },
          { name: "Payoneer Setup", price: 99 },
          { name: "Merchant Account Advisory", price: 299 }
        ]
      }
    ],
    packageOption: "Complete Package — formation, EIN, registered agent, and first-year compliance bundled into a single fee, for founders who want the full setup handled in one engagement.",
    sectionCta: "Start Your US Company",
        heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
    faqs: [
      { q: "Do I need to be a US resident to form an LLC?", a: "No, non-US residents can legally form a US LLC and operate it from anywhere in the world." },
      { q: "What is the difference between an LLC and a C-Corporation for a foreign founder?", a: "LLCs are pass-through entities, meaning profits are not taxed at the corporate level. C-Corporations pay corporate tax, and shareholders pay tax on dividends. Venture capital investors strongly prefer C-Corporations." },
      { q: "Do I need an ITIN before I can open a US bank account?", a: "Many modern digital banks (like Mercury) do not require an ITIN to open an account, though traditional brick-and-mortar banks typically do." },
      { q: "How does Form 5472 affect a foreign-owned single-member LLC?", a: "Even if your US LLC has no US-sourced income, a foreign-owned single-member LLC must file Form 5472 annually. Failure to file incurs a $25,000 IRS penalty." }
    ]
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
          { name: "LTD Company Registration", price: 199 },
          { name: "Companies House Registration", price: 99 },
          { name: "UTR Registration", price: 150 },
          { name: "Confirmation Statement Filing", price: 99 },
          { name: "Registered Office Address", price: 150 },
          { name: "Director Services", price: 500 },
          { name: "Annual Accounts Filing", price: 350 }
        ]
      },
      {
        categoryName: "Ongoing Corporate Changes",
        items: [
          { name: "Company Name Change", price: 99 },
          { name: "Company Structural Change", price: 299 },
          { name: "Company Closure & Dissolution", price: 399 }
        ]
      },
      {
        categoryName: "Trademark & IP",
        items: [
          { name: "UKIPO Trademark Registration", price: 799 },
          { name: "Brand Protection Services", price: 299 }
        ]
      },
      {
        categoryName: "Taxation & VAT",
        items: [
          { name: "Corporation Tax Filing", price: 450 },
          { name: "VAT Registration", price: 199 },
          { name: "VAT Returns", price: 250 },
          { name: "Annual Accounts", price: 350 }
        ]
      },
      {
        categoryName: "Trade & Customs",
        items: [
          { name: "EORI Number Application", price: 99 }
        ]
      },
      {
        categoryName: "Business Address",
        items: [
          { name: "UK Registered Office Address", price: 150 },
          { name: "UK Shared Office Space", price: 299 }
        ]
      },
      {
        categoryName: "Banking & Payments",
        items: [
          { name: "UK Business Banking Support", price: 199 }
        ]
      }
    ],
    sectionCta: "Start Your UK Company",
        heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    faqs: [
      { q: "How long does it take to register a UK LTD company?", a: "Registration typically takes 24 to 48 hours once submitted to Companies House." },
      { q: "When is VAT registration mandatory versus voluntary?", a: "Mandatory VAT registration is required if your taxable turnover exceeds £90,000 in a 12-month period. You can voluntarily register before this threshold to reclaim VAT on business expenses." },
      { q: "What is a confirmation statement and how often do I need to file one?", a: "A confirmation statement verifies that company details are up to date and must be filed annually with Companies House." },
      { q: "Can a non-UK resident be a company director?", a: "Yes, a non-UK resident can be a director of a UK LTD company." }
    ]
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
          { name: "Mainland Company Formation", price: 3500 },
          { name: "Free Zone Company Formation", price: 2500 },
          { name: "Offshore Company Formation", price: 1900 },
          { name: "Trade License Processing", price: 500 },
          { name: "Corporate Bank Account Assistance", price: 800 },
          { name: "Residency Visa Support", price: 1200 },
          { name: "PRO Services", price: 600 }
        ]
      },
      {
        categoryName: "Trademark & IP",
        items: [
          { name: "Trademark Registration", price: 1500 },
          { name: "Brand Protection", price: 500 }
        ]
      },
      {
        categoryName: "Taxation & VAT",
        items: [
          { name: "Corporate Tax Registration", price: 300 },
          { name: "VAT Registration", price: 350 },
          { name: "VAT Filing", price: 250 },
          { name: "Corporate Tax Returns", price: 500 }
        ]
      },
      {
        categoryName: "Business Address",
        items: [
          { name: "UAE Virtual Office", price: 600 }
        ]
      },
      {
        categoryName: "Banking & Payments",
        items: [
          { name: "UAE Corporate Banking Assistance", price: 800 }
        ]
      }
    ],
    sectionCta: "Start Your UAE Company",
        heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    faqs: [
      { q: "What is the difference between Mainland, Free Zone, and Offshore company formation?", a: "Mainland allows trading anywhere in the UAE and locally. Free Zones offer 100% foreign ownership and customs benefits but restrict local trading. Offshore is strictly for international business and asset holding." },
      { q: "Do I need a local sponsor to form a Mainland company?", a: "No, recent changes allow 100% foreign ownership for most commercial and industrial activities in the Mainland." },
      { q: "Am I eligible for a residency visa through my company?", a: "Yes, forming a Mainland or Free Zone company typically makes you eligible for an investor or employment visa." },
      { q: "What are the current UAE corporate tax thresholds?", a: "A 9% corporate tax applies to taxable income exceeding AED 375,000. Qualifying Free Zone persons may benefit from a 0% rate on qualifying income." }
    ]
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
          { name: "Federal Corporation Registration", price: 599 },
          { name: "Provincial Corporation Registration", price: 499 },
          { name: "NUANS Name Search", price: 99 },
          { name: "GST/HST Registration", price: 150 },
          { name: "Corporate Tax Registration", price: 150 },
          { name: "Compliance Support", price: 299 }
        ]
      },
      {
        categoryName: "Trademark & IP",
        items: [
          { name: "Trademark Registration", price: 899 },
          { name: "IP Advisory", price: 199 }
        ]
      },
      {
        categoryName: "Taxation",
        items: [
          { name: "GST/HST Registration", price: 150 },
          { name: "Corporate Tax Filing", price: 550 },
          { name: "Compliance Reporting", price: 250 }
        ]
      },
      {
        categoryName: "Business Address",
        items: [
          { name: "Canada Business Address", price: 299 }
        ]
      }
    ],
    sectionCta: "Start Your Canadian Company",
        heroImage: "https://images.unsplash.com/photo-1533417457911-4ec911485388?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        heroImagePosition: "center 20%",
    faqs: [
      { q: "Should I incorporate federally or provincially?", a: "Federal incorporation offers nationwide name protection and allows operating in any province, but requires extra-provincial registration in the province where you operate. Provincial incorporation limits operations primarily to that province." },
      { q: "What is a NUANS name search and do I need one?", a: "A NUANS search checks for existing identical or similar corporate names. It is required for federal and most provincial incorporations, unless opting for a numbered company." },
      { q: "When do I need to register for GST/HST?", a: "Registration is mandatory once your worldwide gross revenues from taxable sales exceed $30,000 CAD in a single calendar quarter or over four consecutive calendar quarters." },
      { q: "Can a non-resident own 100 percent of a Canadian corporation?", a: "Yes, a non-resident can own 100% of the shares. However, some jurisdictions previously required resident directors, but changes in recent years have relaxed these rules in certain provinces." }
    ]
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
          { name: "SECP Company Registration", price: 199 },
          { name: "Single Member Company (SMC) Registration", price: 150 },
          { name: "Private Limited Company Registration", price: 250 },
          { name: "NTN Registration", price: 50 },
          { name: "Sales Tax Registration", price: 99 },
          { name: "Chamber Membership", price: 150 },
          { name: "PSEB Registration", price: 199 },
          { name: "PEC Registration (where applicable)", price: 299 }
        ]
      },
      {
        categoryName: "Trademark & IP",
        items: [
          { name: "Trademark Search", price: 50 },
          { name: "Trademark Registration", price: 199 },
          { name: "IP Protection Support", price: 150 }
        ]
      },
      {
        categoryName: "Taxation",
        items: [
          { name: "Income Tax Returns", price: 150 },
          { name: "Sales Tax Returns", price: 99 },
          { name: "Tax Advisory", price: 99 },
          { name: "Tax Audit Support", price: 299 },
          { name: "FBR Compliance", price: 150 }
        ]
      }
    ],
    sectionCta: "Start Your Pakistan Company",
        heroImage: "https://images.unsplash.com/photo-1608020932658-d0e19a69580b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        heroImagePosition: "center 30%",
    faqs: [
      { q: "What is the difference between a Single Member Company and a Private Limited Company?", a: "An SMC requires only one director and shareholder, while a Private Limited Company requires at least two directors and shareholders." },
      { q: "Do I need PSEB registration for a software or IT services business?", a: "Yes, registering with the Pakistan Software Export Board (PSEB) is highly recommended as it provides tax exemptions on IT exports and facilitates easy repatriation of profits." },
      { q: "How often do I need to file sales tax returns?", a: "Sales tax returns are filed monthly with the FBR (or provincial authorities like PRA/SRB for services)." },
      { q: "What documents do I need for SECP registration?", a: "You typically need CNIC copies of the directors, a verified registered office address, and the Memorandum and Articles of Association." }
    ]
  },
  {
    slug: "china",
    name: "China",
    flag: "🇨🇳",
    tagline: "WFOE, JV, and Rep Office formation in mainland China.",
    pageHeadline: "Establish Your Business Presence in China",
    intro: "China offers vast market access for global companies. Elite Filing will soon provide end-to-end support for Wholly Foreign-Owned Enterprises (WFOEs), Joint Ventures, and Representative Offices in mainland China.",
    serviceCategories: [],
    sectionCta: "Notify Me",
    comingSoon: true,
  },
  {
    slug: "hong-kong",
    name: "Hong Kong",
    flag: "🇭🇰",
    tagline: "Private limited company registration in Asia's premier financial hub.",
    pageHeadline: "Register a Company in Hong Kong",
    intro: "Hong Kong is Asia's leading gateway for international business — offering zero capital gains tax, low corporate tax, and straightforward company formation. Elite Filing will soon offer comprehensive Hong Kong incorporation services.",
    serviceCategories: [],
    sectionCta: "Notify Me",
    comingSoon: true,
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    tagline: "KK and GK company formation for Asia's third-largest economy.",
    pageHeadline: "Incorporate Your Company in Japan",
    intro: "Japan offers a highly stable, innovative economy with a strong rule of law. Elite Filing will soon support Kabushiki Kaisha (KK) and Godo Kaisha (GK) company formation for foreign founders.",
    serviceCategories: [],
    sectionCta: "Notify Me",
    comingSoon: true,
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    tagline: "SARL and SAS company formation in the heart of Europe.",
    pageHeadline: "Register Your Company in France",
    intro: "France offers a large consumer market and EU single-market access. Elite Filing will soon provide SARL and SAS formation services with full administrative support.",
    serviceCategories: [],
    sectionCta: "Notify Me",
    comingSoon: true,
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    tagline: "GmbH and UG formation in Europe's largest economy.",
    pageHeadline: "Incorporate a Company in Germany",
    intro: "Germany is Europe's economic powerhouse. Elite Filing will soon support GmbH and UG (haftungsbeschränkt) company formation for international founders.",
    serviceCategories: [],
    sectionCta: "Notify Me",
    comingSoon: true,
  },
  {
    slug: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    tagline: "A.Ş. and Ltd. Şti. formation bridging Europe and Asia.",
    pageHeadline: "Register Your Company in Turkey",
    intro: "Turkey offers a strategic location bridging Europe and Asia with a fast-growing economy. Elite Filing will soon support Joint Stock (A.Ş.) and Limited Liability (Ltd. Şti.) company formation.",
    serviceCategories: [],
    sectionCta: "Notify Me",
    comingSoon: true,
  },
];
