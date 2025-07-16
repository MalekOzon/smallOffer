import Link from "next/link";

interface TitleProps {
  title: string;
  isPostPage: boolean;
}

const Title: React.FC<TitleProps> = ({ title, isPostPage }) => {
  return (
    <div className="flex justify-between max-sm:mt-4 max-sm:mx-6">
      <h1 className="text-2xl font-bold text-gray-800 pb-4">{title}</h1>
      {isPostPage &&
      (<button className=" py-2 px-6  mb-2 bg-cgreen text-white text-6 font-semibold hover:bg-chgreen rounded-md">
        <Link href="/newpost">نشر جديد</Link>
      </button>
      )}
      {title == "جدول إعلاناتي" && (<button className=" py-2 px-6  mb-2 bg-cgreen text-white text-6 font-semibold hover:bg-chgreen rounded-md">
        <Link href="/dashboard/ads">عرض الكل</Link>
      </button>
      )}
    </div>
  );
};

export default Title;
