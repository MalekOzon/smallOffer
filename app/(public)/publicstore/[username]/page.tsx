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
import Link from "next/link";
import { useGetPublicPage } from "@/app/lib/postServices/postQueries";
import Notification from "@/app/components/ui/Notification";
import ReportStoreModal from "./ReportStoreModal";
import RateStoreModal from "./RateStoreModal";
import { motion } from "framer-motion";

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={filled ? "#FFD600" : "#E0E0E0"}
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "inline" }}
    role="img"
    aria-label={filled ? "نجمة مملوءة" : "نجمة فارغة"}
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
  fav: "added" | "removed";
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
  const [showReportModal, setShowReportModal] = useState(false);
  const [showRateModal, setShowRateModal] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // استدعاء جميع الهوكات في أعلى المكون
  const params = useParams();
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState<PublicPost[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<PublicUser | null>(null);

  const username = Array.isArray(params.username)
    ? params.username[0]
    : params.username;

  const pageSize = 8;
  const {
    data,
    error: postError,
    isLoading: isFetchingPosts,
  } = useGetPublicPage(username!, page, pageSize);

  useEffect(() => {
    if (!data) return;

    if (!data.results.posts || data.results.posts.length === 0) {
      setHasMore(false);
      setIsLoading(false);
      return;
    }

    // تحويل البيانات لتتوافق مع نوع PublicPost
    const postsWithFav: PublicPost[] = data.results.posts.map((post) => ({
      ...post,
      fav: post.fav ? "added" : "removed", // تحويل boolean إلى "added" | "removed"
    }));

    if (page === 1) {
      setAllPosts(postsWithFav);
    } else {
      setAllPosts((prev) => {
        const ids = new Set(prev.map((p) => p.id));
        const newPosts = postsWithFav.filter((p) => !ids.has(p.id));
        return [...prev, ...newPosts];
      });
    }
    setUser(data.results.user || null);
    setHasMore(!!data.next);
    setIsLoading(false);
  }, [data, page]);

  if (postError) {
    return (
      <div className="text-center text-red-500 py-12">
        حدث خطأ أثناء جلب البيانات. حاول مرة أخرى.
      </div>
    );
  }
  if (!username) {
    return (
      <div className="text-center text-red-500 py-12">
        لم يتم تحديد اسم المستخدم.
      </div>
    );
  }

  if (isFetchingPosts && page === 1) return <SkeletonNotificationSettings />;

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
    username: username,
    fav: post.fav,
  }));

  const rating = user?.average_rating || 0;
  const ratingCount = user?.rating_count || 0;
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));

  return (
    <div className="w-full flex flex-col justify-between items-start px-8 py-6 gap-8  overflow-hidden">
      {/* ------------- Noti -------------- */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      {/* User Info & Store Info */}
      <div className="flex w-full max-md:flex-col justify-between gap-8">
        {/* Right: User Info */}
        <motion.div
          initial={{ x: "+100%" }}
          animate={{ x: "0" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex max-md:flex-col items-center w-full md:w-1/2 gap-4 justify-center md:pr-12"
        >
          <div className="rounded-full overflow-hidden border-2 border-cgreen w-36 h-36 shrink-0">
            <Image
              src={user?.profile_image || userAvatar}
              alt="صورة الملف الشخصي"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center md:text-right w-full md:mr-2 text-center">
            <div className="text-2xl font-bold text-gray-700 mb-4">
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
        </motion.div>

        {/* Left: Store Info */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="overflow-hidden shadow-xl rounded-xl px-6 py-2 w-full md:w-[45%] md:ml-10 flex flex-col gap-6 border border-gray-100 bg-cwhite"
        >
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
              aria-label="إبلاغ عن المتجر"
              onClick={() => setShowReportModal(true)}
              className="flex-1 hover:scale-105 py-2 border border-cgreen text-cgreen rounded-md font-semibold hover:bg-cgreen hover:text-white transition"
            >
              إبلاغ
            </button>
            <button
              type="button"
              aria-label="تقييم المتجر"
              onClick={() => setShowRateModal(true)}
              className="flex-1 hover:scale-105 py-2 bg-cgreen text-white rounded-md font-semibold hover:bg-chgreen transition"
            >
              تقييم المتجر
            </button>
          </div>
        </motion.div>
      </div>
      <div className="md:hidden w-full">
        <Link href="/contact">
          <div className="w-full flex items-center justify-center bg-cgreen relative min-h-[150px]">
            <p className="text-white text-xl font-bold whitespace-nowrap transform-origin-left">
              تواصل معنا لعرض إعلانك هنا
            </p>
          </div>
        </Link>
      </div>

      {/* Bottom: Ads */}
      <div className="w-full flex-col flex h-full">
        <div className="border-b mb-4 border-cgreen text-xl font-bold text-cgreen">
          الإعلانات المنشورة
        </div>
        <div className="flex">
          <div className="w-[85%] max-lg:w-[80%] max-md:w-full ml-1">
            {mappedAds.length > 0 ? (
              <div className="h-full rounded-md mb-10">
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                      subcat={ad.subcategory ?? ""}
                      offer_type={ad.offer_type}
                      fav={ad.fav}
                    />
                  ))}
                </div>
                {hasMore && mappedAds.length > 0 && (
                  <div className="text-center mt-6">
                    <motion.button
                      onClick={() => {
                        setIsLoading(true);
                        setPage((p) => p + 1);
                      }}
                      disabled={isLoading}
                      className="px-4 py-2 rounded-md border border-gray-300 relative overflow-hidden"
                      initial={{
                        background:
                          "linear-gradient(to right, #fff 100%, #277F60 100%)",
                        color: "#374151", // Equivalent to text-gray-700
                      }}
                      whileHover={{
                        background:
                          "linear-gradient(to right, #277F60 100%, #277F60 100%)",
                        color: "#ffffff", // Equivalent to text-white
                        transition: { duration: 0.5, ease: "easeInOut" },
                      }}
                      animate={{
                        background:
                          "linear-gradient(to right, #fff 100%, #277F60 100%)",
                        color: "#374151",
                      }}
                    >
                      <span className="relative z-10">
                        {isLoading ? "جاري التحميل..." : "تحميل المزيد"}
                      </span>
                    </motion.button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                لا توجد إعلانات حاليًا.
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className="max-md:hidden w-[15%] max-lg:w-[20%] flex items-center justify-center bg-cgreen relative min-h-[330px]"
          >
            <p className="text-white text-xl font-bold whitespace-nowrap rotate-[-90deg] transform-origin-left">
              تواصل معنا لعرض إعلانك هنا
            </p>
          </Link>
        </div>
      </div>

      <ReportStoreModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        username={username}
        setNotification={setNotification}
      />
      <RateStoreModal
        isOpen={showRateModal}
        onClose={() => setShowRateModal(false)}
        username={username}
        setNotification={setNotification}
      />
    </div>
  );
};

export default PublicStore;
