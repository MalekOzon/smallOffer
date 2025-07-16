'use client';

import { useState } from "react";
import GenericPostForm from "./components/GenericPostForm";
import CarForm from "./components/CarForm";
import LandForm from "./components/LandForm";
import HouseForm from "./components/HouseForm";
import ApartmentForm from "./components/ApartmentForm";
import ElectronicsForm from "./components/ElectronicsForm";
import MobileForm from "./components/MobileForm";
import { categories as categoriesData } from "../../sections/categories";

export default function NewPostPage() {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  let formToShow = null;
  const selectedCategoryObj = categoriesData.find(cat => cat.name === category);
  const selectedSubcategoryObj = selectedCategoryObj?.items.find(item => item.label === subcategory);
  const categorySlug = selectedCategoryObj?.slug || "";
  const subcategorySlug = selectedSubcategoryObj?.slug || "";

  if (category === "الآليات" && subcategory === "سيارات") {
    formToShow = <CarForm Gcategory={categorySlug} Gsubcategory={subcategorySlug} />;
  } else if (category === "العقارات" && subcategory === "أراضي") {
    formToShow = <LandForm  Gcategory={categorySlug} Gsubcategory={subcategorySlug} />;
  } else if (category === "العقارات" && subcategory === "منازل") {
    formToShow = <HouseForm Gcategory={categorySlug} Gsubcategory={subcategorySlug} />;
  } else if (category === "العقارات" && subcategory === "شقق") {
    formToShow = <ApartmentForm Gcategory={categorySlug} Gsubcategory={subcategorySlug} />;
  } else if (category === "الإلكترونيات والكهربائيات" && subcategory === "موبايلات") {
    formToShow = <MobileForm Gcategory={categorySlug} Gsubcategory={subcategorySlug} />;
  } else if (category === "الإلكترونيات والكهربائيات" && subcategory && subcategory !== "") {
    formToShow = <ElectronicsForm Gcategory={categorySlug} Gsubcategory={subcategorySlug} />;
  } else  {
    formToShow = <GenericPostForm Gcategory={categorySlug} Gsubcategory={subcategorySlug} />;
  }

  const mainCategories = ["اختر الإدخال", ...categoriesData.map(cat => cat.name)];
  const subcategories = selectedCategoryObj
    ? ["اختر الإدخال", ...selectedCategoryObj.items.map(item => item.label)]
    : ["اختر الإدخال"];

  return (
    <div className="min-h-screen py-4 bg-gray-100  flex flex-col items-center ">
      <div className="w-[90%]    ">
        {/* العنوان والوصف */}
        <div className=" mb-6 w-full  ">
          <h1 className="text-3xl font-bold mb-2 flex justify-start max-sm:text-2xl">نشر إعلان جديد</h1>
          <p className="text-gray-600  flex justify-start max-sm:block ">
            بنشرك اعلان جديد فإنك توافق على{" "}
            <a href="#" className="text-cgreen underline hover:text-chgreen mx-1 ">سياسة النشر</a>
            {" "}الخاصة  بـ small-offer
          </p>
        </div>
        {/* بطاقة التصنيف */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-xl mb-2 text-gray-800">تصنيف المنتج</h2>
          <p className="text-gray-500  mb-4">
            اختر تصنيف المنتج الخاص بك مع العلم أن التفاصيل المدخلة تختلف بحسب التصنيف
          </p>
          <hr className="mb-6 text-clightgray" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="  ">
              <label className="block font-medium mb-1 text-gray-700">التصنيف</label>
              <select
                className="input w-full border-cgreen rounded-lg py-2 px-3 bg-cwhite "
                value={category}
                onChange={e => {
                  setCategory(e.target.value);
                  setSubcategory("اختر الإدخال");
                }}
              >
                {mainCategories.map(cat => (
                  <option key={cat} value={cat} className=" ">{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1 text-gray-700">التصنيف الفرعي</label>
              <select
                className="input w-full border-cgreen rounded-lg py-2 px-3 bg-cwhite"
                value={subcategory}
                onChange={e => setSubcategory(e.target.value)}
              >
                {subcategories.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* عرض الفورم المناسب */}
        <div className=" ">{formToShow}</div>
      </div>
    </div>
  );
}
