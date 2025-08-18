"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import contacImage from "../../../public/resourses/contacImage.svg";
import Image from "next/image";
import { useFeedbackEmail } from "@/app/lib/dashboardServices/dashboardMutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Notification from "@/app/components/ui/Notification";
import FAQ from "@/app/components/main/FAQ";
const ContactPage = () => {
  const contactSchema = z.object({
    full_name: z.string().min(1, "الاسم مطلوب"),
    email: z.string().email("البريد غير صالح"),
    message: z.string().min(1, "الرسالة مطلوبة"),
    title: z.string().min(1, "العنوان مطلوب"),
  });

  type ContactFormValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit: handleContactSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  // إرسال رسالة تواصل معنا
  const [notification2, setNotification2] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    if (notification2?.type === "success") {
      setShowSuccessDialog(true);
      reset(); // لتصفير النموذج
      setTimeout(() => {
        setShowSuccessDialog(false);
      }, 3000);
    }
  }, [notification2, reset]);

  const feedbackEmail = useFeedbackEmail(setNotification2);
  const { isPending: isLoadingSend } = feedbackEmail;

  const onSubmitContact = async (data: ContactFormValues) => {
    const jsonData = JSON.stringify({
      full_name: data.full_name,
      email: data.email,
      title: data.title,
      message: data.message,
    });
    feedbackEmail.mutate(JSON.parse(jsonData));
  };

  return (
    <div className="min-h-screen  mt-5">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className=" mx-10 flex justify-between h-full max-md:flex-col-reverse">
          <div className="flex flex-col justify-center p-6  text-gray-800 w-1/2 max-md:w-full  ">
            <h1 className="text-3xl font-bold max-md:text-2xl">تواصل معنا</h1>
            <p className=" mt-2 text-xl max-md:w-full max-md:text-lg">
              نحن هنا للإجابة على استفساراتك، ودعمك في مشاريعك، والاستماع إلى
              أفكارك. لا تتردد في التواصل معنا، فكل رسالة هي بداية تعاون مميز.
            </p>
          </div>
          <div>
            <Image src={contacImage} alt="sora" width={1000} height={1000} />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              معلومات التواصل
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    البريد الإلكتروني
                  </h3>
                  <p className="text-gray-600">info@small-offer.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-gray-900">الهاتف</h3>
                  <p className="text-gray-600">+963 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-gray-900">العنوان</h3>
                  <p className="text-gray-600">دمشق، سوريا</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                ساعات العمل
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>الأحد - الخميس: 9:00 ص - 6:00 م</p>
                <p>الجمعة - السبت: 10:00 ص - 4:00 م</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50  rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              أرسل لنا رسالة
            </h2>
            {/* ------------- Noti -------------- */}
            {notification2 && (
              <Notification
                message={notification2.message}
                type={notification2.type}
                onClose={() => setNotification2(null)}
              />
            )}
            <form
              onSubmit={handleContactSubmit(onSubmitContact)}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("full_name")}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="أدخل اسمك الكامل"
                />
                {errors.full_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.full_name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  الموضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("title")}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="أدخل موضوع الرسالة"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="اكتب رسالتك هنا..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoadingSend}
                className="w-full bg-cgreen text-white py-3 px-6 rounded-lg font-semibold hover:bg-chgreen transition duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 ml-2" />
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 rounded-lg shadow-lg p-8 w-full ">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            الأسئلة الشائعة
          </h2>
          <FAQ />
        </div>
      </div>
      {showSuccessDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full md:max-w-md max-md:w-[350px] p-6 rounded-xl text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              تم الإرسال بنجاح
            </h3>
            <p className="text-sm text-gray-600">
              تم استلام الرد سنرد عليك بأقرب وقت ممكن
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
