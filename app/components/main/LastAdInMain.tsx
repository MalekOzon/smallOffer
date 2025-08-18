import AdCard from "../ui/AdCard";
import { useGetSearchRes } from "@/app/lib/searchServices/searchQueries";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Link from "next/link";
const LastAdInMain = () => {




  const { data } = useGetSearchRes(1, 15, "ordering=-created_at");



  return (
    <div className="min-h-[200px] my-10 mt-16">

      <div>
        <h2 className="m-4 text-xl font-semibold">آخر المنشورات</h2>
        <div className=" p-4 h-[300px] w-full flex justify-center items-center">
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
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="bg-cgreen  text-white px-6 py-2 text-lg rounded-lg">
          <Link href={`/searchpost?ordering=-created_at`}>
            عرض المزيد
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LastAdInMain;
