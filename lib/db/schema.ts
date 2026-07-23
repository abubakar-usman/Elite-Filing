import { z } from "zod";

// Zod Schemas for Validation

export const ContactInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional().default(""),
  country: z.string().min(1, "Country selection is required"),
  service: z.string().min(1, "Service selection is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type ContactInquiryInput = z.infer<typeof ContactInquirySchema>;

export interface ContactInquiry extends ContactInquiryInput {
  id: string;
  createdAt: string;
  status: "new" | "in_review" | "responded" | "archived";
}

export const ConsultationBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().default(""),
  country: z.string().min(1, "Country is required"),
  service: z.string().min(1, "Service is required"),
  notes: z.string().optional().default(""),
  scheduledAt: z.string().optional(),
});

export type ConsultationBookingInput = z.infer<typeof ConsultationBookingSchema>;

export interface ConsultationBooking extends ConsultationBookingInput {
  id: string;
  createdAt: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
}

export const OrderFilingSchema = z.object({
  customerName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional().default(""),
  country: z.enum(["us", "uk", "uae", "ca", "pk"]),
  tier: z.enum(["starter", "growth", "scale"]),
  companyNameOption1: z.string().min(2, "Primary company name preference is required"),
  companyNameOption2: z.string().optional().default(""),
  addons: z.object({
    bankAccount: z.boolean().default(false),
    trademark: z.boolean().default(false),
    taxFiling: z.boolean().default(false),
    expressProcessing: z.boolean().default(false),
  }).default({}),
  notes: z.string().optional().default(""),
});

export type OrderFilingInput = z.infer<typeof OrderFilingSchema>;

export interface TimelineStep {
  title: string;
  description: string;
  date: string;
  completed: boolean;
  current: boolean;
}

export interface OrderFiling {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  country: "us" | "uk" | "uae" | "ca" | "pk";
  tier: "starter" | "growth" | "scale";
  companyNameOption1: string;
  companyNameOption2?: string;
  addons: {
    bankAccount?: boolean;
    trademark?: boolean;
    taxFiling?: boolean;
    expressProcessing?: boolean;
  };
  notes?: string;
  totalAmount: number;
  currency: string;
  status: "submitted" | "name_reservation" | "doc_verification" | "government_processing" | "ein_vat_issuance" | "completed";
  specialistAssigned: {
    name: string;
    email: string;
    officeLocation: string;
  };
  createdAt: string;
  updatedAt: string;
  estimatedCompletionDate: string;
  timeline: TimelineStep[];
  documentsIssued: Array<{
    name: string;
    type: string;
    issuedDate: string;
    downloadUrl?: string;
  }>;
}

export const SubscriberSchema = z.object({
  email: z.string().email("Valid email required"),
  source: z.string().optional().default("footer"),
});

export type SubscriberInput = z.infer<typeof SubscriberSchema>;

export interface Subscriber {
  id: string;
  email: string;
  source: string;
  createdAt: string;
}
