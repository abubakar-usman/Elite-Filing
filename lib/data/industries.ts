export interface IndustryItem {
  slug: string;
  image: string;
  title: string;
  shortDesc: string;
  heroDesc: string;
  iconName: string;
  recommendedEntities: { country: string; entity: string; why: string }[];
  keyChallenges: { title: string; desc: string }[];
  solutionsProvided: string[];
  caseStudy: {
    client: string;
    metrics: string;
    summary: string;
  };
}

export const industriesData: IndustryItem[] = [
  {
    slug: "ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    title: "Ecommerce & D2C Brands",
    shortDesc: "Structures for Amazon FBA, Shopify Payments, Walmart Marketplace, and cross-border DTC sellers.",
    heroDesc: "Navigate global sales tax compliance, resale certificates, merchant gateway approvals, and multi-currency payouts for Amazon, Walmart, Etsy, and custom Shopify storefronts.",
    iconName: "ShoppingBag",
    recommendedEntities: [
      { country: "United States", entity: "Wyoming LLC", why: "Zero state corporate tax, strict owner privacy, and accepted by Amazon & US suppliers." },
      { country: "United Kingdom", entity: "UK LTD", why: "Instant 24-hour setup, low UK threshold (£90k) before mandatory VAT, accepted by Stripe EU." },
      { country: "UAE", entity: "Dubai Free Zone (Meydan)", why: "Zero income tax on global e-commerce profits, direct access to GCC market." }
    ],
    keyChallenges: [
      { title: "Merchant Account Holds & Utility Verifications", desc: "Stripe and Amazon reject applications with incomplete business proof or non-compliant addresses." },
      { title: "US Economic Nexus Sales Tax", desc: "Selling across US states triggers sales tax filing obligations once thresholds ($100k) are reached." },
      { title: "High FX & Transfer Fees", desc: "Converting multi-currency store payouts into local currency eats into thin ecommerce margins." }
    ],
    solutionsProvided: [
      "Wyoming LLC & UK LTD fast-track incorporation",
      "Official US Resale Certificate procurement for wholesale inventory",
      "Stripe & PayPal Merchant Compliance Dossier",
      "Multi-Currency Wise & Mercury account setup",
      "Sales Tax & VAT calculation setup"
    ],
    caseStudy: {
      client: "Aura Home Living",
      metrics: "3.4x Revenue Growth & Zero Stripe Holds",
      summary: "Restructured a cross-border home decor brand into a Wyoming LLC + UK LTD dual structure, enabling Shopify Payments in USD and Amazon Europe selling with zero payout delays."
    }
  },
  {
    slug: "technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    title: "Technology & SaaS Startups",
    shortDesc: "Venture-ready corporate structures, IP assignment, equity pools, and global talent hiring.",
    heroDesc: "Scale your software or AI startup with Delaware C-Corporation holding structures, Y-Combinator compliant founder vesting agreements, USPTO trademark shields, and R&D tax optimization.",
    iconName: "Cpu",
    recommendedEntities: [
      { country: "United States", entity: "Delaware C-Corp", why: "The gold standard for US VCs, angel investors, Y Combinator, and stock option pools." },
      { country: "Pakistan", entity: "SECP Pvt Ltd (IT Export)", why: "0.25% tax rate on foreign software exports with 50% USD foreign currency bank retention." },
      { country: "United Kingdom", entity: "UK LTD (R&D Tax Scheme)", why: "Eligible for lucrative UK R&D tax credits and innovation grants." }
    ],
    keyChallenges: [
      { title: "VC Due Diligence Compliance", desc: "Investors require clear IP assignment agreements, clean capital tables, and proper state filings." },
      { title: "Cross-Border Contracting", desc: "Hiring overseas developers without creating unwanted permanent establishment tax risks." }
    ],
    solutionsProvided: [
      "Delaware C-Corp incorporation & 83(b) election guidance",
      "Founder vesting agreements & Stock Purchase Agreements",
      "USPTO trademark registration & IP transfer agreements",
      "PSEB IT Export registration for Pakistani dev hubs",
      "R&D Tax incentive consulting"
    ],
    caseStudy: {
      client: "DevFlow AI",
      metrics: "$1.8M Seed Round Raised",
      summary: "Structured DevFlow's Delaware C-Corp holding company owning a Pakistani dev subsidiary, enabling seamless VC fundraising in Silicon Valley while managing offshore engineering payroll."
    }
  },
  {
    slug: "professional-services",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    title: "Professional Services & Agencies",
    shortDesc: "Corporate structures for marketing agencies, IT consultants, design studios, and recruiters.",
    heroDesc: "Protect agency founders from client liability, issue professional multi-currency invoices, access top tier payment processors, and minimize global tax drag.",
    iconName: "Briefcase",
    recommendedEntities: [
      { country: "United States", entity: "Delaware / Wyoming LLC", why: "Pass-through tax protection and high credibility when pitching US enterprise clients." },
      { country: "United Kingdom", entity: "UK LTD", why: "Prestige for European agency pitch decks and HMRC tax deduction efficiency." },
      { country: "UAE", entity: "Dubai Mainland / Free Zone", why: "Zero tax on international agency retainers and easy high-net-worth client invoicing." }
    ],
    keyChallenges: [
      { title: "Client Trust & Enterprise Invoicing", desc: "US and European clients hesitate to pay individual freelancers or unverified offshore entities." },
      { title: "High Payment Processing Fees", desc: "Wire transfer fees and cross-border bank charges reduce agency profit margins." }
    ],
    solutionsProvided: [
      "Corporate entity setup with commercial business address",
      "Wise & Mercury multi-currency USD / EUR / GBP banking",
      "Stripe Billing & recurring retainer setup",
      "Client contract templates & NDA framework",
      "Annual tax compliance & expense optimization"
    ],
    caseStudy: {
      client: "Vanguard Media Agency",
      metrics: "45% Reduction in Tax & Transfer Overhead",
      summary: "Formed a UK LTD with Wise Business banking for a global marketing team, allowing them to bill US and European clients in local currencies seamlessly."
    }
  },
  {
    slug: "import-export",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    title: "Import / Export & International Trade",
    shortDesc: "Trade licenses, customs registrations, EORI, WebOC, and cross-border logistics support.",
    heroDesc: "Streamline international supply chains with commercial trade licenses, customs clearance registrations (WebOC, EORI, CRA Import/Export), and trade financing accounts.",
    iconName: "Globe2",
    recommendedEntities: [
      { country: "UAE", entity: "Dubai Mainland / JAFZA Free Zone", why: "Premier global logistics hub connecting Asia, Europe, and Africa with 0% customs re-export tax." },
      { country: "Pakistan", entity: "SECP Pvt Ltd + WebOC", why: "Direct customs clearance integration for textile, agricultural, and manufactured exports." },
      { country: "Canada", entity: "Canada Federal Inc + CRA Customs", why: "USMCA duty-free access across US and Mexican borders." }
    ],
    keyChallenges: [
      { title: "Customs Clearing Delays", desc: "Missing customs numbers (EORI, WebOC, CRA Import) stall shipments at ports, incurring demurrage fees." },
      { title: "Complex VAT / Tariff Compliance", desc: "Cross-border tariffs and import VAT require precise documentation and duty calculations." }
    ],
    solutionsProvided: [
      "Trade license procurement in key trading hubs (Dubai, London, Karachi)",
      "WebOC, EORI, and CRA Customs Account registration",
      "Letter of Credit (LC) banking support",
      "Chamber of Commerce certification",
      "Re-export tax optimization"
    ],
    caseStudy: {
      client: "SilkRoad Commodities",
      metrics: "Demurrage Reduced to 0 & 500k+ Tons Shipped",
      summary: "Secured a Dubai Free Zone trading license and Pakistan SECP WebOC clearance for an agricultural exporter, creating a seamless Dubai-Karachi trade corridor."
    }
  },
  {
    slug: "real-estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    title: "Real Estate & Holding Companies",
    shortDesc: "Asset protection, property holding LLCs, SPVs, and tax-efficient real estate ownership.",
    heroDesc: "Isolate real estate liabilities, optimize property income taxes, and structure multi-jurisdictional Special Purpose Vehicles (SPVs) for individual properties or investor syndicates.",
    iconName: "Building",
    recommendedEntities: [
      { country: "United States", entity: "Florida / Wyoming Series LLC", why: "Isolate individual properties into distinct legal cells without multiple state filing fees." },
      { country: "UAE", entity: "DIFC / ADGM SPV", why: "Recognized common law foundation holding Dubai property with zero estate/inheritance tax." },
      { country: "United Kingdom", entity: "UK Property SPV LTD", why: "Ring-fenced property debt and specialized mortgage lender acceptance." }
    ],
    keyChallenges: [
      { title: "Premises Liability Shielding", desc: "Holding real estate in personal names exposes personal wealth to tenant slip-and-fall lawsuits." },
      { title: "High Capital Gains & Transfer Taxes", desc: "Inappropriate structures incur unnecessary transfer taxes and double taxation upon sale." }
    ],
    solutionsProvided: [
      "Property-specific LLC and SPV formation",
      "DIFC / ADGM foundation structuring for UAE real estate",
      "Wyoming Series LLC cell setup for US rental portfolios",
      "Commercial real estate bank account opening",
      "Pass-through tax return filing"
    ],
    caseStudy: {
      client: "Aegis Capital Holdings",
      metrics: "$12M Property Portfolio Shielded",
      summary: "Structured a DIFC SPV holding company owning 8 residential real estate units in Dubai, eliminating personal inheritance exposure and streamlining property management."
    }
  },
  {
    slug: "financial-services",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    title: "Financial Services & Fintech",
    shortDesc: "Regulatory compliance, money services licensing, advisory entity setups, and fund SPVs.",
    heroDesc: "Build compliant foundations for fintech platforms, investment advisory practices, payment institutions, and cross-border wealth management firms.",
    iconName: "Landmark",
    recommendedEntities: [
      { country: "UAE", entity: "DIFC / ADGM Fintech License", why: "World-class financial center with regulatory sandbox (DFSA / FSRA) and English Common Law courts." },
      { country: "United Kingdom", entity: "UK LTD + FCA Authorised Representative", why: "Global financial credibility and access to UK open banking ecosystems." },
      { country: "United States", entity: "Delaware C-Corp / MSB Registration", why: "Required base for US FinTechs, FinCEN Money Services Business (MSB) registrations." }
    ],
    keyChallenges: [
      { title: "Complex Regulatory Licensing", desc: "Financial regulators demand strict AML/KYC policies, fit-and-proper director background audits, and capital adequacy." },
      { title: "Correspondent Bank Approvals", desc: "Traditional banks scrutinize financial firms heavily before granting corporate accounts." }
    ],
    solutionsProvided: [
      "ADGM / DIFC fintech entity formation",
      "FinCEN MSB & FinTRAC registration guidance",
      "AML / KYC policy documentation drafting",
      "Correspondent banking introduction dossier",
      "Regulatory sandbox compliance support"
    ],
    caseStudy: {
      client: "PayGlobal Technologies",
      metrics: "ADGM Innovation License Approved in 3 Weeks",
      summary: "Guided a multi-currency payment platform through ADGM innovation licensing, drafting AML policies and securing corporate banking with Wio Bank."
    }
  },
  {
    slug: "healthcare",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    title: "Healthcare & Life Sciences",
    shortDesc: "Corporate structures for digital health, biotech, and medical device companies.",
    heroDesc: "Navigate the complex regulatory environments of global healthcare with compliant holding structures, IP protection for medical innovations, and cross-border data privacy frameworks.",
    iconName: "Stethoscope",
    recommendedEntities: [
      { country: "United States", entity: "Delaware C-Corp", why: "Required for venture backing in biotech and FDA-regulated medical devices." },
      { country: "United Kingdom", entity: "UK LTD", why: "Access to NHS procurement frameworks and Life Sciences innovation grants." },
      { country: "UAE", entity: "Dubai Healthcare City (DHCC)", why: "Specialized free zone for medical technology and healthcare providers." }
    ],
    keyChallenges: [
      { title: "Stringent Data Privacy", desc: "Compliance with HIPAA (US), GDPR (EU), and local health data regulations is mandatory." },
      { title: "IP Protection", desc: "Medical patents and proprietary algorithms require robust, multi-jurisdictional IP strategies." }
    ],
    solutionsProvided: [
      "Regulatory mapping and compliance audits",
      "IP holding company structures",
      "Data privacy governance frameworks",
      "Cross-border R&D entity setups"
    ],
    caseStudy: {
      client: "MediSync Global",
      metrics: "Expanded to 3 Continents in 12 Months",
      summary: "Structured a global IP holding company to protect proprietary AI diagnostic algorithms while operating compliant subsidiaries in the US, UK, and UAE."
    }
  },
  {
    slug: "fintech",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop",
    title: "FinTech & Web3",
    shortDesc: "Regulatory compliance and entity formation for digital assets and financial platforms.",
    heroDesc: "Build compliant foundations for neo-banks, payment processors, and Web3 protocols in progressive regulatory jurisdictions.",
    iconName: "Bitcoin",
    recommendedEntities: [
      { country: "UAE", entity: "ADGM / VARA", why: "Progressive regulatory frameworks for digital assets and Web3 protocols." },
      { country: "United Kingdom", entity: "UK LTD (FCA)", why: "Global financial credibility and open banking access." },
      { country: "United States", entity: "Delaware C-Corp", why: "Standard for raising venture capital from Tier 1 FinTech funds." }
    ],
    keyChallenges: [
      { title: "Licensing Complexity", desc: "Navigating MSB, money transmitter, and digital asset licensing requirements." },
      { title: "Banking Access", desc: "Securing operational banking for high-risk FinTech and Web3 business models." }
    ],
    solutionsProvided: [
      "Regulatory sandbox applications",
      "VARA / ADGM licensing support",
      "AML / KYC policy drafting",
      "Correspondent banking introductions"
    ],
    caseStudy: {
      client: "BlockYield Protocol",
      metrics: "Secured VARA License in Record Time",
      summary: "Guided a decentralized finance protocol through the UAE's VARA regulatory framework, achieving full operational compliance."
    }
  },
  {
    slug: "logistics",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop",
    title: "Logistics & Supply Chain",
    shortDesc: "Cross-border entity structuring for global freight, 3PL, and maritime operations.",
    heroDesc: "Optimize international trade routes with strategic corporate hubs, tax-efficient transfer pricing, and customs clearance entity setups.",
    iconName: "Truck",
    recommendedEntities: [
      { country: "UAE", entity: "JAFZA / DWC", why: "Premier global logistics hubs connecting Asia, Europe, and Africa." },
      { country: "United Kingdom", entity: "UK LTD", why: "Strategic gateway for European and transatlantic freight operations." },
      { country: "Canada", entity: "Canada Federal Inc", why: "USMCA duty-free access across North American borders." }
    ],
    keyChallenges: [
      { title: "Transfer Pricing", desc: "Managing inter-company transactions across different tax jurisdictions." },
      { title: "Customs Compliance", desc: "Securing EORI, WebOC, and CRA import/export numbers to prevent delays." }
    ],
    solutionsProvided: [
      "Free zone logistics setups",
      "Transfer pricing advisory",
      "Customs registration support",
      "Cross-border joint venture structuring"
    ],
    caseStudy: {
      client: "TransGlobal Freight",
      metrics: "22% Reduction in Corporate Tax Drag",
      summary: "Restructured a regional 3PL provider with a UAE holding company, optimizing tax flows across their Asian and European subsidiaries."
    }
  },
  {
    slug: "manufacturing",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b2d701?q=80&w=2070&auto=format&fit=crop",
    title: "Manufacturing & Industrial",
    shortDesc: "Corporate advisory for industrial expansion, facility setups, and equipment leasing.",
    heroDesc: "Expand industrial capacity globally with strategic entity formation, capital equipment leasing structures, and operational governance.",
    iconName: "Factory",
    recommendedEntities: [
      { country: "United States", entity: "LLC / C-Corp", why: "Access to advanced manufacturing grants and federal incentives." },
      { country: "Pakistan", entity: "SECP Pvt Ltd", why: "Cost-effective manufacturing hubs with export incentives." },
      { country: "UAE", entity: "Industrial Free Zones", why: "Zero corporate tax on qualifying manufacturing income." }
    ],
    keyChallenges: [
      { title: "Capital Intensity", desc: "Structuring entities to efficiently hold and depreciate heavy capital assets." },
      { title: "Labor Compliance", desc: "Navigating complex employment laws and union regulations in new jurisdictions." }
    ],
    solutionsProvided: [
      "Equipment holding SPVs",
      "Industrial free zone setups",
      "Employment law compliance advisory",
      "Supply chain contract drafting"
    ],
    caseStudy: {
      client: "AeroParts Manufacturing",
      metrics: "Seamless Expansion to UAE",
      summary: "Established an industrial free zone entity in Dubai for an aerospace parts manufacturer, securing land lease and operational permits."
    }
  },
  {
    slug: "enterprise-technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    title: "Enterprise Technology",
    shortDesc: "Advisory for mature tech firms, AI integrators, and IT infrastructure providers.",
    heroDesc: "Scale your enterprise tech firm with robust M&A advisory, intellectual property holding structures, and digital transformation capabilities.",
    iconName: "Monitor",
    recommendedEntities: [
      { country: "United States", entity: "Delaware C-Corp", why: "The ultimate structure for public listings and major acquisitions." },
      { country: "United Kingdom", entity: "UK LTD", why: "Strong IP protection laws and tech-friendly tax incentives." },
      { country: "Canada", entity: "Canada Federal Inc", why: "Access to top-tier AI talent and SR&ED tax credits." }
    ],
    keyChallenges: [
      { title: "M&A Integration", desc: "Consolidating tech stacks, cultures, and legal entities post-acquisition." },
      { title: "Global IP Management", desc: "Optimizing the tax location of valuable software patents and algorithms." }
    ],
    solutionsProvided: [
      "IP Holding SPVs",
      "M&A Due Diligence",
      "Post-merger integration",
      "AI readiness audits (via Operant Labs)"
    ],
    caseStudy: {
      client: "Nexus Enterprise AI",
      metrics: "Successfully Acquired for $85M",
      summary: "Provided pre-acquisition restructuring to optimize Nexus's IP portfolio, resulting in a clean due diligence process for the acquiring firm."
    }
  },
  {
    slug: "enterprise-professional-services",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    title: "Global Professional Services",
    shortDesc: "Structures for international consulting firms, legal practices, and global agencies.",
    heroDesc: "Unify your global partnership with centralized holding structures, standardized operating procedures, and cross-border tax optimization.",
    iconName: "Building2",
    recommendedEntities: [
      { country: "United Kingdom", entity: "UK LLP", why: "Flexible partnership structure ideal for global consulting and legal firms." },
      { country: "United States", entity: "Delaware LLC", why: "Pass-through taxation and liability protection for US partners." },
      { country: "UAE", entity: "DIFC / ADGM", why: "Prestigious jurisdiction for regional consulting headquarters." }
    ],
    keyChallenges: [
      { title: "Partner Profit Distribution", desc: "Structuring tax-efficient profit repatriation for partners in different countries." },
      { title: "Brand Consistency", desc: "Maintaining standardized policies and service quality across international offices." }
    ],
    solutionsProvided: [
      "LLP and Partnership structuring",
      "Inter-company service agreements",
      "Global SOP development",
      "Transfer pricing strategies"
    ],
    caseStudy: {
      client: "Meridian Strategy Group",
      metrics: "Unified 4 Global Offices",
      summary: "Restructured a fragmented group of regional consulting firms into a unified UK LLP holding structure, streamlining global partner distributions."
    }
  }
];
