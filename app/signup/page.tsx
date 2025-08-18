"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // يمكنك استخدام أيقونات أخرى أو من Heroicons
import ProgressSteps from "../components/ui/ProgressSteps";
import { Button } from "@/app/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateUserFirst } from "../lib/loginservices/mutations";
import SignPhoto from "../components/resgister/SignPhoto";
import Notification from "../components/ui/Notification";
import HeaderSignup from "../components/resgister/HeaderSignup";

// Zod schema
const passwordRequirements =
  "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، وحرف كبير، حرف صغير، رقم، ورمز خاص.";
const formSchema = z
  .object({
    email: z.string().email("يرجى إدخال بريد إلكتروني صحيح."),
    password: z
      .string()
      .min(8, passwordRequirements)
      .regex(/[A-Z]/, passwordRequirements)
      .regex(/[a-z]/, passwordRequirements)
      .regex(/[0-9]/, passwordRequirements)
      .regex(/[^A-Za-z0-9]/, passwordRequirements),
    confirmPassword: z
      .string()
      .min(8, passwordRequirements),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "كلمة المرور وتأكيد كلمة المرور غير متطابقين.",
  });

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
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
  const [isCompany, setIsCompany] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const createUserFirstMutation = useCreateUserFirst(setNotification);
  const { isPending: isLoading } = createUserFirstMutation;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.password !== data.confirmPassword) {
      setNotification({
        message: "كلمة المرور وتأكيد كلمة المرور غير متطابقين.",
        type: "error",
      });
      return;
    }

    const jsonData = JSON.stringify({
      email: data.email,
      password: data.password,
      is_company: isCompany,
    });
    createUserFirstMutation.mutate(JSON.parse(jsonData));
  };

  return (
<div className=" h-[85vh] ">
      <HeaderSignup />
      <div className="h-full  flex flex-col lg:flex-row 2xl:items-center xl:justify-center gap-10 max-lg:px-5 ">
        {/* صورة جانبية */}
        <SignPhoto isLogin={false} />

        {/* Form */}
        <div className="flex flex-col lg:w-[46%] w-[90%] xl:mx-[8%] lg:mx-[4%] mx-auto  ">
          <ProgressSteps currentStep={1} totalSteps={4} />
          <div className=" ">
            {/* ------------- Noti -------------- */}
            {notification && (
              <Notification
                message={notification.message}
                type={notification.type}
                onClose={() => setNotification(null)}
              />
            )}

            <div className="mt-5">
              <h2 className="font-medium lg:text-1 max-lg:text-2 text-right ">إنشاء حساب</h2>

              {/* Switch Buttons */}
              <div className="w-full mt-6 max-w-sm mx-auto lg:mx-0 border-2 border-clightgray p-1 rounded-xl mb-6 flex">
                <Button
                  className="w-1/2 text-6 font-semibold"
                  variant={!isCompany ? "primary" : "none"}
                  onClick={() => setIsCompany(false)}
                >
                  شخصي
                </Button>
                <Button
                  className="w-1/2 text-6 font-semibold"
                  variant={isCompany ? "primary" : "none"}
                  onClick={() => setIsCompany(true)}
                >
                  شركة
                </Button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 ">
                {/* Email */}
                <div>
                  <label className="block text-cdarkgray text-lg font-semibold text-right">
                    البريد الالكتروني
                  </label>
                  <input
                    {...register("email")}
                    placeholder="أدخل بريدك الالكتروني"
                    className="mt-1 p-3 block w-full text-lg border-clightgray border-2 rounded-md"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm text-right">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-cdarkgray text-lg font-semibold max-lg:mt-6 text-right">
                    كلمة المرور
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="أدخل كلمة المرور"
                      className="mt-1 p-3  block w-full text-lg border-clightgray border-2 rounded-md"
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
                  {!errors.password &&(
                  <p className="text-cdarkgray mt-1 text-p text-right">
                    كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، وحرف كبير،
                    حرف صغير، رقم، ورمز خاص.
                  </p>

                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-cdarkgray text-lg font-semibold max-lg:mt-6 text-right">
                    تأكيد كلمة المرور
                  </label>

                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword")}
                      placeholder="أعد إدخال كلمة المرور"
                      className="mt-1 p-3 block w-full text-lg border-clightgray border-2 rounded-md"
                    />

                    {/* زر العين */}
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>

                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm text-right">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Terms and Policy */}
                <p className="max-lg:text-p lg:text-sm text-black text-right mt-6">
                  من خلال اختيارك لإنشاء حساب شخصي، فإنك توافق على{" "}
                  <Link
                    href="/TermsOfService"
                    className="text-cgreen underline"
                  >
                    اتفاقية المستخدم
                  </Link>{" "}
                  و{" "}
                  <Link href="/PrivacyPolicy" className="text-cgreen underline">
                    سياسة الخصوصية
                  </Link>
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 mb-1 py-3 bg-cgreen text-cwhite rounded-md hover:bg-chgreen text-lg font-semibold disabled:opacity-70"
                  >
                  {isLoading ? (
                    <span className="flex justify-center items-center">
                      جاري المعالجة...
                      {/* يمكنك إضافة spinner هنا */}
                    </span>
                  ) : (
                    "إنشاء حساب شخصي"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
