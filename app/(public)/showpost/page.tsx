"use client";
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
import {
  FURNITURE_CHOICES,
  GENERAL_CHARACTERISTICS,
} from "@/app/(public)/newpost/components/ApartmentForm";
import { HOUSE_CHOICES } from "@/app/(public)/newpost/components/HouseForm";
import { Eye, Heart, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { AdPreview } from "@/app/lib/postServices/postType";
import ImageGalleryShow from "./ImageGalleryShow";

export default function ShowPost() {
  const [data, setData] = useState<AdPreview>();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("previewData");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  if (!data) return <div>جارٍ التحميل...</div>;
  console.log("data ",data)

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // يرجع الحالة بعد 1.5 ثانية
    });
  };


  let isCar = false;
  let isApartment = false;  
  let isHouse = false;
  let isMobile = false;
  let isElec = false;
  let isOutdoor = false;
  if (data.subcategory === "cars") {
    isCar = true;
  } else if (data.subcategory === "mobiles") {
    isMobile = true;
  } else if (data.subcategory === "apartments") {
    isApartment = true;
  } else if (data.subcategory === "houses") {
    isHouse = true;
  } else if (
    data.subcategory === "tablets" ||
    data.subcategory === "pc" ||
    data.subcategory === "games" ||
    data.subcategory === "tv" ||
    data.subcategory === "audio_video_accessories" ||
    data.subcategory === "parts_accessories" ||
    data.subcategory === "home_appliances"
  ) {
    isElec = true;
  } else if (data.subcategory === "outdoor-space") {
    isOutdoor = true;
  }

  const coverImageUrl =
  typeof data.cover_image === "object" && data.cover_image instanceof File
    ? URL.createObjectURL(data.cover_image)
    : data.cover_image || ""; // Fallback to empty string if undefined

const allImages = [
  { id: 0, image: coverImageUrl },
  ...(data.gallery?.map((img, index) => ({
    id: index + 1,
    image: typeof img === "object" && img instanceof File ? URL.createObjectURL(img) : img,
  })) || []),
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
  // ------------------------------------------------
  function translateFURNITURE_CHOICESApa(features: string[]): string {
    const featuresMap = new Map(FURNITURE_CHOICES);
    const translatedFeatures = features.map(
      (feature) => featuresMap.get(feature) || feature
    );
    return translatedFeatures.join(", ");
  }

  function translateGENERAL_CHARACTERISTICSApa(features: string[]): string {
    const featuresMap = new Map(GENERAL_CHARACTERISTICS);
    const translatedFeatures = features.map(
      (feature) => featuresMap.get(feature) || feature
    );
    return translatedFeatures.join(", ");
  }
  // ------------------------------------------------

  function translatetHOUSE_CHOICES(brand: string): string {
    const colorMap = new Map(HOUSE_CHOICES);
    return colorMap.get(brand) || brand;
  }
  // ------------------------------------------------
  function translatetSTATUS_CHOICESELEC(brand: string): string {
    const sss: [string, string][] = [
      ["new", "جديد"],
      ["used_very_good", "مستعمل جيد جداً"],
      ["working_good", "يعمل بشكل جيد"],
      ["defective", "عيب (يحتاج صيانة)"],
    ];
    const colorMap = new Map(sss);
    return colorMap.get(brand) || brand;
  }

  // ------------------------------------------------
  function translatetTYPE_CHOICESLAND(brand: string): string {
    const sd: [string, string][] = [
      ["residential_plot", "قطعة أرض للبناء"],
      ["garden", "حديقة"],
      ["agriculture_forest", "زراعة / غابات"],
      ["other_property", "عقارات وحدائق أخرى"],
    ];
    const colorMap = new Map(sd);
    return colorMap.get(brand) || brand;
  }

  return (
    <main className=" gap-6 p-4  ">
      <div className="grid md:grid-cols-2  ">
        <ImageGalleryShow images={allImages} />
        <div className="space-y-4 max-w-[90%] max-sm:max-w-full   mt-10">
          <div className="flex justify-between max-lg:flex-col">
            <h1 className="text-3xl font-bold ">{data.title}</h1>
            <div className="flex gap-2 justify-center items-center max-lg:justify-end max-lg:mt-3">
              <button className={` rounded-md  group `}>
                <Heart className="h-[44px] w-9 transition-colors rounded-md p-1 max-sm:mt-2bg-green-100 text-cgreen group-hover:bg-cgreen group-hover:text-white" />
              </button>
              <div
                onClick={handleCopy}
                className="cursor-pointer h-[44px] bg-green-100 text-cgreen flex gap-2 rounded-md p-2 text-lg w-[40px] max-sm:mt-2 hover:bg-green-200"
              >
                <Share2 />
                {copied && <span className="text-lg text-center ">✅</span>}
              </div>
              <div className="bg-green-100 text-cgreen flex gap-2 rounded-md p-2 text-lg w-[80px] max-sm:mt-2 ">
                <Eye /> 25
              </div>
            </div>
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
            {data.car.model && (
              <li className="my-3 text-lg">
                <strong>الموديل:</strong> {(data.car.model)}
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
                  {translateFURNITURE_CHOICESApa(data.apartment.furniture)}
                </li>
              )}

            {Array.isArray(data.apartment.general_characteristics) &&
              data.apartment.general_characteristics.length > 0 && (
                <li className="my-3 text-lg">
                  <strong>حالة المبنى: </strong>
                  {translateGENERAL_CHARACTERISTICSApa(
                    data.apartment.general_characteristics
                  )}
                </li>
              )}

            {data.apartment.offer_type && (
              <li className="my-3 text-lg">
                <strong>نوع العرض: </strong>
                {data.apartment.offer_type === "sale" ? "شراء" : "ايجار"}
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
                <strong>نوع المنزل :</strong>
                {translatetHOUSE_CHOICES(data.house.house_type)}
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
                  {translateFURNITURE_CHOICESApa(data.house.furniture)}
                </li>
              )}

            {Array.isArray(data.house.general_characteristics) &&
              data.house.general_characteristics.length > 0 && (
                <li className="my-3 text-lg">
                  <strong>حالة المبنى: </strong>
                  {translateGENERAL_CHARACTERISTICSApa(
                    data.house.general_characteristics
                  )}
                </li>
              )}

            {data.house.offer_type && (
              <li className="my-3 text-lg">
                <strong>نوع العرض: </strong>
                {data.house.offer_type === "sale" ? "شراء" : "ايجار"}
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
                {translatetSTATUS_CHOICESELEC(data.electronics.status)}
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
                {translatetTYPE_CHOICESLAND(data.outdoorspace.land_type)}
              </li>
            )}

            {data.outdoorspace.offer_type && (
              <li className="my-3 text-lg">
                <strong> نوع العرض: </strong>
                {data.outdoorspace.offer_type === "sale" ? "شراء" : "ايجار"}
              </li>
            )}
          </ul>
        </div>
      )}
      {/* ------------------------------------------------------------------- */}

    </main>
  );
}
