"use client";

import { useEffect, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { BRAND_CHOICES, FUEL_CHOICES } from "../newpost/components/CarForm";
import { STATUS_CHOICES } from "../newpost/components/MobileForm";
import { TYPE_CHOICES } from "../newpost/components/LandForm";

const ALL_CATEGORIES = [
  "سيارات",
  "موبايلات",
  "الكترونيات",
  "شقق",
  "منازل",
  "اراضي",
  "اخرى",
];

const SearchWithSidebar = ({ searchTerm }: { searchTerm: string }) => {
  console.log("searchTermINFILTER ", searchTerm);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("اخرى");
  const [city, setCity] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [ordering, setOrdering] = useState("-created_at");

  const [extraFilters, setExtraFilters] = useState<Record<string, string>>({});

  const router = useRouter();

  const handleExtraChange = (key: string, value: string) => {
    setExtraFilters((prev) => {
      if (value) {
        return { ...prev, [key]: value };
      } else {
        const { [key]: removed, ...rest } = prev;
        console.log(removed);
        return rest;
      }
    });
  };

  const resetFilters = (newCategory?: string) => {
    setSelectedCategory(newCategory || "اخرى");
    setCity("");
    setPriceFrom("");
    setPriceTo("");
    setOrdering("-created_at");
    setExtraFilters({});
    const params = new URLSearchParams(searchTerm);
    const searchValue = params.get("search") || "";
    router.push(
      `/searchpost${
        searchValue ? `?search=${encodeURIComponent(searchValue)}` : ""
      }`
    );
  };

  useEffect(() => {
    const params = new URLSearchParams(searchTerm);
    const newExtraFilters: Record<string, string> = {};

    params.forEach((value, key) => {
      if (key === "city") setCity(value);
      else if (key === "min_price") setPriceFrom(value);
      else if (key === "max_price") setPriceTo(value);
      else if (key === "ordering") setOrdering(value);
      else if (key.includes("__")) {
        newExtraFilters[key] = value;
      }
    });

    setExtraFilters(newExtraFilters);
  }, [searchTerm, selectedCategory]);

  const generalFilters = (
    <>
      <div>
        <label className="block mb-1">ترتيب حسب</label>
        <select
          className="w-full border p-2 rounded"
          value={ordering}
          onChange={(e) => setOrdering(e.target.value)}
        >
          <option value="-created_at">آخر الإضافات</option>
          <option value="price">الأرخص</option>
          <option value="-price">الأغلى</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">تصنيف المنتج</label>
        <select
          className="w-full border p-2 rounded"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            resetFilters(e.target.value);
            setExtraFilters({});
          }}
        >
          {ALL_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1">المدينة</label>
        <select
          id="city"
          dir="rtl"
          className="border border-clightgray w-full text-cdarkgray py-2.5 mt-1 focus:outline-none transition duration-200 rounded-lg"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">اختر المحافظة</option>
          {syrianGovernorates.map((gov) => (
            <option
              key={gov.value}
              value={gov.value}
              className="text-cdarkgray"
            >
              {gov.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1">السعر</label>
        <div className="flex gap-2">
          <input
            type="number"
            className="w-full border p-2 rounded"
            placeholder="من"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
          />
          <input
            type="number"
            className="w-full border p-2 rounded"
            placeholder="إلى"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
          />
        </div>
      </div>
    </>
  );

  const renderExtraFilters = () => {
    switch (selectedCategory) {
      case "سيارات":
        return (
          <>
            <div>
              <label>الماركة</label>
              <select
                className="w-full border p-2  rounded"
                value={extraFilters["car_details__brand"] || ""}
                onChange={(e) =>
                  handleExtraChange("car_details__brand", e.target.value)
                }
              >
                <option value="">اختر النوع</option>
                {BRAND_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">حالة السيارة</label>
              <div className="flex  gap-2">
                {[
                  { value: "", label: "الكل" },
                  { value: "damaged", label: "متضررة" },
                  { value: "undamaged", label: "غير متضررة" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 p-2 w-40 justify-center text-sm  rounded cursor-pointer border transition-colors duration-200 ${
                      extraFilters["car_details__status"] === option.value ||
                      (option.value === "" &&
                        !extraFilters["car_details__status"])
                        ? "bg-cgreen text-white border-cgreen"
                        : "bg-gray-100 text-cdarkgray border-clightgray hover:bg-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="car_status"
                      value={option.value}
                      checked={
                        extraFilters["car_details__status"] === option.value ||
                        (option.value === "" &&
                          !extraFilters["car_details__status"])
                      }
                      onChange={(e) =>
                        handleExtraChange("car_details__status", e.target.value)
                      }
                      className="hidden"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-1">ناقل الحركة</label>
              <div className="flex  gap-2">
                {[
                  { value: "", label: "الكل" },
                  { value: "manual", label: "عادي" },
                  { value: "automatic", label: "أوتوماتيك" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 p-2 w-40 text-sm justify-center rounded cursor-pointer border transition-colors duration-200 ${
                      extraFilters["apartment_details__offer_type"] === option.value ||
                      (option.value === "" &&
                        !extraFilters["car_details__gearbox"])
                        ? "bg-cgreen text-white border-cgreen"
                        : "bg-gray-100 text-cdarkgray border-clightgray hover:bg-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gearbox"
                      value={option.value}
                      checked={
                        extraFilters["car_details__gearbox"] === option.value ||
                        (option.value === "" &&
                          !extraFilters["car_details__gearbox"])
                      }
                      onChange={(e) =>
                        handleExtraChange(
                          "car_details__gearbox",
                          e.target.value
                        )
                      }
                      className="hidden"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label>سنة التسجيل</label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={extraFilters["car_details__first_registration"] || ""}
                onChange={(e) =>
                  handleExtraChange(
                    "car_details__first_registration",
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label>نوع الوقود</label>
              <select
                className="w-full border p-2 rounded"
                value={extraFilters["car_details__fuel_type"]}
                onChange={(e) =>
                  handleExtraChange("car_details__fuel_type", e.target.value)
                }
              >
                <option value="">اختر النوع</option>
                {FUEL_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </>
        );
      case "موبايلات":
        return (
          <>
            <div>
              <label>الماركة</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={extraFilters["mobile_details__brand"] || ""}
                onChange={(e) =>
                  handleExtraChange("mobile_details__brand", e.target.value)
                }
              />
            </div>
            <div>
              <label>الحالة</label>
              <select
                className="w-full border p-2  rounded"
                value={extraFilters["mobile_details__status"] || ""}
                onChange={(e) =>
                  handleExtraChange("mobile_details__status", e.target.value)
                }
              >
                <option value="">اختر الحالة</option>
                {STATUS_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">الاكسسوارات</label>
              <div className="flex  gap-2">
                {[
                  { value: "", label: "الكل" },
                  { value: "true", label: "مع ملحقات" },
                  { value: "false", label: "بدون ملحقات" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 py-1.5 px-1 w-44 justify-center text-sm  rounded cursor-pointer border transition-colors duration-200 ${
                      extraFilters["mobile_details__accessories"] ===
                        option.value ||
                      (option.value === "" &&
                        !extraFilters["mobile_details__accessories"])
                        ? "bg-cgreen text-white border-cgreen"
                        : "bg-gray-100 text-cdarkgray border-clightgray hover:bg-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="car_status"
                      value={option.value}
                      checked={
                        extraFilters["mobile_details__accessories"] ===
                          option.value ||
                        (option.value === "" &&
                          !extraFilters["mobile_details__accessories"])
                      }
                      onChange={(e) =>
                        handleExtraChange(
                          "mobile_details__accessories",
                          e.target.value
                        )
                      }
                      className="hidden"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          </>
        );
      case "الكترونيات":
        return (
          <>
            <div>
              <label>الحالة</label>
              <select
                className="w-full border p-2  rounded"
                value={extraFilters["mobile_details__status"] || ""}
                onChange={(e) =>
                  handleExtraChange("mobile_details__status", e.target.value)
                }
              >
                <option value="">اختر الحالة</option>
                {STATUS_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </>
        );
      case "منازل":
        return (
          <>
            <div>
              <label className="block mb-1">نوع العرض</label>
              <div className="flex  gap-2">
                {[
                  { value: "", label: "الكل" },
                  { value: "sale", label: "شراء" },
                  { value: "rent", label: "ايجار" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 p-2 w-40 text-sm justify-center rounded cursor-pointer border transition-colors duration-200 ${
                      extraFilters["house_details__offer_type"] === option.value ||
                      (option.value === "" &&
                        !extraFilters["house_details__offer_type"])
                        ? "bg-cgreen text-white border-cgreen"
                        : "bg-gray-100 text-cdarkgray border-clightgray hover:bg-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gearbox"
                      value={option.value}
                      checked={
                        extraFilters["house_details__offer_type"] === option.value ||
                        (option.value === "" &&
                          !extraFilters["house_details__offer_type"])
                      }
                      onChange={(e) =>
                        handleExtraChange(
                          "house_details__offer_type",
                          e.target.value
                        )
                      }
                      className="hidden"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label>مساحة المنزل</label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={extraFilters["house_details__real_estate_space"] || ""}
                onChange={(e) =>
                  handleExtraChange(
                    "house_details__real_estate_space",
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label>عدد الغرف</label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={extraFilters["house_details__room"] || ""}
                onChange={(e) =>
                  handleExtraChange("house_details__room", e.target.value)
                }
              />
            </div>
          </>
        );
      case "شقق":
        return (
          <>
            <div>
              <label className="block mb-1">نوع العرض</label>
              <div className="flex  gap-2">
                {[
                  { value: "", label: "الكل" },
                  { value: "sale", label: "شراء" },
                  { value: "rent", label: "ايجار" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 p-2 w-40 text-sm justify-center rounded cursor-pointer border transition-colors duration-200 ${
                      extraFilters["apartment_details__offer_type"] === option.value ||
                      (option.value === "" &&
                        !extraFilters["apartment_details__offer_type"])
                        ? "bg-cgreen text-white border-cgreen"
                        : "bg-gray-100 text-cdarkgray border-clightgray hover:bg-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gearbox"
                      value={option.value}
                      checked={
                        extraFilters["apartment_details__offer_type"] === option.value ||
                        (option.value === "" &&
                          !extraFilters["apartment_details__offer_type"])
                      }
                      onChange={(e) =>
                        handleExtraChange(
                          "apartment_details__offer_type",
                          e.target.value
                        )
                      }
                      className="hidden"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label>مساحة الشقة</label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={extraFilters["apartment_details__real_estate_space"] || ""}
                onChange={(e) =>
                  handleExtraChange(
                    "apartment_details__real_estate_space",
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label>عدد الغرف</label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={extraFilters["apartment_details__room"] || ""}
                onChange={(e) =>
                  handleExtraChange("apartment_details__room", e.target.value)
                }
              />
            </div>
            <div>
              <label>طابق</label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={extraFilters["apartment_details__floor"] || ""}
                onChange={(e) =>
                  handleExtraChange("apartment_details__floor", e.target.value)
                }
              />
            </div>
          </>
        );
      case "اراضي":
        return (
          <>
            <div>
              <label className="block mb-1">نوع العرض</label>
              <div className="flex  gap-2">
                {[
                  { value: "", label: "الكل" },
                  { value: "sale", label: "شراء" },
                  { value: "rent", label: "ايجار" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-2 p-2 w-40 text-sm justify-center rounded cursor-pointer border transition-colors duration-200 ${
                      extraFilters["outdoorspace_details__offer_type"] === option.value ||
                      (option.value === "" &&
                        !extraFilters["outdoorspace_details__offer_type"])
                        ? "bg-cgreen text-white border-cgreen"
                        : "bg-gray-100 text-cdarkgray border-clightgray hover:bg-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gearbox"
                      value={option.value}
                      checked={
                        extraFilters["outdoorspace_details__offer_type"] === option.value ||
                        (option.value === "" &&
                          !extraFilters["outdoorspace_details__offer_type"])
                      }
                      onChange={(e) =>
                        handleExtraChange(
                          "outdoorspace_details__offer_type",
                          e.target.value
                        )
                      }
                      className="hidden"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label>مساحة الأرض</label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={extraFilters["outdoorspace_details__area"] || ""}
                onChange={(e) =>
                  handleExtraChange(
                    "outdoorspace_details__area",
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label>نوع الأرض</label>
              <select
                className="w-full border p-2 rounded"
                value={extraFilters["outdoorspace_details__land_type"]}
                onChange={(e) =>
                  handleExtraChange("outdoorspace_details__land_type", e.target.value)
                }
              >
                <option value="">اختر النوع</option>
                {TYPE_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            
          </>
        );
      default:
        return null;
    }
  };

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    // الاحتفاظ بقيمة search من searchTerm
    const existingParams = new URLSearchParams(searchTerm);
    const searchValue = existingParams.get("search") || "";

    // إضافة قيمة search إذا كانت موجودة
    if (searchValue) {
      params.set("search", searchValue);
    }

    // إضافة الفلاتر العامة
    if (city) params.set("city", city);
    if (priceFrom) params.set("min_price", priceFrom);
    if (priceTo) params.set("max_price", priceTo);
    if (ordering) params.set("ordering", ordering);

    // إضافة الفلاتر الإضافية
    Object.entries(extraFilters).forEach(([key, val]) => {
      if (val) params.set(key, val);
    });

    // الانتقال إلى الرابط الجديد
    router.push(`/searchpost?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 border p-2 rounded-md text-sm text-cgreen border-cgreen mb-4"
      >
        <SlidersHorizontal className="w-4 h-4" />
        فلتر البحث
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">الفلترة والتصفية</h2>
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        <div className="space-y-4">
          {generalFilters}
          {renderExtraFilters()}
        </div>

        <div className="flex gap-2 mt-6">
          <button
            onClick={handleApplyFilters}
            className="flex-1 bg-cgreen text-white p-2 rounded"
          >
            تطبيق الفلاتر
          </button>
          <button
            onClick={() => resetFilters()}
            className="flex-1 bg-gray-200 text-gray-700 p-2 rounded"
          >
            إعادة تعيين
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchWithSidebar;
