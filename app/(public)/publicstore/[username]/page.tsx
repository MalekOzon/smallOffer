"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Eye, MapPin } from "lucide-react";
import SkeletonNotificationSettings from "@/app/components/ui/SkeletonNotificationSettings";
import AdCard from "@/app/components/ui/AdCard";
import userAvatar from "../../../../public/resourses/userAvatar.svg";
import placeholderPost from "../../../../public/resourses/placeholderPost.svg";
import type { Ad } from "@/app/types/authTypes";
import { useGetPublicProfileInfo } from "@/app/lib/postServices/postQueries";

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={filled ? "#FFD600" : "#E0E0E0"}
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "inline" }}
  >
    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
  </svg>
);

type PublicPost = {
  id: number;
  offer_type: string;
  title: string;
  description: string;
  price: string;
  city: string;
  cover_image: string | null;
  subcategory: string;
  created_at: string;
};
type PublicUser = {
  first_name: string;
  last_name: string;
  city: string;
  profile_image: string | null;
  total_posts: number;
  total_views: number;
  average_rating: number;
  rating_count: number;
};


const PublicStore = () => {
  const params = useParams();
  const username = params.username as string;
  const pageSize = 8;

  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState<PublicPost[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<PublicUser | null>(null);

  const { data } = useGetPublicProfileInfo(username, page, pageSize);
  useEffect(() => {
    if (!data) return;

    // إذا لم يكن هناك منشورات جديدة، لا تقم بأي تحديث
    if (!data.results.posts || data.results.posts.length === 0) {
      setHasMore(false);
      setIsLoading(false);
      return;
    }

    if (page === 1) {
      setAllPosts(data.results.posts);
    } else {
      // دمج بدون تكرار حسب id
      setAllPosts((prev) => {
        const ids = new Set(prev.map((p) => p.id));
        const newPosts = data.results.posts.filter((p) => !ids.has(p.id));
        return [...prev, ...newPosts];
      });
    }
    setUser(data.results.user);
    setHasMore(!!data.next);
    setIsLoading(false);
  }, [data, page]);

  const mappedAds: Ad[] = allPosts.map((post) => ({
    id: post.id,
    offer_type: post.offer_type as "sell" | "search",
    title: post.title,
    description: post.description,
    city: post.city,
    price: post.price,
    status: "accepted",
    cover_image: post.cover_image ?? placeholderPost,
    subcategory: post.subcategory,
    user_first_name: user?.first_name || "",
    user_last_name: user?.last_name || "",
    user_city: user?.city || "",
    user_profile_image: user?.profile_image || "",
    username: "",
  }));

  const rating = user?.average_rating || 0;
  const ratingCount = user?.rating_count || 0;
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));

  if (isLoading && page === 1) return <SkeletonNotificationSettings />;

  return (
    <div className="w-full flex flex-col justify-between items-start px-8 py-6 gap-8 rtl">
      {/* User Info & Store Info */}
      <div className="flex w-full max-md:flex-col justify-between gap-8 ">
        {/* Right: User Info */}
        <div className="flex max-md:flex-col items-center w-full md:w-1/2 gap-4  justify-center md:pr-10">
          <div className="rounded-full overflow-hidden border-2 border-cgreen w-36 h-36 shrink-0">
            <Image
              src={user?.profile_image || userAvatar}
              alt="profile image"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center md:text-right w-full md:mr-5 text-center ">
            <div className="text-2xl font-bold  text-gray-700 mb-4">
              {user ? `${user.first_name} ${user.last_name}` : "---"}
            </div>
            <div className="flex items-center max-md:justify-center gap-1 mb-1">
              {stars.map((filled, idx) => (
                <Star key={idx} filled={filled} />
              ))}
            </div>
            <div className="text-xs text-gray-600 mt-1">
              <span>(تقييم {ratingCount})</span>
              <span className="font-bold mx-1">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Left: Store Info */}
        <div className="shadow-xl rounded-xl  px-6 py-2 w-full md:w-[45%] md:ml-10 flex flex-col gap-6 border border-gray-100 bg-cwhite">
          <div className="flex items-center gap-2 text-gray-600 text-lg">
            <MapPin size={20} />
            <span className="text-xl">{user?.city || "---"}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-xl">
            <Eye size={20} />
            <span className="font-bold">{user?.total_views || 0}</span>
            <span>مشاهدة</span>
          </div>
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              className="flex-1 py-2 border border-cgreen text-cgreen rounded-md font-semibold hover:bg-cgreen hover:text-white transition"
            >
              إبلاغ
            </button>
            <button
              type="button"
              className="flex-1 py-2 bg-cgreen text-white rounded-md font-semibold hover:bg-chgreen transition"
            >
              تقييم المتجر
            </button>
          </div>
        </div>
      </div>

      {/* Bottom: Ads */}
      <div className="w-full flex-col flex h-full">
        <div className="border-b  mb-4 border-clightgray text-xl text-gray-700">
          الاعلانات المنشورة
        </div>
        <div className="flex ">
          <div className="w-[85%] max-md:w-full ml-1">
            {mappedAds.length > 0 ? (
              <div className="h-full rounded-md mb-10">
                <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                  {mappedAds.map((ad) => (
                    <AdCard
                      key={ad.id}
                      title={ad.title}
                      description={ad.description}
                      city={ad.city}
                      price={parseFloat(ad.price)}
                      published={ad.status}
                      isFav={true}
                      imageUrl={ad.cover_image}
                      id={ad.id}
                      subcat={ad.subcategory}
                      offer_type={ad.offer_type}
                    />
                  ))}
                </div>

                {hasMore && mappedAds.length > 0 && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => {
                        setIsLoading(true);
                        setPage((p) => p + 1);
                      }}
                      disabled={isLoading}
                      className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                      {isLoading ? "جاري التحميل..." : "تحميل المزيد"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                لا توجد إعلانات حاليًا.
              </div>
            )}
          </div>
          <div className="w-[15%] bg-cblue h-[500px] max-md:hidden">asd</div>
        </div>
      </div>
    </div>
  );
};

export default PublicStore;
