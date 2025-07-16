import * as z from "zod";

export const electronicsDetailsSchema = z.object({
  id: z.number().optional(),
  brand: z.string().min(1, "الماركة مطلوبة"),
  model: z.string().min(1, "الموديل مطلوب"),
  condition: z.enum(["new", "used", "refurbished"]),
  warranty: z.boolean(),
  warranty_period: z.string().optional(),
  original_box: z.boolean(),
  accessories: z.array(z.string()),
  technical_specs: z.string().min(1, "المواصفات التقنية مطلوبة"),
  purchase_date: z.string().optional(), // تاريخ بصيغة ISO string
  reason_for_sale: z.string().optional(),
});

export type ElectronicsDetailsSchema = z.infer<typeof electronicsDetailsSchema>; 