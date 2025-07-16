import { useForm } from "react-hook-form";
import { CarPostPayload } from "@/app/lib/postServices/postType";
import { useState } from "react";
import { useCreateCarPost } from "@/app/lib/postServices/postMutations";
import Notification from "@/app/components/ui/Notification";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";

interface GenericPostFormProps {
  Gcategory: string;
  Gsubcategory: string;
}

export default function CarForm({
  Gcategory,
  Gsubcategory,
}: GenericPostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CarPostPayload>({});

  // --- القوائم المرجعية ---
  const EXTERNAL_FEATURES_CHOICES = [
    ["alloy_wheels", "عجلات معدنية"],
    ["xenon_headlights", "مصابيح أمامية زينون"],
    ["parking_assist", "مساعدة ركن سيارة"],
    ["trailer_hitch", "وصلة مقطورة"],
  ];
  const INTERNAL_FEATURES_CHOICES = [
    ["ac", "تكييف"],
    ["navigation", "نظام ملاحة"],
    ["radio_tuner", "راديو/موالف"],
    ["bluetooth", "بلوتوث"],
    ["seat_heating", "تدفئة المقعد"],
    ["cruise_control", "مثبت السرعة"],
    ["handsfree", "نظام حر اليدين"],
    ["sunroof", "فتحة سقف/سقف بانورامي"],
    ["non_smoking", "مركبة خالية من التدخين"],
  ];
  const PROTECTION_CHOICES = [
    ["service_book", "تم صيانة دفتر الخدمة"],
    ["abs", "نظام المكابح المانعة للانزلاق ABS"],
  ];
  const STATUS_CHOICES = [
    ["damaged", "متضررة"],
    ["undamaged", "غير متضررة"],
  ];
  const FUEL_CHOICES = [
    ["gasoline", "بنزين"],
    ["diesel", "ديزل"],
    ["electric", "كهربائي"],
    ["hybrid", "هجين"],
    ["lpg", "غاز البترول المسال"],
    ["cng", "الغاز الطبيعي"],
  ];
  const GEARBOX_CHOICES = [
    ["manual", "غيار يدوي"],
    ["automatic", "غيار أوتوماتيك"],
  ];
  const TYPE_CHOICES = [
    ["small_car", "سيارة صغيرة"],
    ["limousine", "ليموزين"],
    ["station", "ستيشن"],
    ["sports", "سيارة رياضية"],
    ["van_bus", "فان/حافلة"],
    ["coupe", "كوبيه"],
    ["other", "أنواع أخرى"],
  ];
  const DOORS_CHOICES = [
    ["two_three", "2/3"],
    ["four_five", "4/5"],
    ["six_seven", "6/7"],
    ["other_doors", "عدد مختلف من الأبواب"],
  ];
  const COLOR_CHOICES = [
    ["beige", "بيج"],
    ["blue", "أزرق"],
    ["brown", "بني"],
    ["yellow", "أصفر"],
    ["gold", "ذهبي"],
    ["gray", "رمادي"],
    ["green", "أخضر"],
    ["orange", "برتقالي"],
    ["red", "أحمر"],
    ["black", "أسود"],
    ["silver", "فضي"],
    ["purple", "بنفسجي"],
    ["white", "أبيض"],
    ["other", "ألوان أخرى"],
  ];
  const INTERNAL_MATERIALS_CHOICES = [
    ["full_leather", "جلد كامل"],
    ["partial_leather", "جلد جزئي"],
    ["fabric", "قماش"],
    ["velvet", "مخمل"],
    ["other_materials", "مواد أخرى"],
  ];
  const BRAND_CHOICES = [
    ["alfa_romeo", "ألفا روميو"],
    ["audi", "أودي"],
    ["bmw", "بي ام دبليو"],
    ["chevrolet", "شيفروليه"],
    ["chrysler", "كرايسلر"],
    ["citroen", "سيتروين"],
    ["dacia", "داسيا"],
    ["daewoo", "دايو"],
    ["daihatsu", "دايهاتسو"],
    ["fiat", "فيات"],
    ["ford", "فورد"],
    ["honda", "هوندا"],
    ["hyundai", "هيونداي"],
    ["jaguar", "جاكوار"],
    ["jeep", "جيب"],
    ["kia", "كيا"],
    ["lada", "لادا"],
    ["lancia", "لانشيا"],
    ["land_rover", "لاند روفر"],
    ["lexus", "لكزس"],
    ["mazda", "مازدا"],
    ["mercedes_benz", "مرسيدس بنز"],
    ["mini", "ميني"],
    ["mitsubishi", "ميتسوبيشي"],
    ["nissan", "نيسان"],
    ["opel", "أوبل"],
    ["peugeot", "بيجو"],
    ["porsche", "بورشه"],
    ["renault", "رينو"],
    ["spaceship", "مركبة فضائية"],
    ["saab", "ساب"],
    ["seat", "سيات"],
    ["skoda", "سكودا"],
    ["smart", "ذكي"],
    ["subaru", "سوبارو"],
    ["suzuki", "سوزوكي"],
    ["tesla", "تسلا"],
    ["toyota", "تويوتا"],
    ["trabant", "ترابانت"],
    ["volkswagen", "فولكس فاجن"],
    ["volvo", "فولفو"],
    ["other", "ماركات السيارات الأخرى"],
  ];

  console.log({
    category: Gcategory,
    subcategory: Gsubcategory,
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const createCarPost = useCreateCarPost(setNotification);
  const { isPending: isLoading } = createCarPost;

  const onSubmit = (data: CarPostPayload) => {
    console.log("daTA: ", data);
    const formData = new FormData();

    formData.append("title", data.title ?? "");
    formData.append("description", data.description ?? "");
    formData.append("price", data.price ?? "");
    formData.append("price_type", data.price_type ?? "fixed");
    formData.append("city", data.city ?? "");
    formData.append("hood", data.hood ?? "");
    formData.append("detailed_location", data.detailed_location ?? "");

    if (data.cover_image && typeof window !== "undefined") {
      if (
        typeof data.cover_image === "object" &&
        "length" in data.cover_image &&
        typeof (data.cover_image as FileList).item === "function"
      ) {
        // Likely a FileList
        formData.append("cover_image", (data.cover_image as FileList)[0]);
      } else if (isBlob(data.cover_image)) {
        // File inherits from Blob
        formData.append("cover_image", data.cover_image);
      }
    }

    formData.append("category", Gcategory);
    formData.append("subcategory", Gsubcategory);

    const carDetails = {
      fuel_type: data.car.fuel_type,
      color: data.car.color,
      car_type: data.car.car_type,
      brand: data.car.brand,
      first_registration: data.car.first_registration,
      model: data.car.model,
      mileage: data.car.mileage,
      internal_materials: data.car.internal_materials,
      class_of_pollutants: data.car.class_of_pollutants,
      hu: data.car.hu,
      performance: data.car.performance,
      external_features: Array.isArray(data.car.external_features)
        ? data.car.external_features
        : [],
      status: data.car.status,
      number_of_doors: data.car.number_of_doors,
      protection: Array.isArray(data.car.protection) ? data.car.protection : [],
      gearbox: data.car.gearbox,
      environmental_sticker: data.car.environmental_sticker,
      internal_features: Array.isArray(data.car.internal_features)
        ? data.car.internal_features
        : [],
    };

    // تنظيف البيانات وإزالة القيم الفارغة
    const cleanCarDetails: Record<string, unknown> = {};
    Object.entries(carDetails).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            cleanCarDetails[key] = value;
          }
        } else {
          cleanCarDetails[key] = value;
        }
      }
    });

    formData.append("car_details", JSON.stringify(cleanCarDetails));

    if (data.gallery && data.gallery.length > 0) {
      if (
        typeof globalThis.FileList !== "undefined" &&
        data.gallery instanceof globalThis.FileList
      ) {
        Array.from(data.gallery).forEach((img: File) => {
          formData.append("gallery", img);
        });
      } else if (Array.isArray(data.gallery)) {
        (data.gallery as string[]).forEach((img) => {
          formData.append("gallery", img);
        });
      }
    }

    createCarPost.mutate(formData);
  };

  function isBlob(obj: unknown): obj is Blob {
    return (
      typeof window !== "undefined" &&
      typeof obj === "object" &&
      obj !== null &&
      typeof window.Blob !== "undefined" &&
      obj instanceof window.Blob
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto space-y-10"
    >
      {/* ------------- Noti -------------- */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      {/* معلومات أساسية */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6">
        <h2 className="font-bold text-xl text-gray-800 mb-2 text-right">
          معلومات أساسية
        </h2>
        <p className="text-gray-600 mb-6 text-right">
          أدخل معلومات الإعلان الأساسية لتظهر بوضوح للمشترين، مثل العنوان والوصف
          العام والموقع.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="block font-medium text-gray-700">
              اسم المنتج
            </label>
            <input
              {...register("title")}
              className="input w-full border-2 border-cgreen bg-cwhite  text-gray-800 rounded-lg px-4 py-3  focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="اسم المنتج"
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.title.message)}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="block font-medium text-gray-700">
              صور المنتج
            </label>
            <input
              type="file"
              multiple
              {...register("gallery")}
              className="input w-full border-2 border-cgreen bg-cwhite  text-gray-800 rounded-lg px-4 py-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="block font-medium text-gray-700">المحافظة</label>
            <select
              {...register("city")}
              className="input w-full border-2 border-cgreen bg-cwhite  text-gray-800 rounded-lg px-4 py-3"
            >
              <option value="">اختر الإدخال</option>
              {syrianGovernorates.map((gov) => (
                <option key={gov.value} value={gov.value}>
                  {gov.name}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.city.message)}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="block font-medium text-gray-700">المنطقة</label>
            <input
              {...register("hood")}
              className="input w-full border-2 border-cgreen bg-cwhite  text-gray-800 rounded-lg px-4 py-3"
              placeholder="المنطقة"
            />
            {errors.hood && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.hood.message)}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="block font-medium text-gray-700">
              تفاصيل العنوان
            </label>
            <input
              {...register("detailed_location")}
              className="input w-full border-2 border-cgreen bg-cwhite  text-gray-800 rounded-lg px-4 py-3"
              placeholder="تفاصيل العنوان"
            />
            {errors.detailed_location && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.detailed_location.message)}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="block font-medium text-gray-700">
              وصف المنتج
            </label>
            <textarea
              {...register("description")}
              className="input w-full h-28 border-2 border-cgreen bg-cwhite  text-gray-800 rounded-lg px-4 py-3  focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              placeholder="ادخل وصف المنتج هنا"
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.description.message)}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* سعر المنتج */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h2 className="font-bold text-xl text-gray-800 mb-2 text-right">
          سعر المنتج
        </h2>
        <p className="text-gray-600 mb-6 text-right">
          حدد سعر الإعلان أو اختر إذا كان قابل للتفاوض، وسيساعد المستخدمين على
          معرفة القيمة بسهولة.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="block font-medium text-gray-700">
              سعر المنتج (السعر بالليرة السورية)
            </label>
            <input
              {...register("price")}
              className="input w-full border-2 border-cgreen bg-cwhite  text-gray-800 rounded-lg px-4 py-3  focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="ادخل سعر المنتج"
            />
            {errors.price && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.price.message)}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="block font-medium text-gray-700">نوع السعر</label>
          <div className="flex gap-8 mt-3">
            <label className="flex items-center gap-3 text-gray-700 cursor-pointer">
              <input
                type="radio"
                value="negotiable"
                {...register("price_type")}
                className="accent-cgreen"
              />
              <span>سعر قابل للتفاوض</span>
            </label>
            <label className="flex items-center gap-3 text-gray-700 cursor-pointer">
              <input
                type="radio"
                value="fixed"
                {...register("price_type")}
                className="accent-cgreen"
              />
              <span>سعر ثابت</span>
            </label>
          </div>
          {errors.price_type && (
            <p className="text-red-600 text-sm mt-1">
              {String(errors.price_type.message)}
            </p>
          )}
        </div>
      </section>
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6">
        <h2 className="text-xl font-bold mb-4">تفاصيل السيارة</h2>
{/* ---------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">الماركة *</label>
            <select
              {...register("car.brand")}
              className="mt-1 w-full p-2 border rounded-md bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent"
              style={{
                borderColor: "#34A278", // لون الحدود
              }}
              dir="rtl"
            >
              <option value="">اختر الماركة</option>
              {BRAND_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.car?.brand && (
              <p className="text-red-500 text-sm">
                {errors.car?.brand.message}
              </p>
            )}
          </div>
          {/* --------------------- */}

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">الموديل</label>
            <input
              {...register("car.model")}
              className="input w-full border border-cgreen bg-cwhite"
              dir="rtl"
            />
            {errors.car?.model && (
              <p className="text-red-500 text-sm">
                {errors.car?.model.message}
              </p>
            )} 
          </div>
 
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              عدد الكيلومترات *
            </label>
            <input
              type="number"
              {...register("car.mileage", { valueAsNumber: true })}
              className="input w-full border border-cgreen bg-cwhite"
              dir="rtl"
            />
            {errors.car?.mileage && (
              <p className="text-red-500 text-sm">
                {errors.car?.mileage.message}
              </p>
            )}
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">الأداء</label>
            <input
              {...register("car.performance")}
              className="input w-full border border-cgreen bg-cwhite"
              dir="rtl"
              placeholder="مثال: 150 حصان"
            />
            {errors.car?.performance && (
              <p className="text-red-500 text-sm">
                {errors.car?.performance.message}
              </p>
            )}
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">اللون</label>
            <select
              {...register("car.color")}
              className="input w-full border border-cgreen bg-cwhite"
              dir="rtl"
            >
              <option value="">اختر اللون</option>
              {COLOR_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.car?.color && (
              <p className="text-red-500 text-sm">
                {errors.car?.color.message}
              </p>
            )}
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              تاريخ التسجيل الأول
            </label>
            <input
              type="date"
              {...register("car.first_registration")}
              className="input w-full border border-cgreen bg-cwhite"
              dir="rtl"
            />
            {errors.car?.first_registration && (
              <p className="text-red-500 text-sm">
                {errors.car?.first_registration.message}
              </p>
            )}
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              تاريخ الفحص الفني
            </label>
            <input
              type="date"
              {...register("car.hu")}
              className="input w-full border border-cgreen bg-cwhite"
              dir="rtl"
            />
            {errors.car?.hu && (
              <p className="text-red-500 text-sm">{errors.car?.hu.message}</p>
            )}
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              ملصق البيئة
            </label>
            <input
              {...register("car.environmental_sticker")}
              className="input w-full border border-cgreen bg-cwhite"
              dir="rtl"
            />
            {errors.car?.environmental_sticker && (
              <p className="text-red-500 text-sm">
                {errors.car?.environmental_sticker.message}
              </p>
            )}
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              فئة الملوثات
            </label>
            <input
              {...register("car.class_of_pollutants")}
              className="input w-full border border-cgreen bg-cwhite"
              dir="rtl"
            />
            {errors.car?.class_of_pollutants && (
              <p className="text-red-500 text-sm">
                {errors.car?.class_of_pollutants.message}
              </p>
            )}
          </div>
        </div>

        {/* حقول المصفوفات -------------------------------------------------------------------------------------*/}
        <div className="space-y-4 mt-6">
          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            {/* عنوان اختيار ناقل الحركة */}
            <label className="block font-medium text-gray-700">
              اختر حالة السيارة
            </label>
            {/* قائمة الخيارات */}
            <div className="flex flex-wrap gap-4 mt-2">
              {STATUS_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-3 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("car.status")} // اسم الحقل في النموذج
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {/* عرض رسالة الخطأ إذا كانت موجودة */}
            {errors.car?.gearbox && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.car?.gearbox.message)}
              </p>
            )}
          </div>
          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            {/* عنوان اختيار ناقل الحركة */}
            <label className="block font-medium text-gray-700">
              اختر ناقل الحركة
            </label>
            {/* قائمة الخيارات */}
            <div className="flex flex-wrap gap-4 mt-2">
              {GEARBOX_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-3 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("car.gearbox")} // اسم الحقل في النموذج
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {/* عرض رسالة الخطأ إذا كانت موجودة */}
            {errors.car?.gearbox && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.car?.gearbox.message)}
              </p>
            )}
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            {/* عنوان اختيار  عدد الأبواب */}
            <label className="block font-medium text-gray-700">
              عدد الأبواب
            </label>
            {/* قائمة الخيارات */}
            <div className="flex flex-wrap gap-4 mt-2">
              {DOORS_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-3 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("car.number_of_doors")} // اسم الحقل في النموذج
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {/* عرض رسالة الخطأ إذا كانت موجودة */}
            {errors.car?.gearbox && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.car?.gearbox.message)}
              </p>
            )}
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            {/* عنوان اختيار المواد الداخلية */}
            <label className="block font-medium text-gray-700">
              المواد الداخلية
            </label>
            {/* قائمة الخيارات */}
            <div className="flex flex-wrap gap-4 mt-2">
              {INTERNAL_MATERIALS_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-3 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("car.internal_materials")} // اسم الحقل في النموذج
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {/* عرض رسالة الخطأ إذا كانت موجودة */}
            {errors.car?.gearbox && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.car?.gearbox.message)}
              </p>
            )}
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            {/* اختيار نوع الوقود */}
            <label className="block font-medium text-gray-700">
              اختر نوع الوقود
            </label>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {FUEL_CHOICES.map(([value, label]) => (
                <label key={value} className="flex items-center gap-1 ml-3">
                  <input
                    type="radio"
                    value={value}
                    {...register("car.fuel_type")} // اسم الحقل في النموذج
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {errors.car?.fuel_type && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.car?.fuel_type.message)}
              </p>
            )}
          </div>
          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            {/* عنوان اختيار نوع السيارة */}
            <label className="block font-medium text-gray-700">
              نوع السيارة
            </label>
            {/* قائمة الخيارات */}
            <div className="flex flex-wrap gap-4 mt-2">
              {TYPE_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-3 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("car.car_type")} // اسم الحقل في النموذج
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {/* عرض رسالة الخطأ إذا كانت موجودة */}
            {errors.car?.gearbox && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.car?.gearbox.message)}
              </p>
            )}
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              أنظمة الحماية
            </label>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {PROTECTION_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-3 text-gray-700 cursor-pointer"
                >
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={value}
                    {...register("car.protection")}
                  />
                  {label}
                </label>
              ))}
            </div>
            {errors.car?.protection && (
              <p className="text-red-500 text-sm">
                {errors.car?.protection.message}
              </p>
            )}
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              المميزات الخارجية
            </label>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {EXTERNAL_FEATURES_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-3 text-gray-700 cursor-pointer"
                >
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={value}
                    {...register("car.external_features")}
                  />
                  {label}
                </label>
              ))}
            </div>
            {errors.car?.external_features && (
              <p className="text-red-500 text-sm">
                {errors.car?.external_features.message}
              </p>
            )}
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              المميزات الداخلية
            </label>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {INTERNAL_FEATURES_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 mx-1 text-gray-700 cursor-pointer"
                >
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={value}
                    {...register("car.internal_features")}
                  />
                  {label}
                </label>
              ))}
            </div>
            {errors.car?.internal_features && (
              <p className="text-red-500 text-sm">
                {errors.car?.internal_features.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-2 max-sm:mt-3 ">
          <button
            type="submit"
            className="mt-8 ml-6 max-sm:ml-0 text-white rounded"
          >
            <span className="outline-2 outline-cgreen text-gray-800 hover:bg-chgreen hover:outline-chgreen hover:text-cwhite py-3 px-[100px] max-sm:px-[140px]  rounded text-xl">
              معاينة
            </span>
          </button>

          <button type="submit" className="mt-8 text-white rounded  ">
            <span className="bg-cgreen hover:bg-chgreen py-3 px-[150px] rounded text-xl">
              {isLoading ? "جار النشر ..." : "نشر"}
            </span>
          </button>
        </div>
      </section>
    </form>
  );
}
