'use client';

import Title from '@/app/components/dashborad/Title';
import AdCard from '@/app/components/ui/AdCard';
import SkeletonNotificationSettings from '@/app/components/ui/SkeletonNotificationSettings';
import { useGetUserPosts } from '@/app/lib/dashboardServices/dashboardQueries';
import { Ad } from '@/app/types/authTypes';
import React, { useState } from 'react';
import  placeholderPost  from "../../../public/resourses/placeholderPost.svg"
const AdsPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 8;
  const { data, isLoading, isFetching } = useGetUserPosts(page);
  console.log("DATA::   ",data)
  
  const totalPages = data ? Math.ceil(data.count / pageSize) : 1;
  console.log("totalPages:" ,  data)
  if (isLoading) return <SkeletonNotificationSettings />;

  return (
    <div className=" mt-2  ">
      <Title title="إعلاناتي" isPostPage={true} />
      {totalPages == 0 && (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow-sm border border-gray-100 my-8">

          <h2 className="text-xl font-bold text-cgreen mb-2">ليس لديك منشورات حتى الآن</h2>
          <p className="text-gray-500 ">يمكنك إضافة منشور جديد من خلال الضغط على زر نشر جديد</p>
        </div>
      )}
      {totalPages > 0 && 
      <div className="h-full px-4 py-4 bg-gray-50 rounded-md max-sm:mt-2">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {data?.results.map((ad: Ad) => (
            <AdCard
              key={ad.id}
              title={ad.title}
              description={ad.description}
              city={ad.city}
              price={parseFloat(ad.price)}
              published={ad.status}
              isFav={false}
              imageUrl={ad.cover_image ?? placeholderPost }
              id={ad.id}
            />
          ))}
        </div>

        {/* ✅ أزرار التصفح */}
        <div className="flex justify-center mt-5 gap-2 flex-wrap">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-1 rounded-full border bg-white text-gray-600 hover:bg-gray-100"
          >
            السابق
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-1 rounded-full border ${
                page === i + 1
                  ? 'bg-cgreen text-white border-cgreen'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              disabled={isFetching && page === i + 1}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-1 rounded-full border bg-white text-gray-600 hover:bg-gray-100"
          >
            التالي
          </button>
        </div>
      </div>
      }
    </div>
  );
};

export default AdsPage;
