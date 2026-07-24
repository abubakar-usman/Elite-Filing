export interface ServiceItem {
  slug: string;
  image: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: "core" | "compliance" | "growth";
  features: { title: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  jurisdictionSupport: { country: string; flag: string; duration: string; priceStarting: string; note: string }[];
  packages: { name: string; price: string; period?: string; popular?: boolean; features: string[] }[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "company-formation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    title: "Company Formation & Registration",
    shortDesc: "LLCs, C-Corps, LTDs, Free Zone, and SECP entities across five major jurisdictions.",
    fullDesc: "Form your legal business entity seamlessly in the US, UK, UAE, Canada, or Pakistan. We handle name reservation, Articles of Organization/Incorporation, registered agent appointment, government submission, and delivery of official incorporation certificates.",
    iconName: "Building2",
    category: "core",
    features: [
      { title: "Name Availability & Reservation", desc: "Real-time verification against registry databases with name reservation shielding." },
      { title: "Articles of Organization / Incorporation", desc: "Custom drafting of operating agreements, articles, and bylaws tailored to your business structure." },
      { title: "Official Registry Submissions", desc: "Direct electronic filing with state departments, Companies House, SECP, or UAE Free Zone authorities." },
      { title: "Certificate Delivery", desc: "Digital copies delivered within 24-72 hours, with physical corporate binders sent upon request." }
    ],
    processSteps: [
      { step: "01", title: "Select Country & Entity", desc: "Choose your jurisdiction and target corporate structure (LLC, C-Corp, LTD, SECP Pvt Ltd)." },
      { step: "02", title: "Complete Quick Application", desc: "Provide founder details, passport copy, and proposed company names in our secure form." },
      { step: "03", title: "Registry Filing & Approval", desc: "Our in-country specialists file documents directly with government registries." },
      { step: "04", title: "Receive Corporate Documents", desc: "Obtain your official Certificate of Incorporation, Operating Agreement, and corporate kit." }
    ],
    jurisdictionSupport: [
      { country: "United States", flag: "🇺🇸", duration: "1 - 3 business days", priceStarting: "$199 + state fee", note: "Delaware, Wyoming, New Mexico, Florida, California" },
      { country: "United Kingdom", flag: "🇬🇧", duration: "24 - 48 hours", priceStarting: "£149", note: "Companies House registration & registered address included" },
      { country: "United Arab Emirates", flag: "🇦🇪", duration: "3 - 5 business days", priceStarting: "$1,850", note: "Meydan, IFZA, RAKEZ, and Dubai Mainland setups" },
      { country: "Canada", flag: "🇨🇦", duration: "2 - 4 business days", priceStarting: "$349 CAD", note: "Federal incorporation & Ontario/BC provincial registration" },
      { country: "Pakistan", flag: "🇵🇰", duration: "3 - 7 business days", priceStarting: "PKR 45,000", note: "SECP Pvt Ltd formation with digital signature setup" }
    ],
    packages: [
      {
        name: "Starter Formation",
        price: "$199",
        features: ["Name clearance search", "Articles filing", "Digital corporate kit", "1st Year Registered Agent", "Standard processing"]
      },
      {
        name: "Business Growth",
        price: "$399",
        popular: true,
        features: ["Everything in Starter", "EIN / Tax ID filing", "Custom Operating Agreement", "Expedited 24h filing", "Banking application support", "1 Year Compliance Shield"]
      },
      {
        name: "Global Founder Suite",
        price: "$799",
        features: ["Everything in Business", "Multi-country legal review", "Trademark preliminary search", "Stripe & Wise setup guidance", "Priority dedicated specialist", "Annual report filing included"]
      }
    ],
    faqs: [
      { q: "Can non-residents register a company in the US or UK?", a: "Yes! Non-residents can form an LLC or LTD 100% remotely without needing a physical visa or residency." },
      { q: "How long does company incorporation take?", a: "Filing times range from 24 hours in the UK to 1-3 business days in the US and UAE." },
      { q: "What documents are required?", a: "A valid passport copy, proof of address (utility bill or bank statement under 3 months old), and basic company details." }
    ]
  },
  {
    slug: "tax-compliance",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    title: "Tax Registration & Compliance",
    shortDesc: "EIN, NTN, VAT, Sales Tax, and annual filings managed by in-country tax specialists.",
    fullDesc: "Stay 100% tax compliant across international tax authorities including IRS (US), HMRC (UK), FTA (UAE), CRA (Canada), and FBR (Pakistan). We secure tax identification numbers, register sales tax / VAT, and file annual tax returns.",
    iconName: "Receipt",
    category: "compliance",
    features: [
      { title: "Tax ID Acquisition", desc: "IRS EIN for US, NTN for Pakistan, Tax Registration Numbers (TRN) for UAE and UK VAT." },
      { title: "Sales Tax & VAT Registration", desc: "State sales tax permissions, UK HMRC VAT registration, and Canadian GST/HST filing." },
      { title: "Annual Corporate Tax Returns", desc: "Preparation and electronic submission of IRS 1120/1065, HMRC CT600, and FBR annual filings." },
      { title: "Foreign Partner Compliance", desc: "IRS Form 5472, Form 1120 filing for 100% foreign-owned US LLCs." }
    ],
    processSteps: [
      { step: "01", title: "Tax Profile Audit", desc: "We review your company jurisdiction, revenue model, and target customer locations." },
      { step: "02", title: "Application Preparation", desc: "Specialists draft official tax authorization forms (SS-4 for IRS, VAT1 for UK, etc.)." },
      { step: "03", title: "Government Submission", desc: "Direct submission to national tax authorities with active follow-ups." },
      { step: "04", title: "Continuous Compliance", desc: "Automated tracking of tax return deadlines and quarterly payment notices." }
    ],
    jurisdictionSupport: [
      { country: "United States", flag: "🇺🇸", duration: "1 - 3 business days (with SSN) / 2 - 4 weeks (Non-US)", priceStarting: "$149", note: "EIN procurement & Form 5472/1120 filings" },
      { country: "United Kingdom", flag: "🇬🇧", duration: "3 - 5 business days", priceStarting: "£199", note: "VAT registration & HMRC CT600 filings" },
      { country: "United Arab Emirates", flag: "🇦🇪", duration: "5 - 7 business days", priceStarting: "$450", note: "Corporate Tax TRN registration & 9% return support" },
      { country: "Canada", flag: "🇨🇦", duration: "3 - 5 business days", priceStarting: "$299 CAD", note: "BN (Business Number) & CRA GST/HST account" },
      { country: "Pakistan", flag: "🇵🇰", duration: "2 - 4 business days", priceStarting: "PKR 25,000", note: "FBR NTN registration, Sales Tax (STRN), & Iris filings" }
    ],
    packages: [
      { name: "EIN / Tax ID Only", price: "$149", features: ["IRS SS-4 preparation", "Tax ID procurement", "Official confirmation letter", "Digital archive delivery"] },
      { name: "Annual Tax Filing", price: "$499", popular: true, features: ["Complete annual tax return", "State & federal compliance", "Deductions optimization", "Filing proof certificate"] },
      { name: "Full Tax Shield", price: "$899", features: ["Quarterly tax estimations", "Sales Tax / VAT filings", "Unlimited tax consultation", "Audit assistance support"] }
    ],
    faqs: [
      { q: "Do foreign LLC owners have to pay US income tax?", a: "Single-member US LLCs owned by non-residents are pass-through entities. US income tax applies only to US-sourced income, but Form 5472/1120 filing is mandatory regardless of revenue." },
      { q: "What is the UAE Corporate Tax rate?", a: "UAE introduced a 9% Corporate Tax rate on taxable net profits exceeding AED 375,000. Qualifying Free Zone entities may enjoy 0% rates under specific criteria." }
    ]
  },
  {
    slug: "trademark-ip",
    image: "https://images.unsplash.com/photo-1768839723311-3a05ab496804?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Trademark & Intellectual Property",
    shortDesc: "Comprehensive trademark search, registration, and monitoring across global IP offices.",
    fullDesc: "Protect your brand name, logo, and slogan from infringement. Our IP attorneys handle comprehensive trademark searches, classification drafting, official submissions to USPTO, UKIPO, UAE Ministry of Economy, CIPO, and IPO Pakistan, and manage office actions.",
    iconName: "Shield",
    category: "growth",
    features: [
      { title: "Comprehensive IP Clearance Search", desc: "Multi-database search across USPTO, WIPO, and international registries to prevent conflict." },
      { title: "Nice Classification Filing", desc: "Expert class assignment covering product & service categories for maximum coverage." },
      { title: "Office Action Defense", desc: "Responses drafted by experienced IP attorneys to overcome government refusals." },
      { title: "Global Brand Monitoring", desc: "Continuous monitoring for confusingly similar mark applications worldwide." }
    ],
    processSteps: [
      { step: "01", title: "Trademark Search", desc: "In-depth search across global database registers to identify potential conflicts." },
      { step: "02", title: "Application Preparation", desc: "Drafting trademark application with precise goods/services descriptions under Nice Classes." },
      { step: "03", title: "Government Submission", desc: "Direct filing with target country trademark authority (USPTO, UKIPO, etc.)." },
      { step: "04", title: "Registration Certificate", desc: "Management of publication period through to final registration certificate issuance." }
    ],
    jurisdictionSupport: [
      { country: "United States (USPTO)", flag: "🇺🇸", duration: "8 - 10 months", priceStarting: "$350 + govt fee", note: "Federal USPTO filing & TEAS Plus support" },
      { country: "United Kingdom (UKIPO)", flag: "🇬🇧", duration: "3 - 4 months", priceStarting: "£299 + govt fee", note: "UKIPO search & application filing" },
      { country: "United Arab Emirates", flag: "🇦🇪", duration: "4 - 6 months", priceStarting: "$1,950", note: "Ministry of Economy registration & gazette publishing" },
      { country: "Canada (CIPO)", flag: "🇨🇦", duration: "12 - 18 months", priceStarting: "$499 CAD + govt fee", note: "CIPO trademark filing & status tracking" },
      { country: "Pakistan (IPO)", flag: "🇵🇰", duration: "6 - 9 months", priceStarting: "PKR 35,000", note: "IPO Pakistan application, journal publication, & TM registration" }
    ],
    packages: [
      { name: "Clearance Search Only", price: "$199", features: ["Full trademark database scan", "Attorney risk assessment report", "Class recommendation", "Conflict probability score"] },
      { name: "Standard Trademark Registration", price: "$499", popular: true, features: ["Everything in Clearance Search", "Official application drafting", "Single class submission", "Status tracking dashboard", "Registration certificate delivery"] },
      { name: "Brand Shield Defense", price: "$899", features: ["Everything in Standard", "Up to 3 classes", "Office action response coverage", "1 Year global brand monitoring", "Cease & desist template suite"] }
    ],
    faqs: [
      { q: "Is a US trademark valid worldwide?", a: "No, trademarks are territorial. A USPTO trademark protects your mark within the US. For international protection, we file Madrid Protocol or direct country applications." },
      { q: "What happens if my trademark gets rejected?", a: "Our packages include initial attorney responses to non-final office actions to resolve minor examiner objections." }
    ]
  },
  {
    slug: "registered-agent",
    image: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=2070&auto=format&fit=crop",
    title: "Registered Agent & Virtual Address",
    shortDesc: "Maintain a professional legal presence and compliance shield without renting physical offices.",
    fullDesc: "Fulfill legal state requirements with reliable Registered Agent services and commercial virtual addresses in key states like Delaware, Wyoming, London, Dubai, Toronto, and Karachi. Receive official mail scanning, legal service notices, and annual renewal compliance reminders.",
    iconName: "MapPin",
    category: "core",
    features: [
      { title: "State Compliance Legal Presence", desc: "Official registered agent address in Delaware, Wyoming, London, or Dubai to accept process service." },
      { title: "Same-Day Mail Digital Scanning", desc: "Official government mail and legal notices scanned and uploaded to your secure dashboard immediately." },
      { title: "Privacy Protection Shield", desc: "Keep your home address off public state registry records to prevent spam and privacy exposure." },
      { title: "Annual Report Reminders", desc: "Automated alerts for mandatory annual report deadlines to prevent state administrative dissolution." }
    ],
    processSteps: [
      { step: "01", title: "Select Address Location", desc: "Choose your preferred state or international address location (e.g. Delaware, Wyoming, London, Dubai)." },
      { step: "02", title: "Agent Authorization", desc: "We issue official consent forms for appointment as registered agent." },
      { step: "03", title: "State Registry Update", desc: "We update official Secretary of State or registry records with our legal address." },
      { step: "04", title: "Dashboard Mail Management", desc: "Access all scanned legal documents instantly via your digital dashboard." }
    ],
    jurisdictionSupport: [
      { country: "United States", flag: "🇺🇸", duration: "Instant setup", priceStarting: "$149 / year", note: "Delaware, Wyoming, Florida, California Registered Agent & address" },
      { country: "United Kingdom", flag: "🇬🇧", duration: "Instant setup", priceStarting: "£119 / year", note: "Central London Registered Office & Service Address" },
      { country: "United Arab Emirates", flag: "🇦🇪", duration: "1 business day", priceStarting: "$650 / year", note: "Virtual desk & Ejari compliance address" },
      { country: "Canada", flag: "🇨🇦", duration: "1 business day", priceStarting: "$249 CAD / year", note: "Ontario/BC legal service address" },
      { country: "Pakistan", flag: "🇵🇰", duration: "1 business day", priceStarting: "PKR 25,000 / year", note: "Karachi / Islamabad registered business address" }
    ],
    packages: [
      { name: "Annual Agent Only", price: "$149/yr", features: ["Registered Agent address", "Official legal mail scanning", "Annual report alerts", "Privacy shielding"] },
      { name: "Agent + Mail Forwarding", price: "$299/yr", popular: true, features: ["Everything in Agent Only", "Commercial address for website/stripe", "Up to 30 physical mail scans/mo", "Physical mail forwarding on demand"] },
      { name: "Virtual Office Suite", price: "$599/yr", features: ["Everything in Mail Forwarding", "Dedicated phone number & voicemail", "Meeting room access hours (Dubai/London)", "Certificate of Good Standing filing"] }
    ],
    faqs: [
      { q: "Why do I need a Registered Agent?", a: "States mandate that every business entity must maintain a registered agent with a physical street address in the formation state to receive legal notices." },
      { q: "Can I use the Registered Agent address as my bank mailing address?", a: "Yes, our commercial Virtual Office plans provide address documentation acceptable for bank verifications." }
    ]
  },
  {
    slug: "banking-payments",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop",
    title: "Business Banking & Payment Gateways",
    shortDesc: "Seamless setup support for multi-currency accounts, Stripe, PayPal, Wise, and Mercury.",
    fullDesc: "Unlock global corporate banking and payment gateway capabilities. We assist international founders in opening multi-currency business bank accounts (Mercury, Relay Financial, Wise Business, Payoneer) and integrating Stripe and PayPal payment gateways smoothly.",
    iconName: "Landmark",
    category: "growth",
    features: [
      { title: "US Digital Banking Applications", desc: "Priority approval assistance for Mercury Bank, Relay Financial, and Brex accounts." },
      { title: "Multi-Currency Wise & Payoneer Setup", desc: "Collect payments in USD, EUR, GBP, CAD, and AED with transparent FX rates." },
      { title: "Stripe & PayPal Merchant Onboarding", desc: "Step-by-step verification compliance support for 100% payout stability." },
      { title: "Banking Documentation Preparation", desc: "Drafting custom business description memos, utility proofs, and compliance dossiers." }
    ],
    processSteps: [
      { step: "01", title: "Banking Readiness Review", desc: "Audit of incorporation certificates, EIN/VAT documents, and company website compliance." },
      { step: "02", title: "Dossier Preparation", desc: "Drafting corporate ownership structures and owner proof documents tailored to bank requirements." },
      { step: "03", title: "Application Submission", desc: "Guided submission to banking partners (Mercury, Wise Business, local banks)." },
      { step: "04", title: "Gateway Integration", desc: "Stripe/PayPal setup verification and live payment collection test." }
    ],
    jurisdictionSupport: [
      { country: "United States Banking", flag: "🇺🇸", duration: "3 - 5 business days", priceStarting: "$249", note: "Mercury, Relay, Brex & Stripe onboarding support" },
      { country: "United Kingdom Banking", flag: "🇬🇧", duration: "2 - 4 business days", priceStarting: "£199", note: "Wise Business, Revolut, Airwallex & UK PayPal" },
      { country: "UAE Commercial Banking", flag: "🇦🇪", duration: "2 - 3 weeks", priceStarting: "$950", note: "Wio Bank, Mashreq Neo, Emirates NBD physical account support" },
      { country: "Canada Banking", flag: "🇨🇦", duration: "3 - 5 business days", priceStarting: "$349 CAD", note: "Wise Business & RBC / TD corporate bank introduction" },
      { country: "Pakistan Banking", flag: "🇵🇰", duration: "5 - 7 business days", priceStarting: "PKR 30,000", note: "Meezan, HBL Special Foreign Currency Account (FCVA) setup" }
    ],
    packages: [
      { name: "Digital Banking Support", price: "$249", features: ["Mercury / Wise application prep", "Utility & resolution documents", "Bank review follow-up", "Approval guarantee policy"] },
      { name: "Banking + Stripe Gateway", price: "$449", popular: true, features: ["Everything in Digital Banking", "Stripe merchant account setup", "Website compliance audit", "Payment gateway test transaction"] },
      { name: "Full Financial Setup", price: "$899", features: ["Everything in Banking + Stripe", "PayPal Business verification", "Multi-currency payout configuration", "Accounting integration setup"] }
    ],
    faqs: [
      { q: "Can non-US founders open a US bank account remotely?", a: "Yes, via digital banking partners like Mercury and Relay, non-US residents can open US FDIC-insured business bank accounts without traveling." },
      { q: "What causes Stripe account suspensions and how do you prevent them?", a: "Suspensions occur due to mismatched business details, unsupported business categories, or missing compliance terms. We conduct pre-launch compliance checks to prevent flags." }
    ]
  },
  {
    slug: "accounting",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    title: "Accounting & Bookkeeping",
    shortDesc: "Dedicated monthly bookkeeping, financial statements, and QuickBooks / Xero management.",
    fullDesc: "Keep your company's financials crystal clear and tax-ready year-round. Our certified accountants manage monthly reconciliation, income statements, balance sheets, payroll processing, and QuickBooks / Xero integrations so you never face end-of-year tax panic.",
    iconName: "Calculator",
    category: "compliance",
    features: [
      { title: "Monthly Transaction Reconciliation", desc: "Automated statement imports and transaction categorizations in Xero or QuickBooks." },
      { title: "Financial Reporting Package", desc: "Monthly Profit & Loss (P&L), Balance Sheet, and Cash Flow Statements sent to owners." },
      { title: "Accounts Payable & Receivable", desc: "Invoice management, vendor payouts, and client payment tracking." },
      { title: "Year-End Tax Preparation Package", desc: "Clean financial binder prepared directly for annual tax filing submissions." }
    ],
    processSteps: [
      { step: "01", title: "Software Onboarding", desc: "Connecting your business bank accounts and payment gateways to Xero or QuickBooks." },
      { step: "02", title: "Historical Catch-up", desc: "Cleaning up past uncategorized transactions to bring your ledger up to date." },
      { step: "03", title: "Monthly Reconciliation", desc: "Categorizing expenses and reconciling bank balances at the end of every month." },
      { step: "04", title: "Executive Report Delivery", desc: "Receiving your monthly financial snapshot and scheduling optional review calls." }
    ],
    jurisdictionSupport: [
      { country: "United States", flag: "🇺🇸", duration: "Ongoing monthly", priceStarting: "$199 / mo", note: "GAAP compliant bookkeeping for LLCs & C-Corps" },
      { country: "United Kingdom", flag: "🇬🇧", duration: "Ongoing monthly", priceStarting: "£149 / mo", note: "FRS 102 bookkeeping & HMRC MTD VAT returns" },
      { country: "United Arab Emirates", flag: "🇦🇪", duration: "Ongoing monthly", priceStarting: "$299 / mo", note: "FTA compliant bookkeeping & Corporate Tax record keeping" },
      { country: "Canada", flag: "🇨🇦", duration: "Ongoing monthly", priceStarting: "$249 CAD / mo", note: "ASPE compliant accounting & GST/HST calculations" },
      { country: "Pakistan", flag: "🇵🇰", duration: "Ongoing monthly", priceStarting: "PKR 30,000 / mo", note: "FBR compliant bookkeeping & monthly withholding tax statements" }
    ],
    packages: [
      { name: "Starter Bookkeeping", price: "$199/mo", features: ["Up to 50 transactions/mo", "Single bank account", "Monthly P&L statement", "Xero / QuickBooks subscription included"] },
      { name: "Growth Bookkeeping", price: "$349/mo", popular: true, features: ["Up to 200 transactions/mo", "Up to 3 bank accounts", "Monthly P&L & Balance Sheet", "Sales tax / VAT reconciliation", "Year-end tax ready file"] },
      { name: "CFO Advisory & Accounting", price: "$699/mo", features: ["Unlimited transactions", "Multi-currency accounting", "Monthly CFO strategy call", "Budgeting & cash flow forecasting", "Dedicated Senior Accountant"] }
    ],
    faqs: [
      { q: "Which accounting software do you use?", a: "We specialize in Xero and QuickBooks Online, but can also work with Wave or custom ERP systems." },
      { q: "What if my books are months behind?", a: "We offer catch-up bookkeeping packages to bring past months or years up to compliance quickly." }
    ]
  },
  {
    slug: "ecommerce-setup",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    title: "Ecommerce Business Setup",
    shortDesc: "End-to-end entity, tax, and merchant configuration for Amazon, Shopify, Walmart & Etsy.",
    fullDesc: "Launch your cross-border ecommerce empire with full structural compliance. We handle corporate entity creation, EIN/VAT, resale certificates, utility bill verifications, and merchant account registrations for Amazon FBA, Shopify Payments, Walmart Marketplace, and Etsy.",
    iconName: "ShoppingBag",
    category: "growth",
    features: [
      { title: "Amazon Seller Central Verification", desc: "Document preparation and utility bill verification for 100% approval rates." },
      { title: "Shopify Payments & Stripe Setup", desc: "US/UK company configuration enabling low-fee payment collection globally." },
      { title: "US State Resale Certificates", desc: "Exemption certificates allowing tax-free inventory purchasing from US wholesalers." },
      { title: "Walmart & Etsy Seller Onboarding", desc: "Complete seller account registration and tax profile verification." }
    ],
    processSteps: [
      { step: "01", title: "Structure Blueprint", desc: "Selecting the optimal entity jurisdiction (Wyoming vs Delaware vs UK LTD) for your store." },
      { step: "02", title: "Formation & Resale License", desc: "Filing entity, securing tax ID, and obtaining state resale certificates for inventory." },
      { step: "03", title: "Banking & Payment Setup", desc: "Opening Mercury/Wise business accounts and configuring payment processors." },
      { step: "04", title: "Seller Account Approval", desc: "Submitting verified identity dossiers for Amazon, Walmart, or Shopify Payments." }
    ],
    jurisdictionSupport: [
      { country: "United States (Wyoming/Delaware)", flag: "🇺🇸", duration: "3 - 5 business days", priceStarting: "$399", note: "Optimal for Amazon US, Shopify Payments & Walmart" },
      { country: "United Kingdom", flag: "🇬🇧", duration: "2 - 4 business days", priceStarting: "£299", note: "Ideal for Amazon UK/EU, Stripe & VAT registration" },
      { country: "United Arab Emirates", flag: "🇦🇪", duration: "5 - 7 business days", priceStarting: "$1,950", note: "Zero personal income tax setup for Amazon UAE & Noon" }
    ],
    packages: [
      { name: "Amazon Launch Kit", price: "$499", features: ["US LLC or UK LTD formation", "EIN / Tax ID procurement", "1st Year Registered Agent", "Utility verification guidance", "Amazon Seller Central dossier"] },
      { name: "Shopify Global Suite", price: "$699", popular: true, features: ["Everything in Amazon Launch", "Shopify Payments integration", "State Resale Certificate", "Wise Multi-Currency setup", "Trademark preliminary check"] },
      { name: "Ecom Enterprise Dominance", price: "$1,299", features: ["Everything in Shopify Suite", "Full Trademark application", "UK VAT + US Sales Tax registration", "Dedicated ecommerce account manager", "Custom invoice templates"] }
    ],
    faqs: [
      { q: "Why is Wyoming popular for Amazon sellers?", a: "Wyoming has zero state corporate income tax, low annual renewal fees ($62), and strong privacy protections." },
      { q: "What is a US Resale Certificate?", a: "A resale certificate allows ecommerce merchants to purchase inventory from US manufacturers without paying state sales tax." }
    ]
  },
  {
    slug: "growth-marketing",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
    title: "Growth & Marketing Add-Ons",
    shortDesc: "High-converting web development, SEO, corporate branding, and lead generation.",
    fullDesc: "Accelerate your newly formed business with high-impact digital marketing assets. We build premium, responsive web applications, establish professional corporate visual identities, optimize for search engines (SEO), and execute multi-channel growth campaigns.",
    iconName: "Sparkles",
    category: "growth",
    features: [
      { title: "High-Converting Web Architecture", desc: "Custom Next.js / React websites with glassmorphism design and sub-second page loads." },
      { title: "Corporate Brand Identity Suite", desc: "Professional logo design, brand style guidelines, business cards, and pitch decks." },
      { title: "Technical & Content SEO", desc: "Keyword research, meta structure, schema markup, and content strategy for rapid rank." },
      { title: "Lead Generation & Outreach", desc: "B2B LinkedIn outreach infrastructure and cold email setup with custom domains." }
    ],
    processSteps: [
      { step: "01", title: "Strategy & Positioning", desc: "Defining your unique value proposition, target buyer persona, and brand aesthetic." },
      { step: "02", title: "Design & Copywriting", desc: "Crafting modern layouts, micro-animations, and compelling sales messaging." },
      { step: "03", title: "Development & SEO", desc: "Building responsive web pages, configuring meta tags, and connecting analytics." },
      { step: "04", title: "Launch & Optimization", desc: "Deploying website live, setting up lead forms, and monitoring user conversions." }
    ],
    jurisdictionSupport: [
      { country: "Global Coverage", flag: "🌐", duration: "1 - 3 weeks", priceStarting: "$799", note: "Tailored for US, UK, UAE, Canadian, and Pakistani markets" }
    ],
    packages: [
      { name: "Brand Starter Kit", price: "$499", features: ["Professional Logo suite", "Brand style guide", "Social media kit", "Business card design templates"] },
      { name: "Corporate Launch Website", price: "$1,199", popular: true, features: ["Custom 5-page responsive website", "Mobile-optimized Next.js architecture", "On-page SEO configuration", "Contact form & CRM integration", "Fast cloud hosting deployment"] },
      { name: "Full Growth Accelerator", price: "$2,499", features: ["Everything in Corporate Website", "Full Brand Identity Suite", "Blog / Knowledge Center engine", "B2B Lead Generation campaign setup", "Monthly SEO monitoring (3 months)"] }
    ],
    faqs: [
      { q: "Why should I get website development with incorporation?", a: "Having a live, professional corporate website significantly increases bank and merchant gateway (Stripe) approval rates." },
      { q: "How long does website delivery take?", a: "Standard corporate launch websites are delivered within 7 to 10 business days." }
    ]
  },
  {
    slug: "business-consultancy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    title: "Business Consultancy & Strategy",
    shortDesc: "Cross-border strategy, corporate restructuring, pitch decks, and operational advisory.",
    fullDesc: "Navigate complex global expansion with experienced corporate advisors. We provide strategic consulting on corporate structuring, holding company setups, investor pitch decks, international tax optimization, and operational scale across global markets.",
    iconName: "Briefcase",
    category: "core",
    features: [
      { title: "Cross-Border Tax Structuring", desc: "Designing holding-subsidiary legal structures between US/UK and target operating entities." },
      { title: "Investor Pitch Decks & Valuation", desc: "Institutional grade financial models, unit economics forecasting, and pitch presentations." },
      { title: "Corporate Governance & Contracts", desc: "Custom founder vesting agreements, NDA templates, and advisory board agreements." },
      { title: "Global Expansion Strategy", desc: "Market entry feasibility studies for expanding into UAE, US, UK, or Asian markets." }
    ],
    processSteps: [
      { step: "01", title: "Discovery Call", desc: "Deep-dive session to analyze your business model, current entity structure, and growth goals." },
      { step: "02", title: "Strategic Roadmap", desc: "Delivery of custom corporate blueprint and step-by-step action roadmap." },
      { step: "03", title: "Execution Advisory", desc: "Hands-on implementation oversight working alongside legal and accounting teams." },
      { step: "04", title: "Quarterly Strategy Reviews", desc: "Ongoing executive advisory check-ins to recalibrate tax and operational strategies." }
    ],
    jurisdictionSupport: [
      { country: "Global Markets", flag: "🌍", duration: "Custom timeline", priceStarting: "$499 / session", note: "Cross-border advisory covering US, UK, UAE, Canada, and Pakistan" }
    ],
    packages: [
      { name: "Executive Consultation", price: "$299", features: ["60-minute 1-on-1 strategy call", "Jurisdiction selection report", "Follow-up execution checklist", "Recording & transcript provided"] },
      { name: "Corporate Structuring Sprint", price: "$999", popular: true, features: ["Full corporate structure blueprint", "Holding vs operating company design", "Inter-company agreement templates", "2 strategy sessions + priority chat"] },
      { name: "Fractional Corporate Advisor", price: "$1,999/mo", features: ["Ongoing strategic executive support", "Monthly board presentation prep", "Investor pitch review", "Direct WhatsApp access to senior partner"] }
    ],
    faqs: [
      { q: "Who conducts the consultancy sessions?", a: "Consultations are conducted by senior corporate strategists and legal/compliance specialists with 10+ years of international experience." },
      { q: "Can you help structure a US Holding company with overseas subsidiaries?", a: "Yes, we frequently design Delaware C-Corp holding structures owning UK, UAE, or Pakistani operational subsidiaries." }
    ]
  },
  {
    slug: "corporate-advisory",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    title: "Corporate Advisory",
    shortDesc: "Strategic guidance for international expansion, holding structures, and corporate governance.",
    fullDesc: "Our Corporate Advisory practice serves as a long-term strategic partner for global enterprises. We design optimal holding company structures, develop robust corporate governance frameworks, and execute market entry strategies for private equity firms, venture-backed startups, and multinational corporations.",
    iconName: "Network",
    category: "core",
    features: [
      { title: "International Expansion Strategy", desc: "Comprehensive risk assessments and feasibility modeling for entering new international jurisdictions." },
      { title: "Holding Company Structures", desc: "Tax-optimized holding and subsidiary relationships designed for maximum asset protection." },
      { title: "Corporate Governance", desc: "Implementation of board charters, shareholder agreements, and compliance oversight frameworks." },
      { title: "Market Entry Strategy", desc: "End-to-end strategic planning including competitive analysis, regulatory mapping, and launch execution." }
    ],
    processSteps: [
      { step: "01", title: "Strategic Audit", desc: "Deep analysis of your current corporate structure and long-term expansion objectives." },
      { step: "02", title: "Blueprint Design", desc: "Development of a customized advisory roadmap detailing restructuring and compliance requirements." },
      { step: "03", title: "Execution & Restructuring", desc: "Coordinated implementation of new legal entities, governance policies, and financial flows." },
      { step: "04", title: "Ongoing Board Advisory", desc: "Continuous executive support to adapt the structure as market conditions evolve." }
    ],
    jurisdictionSupport: [
      { country: "Global Coverage", flag: "🌍", duration: "Custom timeline", priceStarting: "Custom Quote", note: "Multi-jurisdictional advisory across US, UK, UAE, EU, and APAC." }
    ],
    packages: [
      { name: "Market Entry Assessment", price: "$2,500", features: ["Jurisdictional analysis", "Regulatory feasibility report", "Tax implication overview", "Executive briefing session"] },
      { name: "Corporate Restructuring", price: "Custom", popular: true, features: ["Holding/Subsidiary design", "Asset transfer strategy", "Governance framework creation", "Cross-border compliance alignment"] }
    ],
    faqs: [
      { q: "Who is the Corporate Advisory service for?", a: "This is designed for established businesses, high-net-worth founders, and institutional investors looking to optimize their global corporate architecture." }
    ]
  },
  {
    slug: "business-solutions",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    title: "Business Solutions",
    shortDesc: "Operational excellence through SOP development, org design, and process optimization.",
    fullDesc: "We transform how your company operates from the inside out. Our Business Solutions practice focuses on developing scalable operating manuals, refining organizational design, and optimizing internal processes to ensure your business runs efficiently as it scales globally.",
    iconName: "Workflow",
    category: "growth",
    features: [
      { title: "Business Model Design", desc: "Refining revenue streams, cost structures, and value propositions for new market entries." },
      { title: "Operating Manuals & SOPs", desc: "Comprehensive documentation of core business processes to ensure consistency and quality." },
      { title: "Corporate Policies", desc: "Drafting internal policies covering HR, IT security, and operational compliance." },
      { title: "Organizational Design", desc: "Structuring reporting lines, departmental functions, and KPIs for maximum efficiency." }
    ],
    processSteps: [
      { step: "01", title: "Operational Assessment", desc: "Reviewing existing workflows, bottlenecks, and structural inefficiencies." },
      { step: "02", title: "Process Mapping", desc: "Visualizing and redesigning core business processes for scale and automation." },
      { step: "03", title: "Documentation Synthesis", desc: "Drafting detailed Standard Operating Procedures (SOPs) and corporate manuals." },
      { step: "04", title: "Implementation & Training", desc: "Rolling out new policies and ensuring team alignment across all departments." }
    ],
    jurisdictionSupport: [
      { country: "Global Organizations", flag: "🏢", duration: "4 - 8 weeks", priceStarting: "$5,000+", note: "Applicable to remote teams and multi-national offices." }
    ],
    packages: [
      { name: "Process Audit", price: "$3,000", features: ["Current state assessment", "Inefficiency identification", "High-level optimization roadmap"] },
      { name: "Comprehensive SOP Build", price: "Custom", popular: true, features: ["End-to-end process mapping", "Detailed operating manual creation", "Policy documentation", "Implementation support"] }
    ],
    faqs: [
      { q: "Do you help implement the SOPs?", a: "Yes, our team can assist with the rollout phase, including team training and process compliance tracking." }
    ]
  },
  {
    slug: "regulatory-compliance",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    title: "Regulatory & Compliance",
    shortDesc: "Enterprise-grade compliance audits, risk mitigation, and international regulatory strategy.",
    fullDesc: "Navigate complex international regulations with confidence. We provide ongoing regulatory monitoring, compliance audits, and risk mitigation strategies to ensure your operations adhere to local laws, financial regulations, and data privacy standards across all operating jurisdictions.",
    iconName: "ShieldCheck",
    category: "compliance",
    features: [
      { title: "Global Compliance Audits", desc: "Comprehensive reviews of your corporate activities against local regulatory frameworks." },
      { title: "Data Privacy & Security", desc: "Structuring operations to comply with GDPR, CCPA, and emerging global data laws." },
      { title: "Financial Regulatory Strategy", desc: "Advisory for FinTechs and regulated entities on licensing and reporting requirements." },
      { title: "Risk Mitigation Planning", desc: "Identifying and hedging against corporate liability and operational risks." }
    ],
    processSteps: [
      { step: "01", title: "Regulatory Mapping", desc: "Identifying all applicable laws and regulations based on your industry and locations." },
      { step: "02", title: "Gap Analysis", desc: "Comparing current operations against required compliance standards." },
      { step: "03", title: "Remediation Strategy", desc: "Developing a prioritized action plan to address vulnerabilities and secure licenses." },
      { step: "04", title: "Continuous Monitoring", desc: "Ongoing surveillance of regulatory changes to maintain proactive compliance." }
    ],
    jurisdictionSupport: [
      { country: "Multi-Jurisdictional", flag: "⚖️", duration: "Ongoing", priceStarting: "Retainer", note: "Continuous compliance management for complex cross-border entities." }
    ],
    packages: [
      { name: "Compliance Gap Analysis", price: "$4,500", features: ["Regulatory mapping", "Current state audit", "Vulnerability report", "Executive recommendations"] },
      { name: "Managed Compliance Office", price: "Custom", popular: true, features: ["Dedicated compliance officer", "Quarterly audits", "Policy updates", "Regulatory liaison services"] }
    ],
    faqs: [
      { q: "Can you assist with FinTech licensing?", a: "Yes, we specialize in regulatory mapping and application support for financial licenses in jurisdictions like the UK (FCA) and UAE (ADGM/DIFC)." }
    ]
  },
  {
    slug: "digital-transformation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    title: "Digital Transformation",
    shortDesc: "Modernizing legacy systems through AI integration and operational automation.",
    fullDesc: "Future-proof your enterprise through strategic digital transformation. In partnership with Operant Labs, we advise on AI readiness, system automation, and digital infrastructure modernization to dramatically increase operational efficiency and data leverage.",
    iconName: "Cpu",
    category: "growth",
    features: [
      { title: "AI Readiness Assessment", desc: "Evaluating current data structures and processes for artificial intelligence integration." },
      { title: "Workflow Automation", desc: "Implementing RPA and automated sequences to eliminate repetitive manual tasks." },
      { title: "Legacy System Modernization", desc: "Strategic planning for migrating outdated infrastructure to modern cloud environments." },
      { title: "Data Governance", desc: "Establishing secure, compliant data pipelines to support advanced analytics." }
    ],
    processSteps: [
      { step: "01", title: "Digital Audit", desc: "Assessing current technology stacks, data silos, and manual workflows." },
      { step: "02", title: "Transformation Roadmap", desc: "Designing a phased approach to implementing new digital tools and AI models." },
      { step: "03", title: "Vendor Selection & Oversight", desc: "Assisting in the selection and management of technical implementation partners." },
      { step: "04", title: "Adoption & Change Management", desc: "Ensuring team adoption and process alignment with new digital capabilities." }
    ],
    jurisdictionSupport: [
      { country: "Global Infrastructure", flag: "☁️", duration: "3 - 6 months", priceStarting: "Custom", note: "Transformation advisory for mid-market and enterprise clients." }
    ],
    packages: [
      { name: "Digital Readiness Audit", price: "$5,000", features: ["Tech stack review", "Automation opportunity map", "AI feasibility study"] },
      { name: "Transformation Advisory", price: "Custom", popular: true, features: ["End-to-end digital strategy", "Implementation oversight", "Change management support", "Operant Labs technical integration"] }
    ],
    faqs: [
      { q: "Do you build the software yourselves?", a: "We provide the strategic advisory and architecture. For deep technical execution and AI development, we seamlessly integrate with our engineering partner, Operant Labs." }
    ]
  },
  {
    slug: "growth-expansion",
    image: "https://images.unsplash.com/photo-1768839724256-28cd4a373209?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Growth & Expansion Services",
    shortDesc: "Strategic initiatives for M&A, joint ventures, and rapid market scaling.",
    fullDesc: "Accelerate your corporate trajectory. We provide strategic advisory for Mergers & Acquisitions (M&A), Joint Ventures, and aggressive market scaling initiatives. We help structure deals, perform due diligence, and integrate operations post-expansion.",
    iconName: "TrendingUp",
    category: "growth",
    features: [
      { title: "M&A Advisory & Structuring", desc: "Strategic guidance on target identification, deal structuring, and acquisition integration." },
      { title: "Joint Ventures & Partnerships", desc: "Drafting frameworks and operational agreements for cross-border joint ventures." },
      { title: "Commercial Due Diligence", desc: "Deep-dive analysis into the commercial viability and risks of expansion targets." },
      { title: "Post-Merger Integration", desc: "Consolidating operations, corporate cultures, and compliance frameworks post-deal." }
    ],
    processSteps: [
      { step: "01", title: "Expansion Strategy", desc: "Defining growth targets, acquisition criteria, or joint venture objectives." },
      { step: "02", title: "Target Sourcing & Diligence", desc: "Identifying opportunities and conducting rigorous commercial and legal due diligence." },
      { step: "03", title: "Deal Structuring", desc: "Designing the optimal legal and financial structure to execute the transaction." },
      { step: "04", title: "Integration Management", desc: "Overseeing the unification of entities to realize projected synergies." }
    ],
    jurisdictionSupport: [
      { country: "Cross-Border", flag: "📈", duration: "6 - 12 months", priceStarting: "Retainer + Success Fee", note: "Advisory for mid-market M&A and international joint ventures." }
    ],
    packages: [
      { name: "Commercial Due Diligence", price: "Custom", features: ["Market analysis", "Target operational review", "Risk assessment", "Synergy modeling"] },
      { name: "End-to-End M&A Advisory", price: "Custom", popular: true, features: ["Target identification", "Deal structuring", "Negotiation support", "Post-merger integration planning"] }
    ],
    faqs: [
      { q: "Do you act as investment bankers?", a: "We act as strategic corporate advisors, focusing on the legal structuring, operational due diligence, and post-merger integration aspects of the transaction." }
    ]
  }
];
