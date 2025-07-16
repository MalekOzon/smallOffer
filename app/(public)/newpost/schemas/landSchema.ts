import * as z from "zod";

export const landDetailsSchema = z.object({
  id: z.number().optional(),
  land_type: z.enum(["residential_plot", "commercial_plot", "agricultural_land", "industrial_land"]),
  offer_type: z.enum(["sale", "rent"]),
  area: z.number().min(1, "المساحة مطلوبة"),
  available_from: z.string().optional(), // تاريخ بصيغة ISO string
});

export type LandDetailsSchema = z.infer<typeof landDetailsSchema>; 