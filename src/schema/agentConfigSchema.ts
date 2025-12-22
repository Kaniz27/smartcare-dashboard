import z from "zod";

export const AssistantConfigSchema = z.object({
  name: z.string().min(1, "Name is required"),
  first_message_mode: z.string(),
  first_message: z.string().min(1, "First message is required"),
  system_prompt: z.string().min(10, "System prompt is required"),
  voice: z.string(),
  language: z.string(),
  widgets: z.string().optional(),
  // Make these optional but default if missing
  enabled: z.boolean().optional().default(false),
  show_transcript: z.boolean().optional().default(false),

  theme_primary: z
    .string()
    .regex(/^#([0-9A-F]{3}){1,2}$/i, "Invalid color")
    .optional()
    .default("#1890ff"),

  crisis_keywords: z.string().optional(),
  crisis_keywords_prompt: z.string().optional(),
  description: z.string().optional(),
  avatar_url: z.string().url().optional(),

  config: z
    .union([
      z.record(z.string(), z.any()),
      z.string().transform((val, ctx) => {
        try {
          return JSON.parse(val);
        } catch {
          ctx.addIssue({
            code: "custom",
            message: "Invalid JSON format",
          });
          return z.NEVER;
        }
      }),
    ])
    .default({})
    .optional(),
});

export type AssistantConfigFormData = z.infer<typeof AssistantConfigSchema>;
