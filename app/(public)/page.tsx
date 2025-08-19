"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import {
  useGetExternalAd,
  useGetInternalAd,
} from "../lib/searchServices/searchQueries";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import HoodAds from "../components/main/HoodAds";
import Loader from "../components/ui/Loader";
import LastAdInMain from "../components/main/LastAdInMain";

const HomePage = () => {
  const { data, isLoading } = useGetInternalAd();
  const { data: dataEx, isLoading: isLoading2 } = useGetExternalAd();

  if (isLoading || isLoading2) return <Loader />;

  return (
    <div className="my-10">
      <div className="w-[80%] m-auto ">
        <Carousel
          dir="ltr"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {data?.map((ad) => {
              return (
                <CarouselItem key={ad.id}>
                  <div className="h-full bg-green-200 rounded-2xl p-8 flex max-md:flex-col-reverse items-center justify-between">
                    <div className="flex-1 text-right md:pr-8 w-1/2 max-md:w-full max-md:mt-4">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4 max-md:text-lg w-full">
                        {ad.title}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {ad.description}
                      </p>
                    </div>
                    <div className="flex-1 flex justify-center w-1/2 max-md:w-full ">
                      <Image
                        src={ad.image}
                        alt={ad.title}
                        width={1000}
                        height={1000}
                        className="w-full h-60 object-fill rounded-lg"
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          {/* <CarouselNext className="absolute left-16 -top-10 size-12 " />
          <CarouselPrevious className="absolute left-0 -top-10 size-12" /> */}
        </Carousel>
      </div>

      <HoodAds />

      <div className="w-[80%] m-auto mt-20">
        <Carousel
          dir="ltr"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="">
            {dataEx?.map((ad) => {
              return (
                <CarouselItem key={ad.id} className=" ">
                  <Link href={ad.link} className=" ">
                    <div className="w-full  rounded-2xl flex items-center justify-center">
                      <Image
                        src={ad.image}
                        alt="image"
                        width={1000}
                        height={1000}
                        className="h-80 w-full object-fill rounded-lg"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          {/* <CarouselNext className="absolute left-16 -top-10 size-12 " />
          <CarouselPrevious className="absolute left-0 -top-10 size-12" /> */}
        </Carousel>
      </div>

      <LastAdInMain />

      <div className="space-y-5 rounded-4xl w-[80%] m-auto mt-20 bg-green-100 p-4 py-6 flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold max-md:text-2xl">ماذا تنتظر ؟</h1>
        <p className="text-lg text-cdarkgray font-semibold">
          ابدأ بإعلانك اليوم وتمتع بترقية إعلاناتك مع خصم 10٪ لمدة 30 يومًا.
        </p>
        <div className="w-full flex items-center justify-center ">
          <button className="bg-cgreen  text-white px-6 py-2 text-lg rounded-lg">
            <Link href={`/newpost`}>نشر إعلان جديد</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
