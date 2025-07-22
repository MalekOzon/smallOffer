"use client";

import { GenericPostPayload } from "@/app/lib/postServices/postType";
import { useForm } from "react-hook-form";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { useCreatePost } from "@/app/lib/postServices/postMutations";
import React, { useEffect, useRef, useState } from "react";
import Notification from "@/app/components/ui/Notification";
import { Search } from "lucide-react";
import Button from "@/app/components/ui/Button";
import Image from "next/image";

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
    setValue,
    watch,
    formState: { errors },
  } = useForm<GenericPostPayload>();

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const createPost = useCreatePost(setNotification);
  const { isPending: isLoading } = createPost;

  // COVER IMAGE -------------------------------------------------
  // Watch cover_image for preview
  const coverImage = watch("cover_image");

  // State for preview URL
  const [preview, setPreview] = useState<string | null>(null);

  // Ref to hidden file input
  const inputRef = useRef<HTMLInputElement>(null);

  // Create preview URL when coverImage changes
  useEffect(() => {
    if (coverImage instanceof File) {
      const objectUrl = URL.createObjectURL(coverImage);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [coverImage]);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("cover_image", file, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };
  // ------------------------------------------------------------------

  // GALLERY -------------------------------------------------

  // State for gallery files (images)
  const [galleryFiles, setGalleryFiles] = useState<(File | string)[]>([]);

  // Handler to add or replace image at index
  const handleGalleryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setGalleryFiles((prev) => {
        const newGallery = [...prev];
        newGallery[index] = file;
        return newGallery;
      });
      setValue("gallery", [...galleryFiles, file], {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  };
  
  // Handler to remove image at index
  const handleRemoveImage = (index: number) => {
    setGalleryFiles((prev) => prev.filter((_, i) => i !== index));
    setValue("gallery", galleryFiles.filter((_, i) => i !== index), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  
  // Handler to add new empty slot (up to max 5)
  const handleAddNewGallerySlot = () => {
    if (galleryFiles.length < 5) {
      setGalleryFiles((prev) => [...prev, ""]);
      setValue("gallery", [...galleryFiles, ""], {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  };

  // To trigger hidden file input per each gallery box
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const triggerFileInput = (index: number) => {
    inputRefs.current[index]?.click();
  };

  // ---------------------------------------------------------

  const [isSearch, setIsSearch] = useState<boolean | undefined>(false);

  const onSubmit = (data: GenericPostPayload) => {
    console.log("daTA: ", data);
    const formData = new FormData();

    formData.append("offer_type", data.offer_type ?? "sell");
    formData.append("title", data.title ?? "");
    formData.append("description", data.description ?? "");
    formData.append("price", data.price ?? "");
    formData.append("price_type", data.price_type ?? "fixed");
    formData.append("city", data.city ?? "");
    formData.append("hood", data.hood ?? "");
    formData.append("detailed_location", data.detailed_location ?? "");

    if (data.cover_image) {
      if (data.cover_image instanceof File) {
        formData.append("cover_image", data.cover_image);
      } else if (typeof data.cover_image === "string") {
        formData.append("cover_image", data.cover_image);
      }
    }

    formData.append("category", Gcategory);
    formData.append("subcategory", Gsubcategory);

    if (data.gallery && data.gallery.length > 0) {
      (data.gallery as (File | string)[]).forEach((img) => {
        if (img instanceof File) {
          formData.append("gallery", img);
        } 
      });
    }

    // بعد إضافة كل البيانات إلى formData
// for (let [key, value] of formData.entries()) {
//   if(key === "gallery") console.log("asdddddddd")
//   console.log(key, value);
// }

    createPost.mutate(formData);
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
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6 ">
        <h2 className="font-bold text-xl text-gray-800 mb-2 text-right">
          معلومات أساسية
        </h2>
        <p className="text-gray-600 mb-6 text-right">
          أدخل معلومات الإعلان الأساسية لتظهر بوضوح للمشترين، مثل العنوان والوصف
          العام والموقع.
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
              onClick={() => {
                setIsSearch(false);
                setValue("offer_type", "sell");
              }}
            >
              أنا أعرض
            </Button>
            <Button
              type="button"
              className="w-1/2 text-6 font-semibold"
              variant={isSearch === true ? "primary" : "none"}
              onClick={() => {
                setIsSearch(true);
                setValue("offer_type", "search");
              }}
            >
              أنا أبحث
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              اسم المنتج
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              {...register("title")}
              type="text"
              placeholder="اسم المنتج"
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
            />
          </div>

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
          <input type="hidden" {...register("gallery")} />
          {/* قسم معرض الصور */}
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700 mb-2">
              صور المنتج
            </label>
            <div className="flex flex-wrap gap-4">
              {galleryFiles.map((img, index) => {
                const previewUrl =
                  img instanceof File ? URL.createObjectURL(img) : img;

                return (
                  <div
                    key={index}
                    className="relative w-24 h-24 border-2 border-cgreen rounded-lg overflow-hidden cursor-pointer"
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
                    {previewUrl ? (
                      <Image
                        src={previewUrl}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        onClick={() => triggerFileInput(index)}
                        onLoad={() => URL.revokeObjectURL(previewUrl)} // تنظيف الذاكرة
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
                      &times;
                    </button>
                  </div>
                );
              })}

              {/* مربع إضافة صورة جديد إذا أقل من 5 صور */}
              {galleryFiles.length < 5 && (
                <div
                  onClick={handleAddNewGallerySlot}
                  className="w-24 h-24 border-2 border-dashed border-cgreen rounded-lg flex items-center justify-center cursor-pointer text-cgreen text-4xl"
                >
                  +
                </div>
              )}
            </div>
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              المحافظة
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <select
              required
              {...register("city")}
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
              المنطقة
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              {...register("hood")}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              placeholder="المنطقة"
            />
            {errors.hood && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.hood.message)}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 sm:ml-16">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="block font-medium text-gray-700">
              تفاصيل العنوان
            </label>
            <input
              {...register("detailed_location")}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              placeholder="تفاصيل العنوان"
            />
            {errors.detailed_location && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.detailed_location.message)}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="block font-medium text-gray-700">
              وصف المنتج
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <textarea
              required
              {...register("description")}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
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
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              سعر المنتج (السعر بالليرة السورية)
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              type="number"
              required
              {...register("price")}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              placeholder="ادخل سعر المنتج"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="block font-medium text-gray-700">
            نوع السعر
            <span className="text-red-500 text-xl mr-1">*</span>
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            <label className="ml-2 flex items-center gap-2 text-gray-700 cursor-pointer">
              <input
                required
                type="radio"
                value="negotiable"
                {...register("price_type")}
                className="accent-cgreen"
              />
              <span>سعر قابل للتفاوض</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <input
                type="radio"
                value="fixed"
                {...register("price_type")}
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
            onClick={() => (window.location.href = "/perview")}
            type="submit"
            className="mt-8 ml-6 max-sm:ml-0 text-white rounded"
          >
            <span className="flex items-center group outline-2 outline-cgreen text-gray-800 hover:bg-chgreen hover:outline-chgreen hover:text-cwhite py-3 px-12 max-sm:px-[55px] rounded text-xl transition-all duration-300">
              <Search className="ml-1 text-cgreen group-hover:text-cwhite" />{" "}
              معاينة
            </span>
          </button>

          {/* زر "نشر" */}
          <button
            type="submit"
            className="mt-8 ml-6 max-sm:ml-0 text-white rounded"
          >
            <span className="bg-cgreen hover:bg-chgreen py-3 px-32 max-sm:px-20 rounded text-xl transition-all duration-300">
              {isLoading ? "جار النشر ..." : "نشر"}
            </span>
          </button>
        </div>
      </section>
    </form>
  );
}
