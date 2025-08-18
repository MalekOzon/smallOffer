import Image from "next/image";
import horizental from "../../../public/resourses/horizental.svg";
import Link from "next/link";

const HeaderSignup = () => {
  return (
    <div className="w-full flex px-10 my-2 h-14 mt-4">
      {/* ---Logo --- */}
      <div className="flex justify-start w-full">
        <Link href="/" className="text-2xl mr-2 font-bold text-cgreen">
          <Image src={horizental} width={100} height={100} alt="logo" />
        </Link>
      </div>

      {/* --- لديك حساب؟ قم بتسجيل الدخول --- */}
      <div className="flex justify-end w-full">
        <h5 className="font-bold text-xl max-lg:hidden">
          لديك حساب؟ قم
          <button className="text-cgreen px-1 mr-1 py-1 rounded-sm  hover:text-cwhite hover:bg-cgreen transition-colors duration-300 ">
            <Link href="/login">بتسجيل الدخول</Link>
          </button>
        </h5>
        <button className="text-cgreen px-1 mr-1 py-1 rounded-sm hover:text-cwhite hover:bg-cgreen transition-colors duration-300 lg:hidden">
          <Link href="/login">تسجيل الدخول</Link>
        </button>
      </div>
    </div>
  );
};

export default HeaderSignup;
