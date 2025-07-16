"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface StatsCardProps {
  icon: StaticImageData;
  value: string | number;
  title: string;
}

const StatusCard: React.FC<StatsCardProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <div className="p-4 w-full rounded-lg shadow-md bg-white ">
      <div className="flex items-center justify-between max-sm:mx-2">
        <div>
          <h2 className="text-lg text-cdarkgray font-semibold">{title}</h2>
          <h2 className="text-lg font-semibold mt-2">{value}</h2>
        </div>
        <Image src={icon} alt="icon" width={55} height={55} />
      </div>
    </div>
  );
};

export default StatusCard;
