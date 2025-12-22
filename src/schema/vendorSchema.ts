import { z } from "zod";

export const vendorRegistrationSchema = z.object({
  // Shop Information
  shopName: z.string().min(2, "Shop name is required"),
  shopDescription: z.string().min(10, "Please enter a short description"),
  businessEmail: z.email("Invalid business email"),
  businessPhone: z.string().min(5, "Valid phone number is required"),
  businessAddress: z.string().min(5, "Full address is required"),

  // Legal Information
  registrationNumber: z.string().min(1, "Registration number is required"),
  taxId: z.string().min(1, "Tax ID / EIN is required"),
  businessType: z.string().min(1, "Select business type"),
  yearsInBusiness: z.number().min(0, "Years must be 0 or more"),
  websiteUrl: z.string().url("Invalid URL").optional().or(z.literal("")),

  // Bank Information
  bankName: z.string().min(1, "Bank name is required"),
  accountHolderName: z.string().min(1, "Account holder name is required"),
  accountNumber: z
    .string()
    .regex(/^\d+$/, "Account number must contain only numbers")
    .min(8, "Account number must be at least 8 digits"),
  routingNumber: z.string().min(1, "Routing number is required"),
  swiftCode: z.string().optional(),
});

export type VendorRegistrationValues = z.infer<typeof vendorRegistrationSchema>;
