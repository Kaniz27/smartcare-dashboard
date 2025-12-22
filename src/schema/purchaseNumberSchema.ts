import z from "zod";

export const PurchaseNumberSchema = z.object({
  phone_number: z.string().min(1, "Select a number to purchase"),
});

export type PurchaseNumberFormData = z.infer<typeof PurchaseNumberSchema>;
