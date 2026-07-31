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
  subServices?: { headline: string; intro: string; includes: string[]; cta?: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "company-formation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    title: "Company Formation & Registration",
    shortDesc: "Register an LLC, corporation, private limited company, or free zone entity in the US, UK, UAE, Canada, or Pakistan. We handle all filings and requirements.",
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
    shortDesc: "NTN, EIN, VAT, sales tax, and annual filings handled by specialists who know each jurisdiction's rules. We keep track of your deadlines so you don't have to.",
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
    ],
    subServices: [
      {
        headline: "Stay VAT Compliant Wherever You Sell",
        intro: "VAT rules differ by country and by revenue threshold, and getting registration timing wrong can mean penalties or missed input tax credits. Elite Filing determines whether your registration should be voluntary or mandatory, files your application, and manages your ongoing returns.",
        includes: [
          "VAT registration in the UK and UAE",
          "Determination of mandatory versus voluntary registration",
          "Quarterly and annual VAT return filing",
          "VAT compliance review for multi-country sellers"
        ],
        cta: "Check My VAT Requirements"
      },
      {
        headline: "Import and Export Legally Across UK and EU Borders",
        intro: "An EORI number is required for any business importing or exporting goods across UK and EU borders. Elite Filing handles the application and links it to your existing company registration.",
        includes: [
          "EORI number application",
          "Guidance on import, export, or combined trading activity",
          "Support identifying your primary trading countries"
        ],
        cta: "Apply for an EORI Number"
      },
      {
        headline: "Get Your US Individual Taxpayer Identification Number",
        intro: "If you are a non-US resident earning US-sourced income or need an ITIN to open a business bank account, Elite Filing prepares and submits your Form W-7 application with the required supporting documentation.",
        includes: [
          "Form W-7 preparation and submission",
          "Supporting document review",
          "Guidance on when an ITIN is required versus an EIN"
        ],
        cta: "Apply for an ITIN"
      }
    ]
  },
  {
    slug: "trademark-ip",
    image: "https://images.unsplash.com/photo-1768839723311-3a05ab496804?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Trademark & Intellectual Property",
    shortDesc: "Search, register, and monitor your brand and trademarks across the markets that matter to you, with support for office action responses and brand protection.",
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
    ],
    subServices: [
      {
        headline: "Protect Your Brand Before Someone Else Does",
        intro: "Your name, logo, and brand identity are among your most valuable assets. Elite Filing helps you search, register, and monitor trademarks across the markets where you operate, and responds on your behalf if a registration is challenged.",
        includes: [
          "Trademark search and clearance, including USPTO and UKIPO searches",
          "Trademark registration in the US, UK, UAE, Canada, and Pakistan",
          "Copyright registration for original creative and written work",
          "Class of goods and services selection",
          "Trademark monitoring for potential infringement",
          "Office action response and objection handling",
          "Brand protection strategy for founders expanding into new markets"
        ],
        cta: "Check Trademark Availability"
      }
    ]
  },
  {
    slug: "registered-agent",
    image: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=2070&auto=format&fit=crop",
    title: "Registered Agent & Virtual Address",
    shortDesc: "Meet local presence requirements with a registered agent or virtual office address in the jurisdiction where you are incorporated without renting office space you don't need.",
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
    ],
    subServices: [
      {
        headline: "Meet Your Legal Presence Requirements, Without the Overhead",
        intro: "Most jurisdictions require a registered agent or registered office with a physical address in the country of incorporation. Elite Filing provides this service in every market we operate in, so you always have a reliable point of contact for legal and government correspondence.",
        includes: [
          "Registered agent service in the US",
          "Registered office address in the UK",
          "Timely forwarding of legal and compliance notices",
          "Renewal management so your registration never lapses"
        ],
        cta: "Add Registered Agent Service"
      },
      {
        headline: "A Professional Business Address in Every Market You Operate",
        intro: "Whether you need a mailing address for your LLC, a registered office for your UK company, or a presence address in the UAE, Elite Filing provides virtual office solutions with mail scanning and forwarding.",
        includes: [
          "US Business Address (virtual)",
          "UK Registered Office Address",
          "UAE Virtual Office",
          "Canada Business Address",
          "Digital mail scanning or physical forwarding, your choice"
        ],
        cta: "Get a Business Address"
      }
    ]
  },
  {
    slug: "banking-payments",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop",
    title: "Business Banking & Payment Gateways",
    shortDesc: "Guidance and introductions for opening multi-currency business bank accounts and setting up Stripe, PayPal, Wise, and Payoneer for your company.",
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
    ],
    subServices: [
      {
        headline: "Get Banked, in Any Currency You Need",
        intro: "Opening a business bank account as a foreign-owned company can be one of the hardest parts of getting started. Elite Filing guides you through documentation requirements and connects you with the right banking and payment partners for your business.",
        includes: [
          "Guidance for opening business bank accounts in the US, UK, and UAE",
          "Multi-currency account setup",
          "Stripe, PayPal, Wise, and Payoneer setup support",
          "Merchant account advisory for ecommerce businesses"
        ],
        cta: "Get Banking Support"
      }
    ]
  },
  {
    slug: "accounting",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    title: "Accounting & Bookkeeping",
    shortDesc: "Ongoing financial record-keeping, monthly bookkeeping, annual compliance, and tax filing support so your books stay audit-ready year-round.",
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
    ],
    subServices: [
      {
        headline: "Keep Your Books Audit-Ready, Every Month",
        intro: "Compliance does not end at registration. Elite Filing provides ongoing bookkeeping, annual compliance filing, and tax preparation so your financial records are always accurate and ready for review, whether that review comes from a tax authority, an investor, or your own leadership team.",
        includes: [
          "Monthly bookkeeping",
          "Annual compliance filing",
          "Tax filing and audit support",
          "Financial recordkeeping aligned to each jurisdiction's requirements"
        ],
        cta: "Set Up Ongoing Bookkeeping"
      }
    ]
  },
  {
    slug: "ecommerce-setup",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    title: "Ecommerce Business Setup",
    shortDesc: "Business registration, tax profile verification, and compliance built specifically for sellers launching or scaling on Amazon, Walmart, Etsy, and Shopify.",
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
    ],
    subServices: [
      {
        headline: "Get Compliant and Ready to Sell on Amazon, Walmart, and Etsy",
        intro: "Marketplaces have their own registration and tax requirements on top of standard company formation. Elite Filing sets your business up correctly from the start, so your seller account, sales tax registration, and business structure all line up.",
        includes: [
          "Business registration for Amazon, Walmart, Etsy, and Shopify sellers",
          "Guidance for existing versus new seller accounts",
          "Sales tax and compliance setup for marketplace sellers",
          "Support for sole proprietors, partnerships, and private limited entities",
          "Business consultancy and documentation support for marketplace approval"
        ],
        cta: "Set Up My Ecommerce Business"
      }
    ]
  },
  {
    slug: "growth-marketing",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
    title: "Growth & Marketing Add-Ons",
    shortDesc: "Web development, SEO, digital marketing, lead generation, branding, and affiliate marketing services to help your new company build a market presence.",
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
    ],
    subServices: [
      {
        headline: "Build the Brand and Online Presence Behind Your New Company",
        intro: "Once your company is registered, Elite Filing's growth partners can help you build the digital presence to support it, from your first website to a full-scale demand generation program.",
        includes: [
          "Web Development",
          "Search Engine Optimization (SEO)",
          "Digital Marketing",
          "Lead Generation",
          "Affiliate Marketing",
          "Logo Design & Branding",
          "Company Logo Creation"
        ],
        cta: "Explore Growth Add-Ons"
      }
    ]
  },
  {
    slug: "business-consultancy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    title: "Business Consultancy & Strategy",
    shortDesc: "Strategic, financial, sales, digital transformation, and operational consulting for founders and companies that need more than just company registration.",
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
    ],
    subServices: [
      {
        headline: "Business Strategy & Growth Consulting",
        intro: "For founders and leadership teams who need a clear, actionable path to their next stage of growth, we help you define strategy, evaluate new markets, and build the frameworks to execute against it.",
        includes: [
          "Business Growth Strategy",
          "Market Entry Strategy",
          "Go-to-Market (GTM) Planning",
          "Revenue Growth Frameworks",
          "Business Model Optimization",
          "Strategic Partnerships Development",
          "Competitive Analysis",
          "Expansion Planning"
        ]
      },
      {
        headline: "Investment & Capital Raising Advisory",
        intro: "Whether you're preparing for a seed round or exploring an acquisition, we help you get investor-ready, tell a compelling financial story, and connect with the right capital partners.",
        includes: [
          "Investor Readiness Assessment",
          "Pitch Deck Development",
          "Financial Model Review",
          "Investor Outreach Strategy",
          "Family Office & Private Equity Introductions",
          "M&A Deal Sourcing",
          "Due Diligence Support",
          "Investment Origination Services"
        ]
      },
      {
        headline: "Sales & Business Development Consulting",
        intro: "We help you build repeatable, scalable sales systems, from your first structured sales process to enterprise account management.",
        includes: [
          "Sales Process Design",
          "Lead Generation Strategy",
          "B2B Prospecting Systems",
          "CRM Implementation",
          "Sales Team KPI Framework",
          "Enterprise Sales Consulting",
          "Channel Partner Development",
          "Strategic Account Management"
        ]
      },
      {
        headline: "Digital Transformation Consulting",
        intro: "From automating manual processes to selecting the right systems, we help businesses modernize how they operate without disrupting the work already underway.",
        includes: [
          "Digital Maturity Assessment",
          "Process Automation",
          "AI Adoption Strategy",
          "ERP/CRM Selection & Implementation",
          "Business Intelligence Dashboards",
          "Workflow Optimization",
          "Data Management Strategy"
        ]
      },
      {
        headline: "Technology & AI Advisory",
        intro: "As AI reshapes how businesses operate, we help leadership teams identify where it actually creates value, and build a realistic roadmap to implement it.",
        includes: [
          "AI Readiness Assessment",
          "AI Use Case Identification",
          "AI Product Strategy",
          "Automation Roadmaps",
          "Chatbot & AI Agent Implementation",
          "Cybersecurity Strategy",
          "Cloud Transformation Planning"
        ]
      },
      {
        headline: "Marketing & Brand Growth Consulting",
        intro: "We help you understand how your brand is actually performing, then build the strategy to grow awareness, acquisition, and retention from there.",
        includes: [
          "Brand Audit",
          "Social Media Audit",
          "Growth Marketing Strategy",
          "Customer Acquisition Planning",
          "Partnership Strategy",
          "PR Strategy Development",
          "Customer Journey Optimization",
          "Conversion Rate Optimization"
        ]
      },
      {
        headline: "Operations Consulting",
        intro: "Good operations are invisible when they work. We help you build the structure, processes, and performance frameworks that let your business run smoothly as it scales.",
        includes: [
          "SOP Development",
          "Organizational Structure Design",
          "KPI & Performance Frameworks",
          "Process Reengineering",
          "Vendor Management",
          "Operational Efficiency Programs",
          "Cost Optimization"
        ]
      },
      {
        headline: "Startup & SME Advisory",
        intro: "For early-stage founders and small to mid-sized businesses, we provide hands-on advisory support, from your first business plan to fractional leadership when you're not ready for a full-time hire.",
        includes: [
          "Business Plan Development",
          "Startup Launch Strategy",
          "Product-Market Fit Assessment",
          "Scaling Frameworks",
          "Fundraising Support",
          "Fractional COO / Growth Advisor Services"
        ]
      }
    ]
  }
];
