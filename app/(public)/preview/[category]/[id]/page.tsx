// app/preview/[category]/[id]/page.tsx
"use client";
import { notFound, useParams } from "next/navigation";
import ImageGallery from "./ImageGallery";
import { useGetPostDetail } from "@/app/lib/postServices/postQueries";
import Link from "next/link";
import {
  BRAND_CHOICES,
  COLOR_CHOICES,
  DOORS_CHOICES,
  EXTERNAL_FEATURES_CHOICES,
  FUEL_CHOICES,
  GEARBOX_CHOICES,
  INTERNAL_FEATURES_CHOICES,
  INTERNAL_MATERIALS_CHOICES,
  PROTECTION_CHOICES,
  STATUS_CHOICES,
  TYPE_CHOICES,
} from "@/app/(public)/newpost/components/CarForm";

export default function PostPreviewPage() {
  const params = useParams();
  const category = typeof params.category === "string" ? params.category : "";
  const id = typeof params.id === "string" ? params.id : "";

  let isCar = false;
  let isApartment = false;
  let isHouse = false;
  let isMobile = false;
  let isElec = false;
  let isOutdoor = false;
  let cat: string = "generic";
  if (category === "cars") {
    isCar = true;
    cat = "cars";
  } else if (category === "mobiles") {
    isMobile = true;
    cat = "mobile"; // استخدام "mobile" ليتوافق مع الـ API
  } else if (category === "apartments") {
    isApartment = true;
    cat = "apartment";
  } else if (category === "houses") {
    isHouse = true;
    cat = "houses";
  } else if (category === "tablets" || category === "pc" || category === "games" || category === "tv" || category === "audio_video_accessories" || category === "parts_accessories" || category === "home_appliances"  ) {
    isElec = true;
    cat = "electronics";
  } else if (category === "outdoor-space") {
    isOutdoor = true;
    cat = "outdoor-space";
  }

  console.log("id  ", id);
  console.log("cat  ", cat);

  const { data, isLoading, error } = useGetPostDetail(cat, id);

  // التعامل مع حالات التحميل والأخطاء
  if (isLoading) return <div>جاري التحميل...</div>;
  if (error) return <div>خطأ: {error.message}</div>;
  if (!data) return notFound();

  const allImages = [
    { id: 0, image: data.cover_image },
    ...(data.gallery_images || []),
  ];

  function translateBrand(brand: string): string {
    const brandMap = new Map(BRAND_CHOICES);
    return brandMap.get(brand) || brand;
  }

  function translateColor(brand: string): string {
    const colorMap = new Map(COLOR_CHOICES);
    return colorMap.get(brand) || brand;
  }

  function translateSTATUS_CHOICESCar(brand: string): string {
    const colorMap = new Map(STATUS_CHOICES);
    return colorMap.get(brand) || brand;
  }

  function translateFUEL_CHOICESCar(brand: string): string {
    const colorMap = new Map(FUEL_CHOICES);
    return colorMap.get(brand) || brand;
  }

  function translateGEARBOX_CHOICESCar(brand: string): string {
    const colorMap = new Map(GEARBOX_CHOICES);
    return colorMap.get(brand) || brand;
  }

  function translateTYPE_CHOICESCar(brand: string): string {
    const colorMap = new Map(TYPE_CHOICES);
    return colorMap.get(brand) || brand;
  }

  function translateDOORS_CHOICESCar(brand: string): string {
    const colorMap = new Map(DOORS_CHOICES);
    return colorMap.get(brand) || brand;
  }
  function translatetInternalMaterialChoiceCar(brand: string): string {
    const colorMap = new Map(INTERNAL_MATERIALS_CHOICES);
    return colorMap.get(brand) || brand;
  }

  function translateInternalFeatures(features: string[]): string {
    const featuresMap = new Map(INTERNAL_FEATURES_CHOICES);
    const translatedFeatures = features.map(
      (feature) => featuresMap.get(feature) || feature
    );
    return translatedFeatures.join(", ");
  }

  function translateEXTERNAL_FEATURES_CHOICESCar(features: string[]): string {
    const featuresMap = new Map(EXTERNAL_FEATURES_CHOICES);
    const translatedFeatures = features.map(
      (feature) => featuresMap.get(feature) || feature
    );
    return translatedFeatures.join(", ");
  }

  function translatePROTECTION_CHOICESCar(features: string[]): string {
    const featuresMap = new Map(PROTECTION_CHOICES);
    const translatedFeatures = features.map(
      (feature) => featuresMap.get(feature) || feature
    );
    return translatedFeatures.join(", ");
  }

  return (
    <main className=" gap-6 p-4  ">
      <div className="grid md:grid-cols-2  ">
        <ImageGallery images={allImages} />
        <div className="space-y-4 max-w-[90%] max-sm:max-w-full   mt-10">
          <div className="flex justify-between max-lg:flex-col">
            <h1 className="text-3xl font-bold ">{data.title}</h1>
            <div>ayghj</div>
          </div>
          <Link
            href={`/publicstore/${data.username}`}
            className="text-2xl font-bold text-cgreen"
          >
            متجر {data.user_first_name} {data.user_last_name}
          </Link>
          <p className="text-gray-600 mt-5 text-lg">{data.description}</p>
          <hr className="text-clightgray " />
          <div className="my-6">
            <p className="text-cgreen font-bold text-3xl">
              {data.price} ليرة سورية
            </p>
            <p className="text-cdarkgray  text-lg font-semibold mt-2">
              {data.price_type === "fixed" ? "سعر ثابت" : "قابل للتفاوض"}
            </p>
          </div>
          <hr className="text-clightgray " />
          <div className="flex gap-2 font-semibold my-6">
            <p className="text-cdarkgray  text-lg">{data.city}</p>
            <p className="text-cdarkgray  text-lg">{data.hood}</p>
          </div>

          <hr className="text-clightgray " />

          <button className="w-full bg-cgreen text-white py-3 rounded hover:bg-chgreen transition">
            تواصل مع البائع
          </button>
        </div>
      </div>

      <br />
      {isMobile && data.mobile && (
        <div className="w-[95%] max-sm:w-full shadow-md p-2 mt-5">
          <h2 className="text-2xl  font-semibold text-cgreen border-b-2 border-cgreen pb-1 mb-2">
            تفاصيل المنتج
          </h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {data.mobile.brand && (
              <li className="my-3 text-lg">
                <strong> العلامة التجارية: </strong>
                {data.mobile.brand}
              </li>
            )}
            {data.mobile.color && (
              <li className="my-3 text-lg">
                <strong>اللون: </strong>
                {translateColor(data.mobile.color)}
              </li>
            )}
            {data.mobile.accessories !== undefined && (
              <li className="my-3 text-lg">
                <strong>الإكسسوارات: </strong>
                {data.mobile.accessories ? "نعم" : "لا"}
              </li>
            )}
          </ul>
        </div>
      )}
      {/* ------------------------------------------------------------------- */}

      {isCar && data.car && (
        <div className="w-[95%] max-sm:w-full shadow-md p-2 mt-5">
          <h2 className="text-2xl font-semibold text-cgreen border-b-2 border-cgreen pb-1 mb-2">
            تفاصيل المنتج
          </h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {data.car.brand && (
              <li className="my-3 text-lg">
                <strong>العلامة التجارية:</strong>{" "}
                {translateBrand(data.car.brand)}
              </li>
            )}
            {data.car.color && (
              <li className="my-3 text-lg">
                <strong>اللون:</strong> {translateColor(data.car.color)}
              </li>
            )}
            {data.car.car_type && (
              <li className="my-3 text-lg">
                <strong>النوع:</strong>{" "}
                {translateTYPE_CHOICESCar(data.car.car_type)}
              </li>
            )}
            {data.car.fuel_type && (
              <li className="my-3 text-lg">
                <strong>نوع الوقود:</strong>{" "}
                {translateFUEL_CHOICESCar(data.car.fuel_type)}
              </li>
            )}
            {data.car.gearbox && (
              <li className="my-3 text-lg">
                <strong>نوع الغيار :</strong>{" "}
                {translateGEARBOX_CHOICESCar(data.car.gearbox)}
              </li>
            )}
            {data.car.number_of_doors && (
              <li className="my-3 text-lg">
                <strong>عدد الأبواب:</strong>{" "}
                {translateDOORS_CHOICESCar(data.car.number_of_doors)}
              </li>
            )}
            {data.car.status && (
              <li className="my-3 text-lg">
                <strong>الحالة:</strong>{" "}
                {translateSTATUS_CHOICESCar(data.car.status)}
              </li>
            )}
            {Array.isArray(data.car.protection) &&
              data.car.protection.length > 0 && (
                <li className="my-3 text-lg">
                  <strong>أنظمة الحماية:</strong>{" "}
                  {translatePROTECTION_CHOICESCar(data.car.protection)}
                </li>
              )}
            {Array.isArray(data.car.internal_features) &&
              data.car.internal_features.length > 0 && (
                <li className="my-3 text-lg">
                  <strong>المميزات الداخلية:</strong>{" "}
                  {translateInternalFeatures(data.car.internal_features)}
                </li>
              )}
            {Array.isArray(data.car.external_features) &&
              data.car.external_features.length > 0 && (
                <li className="my-3 text-lg">
                  <strong>المميزات الخارجية:</strong>{" "}
                  {translateEXTERNAL_FEATURES_CHOICESCar(
                    data.car.external_features
                  )}
                </li>
              )}
            {Array.isArray(data.car.internal_materials) &&
              data.car.internal_materials.length > 0 && (
                <li className="my-3 text-lg">
                  <strong>المواد الداخلية:</strong>{" "}
                  {translatetInternalMaterialChoiceCar(
                    data.car.internal_materials
                  )}
                </li>
              )}
          </ul>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}

      {isApartment && data.apartment && (
        <div className="w-[95%] max-sm:w-full shadow-md p-2 mt-5">
          <h2 className="text-2xl  font-semibold text-cgreen border-b-2 border-cgreen pb-1 mb-2">
            تفاصيل المنتج
          </h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {data.apartment.available_from && (
              <li className="my-3 text-lg">
                <strong> متاح من تاريخ: </strong>
                {data.apartment.available_from}
              </li>
            )}
            {data.apartment.bath && (
              <li className="my-3 text-lg">
                <strong>عدد الحمامات: </strong>
                {data.apartment.bath}
              </li>
            )}

            {data.apartment.bed_room && (
              <li className="my-3 text-lg">
                <strong>عدد غرف النوم: </strong>
                {data.apartment.bed_room}
              </li>
            )}

            {data.apartment.floor && (
              <li className="my-3 text-lg">
                <strong>الطابق: </strong>
                {data.apartment.floor}
              </li>
            )}

            {Array.isArray(data.apartment.furniture) &&
              data.apartment.furniture.length > 0 && (
                <li className="my-3 text-lg">
                  <strong>الأثاث: </strong>
                  {data.apartment.furniture}
                </li>
              )}

            {Array.isArray(data.apartment.general_characteristics) &&
              data.apartment.general_characteristics.length > 0 && (
                <li className="my-3 text-lg">
                  <strong>حالة المبنى: </strong>
                  {data.apartment.general_characteristics}
                </li>
              )}

            {data.apartment.offer_type && (
              <li className="my-3 text-lg">
                <strong>نوع العرض: </strong>
                {data.apartment.offer_type}
              </li>
            )}

            {data.apartment.real_estate_space && (
              <li className="my-3 text-lg">
                <strong>المساحة: </strong>
                {data.apartment.real_estate_space}
              </li>
            )}

            {data.apartment.room && (
              <li className="my-3 text-lg">
                <strong>عدد الغرف: </strong>
                {data.apartment.room}
              </li>
            )}

            {data.apartment.year && (
              <li className="my-3 text-lg">
                <strong>سنة البناء: </strong>
                {data.apartment.year}
              </li>
            )}
          </ul>
        </div>
      )}
      {/* ------------------------------------------------------------------- */}

      {isHouse && data.house && (
        <div className="w-[95%] max-sm:w-full shadow-md p-2 mt-5">
          <h2 className="text-2xl  font-semibold text-cgreen border-b-2 border-cgreen pb-1 mb-2">
            تفاصيل المنتج
          </h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {data.house.available_from && (
              <li className="my-3 text-lg">
                <strong> متاح من تاريخ: </strong>
                {data.house.available_from}
              </li>
            )}
            {data.house.house_type && (
              <li className="my-3 text-lg">
                <strong> متاح من تاريخ: </strong>
                {data.house.house_type}
              </li>
            )}
            {data.house.bath && (
              <li className="my-3 text-lg">
                <strong>عدد الحمامات: </strong>
                {data.house.bath}
              </li>
            )}

            {data.house.bed_room && (
              <li className="my-3 text-lg">
                <strong>عدد غرف النوم: </strong>
                {data.house.bed_room}
              </li>
            )}

            {Array.isArray(data.house.furniture) &&
              data.house.furniture.length > 0 && (
                <li className="my-3 text-lg">
                  <strong>الأثاث: </strong>
                  {data.house.furniture}
                </li>
              )}

            {Array.isArray(data.house.general_characteristics) &&
              data.house.general_characteristics.length > 0 && (
                <li className="my-3 text-lg">
                  <strong>حالة المبنى: </strong>
                  {data.house.general_characteristics}
                </li>
              )}

            {data.house.offer_type && (
              <li className="my-3 text-lg">
                <strong>نوع العرض: </strong>
                {data.house.offer_type}
              </li>
            )}

            {data.house.real_estate_space && (
              <li className="my-3 text-lg">
                <strong>المساحة: </strong>
                {data.house.real_estate_space}
              </li>
            )}

            {data.house.room && (
              <li className="my-3 text-lg">
                <strong>عدد الغرف: </strong>
                {data.house.room}
              </li>
            )}

            {data.house.year && (
              <li className="my-3 text-lg">
                <strong>سنة البناء: </strong>
                {data.house.year}
              </li>
            )}
          </ul>
        </div>
      )}
      {/* ------------------------------------------------------------------- */}

      {isElec && data.electronics && (
        <div className="w-[95%] max-sm:w-full shadow-md p-2 mt-5">
          <h2 className="text-2xl  font-semibold text-cgreen border-b-2 border-cgreen pb-1 mb-2">
            تفاصيل المنتج
          </h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {data.electronics.status && (
              <li className="my-3 text-lg">
                <strong> نوع الجهاز: </strong>
                {data.electronics.status}
              </li>
            )}
          </ul>
        </div>
      )}
      {/* ------------------------------------------------------------------- */}

      {isOutdoor && data.outdoorspace && (
        <div className="w-[95%] max-sm:w-full shadow-md p-2 mt-5">
          <h2 className="text-2xl  font-semibold text-cgreen border-b-2 border-cgreen pb-1 mb-2">
            تفاصيل المنتج
          </h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {data.outdoorspace.available_from && (
              <li className="my-3 text-lg">
                <strong> متاح من تاريخ: </strong>
                {data.outdoorspace.available_from}
              </li>
            )}

            {data.outdoorspace.area && (
              <li className="my-3 text-lg">
                <strong> المساحة: </strong>
                {data.outdoorspace.area}
              </li>
            )}

            {data.outdoorspace.land_type && (
              <li className="my-3 text-lg">
                <strong> نوع الأرض: </strong>
                {data.outdoorspace.land_type}
              </li>
            )}

            {data.outdoorspace.offer_type && (
              <li className="my-3 text-lg">
                <strong> نوع العرض: </strong>
                {data.outdoorspace.offer_type}
              </li>
            )}
          </ul>
        </div>
      )}
      {/* ------------------------------------------------------------------- */}

      {/* ------------------------------------------------------------------- */}
    </main>
  );
}
