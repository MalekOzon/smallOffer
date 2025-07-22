import { useForm } from "react-hook-form";

import { useEffect, useRef, useState } from "react";
import { MobilePostPayload } from "@/app/lib/postServices/postType";
import { useCreateMobilePost } from "@/app/lib/postServices/postMutations";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import Notification from "@/app/components/ui/Notification";
import { Search } from "lucide-react";
import Button from "@/app/components/ui/Button";
import Image from "next/image";

interface PostFormProps {
  Gcategory: string;
  Gsubcategory: string;
}

export const STATUS_CHOICES = [
  ["new", "جديد"],
  ["used_very_good", "مستعمل جيد جداً"],
  ["working_good", "يعمل بشكل جيد"],
  ["defective", "عيب (يحتاج صيانة)"],
];
export const COLOR_CHOICES = [
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


export default function MobileForm({ Gcategory, Gsubcategory }: PostFormProps) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<MobilePostPayload>({});



  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const createMobilePost = useCreateMobilePost(setNotification);
  const { isPending: isLoading } = createMobilePost;

  const [accessoriesValue, setAccessoriesValue] = useState<boolean | undefined>(
    false
  );


  
  ////////////////////////////////  // //////////////////////////////////////

  const coverImage = watch("cover_image");
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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



  ////////////////////////////////  // //////////////////////////////////////
  const [isSearch, setIsSearch] = useState<boolean | undefined>(false);
  
  const onSubmit = (data: MobilePostPayload) => {
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
          <label className="block font-medium text-gray-700">
            صور المنتج
          </label>
          <input
            type="file"
            multiple
            {...register("gallery")}
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
      </section>
      {/* ------------------------------------------- */}

      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6">
        <h2 className="font-bold text-lg mb-2">تفاصيل الموبايل</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              أدخل ماركة الموبايل
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              {...register("mobile.brand")}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              dir="rtl"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">اللون</label>
            <select
              {...register("mobile.color")}
              className="mt-1  w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-gray-700 focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
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
        </div>

        <div className="space-y-4 mt-6">
          <div className="sm:ml-16 bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              اختر الحالة
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
                    {...register("mobile.status")}
                    className="accent-cgreen"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* الملحقات */}
          <h3 className="font-medium mb-3 mt-6 ">الملحقات المتوفرة</h3>
          <div className="w-full mt-2 max-w-sm border-2 border-clightgray p-1.5 rounded-xl mb-6 flex">
            <Button
              type="button"
              className="w-1/2 text-6 font-semibold"
              variant={accessoriesValue === true ? "primary" : "none"}
              onClick={() => {
                setAccessoriesValue(true);
                setValue("mobile.accessories", true);
              }}
            >
              يوجد ملحقات
            </Button>
            <Button
              type="button"
              className="w-1/2 text-6 font-semibold"
              variant={accessoriesValue === false ? "primary" : "none"}
              onClick={() => {
                setAccessoriesValue(false);
                setValue("mobile.accessories", false);
              }}
            >
              لا يوجد ملحقات
            </Button>
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
