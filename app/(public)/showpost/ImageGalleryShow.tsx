"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: { id: number; image: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="  flex flex-col gap-4 items-center shadow-md ml-4 ">

    <div className="h-[70vh] max-md:h-[50vh] w-[90%] max-sm:w-full ">
      <Image
        src={images[selected].image}
        alt={`صورة الإعلان ${selected + 1}`}
        className="w-full aspect-square object-fill rounded-lg shadow h-full "
        width={1000}
        height={100}
        />

        </div>
        <div className="grid grid-cols-4 gap-2 w-[90%] mb-4 ">
        {images.map((img, i) => (
          <button key={img.id} onClick={() => setSelected(i)}>
            <Image
              src={img.image}
              className={` h-20 object-cover rounded border ${
                selected === i ? "border-cgreen" : "border-gray-200"
              }`}
              alt={`صورة ${i + 1}`}
              width={1000}
              height={1000}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
