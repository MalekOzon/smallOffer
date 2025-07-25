"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Title from "@/app/components/dashborad/Title";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { countryCodes } from "@/app/signup/step2/countryCodes";
import { syrianGovernorates } from "@/app/signup/step2/syrianGovernorates";
import { useGetUserInfo } from "@/app/lib/dashboardServices/dashboardQueries";
import { useSetUserInfo } from "@/app/lib/dashboardServices/dashboardMutation";
import Notification from "@/app/components/ui/Notification";
import SkeletonNotificationSettings from "@/app/components/ui/SkeletonNotificationSettings";

const countryCallingCodes = [
  "+1",
  "+7",
  "+20",
  "+27",
  "+30",
  "+31",
  "+32",
  "+33",
  "+34",
  "+36",
  "+39",
  "+40",
  "+41",
  "+44",
  "+45",
  "+46",
  "+47",
  "+48",
  "+49",
  "+51",
  "+52",
  "+53",
  "+54",
  "+55",
  "+56",
  "+57",
  "+58",
  "+60",
  "+61",
  "+62",
  "+63",
  "+64",
  "+65",
  "+66",
  "+81",
  "+82",
  "+84",
  "+86",
  "+90",
  "+91",
  "+92",
  "+93",
  "+94",
  "+95",
  "+98",
  "+211",
  "+212",
  "+213",
  "+216",
  "+218",
  "+220",
  "+221",
  "+222",
  "+223",
  "+224",
  "+225",
  "+226",
  "+227",
  "+228",
  "+229",
  "+230",
  "+231",
  "+232",
  "+233",
  "+234",
  "+235",
  "+236",
  "+237",
  "+238",
  "+239",
  "+240",
  "+241",
  "+242",
  "+243",
  "+244",
  "+245",
  "+246",
  "+247",
  "+248",
  "+249",
  "+250",
  "+251",
  "+252",
  "+253",
  "+254",
  "+255",
  "+256",
  "+257",
  "+258",
  "+260",
  "+261",
  "+262",
  "+263",
  "+264",
  "+265",
  "+266",
  "+267",
  "+268",
  "+269",
  "+290",
  "+291",
  "+297",
  "+298",
  "+299",
  "+350",
  "+351",
  "+352",
  "+353",
  "+354",
  "+355",
  "+356",
  "+357",
  "+358",
  "+359",
  "+370",
  "+371",
  "+372",
  "+373",
  "+374",
  "+375",
  "+376",
  "+377",
  "+378",
  "+380",
  "+381",
  "+382",
  "+385",
  "+386",
  "+387",
  "+389",
  "+420",
  "+421",
  "+423",
  "+500",
  "+501",
  "+502",
  "+503",
  "+504",
  "+505",
  "+506",
  "+507",
  "+508",
  "+509",
  "+590",
  "+591",
  "+592",
  "+593",
  "+594",
  "+595",
  "+596",
  "+597",
  "+598",
  "+599",
  "+670",
  "+672",
  "+673",
  "+674",
  "+675",
  "+676",
  "+677",
  "+678",
  "+679",
  "+680",
  "+681",
  "+682",
  "+683",
  "+685",
  "+686",
  "+687",
  "+688",
  "+689",
  "+690",
  "+691",
  "+692",
  "+850",
  "+852",
  "+853",
  "+855",
  "+856",
  "+880",
  "+886",
  "+960",
  "+961",
  "+962",
  "+963",
  "+964",
  "+965",
  "+966",
  "+967",
  "+968",
  "+970",
  "+971",
  "+972",
  "+973",
  "+974",
  "+975",
  "+976",
  "+977",
  "+992",
  "+993",
  "+994",
  "+995",
  "+996",
  "+998",
];

// تأكد من ترتيب الرموز من الأطول إلى الأقصر لتجنب مشاكل التداخل
countryCallingCodes.sort((a, b) => b.length - a.length);

function extractCountryCode(phone: string | null | undefined): string | null {
  if (!phone) return null; // تحقق من أن phone ليس null أو undefined

  for (const code of countryCallingCodes) {
    if (phone.startsWith(code)) {
      return code;
    }
  }

  return null; // لم يتم العثور على رمز دولة مطابق
}

// تعريف الـ Zod schema
const schema = z.object({
  email: z.string().email("يرجى إدخال بريد إلكتروني صحيح."),
  firstName: z.string().min(2, "الاسم الأول يجب أن يكون أطول من حرفين"),
  lastName: z.string().min(2, "الاسم الأخير يجب أن يكون أطول من حرفين"),
  username: z.string().min(2, "اسم المستخدم يجب أن يكون أطول من 2 أحرف"),
  phoneCode: z.string(),
  phoneNumber: z.string().min(9, "رقم الهاتف غير صحيح"),
  city: z.string(),
  hood: z.string().min(2, "المنطقة يجب أن تكون صحيحة"),
  detailed_location: z.string().min(5, "تفاصيل العنوان يجب أن تكون صحيحة"),
  profile_image: z.union([z.instanceof(File), z.string()]),
});

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  phoneCode: string;
  phoneNumber: string;
  city: string;
  hood: string;
  detailed_location: string;
  profile_image: File | string;
};

const EditProfilePage = () => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      phoneCode: "",
      phoneNumber: "",
      city: "",
      hood: "",
      detailed_location: "",
      email: "",
      profile_image: "",
    },
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // get The information from API
  const getUserInfo = useGetUserInfo();
  const { data } = getUserInfo;

  const setUserInfo = useSetUserInfo(setNotification);
  const { isPending: isLoading } = setUserInfo;
  const [codeFromApi, setCodeFromApi] = useState<string>("+963");
  const [cityFromApi, setCityFromApi] = useState<string>("");

  useEffect(() => {
    if (data) {
      const code = extractCountryCode(data.phone_number) || "+963";
      const localNumber: string = data.phone_number
        ? codeFromApi
          ? data.phone_number.slice(codeFromApi.length)
          : data.phone_number
        : "";

      setCodeFromApi(code);
      setCityFromApi(data.city);

      reset({
        firstName: data.first_name || "",
        lastName: data.last_name || "",
        username: data.username || "",
        email: data.email || "",
        phoneCode: codeFromApi,
        phoneNumber: localNumber,
        city: data.city || cityFromApi,
        hood: data.hood || "",
        detailed_location: data.detailed_location || "",
        profile_image: data.profile_image || "",
      });
      console.log("Reset values:", {
        phoneCode: codeFromApi,
        city: data.city,
      });
    }
  }, [data, reset]);

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    const form = new FormData();

    form.append("city", formData.city);
    form.append("hood", formData.hood);
    form.append("detailed_location", formData.detailed_location);

    if (formData.profile_image instanceof File) {
      form.append("profile_image", formData.profile_image);
    }

    setUserInfo.mutate(form);
  };

  const coverImage = watch("profile_image");
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Create preview URL when coverImage changes
  useEffect(() => {
    if (coverImage instanceof File) {
      const objectUrl = URL.createObjectURL(coverImage);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [coverImage]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("profile_image", file, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  if (getUserInfo.isLoading || getUserInfo.isFetching) {
    return <SkeletonNotificationSettings />;
  }

  return (
    <div className="">
      <Title title="تعديل المعلومات الشخصية" isPostPage={false} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl px-4 py-6 space-y-6  w-full  mx-auto shadow-sm"
      >
        {/* ------------- Noti -------------- */}
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
        {/* Header */}
        <div className="flex justify-between items-start max-lg:flex-col max-lg:items-center gap-6">
          {/* صورة المستخدم */}

          <div className="sm:ml-16">
            {/* Hidden File Input */}
            <input
              {...register("profile_image")}
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleImageChange}
              className="hidden"
            />

            {/* Upload Box */}
            <div
              onClick={handleClick}
              className="w-40  h-40 hover:opacity-50 group border-2 rounded-full border-cgreen  flex items-center justify-center cursor-pointer bg-cwhite overflow-hidden"
            >
              {preview ? (
                <Image
                  src={preview}
                  alt="preview"
                  width={256}
                  height={160}
                  className="object-cover w-full h-full "
                />
              ) : typeof coverImage === "string" && coverImage !== "" ? (
                <Image
                  src={coverImage}
                  alt="current"
                  width={256}
                  height={160}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-cgreen text-4xl">+</span>
              )}
            </div>
          </div>

          {/* NAME AND EMAIL */}
          <div className="flex-1 grid grid-cols-1 w-full gap-4">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-6 font-medium text-cdarkgray "
              >
                اسم المستخدم
              </label>
              <input
                placeholder="أدخل اسم المستخدم"
                type="text"
                disabled
                id="username"
                {...register("username")}
                className={`mt-1 block w-full p-2.5 text-6 font-medium border rounded-md focus:outline-none ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } placeholder:text-gray-400`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-6 font-medium text-cdarkgray  text-right">
                البريد الإلكتروني
              </label>
              <input
                {...register("email")}
                disabled
                placeholder="أدخل بريدك الإلكتروني"
                className={`mt-1 block w-full p-2.5 text-6 font-medium border rounded-md focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } placeholder:text-gray-400`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* الاسم الأول والاسم الأخير */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="block text-6 font-medium text-cdarkgray "
            >
              الاسم الأول
            </label>
            <input
              placeholder="الاسم الأول"
              type="text"
              disabled
              id="firstName"
              {...register("firstName")}
              className={`mt-1 block w-full p-2.5 text-6 font-medium border rounded-md focus:outline-none ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } placeholder:text-gray-400`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="lastName"
              className="block text-6 font-medium text-cdarkgray "
            >
              الاسم الأخير
            </label>
            <input
              placeholder="الاسم الأخير"
              type="text"
              disabled
              id="lastName"
              {...register("lastName")}
              className={`mt-1 block w-full p-2.5 text-6 font-medium  border rounded-md focus:outline-none ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } placeholder:text-gray-400`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* رقم الهاتف مع Select */}
        <div className="flex w-full gap-4 mt-6">
          <div className="w-[72%] max-lg:w-[60%] ">
            <label
              htmlFor="phoneNumber"
              className="block text-6 font-medium text-cdarkgray"
            >
              رقم الهاتف
            </label>
            <input
              placeholder="رقم الهاتف"
              type="text"
              disabled
              id="phoneNumber"
              {...register("phoneNumber")}
              className={`mt-1 p-2 w-full border rounded-md  font-medium  border-clightgray focus:outline-none focus:border-blue-500 ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-6 mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Country Code Select */}
          <div className="w-[28%] max-lg:w-[40%]">
            <label
              htmlFor="phoneCode"
              className="block text-6 font-medium text-cdarkgray text-right "
            >
              رمز الدولة
            </label>
            <Controller
              name="phoneCode"
              disabled
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value); // تحديث القيمة في react-hook-form
                  }}
                >
                  <SelectTrigger
                    disabled
                    className="w-full py-5  font-medium text-6 text-black mt-1 border border-clightgray"
                  >
                    <SelectValue
                      placeholder={codeFromApi}
                      className="font-medium text-6 text-black"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-cwhite w-full max-w-full font-medium text-6 text-black">
                    {countryCodes.map((country) => (
                      <SelectItem
                        key={country.code}
                        value={country.code}
                        className="hover:bg-cgreen hover:text-cwhite text-cdarkgray flex justify-end"
                      >
                        {country.name} <span>{country.code}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.phoneCode && (
              <p className="text-red-500 text-6 mt-1 text-right">
                {errors.phoneCode.message}
              </p>
            )}
          </div>
        </div>

        {/* المحافظة والمنطقة */}
        <div className="flex w-full gap-4">
          {/* المحافظة */}
          <div className="w-1/2">
            <label
              htmlFor="city"
              className="block text-6 font-medium text-cdarkgray"
            >
              المحافظة
            </label>
            <select
              {...register("city")}
              required
              id="city"
              dir="rtl"
              className="border border-clightgray w-full py-2.5 mt-1 text-6 text-black font-medium  focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent transition duration-200 rounded-lg"
              defaultValue=""
            >
              <option value="" disabled>
                {data?.city ?? "اختر الإدخال"}
              </option>
              {syrianGovernorates.map((gov) => (
                <option
                  key={gov.value}
                  value={gov.value}
                  className="text-cdarkgray"
                >
                  {gov.name}
                </option>
              ))}
            </select>
          </div>

          {/* المنطقة */}
          <div className=" w-1/2">
            <label
              htmlFor="hood"
              className="block text-6 font-medium text-cdarkgray"
            >
              المنطقة
            </label>
            <input
              placeholder="المنطقة"
              type="text"
              id="hood"
              {...register("hood")}
              className={`mt-1 p-2 w-full border text-6 font-medium border-clightgray rounded-md focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent  ${
                errors.hood ? "border-red-500" : ""
              }`}
            />
            {errors.hood && (
              <p className="text-red-500 text-6 mt-1">{errors.hood.message}</p>
            )}
          </div>
        </div>

        {/* تفاصيل العنوان */}
        <div>
          <label
            htmlFor="detailed_location"
            className="block text-6 font-medium text-cdarkgray "
          >
            تفاصيل العنوان
          </label>
          <textarea
            id="detailed_location"
            rows={2}
            {...register("detailed_location")}
            placeholder="تفاصيل العنوان"
            className={`focus:outline-none focus:ring-1 focus:ring-cgreen focus:border-transparent  mt-1 block w-full p-2 text-6 font-medium border rounded-md  ${
              errors.detailed_location ? "border-red-500" : "border-gray-300"
            } placeholder:text-gray-400`}
          />
          {errors.detailed_location && (
            <p className="text-red-500 text-xs mt-1">
              {errors.detailed_location.message}
            </p>
          )}
        </div>

        {/* زر الحفظ */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-cgreen text-white text-6 font-semibold rounded-md hover:bg-chgreen disabled:opacity-60 transition"
          >
            {isLoading ? "جاري الحفظ..." : "حفظ التعديلات"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;
