import fs from "fs";
import path from "path";
import {
  ContactInquiry,
  ContactInquiryInput,
  ConsultationBooking,
  ConsultationBookingInput,
  OrderFiling,
  OrderFilingInput,
  Subscriber,
  SubscriberInput,
} from "./schema";

const DATA_DIR = path.join(process.cwd(), ".data");
const DB_FILE = path.join(DATA_DIR, "db.json");

interface DatabaseStructure {
  inquiries: ContactInquiry[];
  consultations: ConsultationBooking[];
  orders: OrderFiling[];
  subscribers: Subscriber[];
}

// Initial pre-seeded sample data
const INITIAL_DB: DatabaseStructure = {
  inquiries: [
    {
      id: "EF-INQ-1001",
      name: "Marcus Vance",
      email: "marcus@vancetech.io",
      company: "VanceTech Solutions",
      country: "United States",
      service: "Company Formation",
      message: "Looking to form a Wyoming LLC for an AI SaaS platform with non-US resident founders.",
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      status: "in_review",
    },
    {
      id: "EF-INQ-1002",
      name: "Sarah Jenkins",
      email: "sarah@apexdesign.co.uk",
      company: "Apex Design Ltd",
      country: "United Kingdom",
      service: "Tax & Compliance",
      message: "Need assistance with HMRC VAT registration and corporate tax filings.",
      createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
      status: "responded",
    },
  ],
  consultations: [
    {
      id: "EF-BKG-2001",
      name: "Elena Rostova",
      email: "elena@globaltrade.ae",
      phone: "+971 50 123 4567",
      country: "UAE",
      service: "Company Formation",
      notes: "Interested in IFZA Free Zone company formation with residency visa.",
      scheduledAt: new Date(Date.now() + 86400000 * 1).toISOString(),
      createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
      status: "confirmed",
    },
  ],
  orders: [
    {
      id: "EF-2026-8942",
      customerName: "Alex Rivera",
      email: "alex@cloudscale.app",
      phone: "+1 (302) 555-0199",
      country: "us",
      tier: "growth",
      companyNameOption1: "CloudScale Systems LLC",
      companyNameOption2: "CloudScale Labs LLC",
      addons: {
        bankAccount: true,
        taxFiling: true,
        expressProcessing: true,
      },
      totalAmount: 549,
      currency: "$",
      status: "government_processing",
      specialistAssigned: {
        name: "David Sterling",
        email: "d.sterling@elitefiling.co",
        officeLocation: "Delaware Corporate Hub, USA",
      },
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      estimatedCompletionDate: new Date(Date.now() + 86400000 * 2).toISOString(),
      timeline: [
        {
          title: "Order & Documentation Received",
          description: "Passport copy and business details verified by compliance team.",
          date: "3 days ago",
          completed: true,
          current: false,
        },
        {
          title: "State Name Reservation",
          description: "Name availability verified with Delaware Division of Corporations.",
          date: "2 days ago",
          completed: true,
          current: false,
        },
        {
          title: "Government Processing & Filing",
          description: "Certificate of Formation submitted to Delaware Secretary of State.",
          date: "Yesterday",
          completed: true,
          current: true,
        },
        {
          title: "IRS EIN Tax ID Issuance",
          description: "Filing Form SS-4 directly with IRS for non-SSN founder.",
          date: "Pending",
          completed: false,
          current: false,
        },
        {
          title: "Final Corporate Kit Delivery",
          description: "Delivering Operating Agreement, Banking resolution, & Registered Agent cert.",
          date: "Pending",
          completed: false,
          current: false,
        },
      ],
      documentsIssued: [
        {
          name: "State Name Verification Certificate",
          type: "PDF",
          issuedDate: new Date(Date.now() - 86400000 * 2).toISOString().split("T")[0],
        },
        {
          name: "Registered Agent Acceptance Form",
          type: "PDF",
          issuedDate: new Date(Date.now() - 86400000 * 1).toISOString().split("T")[0],
        },
      ],
    },
    {
      id: "EF-2026-1044",
      customerName: "Zainab Malik",
      email: "zainab@devcraft.pk",
      phone: "+92 300 9876543",
      country: "pk",
      tier: "growth",
      companyNameOption1: "DevCraft Technologies Pvt Ltd",
      companyNameOption2: "DevCraft Digital Pvt Ltd",
      addons: {
        bankAccount: true,
        taxFiling: true,
      },
      totalAmount: 110000,
      currency: "PKR ",
      status: "ein_vat_issuance",
      specialistAssigned: {
        name: "Hamza Tariq",
        email: "h.tariq@elitefiling.co",
        officeLocation: "Karachi Corporate Hub, PK",
      },
      createdAt: new Date(Date.now() - 86400000 * 6).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      estimatedCompletionDate: new Date(Date.now() + 86400000 * 1).toISOString(),
      timeline: [
        {
          title: "SECP Name Availability Cleared",
          description: "Approved by Securities & Exchange Commission of Pakistan.",
          date: "5 days ago",
          completed: true,
          current: false,
        },
        {
          title: "Digital Signatures & Articles Filed",
          description: "eServices SECP incorporation documents approved.",
          date: "3 days ago",
          completed: true,
          current: false,
        },
        {
          title: "FBR NTN & Sales Tax (STRN) Issued",
          description: "Corporate NTN issued by Federal Board of Revenue.",
          date: "Yesterday",
          completed: true,
          current: true,
        },
        {
          title: "PSEB Registration & Bank Setup",
          description: "Meezan FCVA USD exporter bank account in progress.",
          date: "Pending",
          completed: false,
          current: false,
        },
      ],
      documentsIssued: [
        {
          name: "SECP Certificate of Incorporation",
          type: "PDF",
          issuedDate: new Date(Date.now() - 86400000 * 3).toISOString().split("T")[0],
        },
        {
          name: "FBR National Tax Number (NTN)",
          type: "PDF",
          issuedDate: new Date(Date.now() - 86400000 * 1).toISOString().split("T")[0],
        },
      ],
    },
  ],
  subscribers: [
    {
      id: "SUB-3001",
      email: "founder@nextgen.com",
      source: "footer",
      createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    },
  ],
};

function ensureDbExists(): DatabaseStructure {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_DB, null, 2), "utf-8");
      return INITIAL_DB;
    }
    const raw = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(raw) as DatabaseStructure;
  } catch (error) {
    console.error("Database read error, falling back to memory:", error);
    return INITIAL_DB;
  }
}

function saveDb(data: DatabaseStructure): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tempFile = `${DB_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), "utf-8");
    fs.renameSync(tempFile, DB_FILE);
  } catch (error) {
    console.error("Database write error:", error);
  }
}

export const db = {
  // Contact Inquiries
  getInquiries(): ContactInquiry[] {
    const data = ensureDbExists();
    return data.inquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },
  createInquiry(input: ContactInquiryInput): ContactInquiry {
    const data = ensureDbExists();
    const id = `EF-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const newInquiry: ContactInquiry = {
      ...input,
      id,
      createdAt: new Date().toISOString(),
      status: "new",
    };
    data.inquiries.unshift(newInquiry);
    saveDb(data);
    return newInquiry;
  },

  // Consultation Bookings
  getBookings(): ConsultationBooking[] {
    const data = ensureDbExists();
    return data.consultations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },
  createBooking(input: ConsultationBookingInput): ConsultationBooking {
    const data = ensureDbExists();
    const id = `EF-BKG-${Math.floor(2000 + Math.random() * 9000)}`;
    const newBooking: ConsultationBooking = {
      ...input,
      id,
      createdAt: new Date().toISOString(),
      status: "pending",
    };
    data.consultations.unshift(newBooking);
    saveDb(data);
    return newBooking;
  },

  // Filing Orders
  getOrders(): OrderFiling[] {
    const data = ensureDbExists();
    return data.orders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },
  getOrderById(id: string): OrderFiling | undefined {
    const data = ensureDbExists();
    const cleanId = id.trim().toUpperCase();
    return data.orders.find((o) => o.id.toUpperCase() === cleanId);
  },
  trackFiling(query: string): OrderFiling | undefined {
    const data = ensureDbExists();
    const clean = query.trim().toLowerCase();
    return data.orders.find(
      (o) => o.id.toLowerCase() === clean || o.email.toLowerCase() === clean
    );
  },
  createOrder(input: OrderFilingInput): OrderFiling {
    const data = ensureDbExists();
    const id = `EF-2026-${Math.floor(3000 + Math.random() * 6000)}`;
    
    // Dynamic price calculation
    const pricingMatrix: Record<string, { base: number; bank: number; trademark: number; tax: number; curr: string }> = {
      us: { base: input.tier === "scale" ? 799 : input.tier === "growth" ? 399 : 199, bank: 150, trademark: 350, tax: 250, curr: "$" },
      uk: { base: input.tier === "scale" ? 599 : input.tier === "growth" ? 299 : 149, bank: 150, trademark: 300, tax: 200, curr: "£" },
      uae: { base: input.tier === "scale" ? 6900 : input.tier === "growth" ? 3650 : 1850, bank: 500, trademark: 1500, tax: 450, curr: "$" },
      ca: { base: input.tier === "scale" ? 1399 : input.tier === "growth" ? 699 : 349, bank: 150, trademark: 350, tax: 250, curr: "$" },
      pk: { base: input.tier === "scale" ? 165000 : input.tier === "growth" ? 85000 : 45000, bank: 20000, trademark: 35000, tax: 25000, curr: "PKR " },
    };

    const cfg = pricingMatrix[input.country] || pricingMatrix.us;
    let total = cfg.base;
    if (input.addons.bankAccount) total += cfg.bank;
    if (input.addons.trademark) total += cfg.trademark;
    if (input.addons.taxFiling) total += cfg.tax;
    if (input.addons.expressProcessing) total += cfg.base * 0.2; // 20% express add-on

    const specialists: Record<string, { name: string; email: string; officeLocation: string }> = {
      us: { name: "David Sterling", email: "d.sterling@elitefiling.co", officeLocation: "Delaware Corporate Hub, USA" },
      uk: { name: "Victoria Kensington", email: "v.kensington@elitefiling.co", officeLocation: "London City Hub, UK" },
      uae: { name: "Tariq Al-Mansoor", email: "t.mansoor@elitefiling.co", officeLocation: "Dubai Marina Hub, UAE" },
      ca: { name: "Michael Tremblay", email: "m.tremblay@elitefiling.co", officeLocation: "Toronto Business Hub, Canada" },
      pk: { name: "Hamza Tariq", email: "h.tariq@elitefiling.co", officeLocation: "Karachi Financial Hub, Pakistan" },
    };

    const newOrder: OrderFiling = {
      id,
      customerName: input.customerName,
      email: input.email,
      phone: input.phone || "",
      country: input.country,
      tier: input.tier,
      companyNameOption1: input.companyNameOption1,
      companyNameOption2: input.companyNameOption2,
      addons: input.addons,
      notes: input.notes,
      totalAmount: Math.round(total),
      currency: cfg.curr,
      status: "submitted",
      specialistAssigned: specialists[input.country] || specialists.us,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      estimatedCompletionDate: new Date(Date.now() + 86400000 * 5).toISOString(),
      timeline: [
        {
          title: "Order & Documentation Received",
          description: "Your corporate filing application and details have been registered.",
          date: "Just now",
          completed: true,
          current: true,
        },
        {
          title: "Government Name Reservation",
          description: "Checking availability with corporate registrar.",
          date: "Pending",
          completed: false,
          current: false,
        },
        {
          title: "Official Filing Submission",
          description: "Articles of Organization / Incorporation queued for filing.",
          date: "Pending",
          completed: false,
          current: false,
        },
        {
          title: "Tax Registration (EIN / VAT / NTN)",
          description: "Filing tax ID applications with national tax authority.",
          date: "Pending",
          completed: false,
          current: false,
        },
        {
          title: "Corporate Kit & Bank Delivery",
          description: "Issuing complete digital formation kit and banking intro.",
          date: "Pending",
          completed: false,
          current: false,
        },
      ],
      documentsIssued: [],
    };

    data.orders.unshift(newOrder);
    saveDb(data);
    return newOrder;
  },

  updateOrderStatus(id: string, newStatus: OrderFiling["status"]): OrderFiling | null {
    const data = ensureDbExists();
    const orderIndex = data.orders.findIndex((o) => o.id.toUpperCase() === id.toUpperCase());
    if (orderIndex === -1) return null;

    const order = data.orders[orderIndex];
    order.status = newStatus;
    order.updatedAt = new Date().toISOString();

    const stageMap: Record<OrderFiling["status"], number> = {
      submitted: 0,
      name_reservation: 1,
      doc_verification: 2,
      government_processing: 3,
      ein_vat_issuance: 4,
      completed: 5,
    };

    const currentStageIdx = stageMap[newStatus];
    order.timeline = order.timeline.map((step, idx) => ({
      ...step,
      completed: idx <= currentStageIdx,
      current: idx === currentStageIdx,
      date: idx <= currentStageIdx && step.date === "Pending" ? "Updated today" : step.date,
    }));

    if (newStatus === "completed" && order.documentsIssued.length === 0) {
      order.documentsIssued.push({
        name: "Official Certificate of Incorporation / Formation",
        type: "PDF",
        issuedDate: new Date().toISOString().split("T")[0],
      });
    }

    data.orders[orderIndex] = order;
    saveDb(data);
    return order;
  },

  // Newsletter Subscribers
  createSubscriber(input: SubscriberInput): { subscriber: Subscriber; isNew: boolean } {
    const data = ensureDbExists();
    const existing = data.subscribers.find((s) => s.email.toLowerCase() === input.email.toLowerCase());
    if (existing) {
      return { subscriber: existing, isNew: false };
    }
    const newSub: Subscriber = {
      id: `SUB-${Math.floor(3000 + Math.random() * 9000)}`,
      email: input.email,
      source: input.source || "footer",
      createdAt: new Date().toISOString(),
    };
    data.subscribers.unshift(newSub);
    saveDb(data);
    return { subscriber: newSub, isNew: true };
  },

  // Health / Stats Overview
  getStats() {
    const data = ensureDbExists();
    return {
      totalInquiries: data.inquiries.length,
      totalConsultations: data.consultations.length,
      totalOrders: data.orders.length,
      totalSubscribers: data.subscribers.length,
      activeFilingOrders: data.orders.filter((o) => o.status !== "completed").length,
    };
  },
};
