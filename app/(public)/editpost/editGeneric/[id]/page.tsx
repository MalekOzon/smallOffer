"use client";
import Notification from "@/app/components/ui/Notification";
import { useGetGenericPostId } from "@/app/lib/postServices/postQueries";
import { GenericPostPayload } from "@/app/lib/postServices/postType";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { useParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { categories } from "@/app/sections/categories";
import { useEditGenericForm } from "@/app/lib/postServices/editPostMutation";
import SkeletonNotificationSettings from "@/app/components/ui/SkeletonNotificationSettings";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useUrl } from "@/app/lib/context/URLProvider";
import { Search } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

const EditGeneric = () => {
  const {
    register,
    formState: {},
  } = useForm<GenericPostPayload>({
    defaultValues: {
      gallery_images: [], // تهيئة gallery كمصفوفة فارغة
    },
  });

  const params = useParams();
  const id = params.id as string | undefined;

  const getPostDetail = useGetGenericPostId(id);
  const { data, isLoading } = getPostDetail;

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const editGenericForm = useEditGenericForm(setNotification);
  const isPending = editGenericForm.isPending;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };
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

  const MAX_GALLERY_IMAGES = 7;
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [galleryFiles, setGalleryFiles] = useState<(File | string)[]>([]);
  const galleryInputRef = useRef<HTMLInputElement | null>(null); // إضافة مرجع لإدخال الصور

  // دالة للتعامل مع تغيير الصور في المعرض
  const handleGalleryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setGalleryFiles((prev) => {
        const updated = [...prev];
        updated[index] = file;

        setFormData((prevForm) => ({
          ...prevForm,
          gallery: updated,
        }));

        return updated;
      });
      // إعادة تعيين قيمة الـ input للسماح باختيار نفس الصورة مرة أخرى
      e.target.value = "";
    }
  };

  // دالة لإزالة صورة من المعرض
  const handleRemoveImage = (index: number) => {
    setGalleryFiles((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      setFormData((prevForm) => ({
        ...prevForm,
        gallery: updated,
      }));
      return updated;
    });
  };

  // دالة لإضافة فتحة جديدة أو فتح نافذة اختيار الصورة
  const handleAddNewGallerySlot = () => {
    if (galleryFiles.length >= MAX_GALLERY_IMAGES) return;
    galleryInputRef.current?.click(); // فتح نافذة اختيار الملفات مباشرة
  };

  // دالة للتعامل مع اختيار صورة جديدة
  const handleNewGalleryImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && galleryFiles.length < MAX_GALLERY_IMAGES) {
      setGalleryFiles((prev) => {
        const updated = [...prev, file];
        setFormData((prevForm) => ({
          ...prevForm,
          gallery: updated,
        }));
        return updated;
      });
      // إعادة تعيين قيمة الـ input للسماح باختيار نفس الصورة مرة أخرى
      e.target.value = "";
    }
  };

  // دالة لتحريك إدخال الصورة
  const triggerFileInput = (index: number) => {
    inputRefs.current[index]?.click();
  };

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
    cover_image: null,
    gallery: [],
  });

  // تحديث الحقول بمجرد استلام البيانات
  useEffect(() => {
    if (data) {
      const galleryImages = data.gallery_images?.map((img) => img.image) || [];

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
        gallery: galleryImages,
        offer_type: data.offer_type || "sell",
      });
      setGalleryFiles(galleryImages);
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

  const [isSearch, setIsSearch] = useState<boolean | undefined>(false);

  // تحديث offer_type عند الضغط على الأزرار
  const handleOfferType = (type: "sell" | "search") => {
    setIsSearch(type === "search");
    setFormData((prev) => ({
      ...prev,
      offer_type: type,
    }));
  };

  const convertURLtoFile = async (url: string): Promise<File> => {
    const response = await fetch(url);
    const blob = await response.blob();

    let name = url.split("/").pop() || "";
    if (!/\.(jpg|jpeg|png|webp|gif)$/i.test(name)) {
      name = `image-${Date.now()}.jpg`; // اسم افتراضي بامتداد مسموح
    }

    return new File([blob], name, { type: blob.type });
  };

  // دالة الإرسال الصحيحة
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = formData;
    const form = new FormData();
    if (!id) {
      setNotification({ message: "معرف الإعلان غير صالح.", type: "error" });
      return;
    }
    form.append("offer_type", data.offer_type ?? "sell");
    form.append("title", data.title ?? "");
    form.append("description", data.description ?? "");
    form.append("price", data.price ?? "");
    form.append("price_type", data.price_type ?? "fixed");
    form.append("city", data.city ?? "");
    form.append("hood", data.hood ?? "");
    form.append("detailed_location", data.detailed_location ?? "");

    if (data.cover_image instanceof File) {
      form.append("cover_image", data.cover_image);
    }

    for (const img of formData.gallery || []) {
      if (img instanceof File) {
        form.append("gallery", img);
      } else if (typeof img === "string") {
        const file = await convertURLtoFile(img);
        form.append("gallery", file);
      }
    }



    editGenericForm.mutate({ formData: form, id });
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

  useEffect(() => {
    if (formData.cover_image && typeof formData.cover_image === "string") {
      setPreview(formData.cover_image);
    }
  }, [formData.cover_image]);


  const { urlSaveContext } = useUrl();
  const handlePreview = () => {
    const data = formData;
    const sendData = {
      title: data.title,
      description: data.description,
      city: data.city,
      cover_image: data.cover_image,
      gallery: galleryFiles.map((img) => (img instanceof File ? URL.createObjectURL(img) : img)),
      hood: data.hood,
      offer_type: data.offer_type,
      subcategory: data.subcategory,
    };
    localStorage.setItem("previewData", JSON.stringify(sendData));
  };



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
          <span className="text-lg max-sm:text-sm border p-2 bg-cgreen text-cwhite rounded-md ">
            ملاحظة: يوجد زر معاينة المنشور في الأسفل
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="sm:ml-16">
              <label className="block font-medium text-gray-700 mb-2">
                صورة غلاف المنتج
              </label>

              {/* Hidden File Input */}
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImageChange}
                className="hidden"
              />

              {/* Upload Box */}
              <div
                onClick={handleClick}
                className="w-[70%] max-sm:w-full h-52  border-2 border-dashed border-cgreen rounded-lg flex items-center justify-center cursor-pointer bg-cwhite overflow-hidden"
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

            {/* قسم صور المنتج */}
            <input type="hidden" {...register("gallery")} />
            <div className="sm:ml-16">
              <label className="block font-medium text-gray-700 mb-2">
                صور المنتج
              </label>
              <div className="flex flex-wrap gap-2">
                {/* إدخال مخفي لاختيار صورة جديدة */}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleNewGalleryImage}
                  ref={galleryInputRef}
                />
                {galleryFiles.map((img, index) => {
                  const previewUrl =
                    img instanceof File ? URL.createObjectURL(img) : img;

                  return (
                    <div
                      key={index}
                      className="relative max-sm:w-32 w-24 h-24 border-2 border-cgreen rounded-lg overflow-hidden cursor-pointer"
                    >
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleGalleryChange(e, index)}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                      />
                      {previewUrl && previewUrl !== "" ? (
                        <Image
                          src={previewUrl}
                          alt={`Gallery image ${index + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                          onClick={() => triggerFileInput(index)}
                          onLoad={() =>
                            img instanceof File &&
                            URL.revokeObjectURL(previewUrl)
                          }
                        />
                      ) : (
                        <div
                          onClick={() => triggerFileInput(index)}
                          className="flex justify-center items-center w-full h-full text-cgreen text-4xl"
                        >
                          +
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
                {galleryFiles.length < MAX_GALLERY_IMAGES && (
                  <div
                    onClick={handleAddNewGallerySlot}
                    className="w-24 h-24 border-2 border-dashed border-cgreen rounded-lg flex items-center justify-center cursor-pointer text-cgreen text-4xl"
                  >
                    +
                  </div>
                )}
              </div>
            </div>
          </div>

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
              onClick={() => {
                handlePreview(); // Execute any additional logic
                window.open(urlSaveContext, "_blank"); // Replace with your URL
              }}
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
                {isPending ? "جارٍ التعديل ..." : " تعديل"}
              </span>
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default EditGeneric;
