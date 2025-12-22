import { z } from "zod";

export const profileSchema = z.object({
  fullName: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;

export const securitySchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SecurityFormValues = z.infer<typeof securitySchema>;

export const bankingSchema = z.object({
  bankName: z.string().min(1, "Bank name is required"),
  accountName: z.string().min(1, "Account name is required"),
  accountNumber: z.string().min(8, "Invalid account number"),
  routingNumber: z.string().optional(),
  swiftCode: z.string().optional(),
});

export type BankingFormValues = z.infer<typeof bankingSchema>;

export const shopInfoSchema = z.object({
  shopName: z.string().min(2, "Shop name is required"),
  shopDescription: z.string().min(10, "Description should be more detailed"),
  businessEmail: z.string().email("Invalid business email"),
  businessPhone: z.string().min(5, "Invalid phone number"),
  businessAddress: z.string().min(5, "Address is required"),
  websiteUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export type ShopInfoFormValues = z.infer<typeof shopInfoSchema>;

export const businessSchema = z.object({
  businessType: z.string().min(1, "Business type is required"),
  yearsInBusiness: z.number().min(0, "Must be a positive number"),
  registrationNumber: z.string().min(1, "Registration number is required"),
  taxId: z.string().min(1, "Tax ID / EIN is required"),
});

export type BusinessFormValues = z.infer<typeof businessSchema>;
