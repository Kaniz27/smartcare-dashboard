import z from "zod";

export const TopupSchema = z.object({
  card_holder_name: z.string().min(1, "Card holder name required"),
  amount: z
    .number("Amount is required")
    .min(10, "Minimum top-up amount is 10")
    .max(100000, "Maximum top-up is 100000"),
  stripe_payment_method: z.string().min(1, "Stripe token is required"),
});

export type TopupFormType = z.infer<typeof TopupSchema>;
