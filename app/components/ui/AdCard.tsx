"use client";

import { FC, useState } from "react";
import { Heart, MapPin, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useAddPostFav } from "@/app/lib/dashboardServices/dashboardMutation";

type AdCardProps = {
  id: number;
  offer_type: "sell" | "search";
  title: string;
  description: string;
  city: string;
  price: number;
  imageUrl?: string;
  published?: "accepted" | "pending" | "declined";
  isFav: boolean;
  subcat: string;
  fav: "added" | "removed"
};

const AdCard: FC<AdCardProps> = ({
  id,
  offer_type,
  subcat,
  title,
  description,
  city,
  price,
  imageUrl,
  published,
  isFav ,
  fav
}) => {
  const status = {
    accepted: {
      label: "تم النشر",
      className: "text-cgreen border-cgreen bg-green-50",
    },
    pending: {
      label: "معلق",
      className: "text-corange border-corange bg-orange-50",
    },
    declined: {
      label: "مرفوض",
      className: "text-red-600 border-red-600 bg-red-50",
    },
  };

  

  const currentStatus =
    published && status[published]
      ? status[published]
      : {
          label: "غير معروف",
          className: "text-gray-400 border-gray-400 bg-gray-100",
        };

  function goToEdit() {
    if (subcat === "cars") {
      return `/editpost/editCar/${id}`;
    } else if (subcat === "outdoor-space") {
      return `/editpost/editOutdoorspace/${id}`;
    } else if (subcat === "houses") {
      return `/editpost/editHouse/${id}`;
    } else if (
      subcat === "pc" ||
      subcat === "tablets" ||
      subcat === "games" ||
      subcat === "tv" ||
      subcat === "home_appliances" ||
      subcat === "audio_video_accessories" ||
      subcat === "parts_accessories"
    ) {
      return `/editpost/editElectronics/${id}`;
    } else if (subcat === "mobiles") {
      return `/editpost/editMobile/${id}`;
    } else if (subcat === "apartments") {
      return `/editpost/editApartment/${id}`;
    } else {
      return `/editpost/editGeneric/${id}`;
    }
  }

  const [isFavorite, setIsFavorite] = useState<string>(fav );
  const addPostFavMutation = useAddPostFav();
  function handleFavClick() {
    const isFavPast = isFavorite;
    setIsFavorite( isFavorite === "added" ? "removed" : "added" );
    addPostFavMutation.mutate(
      { post_id: id },
      {
        onSuccess: () => {

        },
        onError: () => {
          setIsFavorite( isFavPast );
          console.error("فشل في تحديث المفضلة");
        },
      }
    );
  }


  return (
    <div className="block h-64 hover:scale-105 transition-all duration-300">
      <div className="rounded-xl h-full border border-gray-200 bg-cwhite overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col">
        {/* الصورة */}
        <div className="relative h-full ">
          <Link href={`/preview/${subcat}/${id}`}>
            {imageUrl ? (
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            ) : null}
          </Link>

          {!isFav && (
            <Link
              href={goToEdit()}
              className="hover:bg-chgreen group absolute top-2 right-2 p-1.5 bg-white rounded-md shadow "
            >
              <Pencil className="group-hover:text-white w-5 h-5 text-cdarkgray" />
            </Link>
          )}

          {isFav && (
            <button
              onClick={handleFavClick}
              className={`absolute top-2 right-2 rounded-md  shadow group `}
            >
              <Heart
                className={clsx(
                  "w-8 h-8 transition-colors rounded-md p-1  ",
                  isFavorite == "added" 
                    ? "bg-cgreen text-white group-hover:bg-cwhite group-hover:text-cgreen"
                    : "bg-cwhite text-cgreen group-hover:bg-cgreen group-hover:text-white"
                )}
              />
            </button>
          )}
        </div>

        {/* المحتوى */}
        <Link href={`/preview/${subcat}/${id}`}>
        <div className="p-3 flex flex-col justify-between gap-2 flex-grow">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold truncate">
                {offer_type === "search" && (
                  <span className="text-chgreen underline decoration-chgreen">
                    {" أبحث عن"}{" "}
                  </span>
                )}
                {title}
              </h3>
              {published && !isFav && (
                <span
                  className={clsx(
                    "text-[11px] px-2 py-0.5 rounded-full border font-medium max-sm:font-normal max-sm:text-[8px] whitespace-nowrap",
                    currentStatus.className
                  )}
                >
                  {currentStatus.label}
                </span>
              )}
            </div>

            <p className="text-xs text-cdarkgray line-clamp-2 leading-relaxed">
              {description}
            </p>

            <div className="flex items-center justify-between text-xs text-cdarkgray mt-auto border-t border-clightgray pt-2">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{city}</span>
              </div>
              <span className="text-cgreen font-bold">
                {price.toLocaleString()}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdCard;
