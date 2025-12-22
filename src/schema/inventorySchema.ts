import { z } from "zod";

export const purchaseSchema = z.object({
  id: z.number(),
  poNumber: z.string(),
  supplier: z.object({
    name: z.string(),
    subText: z.string(),
  }),
  orderDate: z.string(),
  items: z.object({
    count: z.number(),
    units: z.number(),
  }),
  totalAmount: z.number(),
});

export type ProductPurchaseTypes = z.infer<typeof purchaseSchema>;
