"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { useGetSearchRes } from "@/app/lib/searchServices/searchQueries";
import AdCard from "@/app/components/ui/AdCard";
import placeholderPost from "../../../public/resourses/placeholderPost.svg";
import { Ad } from "@/app/types/authTypes";
import SearchWithSidebar from "./SearchWithSidebar";

function Search() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.toString();
  const [page, setPage] = useState(1);
  const [allResults, setAllResults] = useState<Ad[]>([]); // للاحتفاظ بجميع النتائج

  console.log("all res  ", allResults);




  const { data, isLoading, error } = useGetSearchRes(page, 10, searchTerm);

  useEffect(() => {
    setPage(1);
    setAllResults([]); 
  }, [searchTerm]);

  useEffect(() => {
    if (data?.results) {
      setAllResults((prev) =>
        page === 1 ? data.results : [...prev, ...data.results]
      );
    }
  }, [data?.results, page]);

  return (
    <div className="p-4">
      <SearchWithSidebar searchTerm={searchTerm} />

      <h1 className="text-xl font-bold mb-4 max-w-3xl">
        اختياراتنا : ( تتضمن إعلانات مدفوعة)
      </h1>

      {isLoading && page === 1 && <p>جاري تحميل النتائج...</p>}
      {error && <p>حدث خطأ أثناء جلب البيانات</p>}

      {allResults.length === 0 && !isLoading && (
        <p className="text-gray-500 text-center">لا توجد نتائج مطابقة</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {allResults.map((ad) => (
          <AdCard
            key={ad.id}
            title={ad.title}
            description={ad.description}
            city={ad.city}
            price={parseFloat(ad.price)}
            published={ad.status}
            isFav={true}
            imageUrl={ad.cover_image ?? placeholderPost}
            id={ad.id}
            subcat={ad.subcategory}
            offer_type={ad.offer_type}
            fav={ad.fav ? "added" : "removed"}
            />
        ))}
      </div>

      {data?.next && (
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="mt-6 block mx-auto bg-cgreen text-white px-4 py-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? "جاري التحميل..." : "عرض المزيد"}
        </button>
      )}
    </div>
  );
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div>جاري التحميل...</div>}>
      <Search />
    </Suspense>
  );
}
