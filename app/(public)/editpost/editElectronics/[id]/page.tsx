"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useGetElectronicsPostId } from "@/app/lib/postServices/postQueries";
import { useEditElectronicForm } from "@/app/lib/postServices/editPostMutation";
import { ElectronicsPostPayload } from "@/app/lib/postServices/postType";
import Notification from "@/app/components/ui/Notification";
import Button from "@/app/components/ui/Button";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { categories } from "@/app/sections/categories";
import SkeletonNotificationSettings from "@/app/components/ui/SkeletonNotificationSettings";
import { STATUS_CHOICES } from "@/app/(public)/newpost/components/ElectronicsForm";
import Image from "next/image";

const EditElectronics = () => {
  const params = useParams();
  const id = params.id as string | undefined;
  const { data, isLoading } = useGetElectronicsPostId(id);

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const editElectronicsForm = useEditElectronicForm(setNotification);
  const isPending = editElectronicsForm.isPending;

  const [formData, setFormData] = useState<Partial<ElectronicsPostPayload>>({
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
    electronics: {
      status: "new",
    },
  });

  const [isSearch, setIsSearch] = useState<boolean | undefined>(false);

  useEffect(() => {
    if (data) {
      setFormData({
        ...data,
        electronics: {
          ...data.electronics,
        },
      });
      setIsSearch(data.offer_type === "search");
    }
  }, [data]);



  const handleElectronicsInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const key = name.replace("electronics.", "") as keyof ElectronicsPostPayload["electronics"];
    setFormData((prev) => {
      const baseElectronics: ElectronicsPostPayload["electronics"] = prev.electronics ?? {
        status: "new",
      };
      const newElectronics: ElectronicsPostPayload["electronics"] = { ...baseElectronics };
      (newElectronics[key] as unknown) = value;
      return { ...prev, electronics: newElectronics };
    });
  };



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


    if (data.cover_image instanceof File) {
      form.append("cover_image", data.cover_image);
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
    // Electronics details
    const electronicsDetails = {
      status: data.electronics?.status,
    };
    form.append("electronics_details", JSON.stringify(electronicsDetails));
    editElectronicsForm.mutate({ formData: form, id });
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

  ////////////////////////////////////////////////////////////////////////////////////////

//   if (data.cover_image instanceof File) {
//     form.append("cover_image", data.cover_image);
// }
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  // لما تضغط على صندوق رفع الصورة يفتح اختيار الملفات
  const handleClick = () => {
    inputRef.current?.click();
  };
    // لما تختار صورة جديدة يتم تحديث preview و formData.cover_image
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        setFormData((prev) => ({
          ...prev,
          cover_image: file,
        }));
        setPreview(URL.createObjectURL(file));
      }
    };
     // تحديث preview لو جت بيانات موجودة كسلسلة نصية (رابط صورة من السيرفر مثلا)
  useEffect(() => {
    if (formData.cover_image && typeof formData.cover_image === "string") {
      setPreview(formData.cover_image);
    }
  }, [formData.cover_image]);

  const handleInputChange = (
    e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const files = (e.target as HTMLInputElement).files;
    
    if (type === "file") {
      if (name === "gallery") {
        setFormData((prev) => ({
          ...prev,
          [name]: files ? Array.from(files) : [],
        }));
      } else if (name === "cover_image") {
        setFormData((prev) => ({
          ...prev,
          [name]: files && files.length > 0 ? files[0] : null,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };


//   <div className="sm:ml-16">
//   <label className="block font-medium text-gray-700 mb-2">
//     صورة غلاف المنتج
//   </label>

//   <input
//     type="file"
//     accept="image/*"
//     ref={inputRef}
//     onChange={handleImageChange}
//     className="hidden"
//   />

//   <div
//     onClick={handleClick}
//     className="w-64 h-40 border-2 border-dashed border-cgreen rounded-lg flex items-center justify-center cursor-pointer bg-cwhite overflow-hidden"
//   >
//     {preview ? (
//       <Image
//         src={preview}
//         alt="preview"
//         width={256}
//         height={160}
//         className="object-cover w-full h-full"
//       />
//     ) : (
//       <span className="text-cgreen text-4xl">+</span>
//     )}
//   </div>
// </div>


  // ////////////////////////////////////////////////////////////////////

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
            تعديل إعلان الإلكترونيات
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
  <label className="block font-medium text-gray-700 mb-2">
    صورة غلاف المنتج
  </label>

  <input
    type="file"
    accept="image/*"
    ref={inputRef}
    onChange={handleImageChange}
    className="hidden"
  />

  <div
    onClick={handleClick}
    className="w-64 h-40 border-2 border-dashed border-cgreen rounded-lg flex items-center justify-center cursor-pointer bg-cwhite overflow-hidden"
  >
    {preview ? (
      <Image
        src={preview}
        alt="preview"
        width={256}
        height={160}
        className="object-cover w-full h-full"
      />
    ) : (
      <span className="text-cgreen text-4xl">+</span>
    )}
  </div>
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
        {/* تفاصيل الإلكترونيات */}
        <section className="rounded-2xl shadow-lg border bg-white border-gray-200 p-8 mb-6 w-full">
          <h2 className="font-bold text-lg mb-2">تفاصيل الإلكترونيات</h2>
          <div className="sm:ml-16 bg-cwhite rounded-md p-4 shadow-md ">
            <label className="block font-medium text-gray-700">
              حالة الجهاز <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <div className="flex flex-wrap gap-4 mt-2">
              {STATUS_CHOICES.map(([value, label]) => (
                <label key={value} className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer">
                  <input
                    required
                    type="radio"
                    value={value}
                    name="electronics.status"
                    checked={formData.electronics?.status === value}
                    onChange={handleElectronicsInputChange}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
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

export default EditElectronics;
