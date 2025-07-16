"use client";
import ProgressSteps from "@/app/components/ui/ProgressSteps";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Button from "@/app/components/ui/Button";
import SignPhoto from "@/app/components/resgister/SignPhoto";
import HeaderSignup from "../../components/resgister/HeaderSignup";
import { usePhone } from "@/app/lib/context/PhoneContext";

// ✅ Zod schema
const formSchema = z.object({
  code: z.string().length(6, "الرجاء إدخال رمز مكون من 6 أرقام."),
});

type FormData = z.infer<typeof formSchema>;

export default function VerificationPhone() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [codeDigits, setCodeDigits] = useState<string[]>(new Array(6).fill(""));

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Data: ", data);

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

  const handleCodeKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !codeDigits[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };
  const {phoneNumberContext} = usePhone();

  const finalPhone= phoneNumberContext.slice(0, 7) + "*******";

  return (
    <div className=" h-[85vh] ">
      <HeaderSignup />
      <div className="h-full  flex flex-col lg:flex-row 2xl:items-center xl:justify-center gap-10 max-lg:px-5 ">
        {/* صورة جانبية */}
        <SignPhoto isLogin={false} />

        {/* Form */}
        <div className="flex flex-col lg:w-[46%] w-[90%] xl:mx-[8%] lg:mx-[4%] mx-auto  ">
          <ProgressSteps currentStep={4} totalSteps={4}  />

          {/* ------------- Noti -------------- */}

          <div className="mt-[120px] max-lg:mt-[70px] mb-[50px]">
            <h2 className="font-medium lg:text-1 max-lg:text-2 text-right">
              تأكيد رقم الهاتف
            </h2>
            <p className="font-medium text-5 sm:text-lg mt-4 text-right">
              تم إرسال رمز التأكيد  
            </p>
            <p className="text-cdarkgray text-[16px] mt-2 text-right w-full">
            الرجاء إدخال رمز التأكيد الذي تم إرساله إلى 
            <span dir="ltr">{finalPhone}</span>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-9">
              {/* Hidden code input */}
              <input type="hidden" {...register("code")} value={codeDigits.join("")} />

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
                    className="w-12 h-16  lg:w-[74px] lg:h-[75px] text-center border-2 border-clightgray rounded-md text-lg font-bold text-cdarkgray focus:outline-none focus:border-cgreen"
                  />
                ))}
              </div>
              {errors.code && (
                <p className="text-red-500 text-sm text-center sm:text-right">
                  {errors.code.message}
                </p>
              )}

              {/* Submit button */}
              <Button variant="none"
                  className="w-full mt-2 py-3 bg-cgreen text-cwhite rounded-md hover:bg-chgreen text-lg font-semibold disabled:opacity-70"
                  >
                <Link href="/login">تأكيد رقم الهاتف</Link>
              </Button>

              {/* Resend link */}
              <p className="text-center text-sm text-cdarkgray mt-4">
                لم تستلم الرمز؟{" "}
                <Link href="/resend" className="text-cgreen underline">
                إرسال مرة أخرى
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
