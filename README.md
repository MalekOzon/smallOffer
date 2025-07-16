# Small Offer - نظام نشر الإعلانات المتعدد الأنواع

هذا المشروع عبارة عن منصة إعلانات تدعم نشر إعلانات متعددة الأنواع مع فورمات خاصة لكل نوع.

## 🚀 البدء السريع

```bash
npm run dev
# أو
yarn dev
# أو
pnpm dev
# أو
bun dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح لرؤية النتيجة.

---

## 📋 نظرة عامة على نظام الإعلانات

### الأنواع المدعومة:
1. **إعلانات عامة** - فورم أساسي لجميع الأنواع
2. **إعلانات السيارات** - مع تفاصيل خاصة بالسيارات
3. **إعلانات الأراضي** - مع تفاصيل خاصة بالأراضي
4. **إعلانات المنازل** - مع تفاصيل خاصة بالمنازل
5. **إعلانات الشقق** - مع تفاصيل خاصة بالشقق
6. **إعلانات الإلكترونيات** - مع تفاصيل خاصة بالإلكترونيات
7. **إعلانات الموبايلات** - مع تفاصيل خاصة بالهواتف

---

## 🏗️ هيكل المشروع

### 📁 مجلد `app/newpost/`

#### 📂 `components/` - مكونات الفورمات
```
components/
├── GenericPostForm.tsx     # الفورم العام الأساسي
├── CarForm.tsx            # فورم السيارات
├── LandForm.tsx           # فورم الأراضي
├── HouseForm.tsx          # فورم المنازل
├── ApartmentForm.tsx      # فورم الشقق
├── ElectronicsForm.tsx    # فورم الإلكترونيات
└── MobileForm.tsx         # فورم الموبايلات
```

#### 📂 `schemas/` - مخططات التحقق من البيانات
```
schemas/
├── genericPostSchema.ts   # مخطط الفورم العام
├── carSchema.ts          # مخطط السيارات
├── landSchema.ts         # مخطط الأراضي
├── houseSchema.ts        # مخطط المنازل
├── apartmentSchema.ts    # مخطط الشقق
├── electronicsSchema.ts  # مخطط الإلكترونيات
└── mobileSchema.ts       # مخطط الموبايلات
```

#### 📂 `hooks/` - Hooks لإدارة الإرسال
```
hooks/
├── useSubmitCarPost.ts      # Hook السيارات
├── useSubmitLandPost.ts     # Hook الأراضي
├── useSubmitHousePost.ts    # Hook المنازل
├── useSubmitApartmentPost.ts # Hook الشقق
├── useSubmitElectronicsPost.ts # Hook الإلكترونيات
└── useSubmitMobilePost.ts   # Hook الموبايلات
```

#### 📄 `page.tsx` - الصفحة الرئيسية لنشر الإعلانات

### 📁 مجلد `app/lib/postServices/`

#### 📄 `postType.ts` - أنواع TypeScript
#### 📄 `postApi.ts` - دوال API
#### 📄 `postMutations.ts` - Mutations لإدارة الحالة

---

## 🔧 شرح تفصيلي للمكونات

### 1. 📄 `GenericPostForm.tsx` - الفورم العام

#### الوظيفة:
الفورم الأساسي الذي يظهر لجميع أنواع الإعلانات ويحتوي على الحقول المشتركة.

#### Props المدخلة:
```typescript
{
  onSubmit?: (data: GenericPostSchema) => void;
  isCarPost?: boolean;
  isLandPost?: boolean;
  isHousePost?: boolean;
  isApartmentPost?: boolean;
  isElectronicsPost?: boolean;
  isMobilePost?: boolean;
}
```

#### الحقول المطلوبة:
- **title** - عنوان الإعلان
- **description** - وصف الإعلان
- **price** - السعر
- **price_type** - نوع السعر (ثابت/قابل للتفاوض)
- **city** - المدينة
- **hood** - المنطقة
- **detailed_location** - تفاصيل العنوان (اختياري)
- **cover_image** - صورة الغلاف
- **gallery** - معرض الصور (اختياري)
- **category** - التصنيف العام
- **subcategory** - التصنيف الفرعي

#### كيفية العمل:
1. **عرض الفورم**: يظهر دائماً عند اختيار أي تصنيف
2. **معالجة البيانات**: يجمع البيانات الأساسية
3. **إرسال البيانات**: 
   - إذا كان فورم خاص: يرسل البيانات للفورم الخاص
   - إذا كان فورم عام: يرسل مباشرة للـ API
4. **إدارة الصور**: يدير معرض الصور وصورة الغلاف

#### الدوال الداخلية:
```typescript
// تحديث الصور في الفورم
const handleGalleryChange = (idx: number, url: string) => {
  const newGallery = [...gallery];
  newGallery[idx] = url;
  setGallery(newGallery);
  setValue("gallery", newGallery.filter((img) => img));
};

// تحديث صورة الغلاف
const handleCoverImage = (url: string) => {
  setValue("cover_image", url);
};

// معالجة إرسال الفورم
const handleFormSubmit = (data: GenericPostSchema) => {
  // تنظيف البيانات
  if (!data.cover_image && gallery.find((img) => img)) {
    data.cover_image = gallery.find((img) => img) || "";
  }
  data.gallery = gallery.filter((img) => img);
  
  // إرسال للفورم الخاص أو مباشرة
  if ((isCarPost || isLandPost || isHousePost || isApartmentPost || isElectronicsPost || isMobilePost) && onSubmit) {
    onSubmit(data);
  } else {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        setGallery(defaultGallery);
      },
    });
  }
};
```

### 2. 🚗 `CarForm.tsx` - فورم السيارات

#### الوظيفة:
فورم خاص لإدخال تفاصيل السيارات مثل الماركة، الموديل، الكيلومترات، إلخ.

#### الحقول المطلوبة:
```typescript
export type CarFormValues = {
  external_features: string[];      // المميزات الخارجية
  internal_features: string[];      // المميزات الداخلية
  protection: string[];             // الحماية
  number_of_doors: string;          // عدد الأبواب
  hu: string;                       // تاريخ الفحص التقني
  environmental_sticker: string;    // ملصق البيئة
  class_of_pollutants: string;      // فئة الملوثات
  color: string;                    // اللون
  internal_materials: string;       // المواد الداخلية
  brand: string;                    // الماركة
  model: string;                    // الموديل
  mileage: number;                  // الكيلومترات
  status: string;                   // الحالة (جديد/مستعمل/تالف)
  first_registration: string;       // تاريخ التسجيل الأول
  fuel_type: string;                // نوع الوقود
  performance: string;              // الأداء
  gearbox: string;                  // ناقل الحركة
  car_type: string;                 // نوع السيارة
};
```

#### كيفية العمل:
1. **استقبال البيانات**: يستقبل البيانات من الفورم العام
2. **عرض الحقول**: يعرض الحقول الخاصة بالسيارات
3. **معالجة البيانات**: يجمع البيانات ويضيفها للبيانات العامة
4. **إرسال البيانات**: يرسل البيانات كاملة للـ API

### 3. 🏠 `HouseForm.tsx` - فورم المنازل

#### الحقول المطلوبة:
```typescript
export type HouseFormValues = {
  furniture: string[];              // الأثاث
  general_characteristics: string[]; // الخصائص العامة
  living_space: number;             // المساحة
  room: number;                     // عدد الغرف
  bed_room: number;                 // عدد غرف النوم
  bath: number;                     // عدد الحمامات
  real_estate_space: number;        // المساحة العقارية
  available_from: string;           // متاح من تاريخ
  house_type: string;               // نوع المنزل
  floor: string;                    // الطابق
  offer_type: "sale" | "rent";      // نوع العرض
  year: number;                     // سنة البناء
};
```

### 4. 🏢 `ApartmentForm.tsx` - فورم الشقق

#### الحقول المطلوبة:
```typescript
export type ApartmentFormValues = {
  furniture: string[];              // الأثاث
  general_characteristics: string[]; // الخصائص العامة
  living_space: number;             // المساحة
  room: number;                     // عدد الغرف
  bed_room: number;                 // عدد غرف النوم
  bath: number;                     // عدد الحمامات
  real_estate_space: number;        // المساحة العقارية
  available_from: string;           // متاح من تاريخ
  apartment_type: string;           // نوع الشقة
  floor: number;                    // الطابق
  total_floors: number;             // عدد الطوابق في المبنى
  offer_type: "sale" | "rent";      // نوع العرض
  year: number;                     // سنة البناء
  elevator: boolean;                // مصعد
  parking: boolean;                 // موقف سيارات
  balcony: boolean;                 // شرفة
};
```

### 5. 📱 `ElectronicsForm.tsx` - فورم الإلكترونيات

#### الحقول المطلوبة:
```typescript
export type ElectronicsFormValues = {
  brand: string;                    // الماركة
  model: string;                    // الموديل
  condition: "new" | "used" | "refurbished"; // الحالة
  warranty: boolean;                // ضمان
  warranty_period?: string;         // مدة الضمان
  original_box: boolean;            // صندوق أصلي
  accessories: string[];            // الملحقات
  technical_specs: string;          // المواصفات التقنية
  purchase_date?: string;           // تاريخ الشراء
  reason_for_sale: string;          // سبب البيع
};
```

### 6. 📱 `MobileForm.tsx` - فورم الموبايلات

#### الحقول المطلوبة:
```typescript
export type MobileFormValues = {
  brand: string;                    // الماركة
  model: string;                    // الموديل
  condition: "new" | "used" | "refurbished"; // الحالة
  storage: string;                  // سعة التخزين
  ram: string;                      // الذاكرة العشوائية
  color: string;                    // اللون
  network_type: string;             // نوع الشبكة
  warranty: boolean;                // ضمان
  warranty_period?: string;         // مدة الضمان
  original_box: boolean;            // صندوق أصلي
  accessories: string[];            // الملحقات
  battery_health: string;           // حالة البطارية
  screen_condition: string;         // حالة الشاشة
  reason_for_sale: string;          // سبب البيع
};
```

---

## 📋 Schemas - مخططات التحقق

### 1. `genericPostSchema.ts`
```typescript
export const genericPostSchema = z.object({
  title: z.string().min(3, "العنوان يجب أن يكون 3 أحرف على الأقل"),
  description: z.string().min(10, "الوصف يجب أن يكون 10 أحرف على الأقل"),
  price: z.string().min(1, "السعر مطلوب"),
  price_type: z.enum(["fixed", "negotiable"]),
  city: z.string().min(1, "المدينة مطلوبة"),
  hood: z.string().min(1, "المنطقة مطلوبة"),
  detailed_location: z.string().optional(),
  cover_image: z.string().min(1, "رابط الصورة مطلوب"),
  gallery: z.array(z.string()).optional(),
  category: z.string().min(1, "الفئة مطلوبة"),
  subcategory: z.string().min(1, "الفئة الفرعية مطلوبة"),
});
```

### 2. `carSchema.ts`
```typescript
export const carDetailsSchema = z.object({
  id: z.number().optional(),
  external_features: z.string().optional(),
  internal_features: z.string().optional(),
  protection: z.string().optional(),
  number_of_doors: z.enum(["two_three", "four", "five"]).optional(),
  hu: z.string().optional(),
  environmental_sticker: z.string().optional(),
  class_of_pollutants: z.string().optional(),
  color: z.string().optional(),
  internal_materials: z.string().optional(),
  brand: z.string().min(1, "الماركة مطلوبة"),
  model: z.string().min(1, "الموديل مطلوب"),
  mileage: z.number().min(0, "عدد الكيلومترات يجب أن يكون موجب"),
  status: z.enum(["damaged", "used", "new"]).optional(),
  first_registration: z.string().optional(),
  fuel_type: z.enum(["gasoline", "diesel", "electric", "hybrid"]).optional(),
  performance: z.string().optional(),
  gearbox: z.enum(["manual", "automatic"]).optional(),
  car_type: z.enum(["small_car", "sedan", "suv", "truck"]).optional(),
});
```

### باقي Schemas تتبع نفس النمط مع الحقول الخاصة بكل نوع.

---

## 🎣 Hooks - إدارة الإرسال

### 1. `useSubmitCarPost.ts`
```typescript
export const useSubmitCarPost = () => {
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);
  
  const createCarPostMutation = useCreateCarPost(setNotification);

  const submitCarPost = async (
    genericData: GenericPostSchema,
    carData: CarDetailsSchema
  ) => {
    try {
      const carPostData: CarPostPayload = {
        ...genericData,
        car: carData,
      };

      await createCarPostMutation.mutateAsync(carPostData);
      
      return { success: true };
    } catch (error) {
      console.error('Error submitting car post:', error);
      return { success: false, error };
    }
  };

  return {
    submitCarPost,
    notification,
    setNotification,
    isLoading: createCarPostMutation.isPending,
  };
};
```

#### كيفية العمل:
1. **إدارة الحالة**: يدير حالة الإرسال والإشعارات
2. **دمج البيانات**: يدمج بيانات الفورم العام مع بيانات الفورم الخاص
3. **إرسال البيانات**: يرسل البيانات للـ API
4. **إدارة الأخطاء**: يتعامل مع الأخطاء ويعيد النتائج

### باقي Hooks تتبع نفس النمط مع الـ API المناسب لكل نوع.

---

## 🔗 Types - أنواع TypeScript

### 1. `postType.ts`
```typescript
// النوع الأساسي للفورم العام
export type GenericPostPayload = {
  title: string;
  description: string;
  price: string;
  price_type: "fixed" | "negotiable";
  city: string;
  hood: string;
  detailed_location?: string;
  cover_image: string;
  gallery?: string[];
  category: string;
  subcategory: string;
};

// نوع تفاصيل السيارة
export type CarDetailsPayload = {
  car: {
    id?: number;
    external_features?: string[];
    internal_features?: string[];
    protection?: string[];
    number_of_doors?: "two_three" | "four" | "five" | string;
    hu?: string;
    environmental_sticker?: string;
    class_of_pollutants?: string;
    color?: string;
    internal_materials?: string;
    brand: string;
    model: string;
    mileage: number;
    status?: "damaged" | "used" | "new" | string;
    first_registration?: string;
    fuel_type?: "gasoline" | "diesel" | "electric" | "hybrid" | string;
    performance?: string;
    gearbox?: "manual" | "automatic" | string;
    car_type?: "small_car" | "sedan" | "suv" | "truck" | string;
  };
};

// النوع النهائي لإعلان السيارة
export type CarPostPayload = GenericPostPayload & CarDetailsPayload;
```

### باقي Types تتبع نفس النمط مع الحقول الخاصة بكل نوع.

---

## 🌐 APIs - دوال الاتصال بالسيرفر

### 1. `postApi.ts`
```typescript
// دالة لتنظيف البيانات وإزالة الحقول الفارغة
const cleanData = (data: Record<string, unknown>): Record<string, unknown> => {
  const cleaned: Record<string, unknown> = {};
  
  Object.keys(data).forEach(key => {
    const value = data[key];
    
    if (value !== null && value !== undefined && value !== '') {
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        const cleanedNested = cleanData(value as Record<string, unknown>);
        if (Object.keys(cleanedNested).length > 0) {
          cleaned[key] = cleanedNested;
        }
      } else {
        cleaned[key] = value;
      }
    }
  });
  
  return cleaned;
};

// API لنشر إعلان سيارة
export const createCarPost = async (data: CarPostPayload) => {
  const cleanedData = cleanData(data);
  console.log('Sending car post data:', cleanedData);
  
  const response = await axiosInstance.post("accounts/posts/cars/", cleanedData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
```

#### كيفية العمل:
1. **تنظيف البيانات**: يزيل الحقول الفارغة والقيم null
2. **إرسال البيانات**: يرسل البيانات للـ endpoint المناسب
3. **إدارة Headers**: يضيف Content-Type المناسب
4. **إرجاع النتيجة**: يرجع البيانات من السيرفر

### Endpoints المدعومة:
- `accounts/posts/generic/` - الإعلانات العامة
- `accounts/posts/cars/` - إعلانات السيارات
- `accounts/posts/outdoor-space/` - إعلانات الأراضي
- `accounts/posts/houses/` - إعلانات المنازل
- `accounts/posts/apartments/` - إعلانات الشقق
- `accounts/posts/electronics/` - إعلانات الإلكترونيات
- `accounts/posts/mobiles/` - إعلانات الموبايلات

---

## 🔄 Mutations - إدارة حالة الإرسال

### 1. `postMutations.ts`
```typescript
// فورم خاص سيارات
export function useCreateCarPost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CarPostPayload) => createCarPost(data),
    onMutate: () => {
      console.log("جاري إنشاء إعلان سيارة جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان سيارة", error);
      if (axios.isAxiosError(error)) {
        console.log("Response status:", error.response?.status);
        console.log("Response data:", error.response?.data);
        console.log("Response headers:", error.response?.headers);
        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        const messages = errors ? extractMessages(errors) : [];
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n"): fallbackMessage;
        setNotification({
          message: finalMessage,
          type: "error",
        });
      } else {
        setNotification({
          message: "حدث خطأ أثناء الاتصال بالسيرفر.",
          type: "error",
        });
      }
    },
    onSuccess: (data) => {
      setNotification({ message: data.detail, type: "success" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/cars/"] });
    },
  });
}
```

#### كيفية العمل:
1. **onMutate**: يتم تنفيذه قبل الإرسال
2. **onError**: يتم تنفيذه عند حدوث خطأ
3. **onSuccess**: يتم تنفيذه عند النجاح
4. **onSettled**: يتم تنفيذه في النهاية (نجاح أو فشل)

---

## 🎯 الصفحة الرئيسية - `page.tsx`

### الوظيفة:
الصفحة الرئيسية التي تدير عرض الفورمات وربطها معاً.

### المكونات الرئيسية:

#### 1. إدارة الحالة:
```typescript
const [category, setCategory] = useState("اختر الإدخال");
const [subcategory, setSubcategory] = useState("اختر الإدخال");
const [genericData, setGenericData] = useState<GenericPostSchema | null>(null);
```

#### 2. Hooks للإرسال:
```typescript
const { submitCarPost, notification: carNotification, isLoading: isCarLoading } = useSubmitCarPost();
const { submitLandPost, notification: landNotification, isLoading: isLandLoading } = useSubmitLandPost();
// ... باقي Hooks
```

#### 3. منطق عرض الفورمات:
```typescript
const showCarForm = category === "الآليات" && subcategory === "سيارات";
const showLandForm = category === "العقارات" && subcategory === "أراضي";
const showHouseForm = category === "العقارات" && subcategory === "منازل";
const showApartmentForm = category === "العقارات" && subcategory === "شقق";
const showElectronicsForm = category === "الإلكترونيات والكهربائيات" && subcategory !== "اختر الإدخال" && subcategory !== "موبايلات";
const showMobileForm = category === "الإلكترونيات والكهربائيات" && subcategory === "موبايلات";
```

#### 4. معالجات الإرسال:
```typescript
// معالج إرسال بيانات فورم السيارة
const handleCarSubmit = async (data: CarDetailsSchema) => {
  if (genericData) {
    const result = await submitCarPost(genericData, data);
    if (result.success) {
      // إعادة تعيين البيانات
      setGenericData(null);
      setCategory("اختر الإدخال");
      setSubcategory("اختر الإدخال");
    }
  }
};
```

#### 5. دمج الإشعارات:
```typescript
const notification = carNotification || landNotification || houseNotification || apartmentNotification || electronicsNotification || mobileNotification;
```

### كيفية العمل:
1. **اختيار التصنيف**: المستخدم يختار التصنيف العام والفرعي
2. **عرض الفورم العام**: يظهر الفورم العام دائماً
3. **عرض الفورم الخاص**: يظهر الفورم الخاص حسب التصنيف
4. **إرسال البيانات**: يتم إرسال البيانات من الفورم العام للخاص
5. **إرسال نهائي**: يتم إرسال البيانات كاملة للـ API
6. **إعادة تعيين**: يتم إعادة تعيين البيانات بعد النجاح

---

## 🔄 تدفق البيانات

### 1. اختيار التصنيف:
```
المستخدم يختار: العقارات → منازل
```

### 2. عرض الفورم العام:
```
GenericPostForm يظهر مع:
- عنوان الإعلان
- الوصف
- السعر
- الموقع
- الصور
- إلخ...
```

### 3. ملء الفورم العام:
```
المستخدم يملأ البيانات الأساسية
ثم يضغط "التالي"
```

### 4. حفظ البيانات العامة:
```
handleGenericSubmit يحفظ البيانات في:
setGenericData(data);
```

### 5. عرض الفورم الخاص:
```
HouseForm يظهر مع:
- عدد الغرف
- المساحة
- الأثاث
- إلخ...
```

### 6. ملء الفورم الخاص:
```
المستخدم يملأ البيانات الخاصة
ثم يضغط "حفظ تفاصيل المنزل"
```

### 7. إرسال البيانات:
```
handleHouseSubmit:
1. يدمج البيانات العامة مع الخاصة
2. يرسل للـ API
3. يعرض إشعار النجاح/الخطأ
4. يعيد تعيين البيانات
```

---

## 🛠️ كيفية التعديل والإضافة

### إضافة نوع إعلان جديد:

#### 1. إنشاء الفورم:
```typescript
// app/newpost/components/NewTypeForm.tsx
export type NewTypeFormValues = {
  field1: string;
  field2: number;
  // ... باقي الحقول
};

export default function NewTypeForm({ onSubmit }: Props) {
  // ... كود الفورم
}
```

#### 2. إنشاء Schema:
```typescript
// app/newpost/schemas/newTypeSchema.ts
export const newTypeDetailsSchema = z.object({
  field1: z.string().min(1, "الحقل مطلوب"),
  field2: z.number().min(0, "يجب أن يكون موجب"),
  // ... باقي الحقول
});
```

#### 3. إضافة Types:
```typescript
// app/lib/postServices/postType.ts
export type NewTypeDetailsPayload = {
  newtype: {
    field1: string;
    field2: number;
    // ... باقي الحقول
  };
};

export type NewTypePostPayload = GenericPostPayload & NewTypeDetailsPayload;
```

#### 4. إضافة API:
```typescript
// app/lib/postServices/postApi.ts
export const createNewTypePost = async (data: NewTypePostPayload) => {
  const cleanedData = cleanData(data);
  const response = await axiosInstance.post("accounts/posts/newtype/", cleanedData, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};
```

#### 5. إضافة Mutation:
```typescript
// app/lib/postServices/postMutations.ts
export function useCreateNewTypePost(setNotification: NotificationSetter) {
  // ... كود Mutation
}
```

#### 6. إنشاء Hook:
```typescript
// app/newpost/hooks/useSubmitNewTypePost.ts
export const useSubmitNewTypePost = () => {
  // ... كود Hook
};
```

#### 7. تحديث الصفحة الرئيسية:
```typescript
// app/newpost/page.tsx
import NewTypeForm from "./components/NewTypeForm";
import { useSubmitNewTypePost } from "./hooks/useSubmitNewTypePost";

// إضافة منطق العرض
const showNewTypeForm = category === "التصنيف" && subcategory === "النوع";

// إضافة معالج الإرسال
const handleNewTypeSubmit = async (data: NewTypeDetailsSchema) => {
  // ... كود الإرسال
};

// إضافة في JSX
{showNewTypeForm && (
  <div className="mt-8">
    <NewTypeForm onSubmit={handleNewTypeSubmit} />
  </div>
)}
```

#### 8. تحديث GenericPostForm:
```typescript
// إضافة prop جديد
isNewTypePost?: boolean;

// تحديث منطق الإرسال
if ((isCarPost || isLandPost || ... || isNewTypePost) && onSubmit) {
  onSubmit(data);
}
```

---

## 🐛 استكشاف الأخطاء

### مشاكل شائعة:

#### 1. خطأ 415 Unsupported Media Type:
**السبب**: عدم إرسال Content-Type header
**الحل**: تأكد من إضافة headers في API calls

#### 2. خطأ في تحويل البيانات:
**السبب**: عدم تنظيف البيانات قبل الإرسال
**الحل**: استخدم دالة cleanData

#### 3. خطأ في عرض الفورمات:
**السبب**: عدم تحديث منطق العرض
**الحل**: تأكد من تحديث showNewTypeForm

#### 4. خطأ في الإرسال:
**السبب**: عدم ربط الفورمات بشكل صحيح
**الحل**: تأكد من ربط onSubmit handlers

---

## 📝 ملاحظات مهمة

1. **ترتيب الإرسال**: دائماً الفورم العام أولاً ثم الفورم الخاص
2. **تنظيف البيانات**: استخدم دالة cleanData دائماً
3. **إدارة الحالة**: استخدم useState لإدارة البيانات المؤقتة
4. **الإشعارات**: دمج الإشعارات من جميع Hooks
5. **إعادة التعيين**: إعادة تعيين البيانات بعد النجاح
6. **التحقق**: استخدم Zod schemas للتحقق من البيانات
7. **الأخطاء**: تعامل مع الأخطاء بشكل مناسب
8. **التحميل**: عرض مؤشرات التحميل أثناء الإرسال

---

## 🚀 النشر

### على Vercel:
```bash
npm run build
vercel --prod
```

### على منصات أخرى:
```bash
npm run build
npm start
```

---

## 📞 الدعم

لأي استفسارات أو مشاكل، يرجى التواصل مع فريق التطوير.

---

*تم تطوير هذا المشروع باستخدام Next.js 14 و TypeScript و Tailwind CSS*
