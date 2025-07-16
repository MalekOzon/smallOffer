import Image from "next/image";
import test from "../../../public/resourses/test.png";
import Link from "next/link";

const HeaderSignup = () => {
  return (
    <div className="w-full flex px-10 my-2 h-14 mt-4">
      {/* ---Logo --- */}
      <div className="flex justify-start w-full">
        <Image
          src={test}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-40 h-14"
        />
      </div>

      {/* --- لديك حساب؟ قم بتسجيل الدخول --- */}
      <div className="flex justify-end w-full">
        <h5 className="font-bold text-xl max-lg:hidden">
          لديك حساب؟ قم
          <button className="text-cgreen px-1 mr-1 py-1 rounded-sm  hover:text-cwhite hover:bg-cgreen transition-colors duration-300 " >
            <Link href="/login">بتسجيل الدخول</Link>
          </button>
        </h5>
        <button className="text-cgreen px-1 mr-1 py-1 rounded-sm hover:text-cwhite hover:bg-cgreen transition-colors duration-300 lg:hidden" >
            <Link href="/login">تسجيل الدخول</Link>
          </button>
      </div>
    </div>
  );
};

export default HeaderSignup;
