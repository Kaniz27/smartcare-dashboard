import z from "zod";

export const invoiceFormSchema = z.object({
  image: z
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
  customer: z.string().min(1, "Customer is required."),
  agent: z.string().min(1, "Agent is required."),
  create_date: z.date().min(1, "Date is required."),
  due_date: z.date().min(1, "Due Date is required."),
  discount: z.number().optional(),
  total_amount: z.number().min(0.01, "Amount must be greater than zero."),
  status: z.enum(["pending", "paid", "over_due", "cancelled"]),
  items: z
    .array(
      z.object({
        description: z.string().min(1, "Description is required"),
        qty: z.number().min(1, "Quantity must be at least 1"),
        unit_price: z.number().min(0.01, "Unit Price must be greater than 0"),
      })
    )
    .min(1, "At least one item is required"),
  notes: z.string().optional(),
});

export type InvoiceForm = z.infer<typeof invoiceFormSchema>;
