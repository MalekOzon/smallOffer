"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Title from "@/app/components/dashborad/Title";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useChangePasswordDash } from "@/app/lib/dashboardServices/dashboardMutation";
import Notification from "@/app/components/ui/Notification";

// ✅ Zod Schema
const passwordRequirements =
  "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، وحرف كبير، حرف صغير، رقم، ورمز خاص.";
const schema = z
  .object({
    currentPassword: z.string().min(8, "كلمة المرور الحالية مطلوبة"),
    newPassword: z
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
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "كلمتا المرور غير متطابقتين",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const ChangePasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const ChangePasswordDash = useChangePasswordDash(setNotification);
  const { isPending: isLoading } = ChangePasswordDash;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const jsonData = JSON.stringify({
      old_password: data.currentPassword,
      new_password: data.newPassword,
    });
    ChangePasswordDash.mutate(JSON.parse(jsonData));
  };

  return (
    <div className="w-full">
      <Title title="تغيير كلمة المرور" isPostPage={false} />

      {/* ------------- Noti -------------- */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl px-4 py-6 space-y-6 w-full mx-auto shadow-sm"
      >
        {/* كلمة المرور الحالية */}
        <div>
          <label className="block text-sm font-medium text-gray-700 text-right">
            كلمة المرور الحالية
          </label>
          <div className="relative">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="كلمة المرور الحالية"
              {...register("currentPassword")}
              className={`mt-1 block w-full p-2.5 pr-2 text-sm border rounded-md focus:outline-none ${
                errors.currentPassword ? "border-red-500" : "border-gray-300"
              } placeholder:text-gray-400`}
            />
            <button
              type="button"
              onClick={() => setShowCurrent((prev) => !prev)}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            >
              {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.currentPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.currentPassword.message}
            </p>
          )}
        </div>

        {/* كلمة المرور الجديدة */}
        <div>
          <label className="block text-sm font-medium text-gray-700 text-right">
            كلمة المرور الجديدة
          </label>
          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              placeholder="كلمة المرور الجديدة"
              {...register("newPassword")}
              className={`mt-1 block w-full p-2.5 pr-2 text-sm border rounded-md focus:outline-none ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              } placeholder:text-gray-400`}
            />
            <button
              type="button"
              onClick={() => setShowNew((prev) => !prev)}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            >
              {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        {/* تأكيد كلمة المرور */}
        <div>
          <label className="block text-sm font-medium text-gray-700 text-right">
            تأكيد كلمة المرور
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="تأكيد كلمة المرور"
              {...register("confirmPassword")}
              className={`mt-1 block w-full p-2.5 pr-2 text-sm border rounded-md focus:outline-none ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } placeholder:text-gray-400`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm((prev) => !prev)}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* زر الحفظ */}
        <button
          type="submit"
          disabled={isLoading}
          className="hover:scale-105 transition-all duration-150 w-[95%] flex justify-center items-center mx-auto py-3 bg-cgreen text-white text-6 font-semibold rounded-md hover:bg-chgreen disabled:opacity-60 "
          >
          {isLoading ? "جاري الحفظ..." : "حفظ التعديلات"}
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
