import { useForm } from "react-hook-form";
import { CarPostPayload } from "@/app/lib/postServices/postType";
import { useEffect, useRef, useState } from "react";
import { useCreateCarPost } from "@/app/lib/postServices/postMutations";
import Notification from "@/app/components/ui/Notification";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { Search } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import Image from "next/image";
import { useUrl } from "@/app/lib/context/URLProvider";

interface GenericPostFormProps {
  Gcategory: string;
  Gsubcategory: string;
}

export const EXTERNAL_FEATURES_CHOICES:[string , string][]  = [
  ["alloy_wheels", "عجلات معدنية"],
  ["xenon_headlights", "مصابيح أمامية زينون"],
  ["parking_assist", "مساعدة ركن سيارة"],
  ["trailer_hitch", "وصلة مقطورة"],
];

export const INTERNAL_FEATURES_CHOICES :[string , string][] = [
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

export const PROTECTION_CHOICES :[string , string][] = [
  ["service_book", "تم صيانة دفتر الخدمة"],
  ["abs", "نظام المكابح المانعة للانزلاق ABS"],
];

export const STATUS_CHOICES :[string , string][] = [
  ["damaged", "متضررة"],
  ["undamaged", "غير متضررة"],
];

export const FUEL_CHOICES:[string , string][]  = [
  ["gasoline", "بنزين"],
  ["diesel", "ديزل"],
  ["electric", "كهربائي"],
  ["hybrid", "هجين"],
  ["lpg", "غاز البترول المسال"],
  ["cng", "الغاز الطبيعي"],
];

export const GEARBOX_CHOICES :[string , string][] = [
  ["manual", "غيار يدوي"],
  ["automatic", "غيار أوتوماتيك"],
];

export const TYPE_CHOICES:[string , string][]  = [
  ["small_car", "سيارة صغيرة"],
  ["limousine", "ليموزين"],
  ["station", "ستيشن"],
  ["sports", "سيارة رياضية"],
  ["van_bus", "فان/حافلة"],
  ["coupe", "كوبيه"],
  ["other", "أنواع أخرى"],
];

export const DOORS_CHOICES:[string , string][]  = [
  ["two_three", "2/3"],
  ["four_five", "4/5"],
  ["six_seven", "6/7"],
  ["other_doors", "عدد مختلف من الأبواب"],
];

export const COLOR_CHOICES :[string , string][] = [
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

export const INTERNAL_MATERIALS_CHOICES :[string , string][] = [
  ["full_leather", "جلد كامل"],
  ["partial_leather", "جلد جزئي"],
  ["fabric", "قماش"],
  ["velvet", "مخمل"],
  ["other_materials", "مواد أخرى"],
];

export const BRAND_CHOICES :[string , string][] = [
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

export default function CarForm({ Gcategory, Gsubcategory }: GenericPostFormProps) {
  const {
    register,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<CarPostPayload>({});

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const createCarPost = useCreateCarPost(setNotification);
  const { isPending: isLoading } = createCarPost;

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

  const onSubmit = (data: CarPostPayload) => {
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

    if (galleryFiles && galleryFiles.length > 0) {
      galleryFiles.forEach((img) => {
        if (img instanceof File) {
          formData.append("gallery", img);
        }
      });
    }

    createCarPost.mutate(formData);
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
      gallery: previewGallery,
      hood: data.hood,
      price : data.price,

      offer_type: data.offer_type,
      subcategory: Gsubcategory, // بما أن هذا قادم من props
      car: data.car
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

      {/* تفاصيل السيارة */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6">
        <h2 className="text-xl font-bold mb-4">تفاصيل السيارة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              الماركة
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <select
              required
              {...register("car.brand")}
              className="mt-1 w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{
                borderColor: "#277F60",
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
          </div>
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">الموديل</label>
            <input
              {...register("car.model")}
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
              {...register("car.mileage", { valueAsNumber: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              dir="rtl"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">الأداء</label>
            <input
              type="number"
              {...register("car.performance", { valueAsNumber: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              dir="rtl"
              placeholder="مثال: 150 حصان"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">اللون</label>
            <select
              {...register("car.color")}
              className="mt-1 w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{
                borderColor: "#277F60",
              }}
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
              placeholder="ادخل سنة التسجيل"
              {...register("car.first_registration", { valueAsNumber: true })}
              className="mt-1 w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{
                borderColor: "#277F60",
              }}
              dir="rtl"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              تاريخ الفحص الفني
            </label>
            <input
              type="date"
              {...register("car.hu")}
              className="mt-1 w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{
                borderColor: "#277F60",
              }}
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
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              dir="rtl"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              فئة الملوثات
            </label>
            <input
              {...register("car.class_of_pollutants")}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              dir="rtl"
            />
          </div>
        </div>

        {/* حقول المصفوفات */}
        <div className="space-y-4 mt-6">
          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              اختر حالة السيارة
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
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
                    {...register("car.status")}
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
                    {...register("car.gearbox")}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              عدد الأبواب
            </label>
            <div className="flex flex-wrap gap-4 mt-2">
              {DOORS_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("car.number_of_doors")}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              المواد الداخلية
            </label>
            <div className="flex flex-wrap gap-4 mt-2">
              {INTERNAL_MATERIALS_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("car.internal_materials")}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              اختر نوع الوقود
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {FUEL_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    required
                    type="radio"
                    value={value}
                    {...register("car.fuel_type")}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              نوع السيارة
            </label>
            <div className="flex flex-wrap gap-4 mt-2">
              {TYPE_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("car.car_type")}
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
            <div className="flex flex-wrap gap-2 mt-2">
              {PROTECTION_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
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
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              المميزات الخارجية
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {EXTERNAL_FEATURES_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
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
          </div>

          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              المميزات الداخلية
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {INTERNAL_FEATURES_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
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