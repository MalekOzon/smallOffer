import { Heart, List, Settings, StoreIcon } from "lucide-react";
import Link from "next/link";

interface TitleProps {
  title: string;
  isPostPage: boolean;
}

const Title: React.FC<TitleProps> = ({ title, isPostPage }) => {
  return (
    <div className="flex justify-between max-sm:mt-4 max-sm:mx-6 mt-4">
      <div className="flex items-center ">
        {title === "متجري" &&(
          <StoreIcon className="text-cgreen mb-2"/>
        )}

    {title === "جدول إعلاناتي"  &&(
          <List className="text-cgreen mb-2"/>
        )}
    {title === "إعلاناتي" &&(
          <List className="text-cgreen mb-2"/>
        )}
        {title === "المفضلة" &&(
          <Heart className="text-cgreen mb-2"/>
        )}
                {title === "الإعدادات" &&(
          <Settings className="text-cgreen mb-2"/>
        )}


        <h1 className="mr-1 text-2xl font-bold text-gray-800 pb-4">{title}</h1>
      </div>
      {isPostPage &&
      (<button className=" hover:scale-105 transition-all duration-150 py-2 px-6  mb-2 bg-cgreen text-white text-6 font-semibold hover:bg-chgreen rounded-md">
        <Link href="/newpost">نشر جديد</Link>
      </button>
      )}
      {title == "جدول إعلاناتي" && (<button className="hover:scale-105 transition-all duration-150 py-2 px-6  mb-2 bg-cgreen text-white text-6 font-semibold hover:bg-chgreen rounded-md">
        <Link href="/dashboard/ads">عرض الكل</Link>
      </button>
      )}
    </div>
  );
};

export default Title;
