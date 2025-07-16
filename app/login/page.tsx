"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import HeaderLogin from "../components/resgister/HeaderLogin";
import Button from "../components/ui/Button";
import SignPhoto from "../components/resgister/SignPhoto";
import { useLogin } from "../lib/loginservices/mutations";
import { useState } from "react";
import Notification from "../components/ui/Notification";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

// Zod schema
const formSchema = z.object({
  identifier: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type FormData = z.infer<typeof formSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const loginUser = useLogin(setNotification);
  const { isPending: isLoading } = loginUser;


  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("data: ", data);
    const jsonData = JSON.stringify({
      identifier: data.identifier,
      password: data.password,
    });
    console.log("json:", jsonData);
    loginUser.mutate(JSON.parse(jsonData));
  };

  return (
    <div >
      <HeaderLogin />
      <div className="h-[88vh] flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 max-lg:px-5 ">
        {/* صورة جانبية */}
        <SignPhoto isLogin={true} />

        {/* Form */}
        <div className="flex flex-col lg:w-[46%] w-[90%] xl:mx-[8%] lg:mx-[4%] m-auto ">
            {/* ------------- Noti -------------- */}
            {notification && (
              <Notification
                message={notification.message}
                type={notification.type}
                onClose={() => setNotification(null)}
              />
            )}
          <div className="mt-5">
            <h2 className="font-medium lg:text-1 max-lg:text-2 text-right ">
              تسجيل الدخول
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
              {/* Email */}
              <div>
                <label className="block text-cdarkgray text-lg font-semibold text-right">
                  البريد الالكتروني أو اسم المستخدم
                </label>
                <input
                  {...register("identifier")}
                  placeholder="أدخل بريدك الالكتروني أو اسم المستخدم"
                  className="mt-2 p-3 block w-full text-lg border-clightgray border-2 rounded-md"
                />
                {errors.identifier && (
                  <p className="text-red-500 text-sm text-right">
                    {errors.identifier.message}
                  </p>
                )}
              </div>

              {/* Password */}
                <div className="mt-6">
                  <label className="block text-cdarkgray text-lg font-semibold max-lg:mt-6 text-right">
                    كلمة المرور
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="أدخل كلمة المرور"
                      className="mt-2 p-3 block w-full text-lg border-clightgray border-2 rounded-md"
                      />

                    {/* أيقونة العين */}
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="text-red-500 text-p text-right">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                
              {/* Submit Button */}

              <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 py-3 bg-cgreen text-cwhite rounded-md hover:bg-chgreen text-lg font-semibold disabled:opacity-70"
                  >
                  {isLoading ? (
                    <span className="flex justify-center items-center">
                      جاري المعالجة...
                      {/* يمكنك إضافة spinner هنا */}
                    </span>
                  ) : (
                    "تسجيل الدخول"
                  )}
                </button>
            </form>
            <Button
              variant="none"
              className="underline mt-4 mb-6 text-cgreen w-full flex justify-center"
              
            >
              <Link href="forgetpassword">
                نسيت كلمة المرور
              </Link>
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
