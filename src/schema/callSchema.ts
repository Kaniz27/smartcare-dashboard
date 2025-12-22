import z from "zod";
export const callSchema = z
  .object({
    assistant_id: z.number(),
    number_id: z.string().optional(),
    is_single: z.boolean(),
    name: z.string().optional(),
    to_phone: z.string().optional(),
    designation: z.string().optional(),
    company: z.string().optional(),
    business_type: z.string().optional(),
    country_code: z.string(),
    csv_file: z.any().nullable().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.is_single) {
      // Single call → all 5 fields required
      const requiredFields: (keyof typeof data)[] = [
        "name",
        "to_phone",
        "designation",
        "company",
        "business_type",
      ];

      requiredFields.forEach((field) => {
        if (
          !data[field] ||
          (typeof data[field] === "string" && data[field]!.trim() === "")
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `${field.replace("_", " ")} is required`,
            path: [field],
          });
        }
      });

      delete data.csv_file;
    } else {
      // Multi call → CSV required
      if (!data.csv_file) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Upload a valid CSV file",
          path: ["csv_file"],
        });
      }
      // Remove single call fields from payload
      delete data.name;
      delete data.to_phone;
      delete data.designation;
      delete data.company;
      delete data.business_type;
    }
  });
export type CallFormType = z.infer<typeof callSchema>;
