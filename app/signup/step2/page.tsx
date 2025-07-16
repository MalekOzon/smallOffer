"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressSteps from "@/app/components/ui/ProgressSteps";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import SignPhoto from "@/app/components/resgister/SignPhoto";
import { useEmail } from "@/app/lib/context/EmailContext";
import { useCreateUserSecond } from "@/app/lib/loginservices/mutations";
import HeaderSignup from "../../components/resgister/HeaderSignup";
import Notification from "@/app/components/ui/Notification";
import { useState } from "react";
import { countryCodes } from "./countryCodes";
import { syrianGovernorates } from "./syrianGovernorates";

// تعريف الـ Zod schema
const schema = z.object({
  firstName: z.string().min(2, "الاسم الأول يجب أن يكون أطول من حرفين"),
  lastName: z.string().min(2, "الاسم الأخير يجب أن يكون أطول من حرفين"),
  username: z.string().min(2, "اسم المستخدم يجب أن يكون أطول من 2 أحرف"),
  phoneCode: z.string().default("+963"),
  phoneNumber: z.string().min(9, "رقم الهاتف غير صحيح"),
  city: z.string().default("حمص"),
  hood: z.string().min(2, "المنطقة يجب أن تكون صحيحة"),
  detailed_location: z.string().min(5, "تفاصيل العنوان يجب أن تكون صحيحة"),
  get_notifications: z.boolean().default(true),
});

type FormData = {
  firstName: string;
  lastName: string;
  username: string;
  phoneCode?: string;
  phoneNumber: string;
  city?: string;
  hood: string;
  detailed_location: string;
  get_notifications?: boolean;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      phoneCode: "+963",
      phoneNumber: "",
      city: "",
      hood: "",
      detailed_location: "",
      get_notifications: true,
    },
  });
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const createUserSecondMutation = useCreateUserSecond(setNotification);
  const { isPending: isLoading } = createUserSecondMutation;

  const { emailSignupContext } = useEmail();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Data: ", data);

    const phoneNumberWithout0: string =  data.phoneCode + (
      data.phoneNumber.startsWith("0")
    ? data.phoneNumber.slice(1)
    : data.phoneNumber);
  
    const jsonData = JSON.stringify({
      email: emailSignupContext,
      first_name: data.firstName,
      last_name: data.lastName,
      username: data.username,
      phone_number: phoneNumberWithout0,
      city: data.city,
      hood: data.hood,
      detailed_location: data.detailed_location,
      get_notifications: data.get_notifications,
    });
    console.log("json:", jsonData);
    createUserSecondMutation.mutate(JSON.parse(jsonData));
  };

  return (
    <div className=" h-[85vh] ">
      <HeaderSignup />
      <div className="h-full  flex flex-col lg:flex-row items-center xl:justify-center gap-10 max-lg:px-5 ">
        {/* صورة جانبية */}
        <SignPhoto isLogin={false} />

        {/* Form */}
        <div className="flex flex-col lg:w-[46%] w-[90%] xl:mx-[8%] lg:mx-[4%] m-auto  ">
          <ProgressSteps currentStep={3} totalSteps={4} />
          {/* ------------- Noti -------------- */}
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}
          <div className="mt-[20px] ">
            <h2 className="font-medium lg:text-1 max-lg:text-2 text-right">
              خطوة أخيرة وننطلق!
            </h2>
            <p className="text-[16px]  mt-4 text-right">
              نحن سعداء بانضمامك إلى منصة
              <span className="max-sm:hidden"> Small Offer!</span>
            </p>
            <p className="text-[16px]  mt-1 text-right sm:hidden mb-4">
              Small Offer!
            </p>
            <p className="text-[16px]  text-right">
              يرجى إكمال معلوماتك الشخصية لتمكينك من نشر إعلانك , التواصل بسهولة
              مع الآخرين والاستفادة الكاملة من جميع مزايا المنصة.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mt-10"
              dir="rtl"
            >
              {/* الاسم الأول والاسم الأخير */}
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-cdarkgray"
                  >
                    الاسم الأول
                  </label>
                  <input
                    placeholder="الاسم الأول"
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    className={`mt-1 p-2 w-full  border border-clightgray rounded-md focus:outline-none focus:border-blue-500 ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-cdarkgray"
                  >
                    الاسم الأخير
                  </label>
                  <input
                    placeholder="الاسم الأخير"
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    className={`mt-1 p-2 w-full border border-clightgray rounded-md focus:outline-none focus:border-blue-500 ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* اسم المستخدم */}
              <div className="mt-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-cdarkgray"
                >
                  اسم المستخدم
                </label>
                <input
                  placeholder="أدخل اسم المستخدم"
                  type="text"
                  id="username"
                  {...register("username")}
                  className={`mt-1 p-2 w-full border border-clightgray rounded-md focus:outline-none focus:border-blue-500 ${
                    errors.username ? "border-red-500" : ""
                  }`}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* رقم الهاتف مع Select */}
              <div className="flex w-full gap-4 mt-6">
                <div className="w-[72%] max-lg:w-[60%] ">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-cdarkgray"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    placeholder="رقم الهاتف"
                    type="text"
                    id="phoneNumber"
                    {...register("phoneNumber")}
                    className={`mt-1 p-2 w-full border rounded-md  border-clightgray focus:outline-none focus:border-blue-500 ${
                      errors.phoneNumber ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Country Code Select */}
                <div className="w-[28%] max-lg:w-[40%]">
                  <label
                    htmlFor="phoneCode"
                    className="block text-sm font-medium text-cdarkgray text-right "
                  >
                    رمز الدولة
                  </label>
                  <Controller
                    name="phoneCode"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        {/* SelectTrigger */}
                        <SelectTrigger className="w-full py-5 mt-1 border border-clightgray">
                          <SelectValue placeholder="اختر الرمز" />
                        </SelectTrigger>

                        {/* SelectContent */}
                        <SelectContent className="bg-cwhite w-full max-w-full">
                          {countryCodes.map((country) => (
                            <SelectItem
                              key={country.code}
                              value={country.code}
                              className="hover:bg-cgreen hover:text-cwhite text-cdarkgray flex justify-end"
                            >
                              {country.name} {country.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.phoneCode && (
                    <p className="text-red-500 text-sm mt-1 text-right">
                      {errors.phoneCode.message}
                    </p>
                  )}
                </div>
              </div>
              {/* ---------------------------------------------------------------------------------- */}
              <div className="flex w-full gap-4">
                {/* المحافظة */}
                <div className="mt-6 w-1/2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-cdarkgray"
                  >
                    المحافظة
                  </label>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          className="border border-clightgray w-full text-cdarkgray py-5 mt-1"
                          dir="rtl"
                        >
                          <SelectValue placeholder="اختر المحافظة" />
                        </SelectTrigger>

                        <SelectContent className="bg-cwhite w-full max-w-full">
                          {syrianGovernorates.map((gov) => (
                            <SelectItem
                              key={gov.value}
                              className="hover:bg-cgreen hover:text-cwhite text-cdarkgray flex justify-end"
                              value={gov.value}
                            >
                              {gov.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                {/* المنطقة */}
                <div className="mt-6 w-1/2">
                  <label
                    htmlFor="hood"
                    className="block text-sm font-medium text-cdarkgray"
                  >
                    المنطقة
                  </label>
                  <input
                    placeholder="المنطقة"
                    type="text"
                    id="hood"
                    {...register("hood")}
                    className={`mt-1 p-2 w-full border border-clightgray rounded-md focus:outline-none focus:border-blue-500 ${
                      errors.hood ? "border-red-500" : ""
                    }`}
                  />
                  {errors.hood && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.hood.message}
                    </p>
                  )}
                </div>
              </div>

              {/* تفاصيل العنوان */}
              <div className="mt-6">
                <label
                  htmlFor="detailed_location"
                  className="block text-sm font-medium text-cdarkgray"
                >
                  تفاصيل العنوان
                </label>
                <textarea
                  placeholder="تفاصيل العنوان"
                  id="detailed_location"
                  {...register("detailed_location")}
                  rows={3}
                  className={`mt-1 h-[48px] flex justify-center items-center pt-2 pr-2 w-full border border-clightgray rounded-md focus:outline-none focus:border-blue-500 ${
                    errors.detailed_location ? "border-red-500" : ""
                  }`}
                />
                {errors.detailed_location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.detailed_location.message}
                  </p>
                )}
              </div>

              {/* تلقي الإشعارات */}
              <div className="flex items-center mt-6">
                <input
                  type="checkbox"
                  id="get_notifications"
                  {...register("get_notifications")}
                  className="w-[18px] h-[18px] accent-cgreen ml-3"
                />
                <label
                  htmlFor="get_notifications"
                  className="text-6 font-medium "
                >
                  أرغب في تلقي إشعارات حول العروض والأخبار الجديدة
                </label>
              </div>
              {/* --------- info ------- */}
              <div className="mt-6">
                <h2 className="font-semibold text-[12px] text-cdarkgray">
                  {" "}
                  المعلومات التي تُدخلها هنا ستظهر فقط ضمن ملفك الشخصي , ولن يتم
                  عرضها أو مشاركتها مع أي مستخد آخر.{" "}
                </h2>
              </div>

              {/* زر الإرسال */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 mb-4 py-3 bg-cgreen text-cwhite rounded-md hover:bg-chgreen text-lg font-semibold disabled:opacity-70"
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
  );
};

export default Page;
