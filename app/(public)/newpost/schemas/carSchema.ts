import * as z from "zod";

const carSchema = z.object({
  title: z.string().min(1, "العنوان مطلوب"),
  description: z.string().optional(),
  price: z.preprocess(
    (val) => Number(val),
    z.number().min(0, "السعر يجب أن يكون صفر أو أكثر")
  ),
  price_type: z.enum(["fixed", "negotiable"]).default("fixed"),
  city: z.string().min(1, "المدينة مطلوبة"),
  hood: z.string().optional(),
  detailed_location: z.string().optional(),

  cover_image: z
    .union([z.instanceof(File), z.string().url()])
    .optional(),

  category: z.string().min(1, "الفئة مطلوبة"),
  subcategory: z.string().min(1, "الفئة الفرعية مطلوبة"),

  car: z.object({
    fuel_type: z.string().min(1, "نوع الوقود مطلوب").optional(),
    color: z.string().min(1, "اللون مطلوب").optional(),
    car_type: z.string().min(1, "نوع السيارة مطلوب").optional(),
    brand: z.string().min(1, "الماركة مطلوبة").optional(),
    first_registration: z.string().min(1, "تاريخ التسجيل الأول مطلوب").optional(),
    model: z.string().min(1, "الموديل مطلوب").optional(),
    mileage: z.preprocess(
      (val) => Number(val),
      z.number().min(0, "عدد الكيلومترات يجب أن يكون صفر أو أكثر")
    ).optional(),
    internal_materials: z.string().min(1, "المواد الداخلية مطلوبة").optional(),
    class_of_pollutants: z.string().min(1, "فئة الملوثات مطلوبة").optional(),
    hu: z.string().min(1, "HU مطلوب").optional(),
    performance: z.string().min(1, "الأداء مطلوب").optional(),
    external_features: z.array(z.string()).optional(),
    status: z.string().min(1, "الحالة مطلوبة").optional(),
    number_of_doors: z.string().optional(),
    protection: z.array(z.string()).optional(),
    gearbox: z.string().min(1, "ناقل الحركة مطلوب").optional(),
    environmental_sticker: z.string().min(1, "ملصق البيئة مطلوبة").optional(),
    internal_features: z.array(z.string()).optional(),
  }),

  gallery: z.array(
    z.union([z.instanceof(File), z.string().url()]) // ممكن تكون ملفات أو روابط
  ).optional(),
});

export default carSchema;
