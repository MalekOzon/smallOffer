"use client";
import StatusCard from "../components/dashborad/StatusCard";
import ProfileCard from "../components/dashborad/ProfileCard";
import icon from "../../public/resourses/Icon.svg";
import icon1 from "../../public/resourses/Icon-1.svg";
import icon2 from "../../public/resourses/Icon-2.svg";
import star from "../../public/resourses/star.svg";
import Title from "../components/dashborad/Title";
import AdCard from "../components/ui/AdCard";
import { useGetUserInfo, useGetUserPosts } from "../lib/dashboardServices/dashboardQueries";
import { Ad } from "../types/authTypes";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Link from "next/link";
import  placeholderPost  from "../../public/resourses/placeholderPost.svg"

export default function DashboardHomePage() {
  const { data, isLoading } = useGetUserPosts(1 , 4);
  const { data: dataUser } = useGetUserInfo();
  return (
    <div className="  mt-2 ">
      {/* العنوان */}
      <Title title="متجري" isPostPage={false} />

      {/* الحاوية الرئيسية */}
      <div className="flex w-full flex-col xl:flex-row gap-6">
        {/* البروفايل (يظهر أولاً في الشاشات الصغيرة - على اليمين في الشاشات الكبيرة) */}
        <div className="w-[98%] max-sm:mr-1  xl:w-[40%] ">
          <ProfileCard />
        </div>

        {/* المحتوى الرئيسي */}
        <div className="w-full xl:w-[60%] space-y-6">
          {/* البطاقات */}
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 max-sm:mx-5">
            <StatusCard title="عدد الإعلانات المنشورة" icon={icon} value={dataUser?.total_posts ?? 0} />
            <StatusCard title="الرسائل الغير مقروءة" icon={icon1} value="لسا بدا ربط" />
            <StatusCard title="عدد الزيارات" icon={icon2} value={dataUser?.total_views ?? 0} />
            <StatusCard title="تقييم المتجر" icon={star} value={dataUser?.average_rating ?? 0} />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Title title="جدول إعلاناتي" isPostPage={false} />
        {isLoading && <LoadingSpinner /> }
        {!isLoading && data?.results.length == 0 &&(
          <div className=" flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow-sm border border-gray-100 my-8">

          <h2 className="text-xl font-bold text-cgreen mb-2">ليس لديك منشورات حتى الآن</h2>
          <p className="text-gray-500 " >يمكنك إضافة منشور جديد من خلال الضغط على زر نشر جديد في صفحة 
            <Link href="/dashboard/ads" className="text-cgreen underline">إعلاناتي</Link>
          </p>
        </div>
        )}
        {!isLoading && (
        <div className="max-sm:my-4 max-sm:w-[90%] max-sm:mx-4 grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {!isLoading && data!.results && data?.results.slice(0, 4).map((ad: Ad) => (
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
            subcat={ad.subcategory}
            offer_type={ad.offer_type}
            fav={ad.fav}
          />
          ))}
        </div>)}
      </div>
    </div>
  );
}
