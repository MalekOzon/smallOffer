"use client";

import ProgressSteps from "@/app/components/ui/ProgressSteps";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import SignPhoto from "@/app/components/resgister/SignPhoto";
import {
  useResendEmailCode,
  useValidateUserFirst,
} from "@/app/lib/loginservices/mutations";
import { useEmail } from "@/app/lib/context/EmailContext";
import HeaderSignup from "../../components/resgister/HeaderSignup";
import Notification from "@/app/components/ui/Notification";

// ✅ Zod schema
const formSchema = z.object({
  code: z.string().length(6, "الرجاء إدخال رمز مكون من 6 أرقام."),
});

type FormData = z.infer<typeof formSchema>;

// دالة لإخفاء جزء من البريد الإلكتروني
const maskEmail = (email: string): string => {
  const [username, domain] = email.split('@');
  const visibleChars = username.slice(0, 4); // أول 4 أحرف
  const maskedPart = username.length > 4 ? '*'.repeat(username.length - 4) : '';
  return `${visibleChars}${maskedPart}@${domain}`;
};

export default function VerificationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [codeDigits, setCodeDigits] = useState<string[]>(new Array(6).fill(""));
  const validateUserFirstMutation = useValidateUserFirst(setNotification);
  const { isPending: isLoading } = validateUserFirstMutation;

  const { emailSignupContext } = useEmail();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted Code:", data.code);

    const codeDigitsToString = codeDigits.toString();

    const jsonData = JSON.stringify({
      email: emailSignupContext,
      code: codeDigitsToString.split(",").join(""),
    });
    console.log("json:", jsonData);
    validateUserFirstMutation.mutate(JSON.parse(jsonData));
  };

  const handleCodeChange = (index: number, value: string) => {
    const newDigits = [...codeDigits];
    newDigits[index] = value.replace(/\D/, "").slice(-1);
    setCodeDigits(newDigits);
    setValue("code", newDigits.join(""));

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleCodeKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !codeDigits[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const ResendEmailCode = useResendEmailCode(setNotification);
  const onResend = () => {
    const jsonData = JSON.stringify({
      email: emailSignupContext,
    });
    console.log("jsonRESEND:", jsonData);
    ResendEmailCode.mutate(JSON.parse(jsonData));
  };

  return (
    <div className="h-[85vh]">
      <HeaderSignup />
      <div className="h-full flex flex-col lg:flex-row 2xl:items-center xl:justify-center gap-10 max-lg:px-5">
        {/* صورة جانبية */}
        <SignPhoto isLogin={false} />

        {/* Form */}
        <div className="flex flex-col lg:w-[46%] w-[90%] xl:mx-[8%] lg:mx-[4%] mx-auto">
          <ProgressSteps currentStep={2} totalSteps={4} />

          {/* ------------- Noti -------------- */}
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}

          <div className="mt-[120px] max-lg:mt-[70px] mb-[50px]">
            <h2 className="font-medium lg:text-1 max-lg:text-2 text-right">
              تأكيد البريد الالكتروني
            </h2>
            <p className="font-medium text-5 sm:text-lg mt-4 text-right">
              تم إرسال رمز التأكيد إلى
              <span>{maskEmail(emailSignupContext)}</span>
            </p>
            <p className="text-cdarkgray text-sm sm:text-6 mt-2 text-right">
              الرجاء إدخال رمز التأكيد المكون من 6 أرقام
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-9">
              {/* Hidden code input */}
              <input
                type="hidden"
                {...register("code")}
                value={codeDigits.join("")}
              />

              {/* Code fields */}
              <div dir="ltr" className="flex justify-between gap-1 sm:gap-4">
                {codeDigits.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="1"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleCodeKeyDown(index, e)}
                    maxLength={1}
                    className="w-12 h-16 lg:w-[74px] lg:h-[75px] text-center border-2 border-clightgray rounded-md text-lg font-bold text-cdarkgray focus:outline-none focus:border-cgreen"
                  />
                ))}
              </div>
              {errors.code && (
                <p className="text-red-500 text-sm text-center sm:text-right">
                  {errors.code.message}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-3 bg-cgreen text-cwhite rounded-md hover:bg-chgreen text-lg font-semibold disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="flex justify-center items-center">
                    جاري المعالجة...
                    {/* يمكنك إضافة spinner هنا */}
                  </span>
                ) : (
                  "تأكيد البريد الالكتروني"
                )}
              </button>

              {/* Resend link */}
              <p className="text-center text-sm text-cdarkgray mt-4">
                لم تستلم الرمز؟{" "}
                <button
                  onClick={onResend}
                  className="text-cgreen underline font-semibold"
                >
                  إرسال مرة أخرى
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}