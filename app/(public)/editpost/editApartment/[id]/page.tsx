"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useGetApartmentPostId } from "@/app/lib/postServices/postQueries";
import { useEditApartmentForm } from "@/app/lib/postServices/editPostMutation";
import { ApartmentPostPayload } from "@/app/lib/postServices/postType";
import Notification from "@/app/components/ui/Notification";
import Button from "@/app/components/ui/Button";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { categories } from "@/app/sections/categories";
import SkeletonNotificationSettings from "@/app/components/ui/SkeletonNotificationSettings";
import { FURNITURE_CHOICES, GENERAL_CHARACTERISTICS, OFFER_TYPE_CHOICES } from "@/app/(public)/newpost/components/ApartmentForm";

const EditApartment = () => {
  const params = useParams();
  const id = params.id as string | undefined;
  const { data, isLoading } = useGetApartmentPostId(id);

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const editApartmentForm = useEditApartmentForm(setNotification);
  const isPending = editApartmentForm.isPending;

  const [formData, setFormData] = useState<Partial<ApartmentPostPayload>>({
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
    offer_type: "sell",
    apartment: {
      real_estate_space: 0,
      available_from: "",
      general_characteristics: [],
      floor: 0,
      furniture: [],
      bath: undefined,
      bed_room: undefined,
      room: 0,
      year: undefined,
      offer_type: "sale",
    },
  });

  const [isSearch, setIsSearch] = useState<boolean | undefined>(false);

  useEffect(() => {
    if (data) {
      setFormData({
        ...data,
        apartment: {
          ...data.apartment,
          general_characteristics: data.apartment?.general_characteristics || [],
          furniture: data.apartment?.furniture || [],
        },
      });
      setIsSearch(data.offer_type === "search");
    }
  }, [data]);

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

  const handleApartmentInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const key = name.replace("apartment.", "") as keyof ApartmentPostPayload["apartment"];
    setFormData((prev) => {
      const baseApartment: ApartmentPostPayload["apartment"] = prev.apartment ?? {
        real_estate_space: 0,
        available_from: "",
        general_characteristics: [],
        floor: 0,
        furniture: [],
        bath: undefined,
        bed_room: undefined,
        room: 0,
        year: undefined,
        offer_type: "sale",
      };
      const newApartment: ApartmentPostPayload["apartment"] = { ...baseApartment };
      if (type === "checkbox") {
        const checked = (e.target as HTMLInputElement).checked;
        const arr = Array.isArray(newApartment[key]) ? [...(newApartment[key] as string[])] : [];
        if (checked) {
          if (!arr.includes(value)) arr.push(value);
        } else {
          const idx = arr.indexOf(value);
          if (idx > -1) arr.splice(idx, 1);
        }
        (newApartment[key] as unknown) = arr;
      } else if (type === "number") {
        (newApartment[key] as unknown) = value === "" ? undefined : Number(value);
      } else {
        (newApartment[key] as unknown) = value;
      }
      return { ...prev, apartment: newApartment };
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

  // تحديث offer_type عند الضغط على الأزرار
  const handleOfferType = (type: "sell" | "search") => {
    setIsSearch(type === "search");
    setFormData((prev) => ({
      ...prev,
      offer_type: type,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) {
      setNotification({ message: "معرف الإعلان غير صالح.", type: "error" });
      return;
    }
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
    // Apartment details
    const apartmentDetails = {
      real_estate_space: data.apartment?.real_estate_space,
      available_from: data.apartment?.available_from,
      general_characteristics: data.apartment?.general_characteristics,
      floor: data.apartment?.floor,
      furniture: data.apartment?.furniture,
      bath: data.apartment?.bath,
      bed_room: data.apartment?.bed_room,
      room: data.apartment?.room,
      year: data.apartment?.year,
      offer_type: data.apartment?.offer_type,
    };
    form.append("apartment_details", JSON.stringify(apartmentDetails));
    editApartmentForm.mutate({ formData: form, id });
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
    <div className="min-h-screen py-4 bg-gray-100 flex flex-col items-center">
      <form onSubmit={onSubmit} className="w-[90%]">
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
            تعديل إعلان الشقة
          </h1>
          <p className="text-gray-600 flex justify-start max-sm:block">
            بنشرك تعديلاتك فإنك توافق على {" "}
            <a href="#" className="text-cgreen underline hover:text-chgreen mx-1">
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
          <h2 className="font-bold text-xl text-gray-800 mb-2 text-right">معلومات أساسية</h2>
          <p className="text-gray-600 mb-6 text-right">
            أدخل معلومات الإعلان الأساسية لتظهر بوضوح للمشترين، مثل العنوان والوصف العام والموقع.
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
              <label className="block font-medium text-gray-700">صور المنتج</label>
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
                style={{ borderColor: "#277F60" }}
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
              <label className="block font-medium text-gray-700">تفاصيل العنوان</label>
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
          <h2 className="font-bold text-xl text-gray-800 mb-2 text-right">سعر المنتج</h2>
          <p className="text-gray-600 mb-6 text-right">
            حدد سعر الإعلان أو اختر إذا كان قابل للتفاوض، وسيساعد المستخدمين على معرفة القيمة بسهولة.
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
        {/* تفاصيل الشقة */}
        <section className="rounded-2xl shadow-lg border bg-white border-gray-200 p-8 mb-6 w-full">
          <h2 className="font-bold text-lg mb-2">تفاصيل الشقة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="sm:ml-16">
              <label className="block font-medium text-gray-700">نوع العرض <span className="text-red-500 text-xl mr-1">*</span></label>
              <select
                required
                name="apartment.offer_type"
                value={formData.apartment?.offer_type || ""}
                onChange={handleApartmentInputChange}
                className="mt-2  w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-cdarkgray focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
                style={{ borderColor: "#277F60" }}
                dir="rtl"
              >
                <option value="">اختر نوع العرض</option>
                {OFFER_TYPE_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:ml-16">
              <label className="block font-medium text-gray-700">المساحة العقارية (م²) <span className="text-red-500 text-xl mr-1">*</span></label>
              <input
                required
                type="number"
                name="apartment.real_estate_space"
                value={formData.apartment?.real_estate_space || ""}
                onChange={handleApartmentInputChange}
                className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                min={0}
              />
            </div>
            <div className="sm:ml-16">
              <label className="block font-medium text-gray-700">عدد الغرف <span className="text-red-500 text-xl mr-1">*</span></label>
              <input
                required
                type="number"
                name="apartment.room"
                value={formData.apartment?.room || ""}
                onChange={handleApartmentInputChange}
                className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                min={0}
              />
            </div>
            <div className="sm:ml-16">
              <label className="block font-medium text-gray-700">عدد غرف النوم</label>
              <input
                type="number"
                name="apartment.bed_room"
                value={formData.apartment?.bed_room || ""}
                onChange={handleApartmentInputChange}
                className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                min={0}
              />
            </div>
            <div className="sm:ml-16">
              <label className="block font-medium text-gray-700">عدد الحمامات</label>
              <input
                type="number"
                name="apartment.bath"
                value={formData.apartment?.bath || ""}
                onChange={handleApartmentInputChange}
                className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                min={0}
              />
            </div>
            <div className="sm:ml-16">
              <label className="block font-medium text-gray-700">متاح من تاريخ</label>
              <input
                type="date"
                name="apartment.available_from"
                value={formData.apartment?.available_from || ""}
                onChange={handleApartmentInputChange}
                className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              />
            </div>
            <div className="sm:ml-16">
              <label className="block font-medium text-gray-700">الطابق <span className="text-red-500 text-xl mr-1">*</span></label>
              <input
                required
                type="text"
                name="apartment.floor"
                value={formData.apartment?.floor || ""}
                onChange={handleApartmentInputChange}
                className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              />
            </div>
            <div className="sm:ml-16">
              <label className="block font-medium text-gray-700">سنة البناء</label>
              <input
                type="number"
                name="apartment.year"
                value={formData.apartment?.year || ""}
                onChange={handleApartmentInputChange}
                className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
                min={1900}
                max={2100}
              />
            </div>
          </div>
          {/* حقول المصفوفات */}
          <div className="space-y-4 mt-6 w-full">
            <div className="sm:ml-16 bg-cwhite rounded-md p-4 w-full shadow-md ">
              <label className="block font-medium text-gray-700">الأثاث</label>
              <div className="flex flex-wrap gap-2 mt-2 ">
                {FURNITURE_CHOICES.map(([value, label]) => (
                  <label key={value} className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer">
                    <input
                      className="custom-checkbox"
                      type="checkbox"
                      value={value}
                      name="apartment.furniture"
                      checked={Array.isArray(formData.apartment?.furniture) && formData.apartment.furniture.includes(value)}
                      onChange={handleApartmentInputChange}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <div className="bg-cwhite rounded-md p-2 shadow-md">
              <label className="block font-medium text-gray-700">حالة المبنى</label>
              <div className="flex flex-wrap gap-2 mt-2 ">
                {GENERAL_CHARACTERISTICS.map(([value, label]) => (
                  <label key={value} className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer">
                    <input
                      className="custom-checkbox"
                      type="checkbox"
                      value={value}
                      name="apartment.general_characteristics"
                      checked={Array.isArray(formData.apartment?.general_characteristics) && formData.apartment.general_characteristics.includes(value)}
                      onChange={handleApartmentInputChange}
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <hr className="mt-6 mb-3 text-clightgray" />
          <div className="flex justify-end max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-4 mb-5">
            <button
              type="submit"
              className="mt-8 ml-6 max-sm:ml-0 text-white rounded"
            >
              <span className="bg-cgreen hover:bg-chgreen py-3 px-32 max-md:px-20 rounded text-xl transition-all duration-300">
                {isPending ? "جارٍ التعديل ..." : "تعديل"}
              </span>
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default EditApartment;
