import * as z from "zod";

export const merchantSchema = z.object({
  // Section 1: Company Information
  companyName: z.string().min(1, "Company Name is required"),
  corporateName: z.string().optional(),
  businessAddress: z.string().min(1, "Business Address is required"),
  billingAddress: z.string().optional(),
  companyZip: z.number().min(1, "ZIP is required"),
  companyCity: z.string().min(1, "City is required"),
  companyState: z.string().min(1, "State is required"),
  corporateZip: z.number().min(1, "ZIP is required"),
  corporateCity: z.string().optional(),
  corporateState: z.string().optional(),
  phone: z.string().min(1, "Phone is required"),
  email: z.email("Invalid email format").min(1, "Email is required"),
  website: z.string().url("Invalid URL format").optional().or(z.literal("")),

  // Section 1.2: Owner / Partner / Officer 1
  ownerFirstName: z.string().min(1, "First Name is required"),
  ownerLastName: z.string().min(1, "Last Name is required"),
  ownership: z.number().min(0).max(100, "Must be between 0 and 100"),
  ownerTItle: z.string().min(1, "Title is required"),
  ownerAddress: z.string().min(1, "Home Address is required"),
  ownerPhone: z.string().min(1, "Phone is required"),

  // Section 1.3: FIles
  articleIncoporation: z
    .instanceof(File)
    .optional()
    .nullable()
    .refine(
      (file) =>
        !file || ["image/png", "image/jpeg", "image/jpg"].includes(file.type),
      {
        message: "Only PNG or JPG images are allowed",
      }
    ),
  licence: z
    .instanceof(File)
    .optional()
    .nullable()
    .refine(
      (file) =>
        !file || ["image/png", "image/jpeg", "image/jpg"].includes(file.type),
      {
        message: "Only PNG or JPG images are allowed",
      }
    ),
  passport: z
    .instanceof(File)
    .optional()
    .nullable()
    .refine(
      (file) =>
        !file || ["image/png", "image/jpeg", "image/jpg"].includes(file.type),
      {
        message: "Only PNG or JPG images are allowed",
      }
    ),
  utilityBill: z
    .instanceof(File)
    .optional()
    .nullable()
    .refine(
      (file) =>
        !file || ["image/png", "image/jpeg", "image/jpg"].includes(file.type),
      {
        message: "Only PNG or JPG images are allowed",
      }
    ),
});

export type MerchantFormData = z.infer<typeof merchantSchema>;
