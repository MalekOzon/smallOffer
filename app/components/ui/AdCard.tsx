'use client';

import { FC } from 'react';
import { Heart, MapPin, Pencil } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type AdCardProps = {
  id: number;
  title: string;
  description: string;
  city: string;
  price: number;
  imageUrl?: string;
  published?: 'accepted' | 'pending' | 'declined';
  isFav: boolean;
};

const AdCard: FC<AdCardProps> = ({
  id,
  title,
  description,
  city,
  price,
  imageUrl,
  published,
  isFav = false,
}) => {
  const status = {
    accepted: {
      label: 'تم النشر',
      className: 'text-cgreen border-cgreen bg-green-50',
    },
    pending: {
      label: 'معلق',
      className: 'text-corange border-corange bg-orange-50',
    },
    declined: {
      label: 'مرفوض',
      className: 'text-red-600 border-red-600 bg-red-50',
    },
  };
  
  const currentStatus = published && status[published] ? status[published] : {
    label: 'غير معروف',
    className: 'text-gray-400 border-gray-400 bg-gray-100',
  };
  
  return (
    <Link href={`/previewpost/${id}`} className="block">
      <div className="rounded-xl border border-gray-200 bg-cwhite overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col">
        {/* الصورة */}
        <div className="relative h-32 bg-gray-100">
          {imageUrl ? (
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          ) : null}

          <Link
            href="/login"
            className="absolute top-2 right-2 p-1.5 bg-white rounded-md shadow hover:bg-gray-50"
          >
            {isFav ? (
              <Heart className="w-5 h-5 text-cdarkgray"  />
            ) : (
              <Link href={`/editpost/${id}`}>
                <Pencil className="w-5 h-5 text-cdarkgray" />
              </Link>
            )}
          </Link>
        </div>

        {/* المحتوى */}
        <div className="p-3 flex flex-col justify-between gap-2 flex-grow">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold truncate">{title}</h3>
            {published && !isFav && (
              <span
              className={clsx(
                'text-[11px] px-2 py-0.5 rounded-full border font-medium max-sm:font-normal max-sm:text-[8px] whitespace-nowrap',
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
            <span className="text-cgreen font-bold">{price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdCard;
