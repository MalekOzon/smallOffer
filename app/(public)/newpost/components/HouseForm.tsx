import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { HousePostPayload } from "@/app/lib/postServices/postType";
import Notification from "@/app/components/ui/Notification";
import { useCreateHousePost } from "@/app/lib/postServices/postMutations";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { Search } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import Image from "next/image";
import { useUrl } from "@/app/lib/context/URLProvider";

interface PostFormProps {
  Gcategory: string;
  Gsubcategory: string;
}

export const FURNITURE_CHOICES  :[string , string][]  = [
  ["furnished-semi/furnished", "مفروش/مفروش جزئيا"],
  ["balcony", "شرفة"],
  ["equipped_kitchen", "مطبخ مجهز"],
  ["bathtub", "حوض الاستحمام"],
  ["guest_bathroom", "حمام الضيوف"],
  ["ground_floor", "الصول بدون درج"],
  ["underfloor_heating", "التدفئة تحت الارضية"],
];
export const GENERAL_CHARACTERISTICS :[string , string][] = [
  ["old_building", "مبنى قديم"],
  ["new_building", "مبنى جديد"],
  ["elevator", "مصعد"],
  ["basement", "قبو"],
  ["attic", "علية"],
  ["garage/parking", "مراَب/مكان وقوف السيارات"],
  ["shared_garden", "حديقة/استخدام مشترك"],
  ["pets_allowed", "مسموح بالحيوانات الاليفة"],
  ["landmark", "نصب تذكاري"],
  ["currently_rented", "مؤجر حاليا"],
];
export const HOUSE_CHOICES :[string , string][] = [
  ["house", "منزل منفصل"],
  ["building", "مبنى سكني"],
  ["farm", "مزرعة"],
  ["villa", "فيلا"],
  ["other", " أنواع أخرى"],
];
export const OFFER_TYPE_CHOICES :[string , string][]  = [
  ["sale", "شراء"],
  ["rent", "ايجار"],
];

export default function HouseForm({ Gcategory, Gsubcategory }: PostFormProps) {
  const {
    watch,
    register,
    getValues,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<HousePostPayload>({});

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const createHousePost = useCreateHousePost(setNotification);
  const { isPending: isLoading } = createHousePost;

  // COVER IMAGE -------------------------------------------------
  const coverImage = watch("cover_image");
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

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
      e.target.value = ""; // إعادة تعيين قيمة الـ input
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  // GALLERY -------------------------------------------------
  const MAX_GALLERY_IMAGES = 7;
  const [galleryFiles, setGalleryFiles] = useState<(File | string)[]>([]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const galleryInputRef = useRef<HTMLInputElement | null>(null);

  // دالة للتعامل مع تغيير الصور في المعرض
  const handleGalleryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setGalleryFiles((prev) => {
        const newGallery = [...prev];
        newGallery[index] = file;
        setValue("gallery", newGallery, {
          shouldValidate: true,
          shouldDirty: true,
        });
        return newGallery;
      });
      e.target.value = ""; // إعادة تعيين قيمة الـ input
    }
  };

  // دالة لإزالة صورة من المعرض
  const handleRemoveImage = (index: number) => {
    setGalleryFiles((prev) => {
      const newGallery = prev.filter((_, i) => i !== index);
      setValue("gallery", newGallery, {
        shouldValidate: true,
        shouldDirty: true,
      });
      return newGallery;
    });
  };

  // دالة لإضافة صورة جديدة
  const handleNewGalleryImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && galleryFiles.length < MAX_GALLERY_IMAGES) {
      setGalleryFiles((prev) => {
        const newGallery = [...prev, file];
        setValue("gallery", newGallery, {
          shouldValidate: true,
          shouldDirty: true,
        });
        return newGallery;
      });
      e.target.value = ""; // إعادة تعيين قيمة الـ input
    }
  };

  // دالة لفتح نافذة اختيار الملفات
  const handleAddNewGallerySlot = () => {
    if (galleryFiles.length < MAX_GALLERY_IMAGES) {
      galleryInputRef.current?.click();
    }
  };

  // دالة لتحريك إدخال الصورة
  const triggerFileInput = (index: number) => {
    inputRefs.current[index]?.click();
  };

  // -------------------------------------------------

  const [isSearch, setIsSearch] = useState<boolean | undefined>(false);

  const onSubmit = (data: HousePostPayload) => {
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

    const houseDetails = {
      available_from: data.house.available_from || null,
      general_characteristics: data.house.general_characteristics || null,
      furniture: data.house.furniture || null,
      bath: data.house.bath,
      real_estate_space: data.house.real_estate_space,
      house_type: data.house.house_type,
      bed_room: data.house.bed_room,
      room: data.house.room,
      year: data.house.year,
      offer_type: data.house.offer_type,
    };

    formData.append("house_details", JSON.stringify(houseDetails));

    if (galleryFiles && galleryFiles.length > 0) {
      galleryFiles.forEach((img) => {
        if (img instanceof File) {
          formData.append("gallery", img);
        }
      });
    }

    createHousePost.mutate(formData);
  };

  const { urlSaveContext } = useUrl();
const handlePreview = () => {
  const data = getValues();
  const previewCover =
    data.cover_image instanceof File
      ? URL.createObjectURL(data.cover_image)
      : data.cover_image;
  const previewGallery =
    data.gallery?.map((img) =>
      img instanceof File ? URL.createObjectURL(img) : img
    ) || [];
  const sendData = {
    title: data.title,
    description: data.description,
    city: data.city,
    cover_image: previewCover,
    price : data.price,

    gallery: previewGallery,
    hood: data.hood,
    offer_type: data.offer_type,
    subcategory: Gsubcategory, // بما أن هذا قادم من props
    house: data.house
  };
  localStorage.setItem("previewData", JSON.stringify(sendData));
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
        <div className="mb-6 sm:ml-16 border-b border-clightgray">
          {/* SEARCH || SELL */}
          <h3 className="font-medium mb-3 mt-6 text-lg text-gray-700">
            نوع المنشور
            <span className="text-red-500 text-xl mr-1">*</span>
          </h3>
          <div className="w-full mt-2 max-w-sm border-2 border-clightgray p-1.5 rounded-xl mb-6 flex">
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

        <span className="text-lg max-sm:text-sm border p-2 bg-cgreen text-cwhite rounded-md">
          ملاحظة: يوجد زر معاينة المنشور في الأسفل
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
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
            <label className="block font-medium text-gray-700 mb-2">
              صور المنتج
            </label>
            <div className="flex flex-wrap gap-4">
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
                    {previewUrl && img !== "" ? (
                      <Image
                        src={previewUrl}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        onClick={() => triggerFileInput(index)}
                        onLoad={() =>
                          img instanceof File && URL.revokeObjectURL(previewUrl)
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
            <label className="block font-medium text-gray-700">
              المحافظة
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <select
              required
              {...register("city")}
              className="mt-1 w-full p-3 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{
                borderColor: "#277F60",
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
      </section>

      {/* تفاصيل المنزل */}
      <section className="rounded-2xl shadow-lg border bg-white border-gray-200 p-8 mb-6 w-full">
        <h2 className="font-bold text-lg mb-2">تفاصيل المنزل</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              نوع العرض
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <select
              required
              {...register("house.offer_type")}
              className="mt-2 w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-cdarkgray focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{
                borderColor: "#277F60",
              }}
              dir="rtl"
            >
              <option value="">اختر العرض</option>
              {OFFER_TYPE_CHOICES.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              عدد الغرف
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              type="number"
              {...register("house.room", { valueAsNumber: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              min={0}
            />
          </div>
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              عدد غرف النوم
            </label>
            <input
              type="number"
              {...register("house.bed_room", { valueAsNumber: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              min={0}
            />
          </div>
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              عدد الحمامات
            </label>
            <input
              type="number"
              {...register("house.bath", { valueAsNumber: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              min={0}
            />
          </div>
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              المساحة العقارية (م²)
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              type="number"
              {...register("house.real_estate_space", { valueAsNumber: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              min={0}
            />
          </div>
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              متاح من تاريخ
            </label>
            <input
              type="date"
              {...register("house.available_from")}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              سنة البناء
            </label>
            <input
              type="number"
              {...register("house.year", { valueAsNumber: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              min={1900}
              max={2100}
            />
          </div>
        </div>

        {/* حقول المصفوفات */}
        <div className="space-y-4 mt-6 w-full">
          <div className="sm:ml-16 bg-cwhite rounded-md p-4 w-full shadow-md">
            <label className="block font-medium text-gray-700">
              نوع المنزل
            </label>
            <div className="flex flex-wrap gap-4 mt-2">
              {HOUSE_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("house.house_type")}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-4 w-full shadow-md">
            <label className="block font-medium text-gray-700">الأثاث</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {FURNITURE_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={value}
                    {...register("house.furniture")}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className="bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              حالة المبنى
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {GENERAL_CHARACTERISTICS.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={value}
                    {...register("house.general_characteristics")}
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
