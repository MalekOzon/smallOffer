"use client";
import Notification from "@/app/components/ui/Notification";
import { useGetGenericPostId } from "@/app/lib/postServices/postQueries";
import { GenericPostPayload } from "@/app/lib/postServices/postType";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const EditGeneric = () => {
  const params = useParams();
  console.log("Params: ", params);
  const id = params.id as string | undefined;
  const getPostDetail = useGetGenericPostId(id);
  const { data, isLoading: isFetchingData } = getPostDetail;

  console.log("da   ", data);
  // State لتحديث البيانات القادمة من API والتعديل عليها
  const [formData, setFormData] = useState<Partial<GenericPostPayload>>({
    category: "",
    subcategory: "",
    title: "",
    description: "",
    price: "",
    price_type: "fixed",
    city: "",
    hood: "",
    detailed_location: "",
    cover_image: "",
    gallery: [],
  });

  // تحديث الحقول بمجرد استلام البيانات
  useEffect(() => {
    if (data) {
      setFormData({
        category: data.category || "",
        subcategory: data.subcategory || "",
        title: data.title || "",
        description: data.description || "",
        price: data.price || "",
        price_type: data.price_type || "fixed",
        city: data.city || "",
        hood: data.hood || "",
        detailed_location: data.detailed_location || "",
        cover_image: data.cover_image || "",
        gallery: data.gallery || [],
      });
    }
  }, [data]);

  // دالة لتحديث القيم في الحقول عند التعديل
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // دالة لإرسال البيانات بعد التعديل
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // إضافة البيانات إلى FormData
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (key === "gallery" && Array.isArray(value)) {
          value.forEach((file) => formDataToSend.append("gallery", file));
        } else if (key === "cover_image" && typeof window !== "undefined") {
          if (value instanceof File || value instanceof Blob) {
            formDataToSend.append("cover_image", value);
          }
        } else {
          formDataToSend.append(key, value.toString());
        }
      }
    });

    // هنا يمكنك إرسال البيانات باستخدام mutate أو أي دالة أخرى
    console.log(
      "Form Data to Submit:",
      Object.fromEntries(formDataToSend.entries())
    );
  };

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  return (
    <form onSubmit={onSubmit} className="w-full mx-auto space-y-10">
      {/* ------------- Noti -------------- */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      {/* العنوان والوصف */}
      <div className="mb-6 w-full">
        <h1 className="text-3xl font-bold mb-2 flex justify-start max-sm:text-2xl">
          تعديل الإعلان
        </h1>
        <p className="text-gray-600 flex justify-start max-sm:block">
          بنشرك تعديلاتك فإنك توافق على{" "}
          <a href="#" className="text-cgreen underline hover:text-chgreen mx-1">
            سياسة النشر
          </a>{" "}
          الخاصة بـ small-offer
        </p>
      </div>

      {/* تصنيف المنتج */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
        <h2 className="font-bold text-xl mb-2 text-gray-800">تصنيف المنتج</h2>
        <p className="text-gray-500 mb-4">
          اختر تصنيف المنتج الخاص بك مع العلم أن التفاصيل المدخلة تختلف بحسب
          التصنيف
        </p>
        <hr className="mb-6 text-clightgray" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              التصنيف
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              readOnly
              name="category"
              value={formData.category || ""}
              type="text"
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              التصنيف الفرعي
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              readOnly
              name="subcategory"
              value={formData.subcategory || ""}
              type="text"
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
            />
          </div>
        </div>
      </div>

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
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              اسم المنتج <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              name="title"
              value={formData.title || ""}
              onChange={handleInputChange}
              type="text"
              placeholder="اسم المنتج"
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
            />
          </div>
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              صور المنتج
            </label>
            <input
              type="file"
              multiple
              name="gallery"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                // إذا كان يجب رفع الملفات فعلياً، هنا ترفع وترجع روابطها
                // حالياً سنضع أسماء الملفات كنصوص فقط لتوافق النوع
                setFormData((prev) => ({
                  ...prev,
                  gallery: files.map((f) => f.name),
                }));
              }}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              المحافظة
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <select
              required
              name="city"
              value={formData.city || ""}
              onChange={handleInputChange}
              className="mt-1  w-full p-3 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{
                borderColor: "#277F60", // لون الحدود
              }}
            >
              <option value="">اختر الإدخال</option>
              {syrianGovernorates.map((gov) => (
                <option key={gov.value} value={gov.value}>
                  {gov.name}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              المنطقة <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              name="hood"
              value={formData.hood || ""}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              placeholder="المنطقة"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 sm:ml-16">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="block font-medium text-gray-700">
              تفاصيل العنوان
            </label>
            <input
              name="detailed_location"
              value={formData.detailed_location || ""}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              placeholder="تفاصيل العنوان"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:ml-16">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="block font-medium text-gray-700">
              وصف المنتج <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <textarea
              required
              name="description"
              value={formData.description || ""}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              placeholder="ادخل وصف المنتج هنا"
            />
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
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              سعر المنتج (السعر بالليرة السورية)
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              type="number"
              name="price"
              value={formData.price || ""}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              placeholder="ادخل سعر المنتج"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="block font-medium text-gray-700">
            نوع السعر <span className="text-red-500 text-xl mr-1">*</span>
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            <label className="ml-2 flex items-center gap-2 text-gray-700 cursor-pointer">
              <input
                required
                type="radio"
                name="price_type"
                value="negotiable"
                checked={formData.price_type === "negotiable"}
                onChange={handleInputChange}
                className="accent-cgreen"
              />
              <span>سعر قابل للتفاوض</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="price_type"
                value="fixed"
                checked={formData.price_type === "fixed"}
                onChange={handleInputChange}
                className="accent-cgreen"
              />
              <span>سعر ثابت</span>
            </label>
          </div>
        </div>
        <hr className="mt-6 mb-3 text-clightgray" />
        <div className="flex justify-end max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-4 mb-5">
          {/* زر "معاينة" */}
          <button
            type="button"
            onClick={() => (window.location.href = "/perview")}
            className="mt-8 ml-6 max-sm:ml-0 text-white rounded"
          >
            <span className="flex items-center group outline-2 outline-cgreen text-gray-800 hover:bg-chgreen hover:outline-chgreen hover:text-cwhite py-3 px-12 max-sm:px-[55px] rounded text-xl transition-all duration-300">
              معاينة
            </span>
          </button>
          {/* زر "إعادة نشر" */}
          <button
            type="submit"
            className="mt-8 ml-6 max-sm:ml-0 text-white rounded"
          >
            <span className="bg-cgreen hover:bg-chgreen py-3 px-32 max-sm:px-20 rounded text-xl transition-all duration-300">
              {isFetchingData ? "جارٍ التحميل ..." : "إعادة نشر"}
            </span>
          </button>
        </div>
      </section>
    </form>
  );
};

export default EditGeneric;
