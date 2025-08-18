import Image from "next/image";
import horizental from "../../../public/resourses/horizental.svg";
import Link from "next/link";

const HeaderLogin = () => {
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
        <h5 className="font-bold text-lg max-lg:hidden">
          ليس لديك حساب؟ قم{" "}
          <Link
            href="/signup"
            className="text-cgreen hover:text-chgreen transition duration-300"
          >
            بإنشاء حساب
          </Link>
        </h5>
        <Link
          href="/signup"
          className=" text-cgreen text-lg px-4 py-2 rounded-lg hover:bg-chgreen transition duration-300 mr-6 lg:hidden"
        >
          إنشاء حساب
        </Link>
      </div>
    </div>
  );
};

export default HeaderLogin;

