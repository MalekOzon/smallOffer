import React from "react";
import Image from "next/image";
import userAvatar from "../../../public/resourses/userAvatar.svg";
import { Mail, Phone } from "lucide-react";
import { useGetUserInfo } from "@/app/lib/dashboardServices/dashboardQueries";
import LoadingSpinner from "../ui/LoadingSpinner";

const ProfileCard = () => {
  const getUserInfo = useGetUserInfo();
  const { data, isLoading } = getUserInfo;

  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="w-full lg:h-[29vh] flex p-6 bg-white rounded-lg shadow-md text-right ">
      <div className="flex w-full justify-center items-center flex-col">
        <div className="w-24 h-24 rounded-full overflow-hidden  border-1 border-cgreen">
          <Image
            src={userAvatar} // استبدل بمسار صورة المستخدم الفعلي
            alt="User Avatar"
            width={96}
            height={96}
            className="object-cover p-1"
          />
        </div>
        <h2 className=" text-xl mt-2 font-semibold  ">
          {data?.first_name} {data?.last_name}
        </h2>
        <p className="text-cdarkgray text-6 mt-2">@{data?.username}</p>
      </div>

      {/* ------INFO---------------- */}
      <div className="flex w-full justify-center items-center flex-col  pr-6">
        {/* القسم الأول: المدينة والحي */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl text-cdarkgray">{data?.city}</h2>
          <p className="text-cdarkgray my-2">{data?.hood}</p>
        </div>

        <hr className=" my-1 " />

        {/* القسم الثاني: الهاتف والبريد الإلكتروني */}
        <div className="flex flex-col items-center sm:items-start justify-center mt-4 sm:mt-0">
          <p className="text-cdarkgray flex items-center gap-2">
            <Phone size={18} />
            <span className="max-sm:text-sm">{data?.phone_number}</span>
          </p>
          <p className="text-cdarkgray flex items-center gap-2 mt-2">
            <Mail size={18} />
            <span className="max-sm:text-sm">{data?.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
