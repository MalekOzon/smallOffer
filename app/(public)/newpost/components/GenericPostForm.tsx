"use client";

import { GenericPostPayload } from "@/app/lib/postServices/postType";
import { useForm } from "react-hook-form";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { useCreatePost } from "@/app/lib/postServices/postMutations";
import { useState } from "react";
import Notification from "@/app/components/ui/Notification";

interface GenericPostFormProps {
  Gcategory: string;
  Gsubcategory: string;
  disabled?: boolean;
}

export default function GenericPostForm({
  Gcategory,
  Gsubcategory,
}: GenericPostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenericPostPayload>();

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const createPost = useCreatePost(setNotification);
  const { isPending: isLoading } = createPost;

  const onSubmit = (data: GenericPostPayload) => {
    if (!Gcategory || !Gsubcategory) {
      setNotification({
        message: "يجب اختيار التصنيف العام والفرعي قبل إرسال الإعلان.",
        type: "error",
      });
      return;
    }
    setNotification(null);
    console.log("بيانات الإعلان العام:", JSON.stringify(data, null, 2));
    const jsonData = JSON.stringify({
      title: data.title,
      description: data.description,
      price: data.price,
      price_type: data.price_type || "fixed",
      city: data.city,
      hood: data.hood,
      detailed_location: data.detailed_location,
      cover_image: data.cover_image,
      gallery: null,
      category: Gcategory,
      subcategory: Gsubcategory,
    });
    console.log("json:", jsonData);

    createPost.mutate(JSON.parse(jsonData));
  };

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

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold text-lg rounded-xl py-4 w-full transition-colors duration-200 mt-6"
      >
        {isLoading ? "جار النشر ..." : "نشر"}
      </button>
    </form>
  );
}
