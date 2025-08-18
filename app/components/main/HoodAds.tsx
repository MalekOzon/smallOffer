import React, { useState } from "react";
import AdCard from "../ui/AdCard";
import { categories } from "../../sections/categories";
import { useGetSearchRes } from "@/app/lib/searchServices/searchQueries";
import { useGetUserInfo } from "@/app/lib/dashboardServices/dashboardQueries";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Link from "next/link";
import LoadingSpinner from "../ui/LoadingSpinner";
const HoodAds = () => {
  const { data: userData, isLoading: isUserLoading } = useGetUserInfo();

  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const searchQuery = React.useMemo(() => {
    if (isUserLoading) return "";
    const isLoggedIn = !!userData?.username;
    if (!isLoggedIn) return "ordering=price";
    return selectedCategory === "الكل"
      ? `city=${userData?.city || ''}`
      : `city=${userData?.city || ''}&search=${selectedCategory}`;
  }, [isUserLoading, userData, selectedCategory]);

  if (searchQuery) {
    console.log("searchQuery ", searchQuery);
  }


  const { data } = useGetSearchRes(1, 15, searchQuery);


  const allCategories = [{ name: "الكل", slug: "all" }, ...categories];

  return (
    <div className="min-h-[200px] my-10 mt-16">
      <div className="flex flex-wrap gap-4 mx-2 ">
        {allCategories.map((ca) => (
          <button
            key={ca.name}
            onClick={() => setSelectedCategory(ca.name)}
            className={`text-lg max-md:text-sm p-3 rounded-md transition-colors duration-500 ${
              selectedCategory === ca.name
                ? "bg-cgreen text-white"
                : "outline outline-cgreen  bg-white"
            }`}
          >
            {ca.name}
          </button>
        ))}
      </div>

      <div>
        <h2 className="m-4 text-xl font-semibold">أبرز المنشورات بمنطقتك</h2>
        <div className=" p-4 h-[300px] w-full flex justify-center items-center">
          {isUserLoading || !searchQuery ? (
            <LoadingSpinner />
          ) : (
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
              dir="ltr"
              className="w-full h-full "
            >
              <CarouselContent className="w-full">
                {data?.results?.map((ad) => (
                  <CarouselItem key={ad.id} className="basis-1/4 max-sm:basis-1/2 max-md:basis-1/3 ">
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
                      fav={ad.fav ? "added" : "removed"}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="absolute left-16 -top-10 size-12 " />
              <CarouselPrevious className="absolute left-0 -top-10 size-12" />
            </Carousel>
          )}
        </div>
      </div>
      {searchQuery && (
        <div className="w-full flex items-center justify-center">
          <button className="bg-cgreen  text-white px-6 py-2 text-lg rounded-lg">
            <Link href={`/searchpost?${searchQuery}`}>
              عرض المزيد
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default HoodAds;
