"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import HeaderLogin from "../components/resgister/HeaderLogin";
import SignPhoto from "../components/resgister/SignPhoto";
import { useForgetPassword, useResendUrl } from "../lib/loginservices/mutations";
import { useState } from "react";
import Notification from "../components/ui/Notification";
import { useEmail } from "../lib/context/EmailContext";

// Zod schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type FormData = z.infer<typeof formSchema>;

export default function ForgetPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [notification1, setNotification1] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const createForgetPassword = useForgetPassword(setNotification);
  const { isPending: isLoading } = createForgetPassword;
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const jsonData = JSON.stringify({
      email: data.email,
    });
    createForgetPassword.mutate(JSON.parse(jsonData));
  };


  const ResendEmailCode = useResendUrl(setNotification1);
  const {emailSignupContext} = useEmail();
  const onResend = () => {
    const jsonData = JSON.stringify({
      email: emailSignupContext,
    });
    ResendEmailCode.mutate(JSON.parse(jsonData));
  };

  return (
    <div >
      <HeaderLogin />
      <div className="h-[88vh] flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 max-lg:px-5 ">
        {/* صورة جانبية */}
        <SignPhoto isLogin={true} />

        {/* Form */}
        <div className="flex flex-col lg:w-[46%] w-[90%] xl:mx-[8%] lg:mx-[4%] m-auto ">
        {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}
          {notification1 && (
            <Notification
              message={notification1.message}
              type={notification1.type}
              onClose={() => setNotification(null)}
            />
          )}
          <div className="">
            <h2 className="font-medium lg:text-1 max-lg:text-2 text-right ">
              استعادة كلمة المرور
            </h2>
            <h2 className=" text-[19px] mt-10 text-right ">
              الرجاء إدخال البريد الالكتروني لاستعادة كلمة المرور
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 max-lg:mt-8">
              {/* Email */}
              <div>
                <label className="block text-cdarkgray text-lg font-semibold text-right">
                  البريد الالكتروني
                </label>
                <input
                  {...register("email")}
                  placeholder="أدخل بريدك الالكتروني"
                  className="mt-2 p-3 block w-full text-lg border-clightgray border-2 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm text-right">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-5 py-3 bg-cgreen text-white rounded-md hover:bg-chgreen text-lg font-semibold disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="flex justify-center items-center">
                    جاري المعالجة...
                    {/* يمكنك إضافة spinner هنا */}
                  </span>
                ) : (
                  "إرسال"
                )}
              </button>
            </form>
            {/* Resend link */}
            <p className="text-center text-sm text-cdarkgray mt-4">
              لم تستلم الايميل؟{" "}
              <button
                onClick={onResend}
                className="text-cgreen underline font-semibold"
              >
                إرسال مرة أخرى  
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
