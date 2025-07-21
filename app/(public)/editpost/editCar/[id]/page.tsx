"use client";
import { BRAND_CHOICES, COLOR_CHOICES, DOORS_CHOICES, EXTERNAL_FEATURES_CHOICES, FUEL_CHOICES, GEARBOX_CHOICES, INTERNAL_FEATURES_CHOICES, INTERNAL_MATERIALS_CHOICES, PROTECTION_CHOICES, STATUS_CHOICES, TYPE_CHOICES } from "@/app/(public)/newpost/components/CarForm";
import Button from "@/app/components/ui/Button";
import Notification from "@/app/components/ui/Notification";
import SkeletonNotificationSettings from "@/app/components/ui/SkeletonNotificationSettings";
import { useEditCarForm } from "@/app/lib/postServices/editPostMutation";
import { useGetCarPostId } from "@/app/lib/postServices/postQueries";
import { CarPostPayload } from "@/app/lib/postServices/postType";
import { categories } from "@/app/sections/categories";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { Search } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditCar = () => {
  const params = useParams();
  const id = params.id as string | undefined;

  const getPostDetail = useGetCarPostId(id);
  const { data, isLoading } = getPostDetail;

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const editCarForm = useEditCarForm(setNotification);
  const isPending = editCarForm.isPending;

  // عدل تعريف formData ليكون car: CarPostPayload['car'] | undefined
  const [formData, setFormData] = useState<Partial<CarPostPayload>>({
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
    car: undefined,
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
        offer_type: data.offer_type || "sell",
        car: data.car || {},
      });
      setIsSearch(data.offer_type === "search");
    }
  }, [data]);

  // دالة لتحديث القيم في الحقول عند التعديل
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const files = (e.target as HTMLInputElement).files;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? Array.from(files) : [],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // --- أضف دالة تغيير لحقول تفاصيل السيارة مع إصلاحات linter النهائية ---
  const handleCarInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const key = name.replace("car.", "") as keyof CarPostPayload['car'];
    setFormData((prev) => {
      // إذا لم تكن car موجودة، أنشئ نسخة افتراضية كاملة
      const baseCar: CarPostPayload['car'] = prev.car ?? {
        external_features: [],
        internal_features: [],
        protection: [],
        number_of_doors: "",
        hu: "",
        environmental_sticker: "",
        class_of_pollutants: "",
        color: "",
        internal_materials: "",
        brand: "",
        model: "",
        mileage: 0,
        status: "",
        first_registration: 0,
        fuel_type: "",
        performance: 0,
        gearbox: "",
        car_type: "",
      };
      const newCar: CarPostPayload['car'] = { ...baseCar };
      if (type === "checkbox") {
        const checked = (e.target as HTMLInputElement).checked;
        const arr = Array.isArray(newCar[key]) ? [...(newCar[key] as string[])] : [];
        if (checked) {
          if (!arr.includes(value)) arr.push(value);
        } else {
          const idx = arr.indexOf(value);
          if (idx > -1) arr.splice(idx, 1);
        }
        (newCar[key] as unknown) = arr;
      } else if (type === "number") {
        if (key === "mileage" || key === "first_registration" || key === "performance") {
          (newCar[key] as unknown) = value === "" ? 0 : Number(value);
        } else {
          (newCar[key] as unknown) = value;
        }
      } else {
        (newCar[key] as unknown) = value;
      }
      return { ...prev, car: newCar };
    });
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

  const [isSearch, setIsSearch] = useState<boolean | undefined>(false);

  // تحديث offer_type عند الضغط على الأزرار
  const handleOfferType = (type: "sell" | "search") => {
    setIsSearch(type === "search");
    setFormData((prev) => ({
      ...prev,
      offer_type: type,
    }));
  };

  // دالة الإرسال الصحيحة
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = formData;
    const form = new FormData();
    form.append("offer_type", data.offer_type ?? "sell");
    form.append("title", data.title ?? "");
    form.append("description", data.description ?? "");
    form.append("price", data.price ?? "");
    form.append("price_type", data.price_type ?? "fixed");
    form.append("city", data.city ?? "");
    form.append("hood", data.hood ?? "");
    form.append("category", data.category ?? "");
    form.append("subcategory", data.subcategory ?? "");
    form.append("detailed_location", data.detailed_location ?? "");


    if (data.cover_image && typeof window !== "undefined") {
      if (
        typeof data.cover_image === "object" &&
        "length" in data.cover_image &&
        typeof (data.cover_image as FileList).item === "function"
      ) {
        form.append("cover_image", (data.cover_image as FileList)[0]);
      } else if (isBlob(data.cover_image)) {
        form.append("cover_image", data.cover_image);
      } else if (typeof data.cover_image === "string") {
        form.append("cover_image", data.cover_image);
      }
    }
    const carDetails = {
      fuel_type: data.car?.fuel_type,
      color: data.car?.color,
      car_type: data.car?.car_type,
      brand: data.car?.brand,
      first_registration: data.car?.first_registration,
      model: data.car?.model,
      mileage: data.car?.mileage,
      internal_materials: data.car?.internal_materials,
      class_of_pollutants: data.car?.class_of_pollutants,
      hu: data.car?.hu,
      performance: data.car?.performance,
      external_features: Array.isArray(data.car?.external_features)
        ? data.car?.external_features
        : [],
      status: data.car?.status,
      number_of_doors: data.car?.number_of_doors,
      protection: Array.isArray(data.car?.protection) ? data.car?.protection : [],
      gearbox: data.car?.gearbox,
      environmental_sticker: data.car?.environmental_sticker,
      internal_features: Array.isArray(data.car?.internal_features)
        ? data.car?.internal_features
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

    form.append("car_details", JSON.stringify(cleanCarDetails));
    
    if (data.gallery && data.gallery.length > 0) {
      if (
        typeof globalThis.FileList !== "undefined" &&
        data.gallery instanceof globalThis.FileList
      ) {
        Array.from(data.gallery).forEach((img: File) => {
          form.append("gallery", img);
        });
      } else if (Array.isArray(data.gallery)) {
        (data.gallery as (File | string)[]).forEach((img) => {
          if (img instanceof File) {
            form.append("gallery", img);
          } else if (typeof img === "string") {
            form.append("gallery", img);
          }
        });
      }
    }
    if (!id) {
      setNotification({ message: "معرف الإعلان غير صالح.", type: "error" });
      return;
    }
    editCarForm.mutate({ formData: form, id });
  };

  function getArabicName(input: string): string | null {
    for (const category of categories) {
      if (category.slug === input) {
        return category.name;
      }

      for (const item of category.items) {
        if (item.slug === input) {
          return item.label;
        }
      }
    }
    return null;
  }

  if (isLoading) return <SkeletonNotificationSettings />;

  return (
    <div className="min-h-screen py-4 bg-gray-100  flex flex-col items-center">
      <form onSubmit={onSubmit} className="w-[90%]">
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
            <a
              href="#"
              className="text-cgreen underline hover:text-chgreen mx-1"
            >
              سياسة النشر
            </a>{" "}
            الخاصة بـ small-offer
          </p>
        </div>

        {/* تصنيف المنتج */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-xl mb-2 text-gray-800">تصنيف المنتج</h2>
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
                value={getArabicName(formData.category ?? "") || ""}
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
                value={getArabicName(formData.subcategory ?? "") || ""}
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
            أدخل معلومات الإعلان الأساسية لتظهر بوضوح للمشترين، مثل العنوان
            والوصف العام والموقع.
          </p>
          <div className=" mb-6 sm:ml-16 border-b border-clightgray">
            {/* SEARCH || SELL */}
            <h3 className="font-medium mb-3 mt-6 text-lg text-gray-700">
              نوع المنشور
              <span className="text-red-500 text-xl mr-1">*</span>
            </h3>
            <div className="w-full mt-2 max-w-sm  border-2 border-clightgray p-1.5 rounded-xl mb-6 flex">
              <Button
                type="button"
                className="w-1/2 text-6 font-semibold"
                variant={isSearch === false ? "primary" : "none"}
                onClick={() => handleOfferType("sell")}
              >
                أنا أعرض
              </Button>
              <Button
                type="button"
                className="w-1/2 text-6 font-semibold"
                variant={isSearch === true ? "primary" : "none"}
                onClick={() => handleOfferType("search")}
              >
                أنا أبحث
              </Button>
            </div>
          </div>

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
                onChange={handleInputChange}
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
        </section>
        <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6">
        <h2 className="text-xl font-bold mb-4">تفاصيل السيارة</h2>
        {/* ---------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">الماركة
            <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <select
            required
              name="car.brand"
              value={formData.car?.brand || ""}
              onChange={handleCarInputChange}
              className="mt-1  w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{ borderColor: "#277F60" }}
              dir="rtl"
            >
              <option value="">اختر الماركة</option>
              {BRAND_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">الموديل</label>
            <input
              name="car.model"
              value={formData.car?.model || ""}
              onChange={handleCarInputChange}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              dir="rtl"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              عدد الكيلومترات
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
            required
              type="number"
              name="car.mileage"
              value={formData.car?.mileage || ""}
              onChange={handleCarInputChange}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              dir="rtl"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">الأداء</label>
            <input
            type="number"
              name="car.performance"
              value={formData.car?.performance || ""}
              onChange={handleCarInputChange}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              dir="rtl"
              placeholder="مثال: 150 حصان"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">اللون</label>
            <select
              name="car.color"
              value={formData.car?.color || ""}
              onChange={handleCarInputChange}
              className="mt-1  w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{ borderColor: "#277F60" }}
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

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              تاريخ التسجيل الأول
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
            required
              type="number"
              name="car.first_registration"
              value={formData.car?.first_registration || ""}
              onChange={handleCarInputChange}
              className="mt-1  w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{ borderColor: "#277F60" }}
              dir="rtl"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              تاريخ الفحص الفني
            </label>
            <input
              type="date"
              name="car.hu"
              value={formData.car?.hu || ""}
              onChange={handleCarInputChange}
              className="mt-1  w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{ borderColor: "#277F60" }}
              dir="rtl"
            />

          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              ملصق البيئة
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
            required
              name="car.environmental_sticker"
              value={formData.car?.environmental_sticker || ""}
              onChange={handleCarInputChange}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              dir="rtl"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              فئة الملوثات
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
            required
              name="car.class_of_pollutants"
              value={formData.car?.class_of_pollutants || ""}
              onChange={handleCarInputChange}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              dir="rtl"
            />
          </div>
        </div>

        {/* حقول المصفوفات -------------------------------------------------------------------------------------*/}
        <div className="space-y-4 mt-6">
          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              اختر حالة السيارة
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            {/* قائمة الخيارات */}
            <div className="flex flex-wrap gap-4 mt-2">
              {STATUS_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                  required
                    type="radio"
                    value={value}
                    name="car.status"
                    checked={formData.car?.status === value}
                    onChange={handleCarInputChange}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              اختر ناقل الحركة
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            {/* قائمة الخيارات */}
            <div className="flex flex-wrap gap-4 mt-2">
              {GEARBOX_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                  required
                    type="radio"
                    value={value}
                    name="car.gearbox"
                    checked={formData.car?.gearbox === value}
                    onChange={handleCarInputChange}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
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
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    name="car.number_of_doors"
                    checked={formData.car?.number_of_doors === value}
                    onChange={handleCarInputChange}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
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
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    name="car.internal_materials"
                    checked={formData.car?.internal_materials === value}
                    onChange={handleCarInputChange}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            {/* اختيار نوع الوقود */}
            <label className="block font-medium text-gray-700">
              اختر نوع الوقود
              <span className="text-red-500 text-xl mr-1">*</span>  
            </label>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {FUEL_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  {" "}
                  <input
                  required
                    type="radio"
                    value={value}
                    name="car.fuel_type"
                    checked={formData.car?.fuel_type === value}
                    onChange={handleCarInputChange}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
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
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    name="car.car_type"
                    checked={formData.car?.car_type === value}
                    onChange={handleCarInputChange}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              أنظمة الحماية
            </label>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {PROTECTION_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={value}
                    name="car.protection"
                    checked={Array.isArray(formData.car?.protection) && formData.car.protection.includes(value)}
                    onChange={handleCarInputChange}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              المميزات الخارجية
            </label>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {EXTERNAL_FEATURES_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={value}
                    name="car.external_features"
                    checked={Array.isArray(formData.car?.external_features) && formData.car.external_features.includes(value)}
                    onChange={handleCarInputChange}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              المميزات الداخلية
            </label>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {INTERNAL_FEATURES_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={value}
                    name="car.internal_features"
                    checked={Array.isArray(formData.car?.internal_features) && formData.car.internal_features.includes(value)}
                    onChange={handleCarInputChange}
                  />
                  {label}
                </label>
              ))}
            </div>
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
              <Search />
            </span>
          </button>
          {/* زر "إعادة نشر" */}
          <button
            type="submit"
            className="mt-8 ml-6 max-sm:ml-0 text-white rounded"
          >
            <span className="bg-cgreen hover:bg-chgreen py-3 px-32 max-md:px-20 rounded text-xl transition-all duration-300">
              {isPending ? "جارٍ النشر ..." : "إعادة نشر"}
            </span>
          </button>
        </div>
        </section>
      </form>
    </div>
  );
};

export default EditCar;
