import Notification from "@/app/components/ui/Notification";
import { useCreateApartmentPost } from "@/app/lib/postServices/postMutations";
import { ApartmentPostPayload } from "@/app/lib/postServices/postType";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { Search } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface PostFormProps {
  Gcategory: string;
  Gsubcategory: string;
}

export default function ApartmentForm({
  Gcategory,
  Gsubcategory,
}: PostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApartmentPostPayload>({});

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
  const createApartmentPost = useCreateApartmentPost(setNotification);
  const { isPending: isLoading } = createApartmentPost;

  const onSubmit = (data: ApartmentPostPayload) => {
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

    const apartmentDetails = {
      real_estate_space: data.apartment.real_estate_space,
      available_from: data.apartment.available_from,
      general_characteristics: data.apartment.general_characteristics,
      floor: data.apartment.floor,
      furniture: data.apartment.furniture,
      bath: data.apartment.bath,
      bed_room: data.apartment.bed_room,
      room: data.apartment.room,
      year: data.apartment.year,
      offer_type: data.apartment.offer_type,
    };

    formData.append("apartment_details", JSON.stringify(apartmentDetails));

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

    console.log("DDD ", formData);
    createApartmentPost.mutate(formData);
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
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-6 ">
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

            {errors.title && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.title.message)}
              </p>
            )}
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
            {errors.city && (
              <p className="text-red-600 text-sm mt-1">
                {String(errors.city.message)}
              </p>
            )}
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:ml-16">
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

      <section className="rounded-2xl shadow-lg border bg-white border-gray-200 p-8 mb-6 w-full">
        <h2 className="font-bold text-lg mb-2">تفاصيل الشقة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">نوع العرض
            <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <select
              required
              {...register("apartment.offer_type")}
              className="mt-2  w-full p-3 py-3.5 border-2 rounded-lg bg-cwhite text-cdarkgray focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200"
              style={{
                borderColor: "#277F60",
              }}
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
            <label className="block font-medium text-gray-700">
              المساحة العقارية (م²)
              <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              type="number"
              {...register("apartment.real_estate_space", {
                valueAsNumber: true,
              })}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              min={0}
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">عدد الغرف
            <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              type="number"
              {...register("apartment.room", { valueAsNumber: true })}
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
              {...register("apartment.bed_room", { valueAsNumber: true })}
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
              {...register("apartment.bath", { valueAsNumber: true })}
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
              {...register("apartment.available_from")}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">الطابق
            <span className="text-red-500 text-xl mr-1">*</span>
            </label>
            <input
              required
              type="text"
              {...register("apartment.floor", { valueAsNumber: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
            />
          </div>

          <div className="sm:ml-16">
            <label className="block font-medium text-gray-700">
              سنة البناء
            </label>
            <input
              type="number"
              {...register("apartment.year", { valueAsNumber: true })}
              className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-cgreen bg-cwhite text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cgreen focus:border-transparent transition duration-200 shadow-sm"
              min={1900}
              max={2100}
            />
          </div>
        </div>

        {/* حقول المصفوفات -------------------------------------------------------------------------------------*/}

        <div className="space-y-4 mt-6  w-full">
          <div className="sm:ml-16 bg-cwhite rounded-md p-4 w-full shadow-md ">
            <label className="block font-medium text-gray-700">الأثاث</label>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {FURNITURE_CHOICES.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={value}
                    {...register("apartment.furniture")}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className=" bg-cwhite rounded-md p-2 shadow-md">
            <label className="block font-medium text-gray-700">
              حالة المبنى
            </label>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {GENERAL_CHARACTERISTICS.map(([value, label]) => (
                <label
                  key={value}
                  className="flex items-center gap-1 ml-2 text-gray-700 cursor-pointer"
                >
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    value={value}
                    {...register("apartment.general_characteristics")}
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
