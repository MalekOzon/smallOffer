import * as z from "zod";

export const apartmentDetailsSchema = z.object({
  id: z.number().optional(),
  furniture: z.array(z.string()),
  general_characteristics: z.array(z.string()),
  living_space: z.number().min(1, "المساحة مطلوبة"),
  room: z.number().min(0, "عدد الغرف يجب أن يكون 0 أو أكثر"),
  bed_room: z.number().min(0, "عدد غرف النوم يجب أن يكون 0 أو أكثر"),
  bath: z.number().min(0, "عدد الحمامات يجب أن يكون 0 أو أكثر"),
  real_estate_space: z.number().min(0, "المساحة العقارية يجب أن تكون 0 أو أكثر"),
  available_from: z.string(), // تاريخ بصيغة ISO string
  apartment_type: z.string(),
  floor: z.number().min(0, "الطابق يجب أن يكون 0 أو أكثر"),
  total_floors: z.number().min(1, "عدد الطوابق يجب أن يكون 1 أو أكثر"),
  offer_type: z.enum(["sale", "rent"]),
  year: z.number().min(1900).max(2100),
  elevator: z.boolean(),
  parking: z.boolean(),
  balcony: z.boolean(),
});

export type ApartmentDetailsSchema = z.infer<typeof apartmentDetailsSchema>; 