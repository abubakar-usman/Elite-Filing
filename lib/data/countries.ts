export interface CountryItem {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  heroDesc: string;
  stats: { key: string; label: string }[];
  entities: { name: string; bestFor: string; taxOverview: string; processingTime: string }[];
  taxation: {
    authority: string;
    rate: string;
    filingDeadline: string;
    keyPoints: string[];
  };
  trademarks: {
    authority: string;
    avgTime: string;
    processDesc: string;
  };
  banking: {
    options: string[];
    requirements: string[];
    recommendation: string;
  };
  packages: {
    name: string;
    price: string;
    popular?: boolean;
    features: string[];
  }[];
  faqs: { q: string; a: string }[];
}

export const countriesData: CountryItem[] = [
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    tagline: "LLCs, C-Corps, and full IRS and state compliance support.",
    heroDesc: "Form a Delaware, Wyoming, Florida, or California entity with an official EIN tax ID, Registered Agent, and US bank account. Designed for international founders operating globally.",
    stats: [
      { key: "1 - 3 Days", label: "Average Incorporation Time" },
      { key: "$0 State Tax", label: "In Wyoming & Delaware (for non-US source)" },
      { key: "100% Remote", label: "No US Visit or Visa Required" },
      { key: "FDIC Insured", label: "US Corporate Banking Access" }
    ],
    entities: [
      {
        name: "Wyoming LLC",
        bestFor: "E-commerce, Amazon FBA, SaaS, & Privacy-conscious non-residents",
        taxOverview: "Pass-through taxation. Zero state income tax. Mandatory Form 5472/1120 filing.",
        processingTime: "1 - 2 business days"
      },
      {
        name: "Delaware LLC",
        bestFor: "Global holding companies, international trade, & consulting",
        taxOverview: "Flexible pass-through entity. Flexible internal management rules.",
        processingTime: "1 - 3 business days"
      },
      {
        name: "Delaware C-Corporation",
        bestFor: "Venture-backed startups, fundraising from US VCs & YC",
        taxOverview: "21% flat US federal corporate tax. Preferred structure for equity issuance.",
        processingTime: "2 - 3 business days"
      }
    ],
    taxation: {
      authority: "Internal Revenue Service (IRS)",
      rate: "0% State Tax (WY/DE non-resident) | 21% Federal Corporate (C-Corp)",
      filingDeadline: "April 15 (LLCs) / April 15 (C-Corps)",
      keyPoints: [
        "Single-member foreign LLCs must file IRS Form 5472 and 1120 annually even with zero US income.",
        "No US personal tax for non-residents if income is generated outside US territory.",
        "State Sales Tax obligations trigger upon reaching economic nexus thresholds ($100k sales)."
      ]
    },
    trademarks: {
      authority: "United States Patent and Trademark Office (USPTO)",
      avgTime: "8 - 10 months",
      processDesc: "Electronic filing under TEAS Plus system. Comprehensive federal search conducted prior to application to avoid likelihood of confusion objections."
    },
    banking: {
      options: ["Mercury Bank", "Relay Financial", "Wise Business", "Brex"],
      requirements: ["Approved Articles of Organization", "IRS EIN Confirmation Letter (CP575)", "Founder Passport Copy", "US Virtual Address proof"],
      recommendation: "Mercury Bank is the top recommendation for tech startups & ecommerce founders due to zero monthly fees and seamless remote setup."
    },
    packages: [
      {
        name: "US Starter LLC",
        price: "$199 + state fee",
        features: [
          "State Articles of Organization filing",
          "1st Year Registered Agent service",
          "Digital Certificate of Formation",
          "Custom Operating Agreement",
          "Banking application preparation"
        ]
      },
      {
        name: "US Business Complete",
        price: "$399 + state fee",
        popular: true,
        features: [
          "Everything in Starter",
          "Official IRS EIN procurement",
          "Expedited 24h state filing",
          "Mercury / Wise bank setup priority",
          "1st Year Tax Compliance shield & alerts",
          "State Resale Certificate (for E-commerce)"
        ]
      },
      {
        name: "US Founder Scale",
        price: "$799 + state fee",
        features: [
          "Everything in Complete",
          "USPTO Trademark Clearance search",
          "Delaware C-Corp conversion / structure prep",
          "Custom Stock Purchase Agreements",
          "Stripe & PayPal verification dossier",
          "1st Year IRS Form 5472/1120 tax return preparation"
        ]
      }
    ],
    faqs: [
      { q: "Do I need a US Social Security Number (SSN) to get an EIN?", a: "No! We process non-US resident EIN applications directly with the IRS without requiring an SSN or ITIN." },
      { q: "Can I open a US bank account without traveling to the US?", a: "Yes, our digital banking partners (Mercury, Relay) allow 100% remote online account opening for foreign founders." },
      { q: "What is the difference between Wyoming and Delaware?", a: "Wyoming is best for small businesses, e-commerce, and privacy due to low fees ($62 annual renewal). Delaware is best for startups planning to raise VC investment." }
    ]
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "LTD registration, Companies House filings, and VAT support.",
    heroDesc: "Incorporate a UK Limited Company (LTD) within 24 hours. Includes official Companies House registration, London registered office address, HMRC VAT setup, and UK multi-currency banking.",
    stats: [
      { key: "24 Hours", label: "Companies House Registration" },
      { key: "£149", label: "Starting Complete Package" },
      { key: "0% VAT", label: "Below £90,000 revenue threshold" },
      { key: "Global Prestige", label: "Recognized European Jurisdiction" }
    ],
    entities: [
      {
        name: "Private Limited Company (LTD)",
        bestFor: "E-commerce, SaaS, consulting, agency & international trade",
        taxOverview: "19% - 25% UK Corporation Tax. Standard VAT rate 20% (threshold £90k).",
        processingTime: "24 - 48 hours"
      },
      {
        name: "Limited Liability Partnership (LLP)",
        bestFor: "Professional service firms, venture funds, & legal partnerships",
        taxOverview: "Tax-transparent entity. Partners pay tax based on their individual residency status.",
        processingTime: "1 - 2 business days"
      }
    ],
    taxation: {
      authority: "HM Revenue & Customs (HMRC)",
      rate: "19% Corporation Tax (profits under £50k) | 25% (profits above £250k)",
      filingDeadline: "12 months after end of accounting period (CT600)",
      keyPoints: [
        "VAT registration is mandatory when taxable turnover exceeds £90,000 in a 12-month period.",
        "Confirmation Statement (CS01) must be submitted annually to Companies House.",
        "Non-resident directors can claim zero UK personal tax if work is performed entirely abroad."
      ]
    },
    trademarks: {
      authority: "UK Intellectual Property Office (UKIPO)",
      avgTime: "3 - 4 months",
      processDesc: "Direct UKIPO electronic submission with fast examination times (typically 2-3 weeks to initial report)."
    },
    banking: {
      options: ["Wise Business UK", "Revolut Business", "Airwallex", "Payoneer UK"],
      requirements: ["Certificate of Incorporation", "Memorandum & Articles of Association", "Director Passport", "Proof of Residence"],
      recommendation: "Wise Business UK & Revolut are ideal for multi-currency operations and seamless GBP/EUR/USD transfers."
    },
    packages: [
      {
        name: "UK Standard Formation",
        price: "£149",
        features: [
          "Companies House filing fee included",
          "Official Certificate of Incorporation",
          "Memorandum & Articles of Association",
          "Digital share certificates",
          "London Registered Address (1 Year)"
        ]
      },
      {
        name: "UK Business & VAT",
        price: "£299",
        popular: true,
        features: [
          "Everything in Standard",
          "HMRC Corporation Tax registration",
          "HMRC VAT Registration (if needed)",
          "Wise / Revolut banking priority application",
          "London Director Service Address",
          "1st Year Confirmation Statement filing"
        ]
      },
      {
        name: "UK E-Commerce Dominator",
        price: "£599",
        features: [
          "Everything in Business & VAT",
          "UKIPO Trademark filing (1 class)",
          "UK Stripe & PayPal merchant setup",
          "Custom UK E-commerce Privacy & Terms",
          "Dedicated UK Compliance Officer",
          "1st Year HMRC CT600 annual return prep"
        ]
      }
    ],
    faqs: [
      { q: "Do I need a UK address to form a UK LTD?", a: "Yes, Companies House mandates a UK registered office address. We provide a prestigious Central London office address in all packages." },
      { q: "Is UK VAT registration compulsory immediately?", a: "No, VAT registration is optional unless your UK sales cross £90,000 per year, though voluntary registration helps claim back VAT on expenses." }
    ]
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    tagline: "Mainland, Free Zone, and Offshore company formation.",
    heroDesc: "Launch a UAE Free Zone or Mainland company in Dubai, Abu Dhabi, or Sharjah. Benefit from 0% personal income tax, 100% foreign ownership, and world-class UAE banking access.",
    stats: [
      { key: "0% Personal Tax", label: "Zero income & capital gains tax" },
      { key: "100% Ownership", label: "Foreign ownership allowed in Free Zones & Mainland" },
      { key: "3 - 5 Days", label: "Fast Free Zone Trade License Issuance" },
      { key: "Residency Visa", label: "3-Year Investor Visa Eligibility" }
    ],
    entities: [
      {
        name: "Free Zone Company (FZC / FZ-LLC)",
        bestFor: "E-commerce, tech, international consulting, crypto, & trading",
        taxOverview: "0% Corporate Tax for Qualifying Free Zone Entities. 0% Personal Income Tax.",
        processingTime: "3 - 5 business days"
      },
      {
        name: "Dubai Mainland (LLC)",
        bestFor: "Local UAE retail, commercial contracting, real estate, & government tenders",
        taxOverview: "9% Corporate Tax on net profits above AED 375,000 (~$102k). 5% VAT.",
        processingTime: "5 - 7 business days"
      }
    ],
    taxation: {
      authority: "Federal Tax Authority (FTA)",
      rate: "0% Personal Income Tax | 9% Corporate Tax (above AED 375k threshold) | 5% VAT",
      filingDeadline: "9 months after financial year end",
      keyPoints: [
        "All UAE legal entities must obtain Corporate Tax registration (TRN) regardless of profit level.",
        "Qualifying Free Zone entities maintaining adequate substance can retain 0% Corporate Tax.",
        "VAT registration mandatory at AED 375,000 annual taxable turnover."
      ]
    },
    trademarks: {
      authority: "UAE Ministry of Economy (MOEC)",
      avgTime: "4 - 6 months",
      processDesc: "Submission via UAE MOEC digital portal, official gazette advertisement, and registration certificate issuance."
    },
    banking: {
      options: ["Wio Bank Corporate", "Mashreq NeoBiz", "Emirates NBD", "RAKBANK"],
      requirements: ["Trade License Copy", "Memorandum of Association", "Passport + UAE Visa / Emirates ID", "6-Month Personal Bank Statements"],
      recommendation: "Wio Bank provides digital corporate account opening within 48 hours for UAE trade license holders."
    },
    packages: [
      {
        name: "Meydan / IFZA Free Zone Starter",
        price: "$1,850",
        features: [
          "1-Year Trade License (1 Activity)",
          "Shared Virtual Desk address",
          "Establishment Card procurement",
          "Certificate of Formation & MOA",
          "Digital corporate dashboard"
        ]
      },
      {
        name: "Dubai Business + Visa Package",
        price: "$3,650",
        popular: true,
        features: [
          "Everything in Starter",
          "1 Investor / Partner Residency Visa (3 Years)",
          "Medical Fitness & Emirates ID assistance",
          "FTA Corporate Tax TRN Registration",
          "Wio Corporate Banking Application priority",
          "VIP concierge document processing"
        ]
      },
      {
        name: "UAE Enterprise & Mainland Suite",
        price: "$6,900",
        features: [
          "Dubai Mainland / IFZA Premium License",
          "Up to 3 Residency Visas included",
          "Physical Ejari / Commercial office space assistance",
          "UAE Ministry Trademark registration",
          "Emirates NBD / Mashreq account facilitation",
          "1st Year UAE Corporate Tax compliance filing"
        ]
      }
    ],
    faqs: [
      { q: "Do I need a UAE resident visa to open a UAE company?", a: "No, you can own 100% of a UAE Free Zone company as a non-resident, but obtaining a visa unlocks physical UAE corporate banking." },
      { q: "What is the Meydan Free Zone advantage?", a: "Meydan Free Zone is located in Dubai city center, offers competitive pricing, and permits combining up to 3 distinct business activities." }
    ]
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Federal and provincial incorporation with GST/HST registration.",
    heroDesc: "Incorporate federally or provincially in Ontario, British Columbia, or Alberta. Obtain CRA Business Number, GST/HST registration, and Canadian corporate banking.",
    stats: [
      { key: "2 - 4 Days", label: "Corporate Registration Time" },
      { key: "North America", label: "US-Canada USMCA Trade Agreement Access" },
      { key: "CRA Tax ID", label: "Business Number & GST/HST setup" },
      { key: "Prestige", label: "Top-ranked global banking system" }
    ],
    entities: [
      {
        name: "Federal Corporation (Canada Inc.)",
        bestFor: "Nationwide Canadian operations, tech scaleups, & foreign expansion",
        taxOverview: "15% net Federal Corporate Tax (12% effective for small business). Combined federal/provincial rate ~26.5%.",
        processingTime: "2 - 3 business days"
      },
      {
        name: "Ontario / BC Provincial Corporation",
        bestFor: "Businesses operating within a specific province without federal name protection requirements",
        taxOverview: "Combined corporate tax rates range from 11% (small business) to 27%.",
        processingTime: "2 - 4 business days"
      }
    ],
    taxation: {
      authority: "Canada Revenue Agency (CRA)",
      rate: "15% Federal Corporate Tax + Provincial Tax (9% - 16%) | GST/HST 5% - 15%",
      filingDeadline: "6 months after fiscal year end (T2 Corporate Tax Return)",
      keyPoints: [
        "GST/HST registration is mandatory once gross sales exceed $30,000 CAD over 4 quarters.",
        "Federal corporations must file annual returns with Corporations Canada.",
        "Non-resident directors can incorporate federally following recent Removal of Canadian Residency director requirements."
      ]
    },
    trademarks: {
      authority: "Canadian Intellectual Property Office (CIPO)",
      avgTime: "12 - 18 months",
      processDesc: "Filing through CIPO digital portal under Nice classification. Canada is a Madrid Protocol member country."
    },
    banking: {
      options: ["RBC Royal Bank", "TD Canada Trust", "BMO", "Wise Business Canada"],
      requirements: ["Articles of Incorporation", "CRA Business Number Document", "Two Forms of ID for all 25%+ shareholders"],
      recommendation: "Wise Business Canada for digital setup; RBC / TD for physical Canadian corporate banking."
    },
    packages: [
      {
        name: "Canada Federal Starter",
        price: "$349 CAD + govt fee",
        features: [
          "Federal Articles of Incorporation filing",
          "NUANS Name Search clearance report",
          "CRA Business Number (BN) procurement",
          "Digital Minute Book & Corporate Seals",
          "1st Year Canadian Registered Address"
        ]
      },
      {
        name: "Canada Business & Tax",
        price: "$699 CAD + govt fee",
        popular: true,
        features: [
          "Everything in Starter",
          "CRA GST/HST Account Registration",
          "Provincial registration (Ontario or BC)",
          "Wise Business Canada banking priority",
          "Custom Shareholders Agreement template",
          "1st Year Annual Federal Return submission"
        ]
      },
      {
        name: "Canada Enterprise Scale",
        price: "$1,399 CAD + govt fee",
        features: [
          "Everything in Business & Tax",
          "CIPO Trademark application (1 class)",
          "Physical RBC / TD Bank appointment facilitation",
          "Import/Export CRA Account setup",
          "1st Year T2 Corporate Tax Return preparation"
        ]
      }
    ],
    faqs: [
      { q: "Can non-Canadian residents form a Canadian company?", a: "Yes! Canada eliminated the Canadian director residency requirement for Federal corporations, making 100% foreign ownership fully permissible." },
      { q: "What is a NUANS report?", a: "NUANS is the official Canadian corporate name search database that ensures your proposed company name is unique across Canada." }
    ]
  },
  {
    slug: "pakistan",
    name: "Pakistan",
    flag: "🇵🇰",
    tagline: "SECP registration, NTN, sales tax, and FBR compliance.",
    heroDesc: "Incorporate a Private Limited Company with the SECP, obtain FBR NTN and Sales Tax Registration (STRN), open bank accounts, and claim 0% tax benefits on IT exports.",
    stats: [
      { key: "3 - 7 Days", label: "SECP Incorporation Time" },
      { key: "0% Income Tax", label: "For PSEB-registered IT & Software Exporters" },
      { key: "FBR NTN", label: "National Tax Number Registration" },
      { key: "SECP Compliant", label: "Official Digital Signature & User ID" }
    ],
    entities: [
      {
        name: "Private Limited Company (Pvt Ltd)",
        bestFor: "IT export firms, software houses, e-commerce, manufacturing, & agencies",
        taxOverview: "29% Corporate Tax rate. 0.25% - 1% reduced rate for IT exports registered with PSEB.",
        processingTime: "3 - 5 business days"
      },
      {
        name: "Single Member Company (SMC-Pvt Ltd)",
        bestFor: "Solo founders and single owners wanting corporate limited liability",
        taxOverview: "Same tax incentives as Pvt Ltd, structured for single ownership.",
        processingTime: "3 - 5 business days"
      }
    ],
    taxation: {
      authority: "Federal Board of Revenue (FBR)",
      rate: "29% Corporate Tax (Standard) | 0.25% Concessional Rate for IT Exporters | 18% Sales Tax",
      filingDeadline: "December 31 annually (FBR Income Tax Return)",
      keyPoints: [
        "FBR NTN (National Tax Number) is required immediately following SECP incorporation.",
        "IT/ITeS companies registered with PSEB enjoy 100% tax credit / 0.25% final tax status.",
        "Monthly Sales Tax returns (STRN) required for provincial revenue boards (PRA, SRB, ICT)."
      ]
    },
    trademarks: {
      authority: "Intellectual Property Organisation of Pakistan (IPO Pakistan)",
      avgTime: "6 - 9 months",
      processDesc: "TM-1 application filing, examination report, publication in Trademarks Journal, and registration certificate."
    },
    banking: {
      options: ["Meezan Bank (FCVA / Corporate)", "HBL Corporate Banking", "Bank Alfalah", "Faysal Bank"],
      requirements: ["SECP Certified True Copies (Form A, Form 29, Incorporation Cert)", "NTN Certificate", "Directors CNIC / Passport", "Company Board Resolution"],
      recommendation: "Meezan Bank Special Foreign Currency Account (FCVA) enables IT companies to retain 50% of foreign export revenue in USD."
    },
    packages: [
      {
        name: "Pakistan SECP Starter",
        price: "PKR 45,000",
        features: [
          "SECP Name Reservation",
          "Digital Signature Certificate (eServices)",
          "Articles & Memorandum of Association",
          "Official Certificate of Incorporation",
          "FBR Company NTN procurement"
        ]
      },
      {
        name: "Pakistan Business & IT Export Suite",
        price: "PKR 85,000",
        popular: true,
        features: [
          "Everything in Starter",
          "FBR Sales Tax Registration (STRN)",
          "PSEB (Pakistan Software Export Board) setup",
          "Meezan / HBL FCVA USD Bank Account support",
          "Provincial Sales Tax ID (PRA / SRB / ICT)",
          "1st Year SECP Form A & Form 29 annual filings"
        ]
      },
      {
        name: "Pakistan Enterprise & IPO Suite",
        price: "PKR 165,000",
        features: [
          "Everything in Business Suite",
          "IPO Pakistan Trademark Registration (1 class)",
          "WebOC (Customs Clearance) registration",
          "Chamber of Commerce (KCCI/LCCI) membership",
          "Dedicated Chartered Accountant consultant",
          "1st Year FBR Annual Income Tax Return preparation"
        ]
      }
    ],
    faqs: [
      { q: "What is the benefit of registering with PSEB for IT companies in Pakistan?", a: "PSEB registration provides a concessional tax rate of 0.25% on foreign IT export earnings, priority USD repatriation allowances, and government incentives." },
      { q: "Can overseas Pakistanis register a company in Pakistan remotely?", a: "Yes! Overseas Pakistanis can submit NICOP / Passport details and complete SECP digital signatures remotely." }
    ]
  }
];
