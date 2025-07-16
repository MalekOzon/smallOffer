import { useForm } from "react-hook-form";

import { useState } from "react";
import { MobilePostPayload } from "@/app/lib/postServices/postType";
import { useCreateMobilePost } from "@/app/lib/postServices/postMutations";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import Notification from "@/app/components/ui/Notification";

interface PostFormProps {
  Gcategory: string;
  Gsubcategory: string;
}

export default function MobileForm({ Gcategory, Gsubcategory }: PostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MobilePostPayload>({});

  const STATUS_CHOICES = [
    ["new", "جديد"],
    ["used_very_good", "مستعمل جيد جداً"],
    ["working_good", "يعمل بشكل جيد"],
    ["defective", "عيب (يحتاج صيانة)"],
  ];
  const COLOR_CHOICES = [
    ["silver", "فضي"],
    ["white", "أبيض"],
    ["blue", "أزرق"],
    ["gray", "رمادي"],
    ["yellow", "أصفر"],
    ["brown", "بني"],
    ["black", "أسود"],
    ["gold", "ذهبي"],
    ["pink", "زهري"],
    ["orange", "برتقالي"],
    ["red", "أحمر"],
    ["green", "أخضر"],
    ["purple", "بنفسجي"],
    ["beige", "بيج"],
    ["other", "ألوان أخرى"],
  ];

  console.log({
    category: Gcategory,
    subcategory: Gsubcategory,
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const createMobilePost = useCreateMobilePost(setNotification);
  const { isPending: isLoading } = createMobilePost;

  const onSubmit = (data: MobilePostPayload) => {
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

    const mobileDetails = {
      status: data.mobile.status,
      brand: data.mobile.brand,
      color: data.mobile.color,
      accessories: data.mobile.accessories,
    };

    formData.append("mobile_details", JSON.stringify(mobileDetails));

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

    createMobilePost.mutate(formData);
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
      <h2 className="font-bold text-lg mb-2">تفاصيل الموبايل</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">الماركة</label>
          <input
            {...register("mobile.brand")}
            className="input w-full"
            placeholder="مثال: Samsung, Apple, Huawei"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">حالة الجهاز</label>
          <select
            {...register("mobile.status")}
            className="input w-full"
            dir="rtl"
          >
            <option value="">اختر حالة الموبايل </option>
            {STATUS_CHOICES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">لون الموبايل</label>
          <select
            {...register("mobile.color")}
            className="input w-full"
            dir="rtl"
          >
            <option value="">اختر اللون</option>
            {COLOR_CHOICES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* الملحقات */}
      <div className="border-t pt-4">
        <h3 className="font-medium mb-3">الملحقات المتوفرة</h3>
        <div className=" ">
          <label className="flex items-center gap-3 text-gray-700 cursor-pointer">
            <input
              type="radio"
              value="true"
              {...register("mobile.accessories")}
              className="accent-green-500"
            />
            <span>هل معه ملحقات</span>
          </label>

          <label className="flex items-center gap-3 text-gray-700 cursor-pointer">
            <input
              type="radio"
              value="false"
              {...register("mobile.accessories")}
              className="accent-green-500"
            />
            <span>لا يوجد ملحقات</span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
      >
        {isLoading ? "جار نشر الإعلان ..." : "نشر"}
      </button>
    </form>
  );
}
