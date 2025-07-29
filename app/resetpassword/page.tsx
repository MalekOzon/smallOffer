"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import HeaderLogin from "../components/resgister/HeaderLogin";
import SignPhoto from "../components/resgister/SignPhoto";
import { useResetPassword } from "../lib/loginservices/mutations";
import { useState, Suspense } from "react";
import { Eye, EyeOff } from "lucide-react";
import Notification from "../components/ui/Notification";
import { useSearchParams } from "next/navigation";

// Zod schema
const passwordRequirements =
  "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، وحرف كبير، حرف صغير، رقم، ورمز خاص.";
const formSchema = z
  .object({
    password: z
      .string()
      .min(8, passwordRequirements)
      .regex(/[A-Z]/, passwordRequirements)
      .regex(/[a-z]/, passwordRequirements)
      .regex(/[0-9]/, passwordRequirements)
      .regex(/[^A-Za-z0-9]/, passwordRequirements),
    confirmPassword: z
      .string()
      .min(8, "تأكيد كلمة المرور يجب أن لا يقل عن 8 أحرف."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "كلمة المرور وتأكيد كلمة المرور غير متطابقين.",
  });

type FormData = z.infer<typeof formSchema>;

function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const resetPassword = useResetPassword(setNotification);
  const { isPending: isLoading } = resetPassword;
  // ---------------------------------------------------------------
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");
  // ---------------------------------------------------------------
  const onSubmit: SubmitHandler<FormData> = (data) => {

    if (data.password !== data.confirmPassword) {
      alert("كلمة المرور وتأكيد كلمة المرور غير متطابقين.");
      return;
    }

    if (!uid || !token) {
      setNotification({
        message: "الرابط غير صالح أو ناقص.",
        type: "error",
      });
      return;
    }

    const jsonData = JSON.stringify({
      uid: uid,
      token: token,
      new_password: data.password,
    });

    resetPassword.mutate(JSON.parse(jsonData));
  };

  return (
    <div>
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
          <div className="">
            <h2 className="font-medium lg:text-1 max-lg:text-2 text-right ">
              استعادة كلمة المرور
            </h2>
            <h2 className=" text-5 mt-10 text-right ">
              الرجاء إدخال كلمة المرور الجديدة
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-lg:mt-6 mt-8"
            >
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
                {!errors.password && (
                  <p className="text-cdarkgray mt-1 text-p text-right">
                    كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، وحرف كبير،
                    حرف صغير، رقم، ورمز خاص.
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mt-4">
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
                  "تغيير كلمة المرور"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResetPage() {
  return (
    <Suspense fallback={<div>جاري التحميل...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
