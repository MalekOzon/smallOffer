import Image from "next/image";
import test from "../../../public/resourses/test.png";
import Link from "next/link";

const HeaderLogin = () => {
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

