import * as z from "zod";

export const mobileDetailsSchema = z.object({
  id: z.number().optional(),
  brand: z.string().min(1, "الماركة مطلوبة"),
  model: z.string().min(1, "الموديل مطلوب"),
  condition: z.enum(["new", "used", "refurbished"]),
  storage: z.string().min(1, "سعة التخزين مطلوبة"),
  ram: z.string().min(1, "الذاكرة العشوائية مطلوبة"),
  color: z.string().min(1, "اللون مطلوب"),
  network_type: z.string().min(1, "نوع الشبكة مطلوب"),
  warranty: z.boolean(),
  warranty_period: z.string().optional(),
  original_box: z.boolean(),
  accessories: z.array(z.string()),
  battery_health: z.string().min(1, "حالة البطارية مطلوبة"),
  screen_condition: z.string().min(1, "حالة الشاشة مطلوبة"),
  reason_for_sale: z.string().optional(),
});

export type MobileDetailsSchema = z.infer<typeof mobileDetailsSchema>; 