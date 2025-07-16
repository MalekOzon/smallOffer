import { useForm } from "react-hook-form";

import { useState } from "react";
import { HousePostPayload } from "@/app/lib/postServices/postType";
import Notification from "@/app/components/ui/Notification";
import { useCreateHousePost } from "@/app/lib/postServices/postMutations";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";

interface PostFormProps {
  Gcategory: string;
  Gsubcategory: string;
}

export default function HouseForm({ Gcategory, Gsubcategory }: PostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HousePostPayload>({});

  const FURNITURE_CHOICES = [
    ["furnished-semi/furnished", "مفروش/مفروش جزئيا"],
    ["balcony", "شرفة"],
    ["equipped_kitchen", "مطبخ مجهز"],
    ["bathtub", "حوض الاستحمام"],
    ["guest_bathroom", "حمام الضيوف"],
    ["ground_floor", "الصول بدون درج"],
    ["underfloor_heating", "التدفئة تحت الارضية"],
  ];
  const GENERAL_CHARACTERISTICS = [
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
  const HOUSE_CHOICES = [
    ["house", "منزل منفصل"],
    ["building", "مبنى سكني"],
    ["farm", "مزرعة"],
    ["villa", "فيلا"],
    ["other", " أنواع أخرى"],
  ];
  const OFFER_TYPE_CHOICES = [
    ["sale", "شراء"],
    ["rent", "ايجار"],
  ];

  console.log({
    category: Gcategory,
    subcategory: Gsubcategory,
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const createHousePost = useCreateHousePost(setNotification);
  const { isPending: isLoading } = createHousePost;

  const onSubmit = (data: HousePostPayload) => {
    console.log("daTA: ", data);
    const formData = new FormData();

    formData.append("title", data.title ?? "");
    formData.append("description", data.description ?? "");
    formData.append("price", data.price ?? "");
    formData.append("price_type", data.price_type ?? "fixed");
    formData.append("city", data.city ?? "");
    formData.append("hood", data.hood ?? "");
    formData.append("detailed_location", data.detailed_location ?? "");

    if (data.cover_image && typeof window !== "undefined") {
      if (
        typeof data.cover_image === "object" &&
        "length" in data.cover_image &&
        typeof (data.cover_image as FileList).item === "function"
      ) {
        // Likely a FileList
        formData.append("cover_image", (data.cover_image as FileList)[0]);
      } else if (isBlob(data.cover_image)) {
        // File inherits from Blob
        formData.append("cover_image", data.cover_image);
      }
    }

    formData.append("category", Gcategory);
    formData.append("subcategory", Gsubcategory);

    const houseDetails = {
      available_from: data.house.available_from,
      general_characteristics: data.house.general_characteristics,
      floor: data.house.floor,
      living_space: data.house.living_space,
      furniture: data.house.furniture,
      bath: data.house.bath,
      real_estate_space: data.house.real_estate_space,
      house_type: data.house.house_type,
      bed_room: data.house.bed_room,
      room: data.house.room,
      year: data.house.year,
      offer_type: data.house.offer_type,
    };

    formData.append("house_details", JSON.stringify(houseDetails));

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

    console.log("DDD ",formData)
    createHousePost.mutate(formData);
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
      <h2 className="font-bold text-lg mb-2">تفاصيل المنزل</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">مميزات المنزل</label>
          <div className="flex flex-wrap gap-2">
            {FURNITURE_CHOICES.map(([value, label]) => (
              <label key={value} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={value}
                  {...register("house.furniture")}
                />
                {label}
              </label>
            ))}
          </div>
          {errors.house?.furniture && <p className="text-red-500 text-sm">{errors.house?.furniture.message}</p>}
        </div>
        
        <div>
          <label className="block font-medium mb-1">مميزات المبنى</label>
          <div className="flex flex-wrap gap-2">
            {GENERAL_CHARACTERISTICS.map(([value, label]) => (
              <label key={value} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={value}
                  {...register("house.general_characteristics")}
                />
                {label}
              </label>
            ))}
          </div>
          {errors.house?.general_characteristics && <p className="text-red-500 text-sm">{errors.house?.general_characteristics.message}</p>}
        </div>
        <div>
          <label className="block font-medium mb-1">المساحة (م²)</label>
          <input
            type="number"
            {...register("house.living_space", { valueAsNumber: true })}
            className="input w-full"
            min={0}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">عدد الغرف</label>
          <input
            type="number"
            {...register("house.room", { valueAsNumber: true })}
            className="input w-full"
            min={0}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">عدد غرف النوم</label>
          <input
            type="number"
            {...register("house.bed_room", { valueAsNumber: true })}
            className="input w-full"
            min={0}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">عدد الحمامات</label>
          <input
            type="number"
            {...register("house.bath", { valueAsNumber: true })}
            className="input w-full"
            min={0}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            المساحة العقارية (م²)
          </label>
          <input
            type="number"
            {...register("house.real_estate_space", { valueAsNumber: true })}
            className="input w-full"
            min={0}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">متاح من تاريخ</label>
          <input
            type="date"
            {...register("house.available_from")}
            className="input w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">نوع المنزل</label>
          <select
            {...register("house.house_type")}
            className="input w-full"
            dir="rtl"
          >
            <option value="">اختر نوع المنزل</option>
            {HOUSE_CHOICES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">الطابق</label>
          <input
            type="text"
            {...register("house.floor")}
            className="input w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">نوع العرض</label>
          <select
            {...register("house.offer_type")}
            className="input w-full"
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
        <div>
          <label className="block font-medium mb-1">سنة البناء</label>
          <input
            type="number"
            {...register("house.year", { valueAsNumber: true })}
            className="input w-full"
            min={1900}
            max={2100}
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
      >
        {isLoading ? "جار نشر الإعلان ..." : "نشر"}
      </button>
    </form>
  );
}
