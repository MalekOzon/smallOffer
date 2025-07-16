"use client"
import Image from 'next/image'
import signupPhoto from "../../../public/resourses/signupPhoto.svg";
import signupPhoto2 from "../../../public/resourses/signupPhoto2.svg";

interface SignPhotoProps {
  isLogin: boolean; // تعريف النوع بشكل صحيح
}
const SignPhoto: React.FC<SignPhotoProps> = ({ isLogin }) => {
  return (
    <div className="hidden w-[40%] lg:flex lg:items-center lg:justify-center h-full   xl:mr-[48px] xl:ml-20">
      <Image
        src={isLogin ? signupPhoto2 : signupPhoto}
        alt="Signup Illustration"
        width={590}
        height={580}
        className="w-auto h-auto object-contain"
      />
    </div>
  );
};

export default SignPhoto
