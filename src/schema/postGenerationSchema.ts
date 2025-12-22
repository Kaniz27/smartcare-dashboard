import { z } from "zod";

export const postGenerationSchema = z.object({
  postText: z.string().min(10, "Post content must be at least 10 characters"),
  platforms: z.array(z.string()).min(1, "Select at least one platform"),
  scheduleTime: z.any().optional(),
});

export type PostGenerationFormValues = z.infer<typeof postGenerationSchema>;
