"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Title from "@/app/components/dashborad/Title";
import { Trash } from "lucide-react";
import {
  useDeleteAccount,
  useEmailNotificationsDash,
  useFeedbackEmail,
} from "@/app/lib/dashboardServices/dashboardMutation";
import Notification from "@/app/components/ui/Notification";
import { useGetEmailNotificationsDash } from "@/app/lib/dashboardServices/dashboardQueries";
import SkeletonNotificationSettings from "@/app/components/ui/SkeletonNotificationSettings";

const contactSchema = z.object({
  full_name: z.string().min(1, "الاسم مطلوب"),
  email: z.string().email("البريد غير صالح"),
  message: z.string().min(1, "الرسالة مطلوبة"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function SettingsPage() {
  // تواصل معنا
  const {
    register,
    handleSubmit: handleContactSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  // حذف الحساب
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [passwordOnDelete, setPasswordOnDelete] = useState("");

  // نافذة نجاح التواصل
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // ------------------------------------------------------------------------------------------------------------------
  // إرسال إعدادات البريد
  // إعدادات الاشعارات
  const [specialMessages, setSpecialMessages] = useState(false);
  const [activityNotifications, setActivityNotifications] = useState(false);
  const [offersUpdates, setOffersUpdates] = useState(false);
  const [isLoadingSettings, setIsLoadingSettings] = useState(true);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const EmailNotificationsDash = useEmailNotificationsDash(setNotification);
  const { isPending: isLoading } = EmailNotificationsDash;
  const GetEmailNotificationsDash = useGetEmailNotificationsDash();
  const { data, error, isSuccess } = GetEmailNotificationsDash;

  useEffect(() => {
    if (isSuccess && data) {
      setSpecialMessages(Boolean(data.receive_private_messages));
      setActivityNotifications(Boolean(data.receive_activity_notifications));
      setOffersUpdates(Boolean(data.receive_offers));
      setIsLoadingSettings(false);
    }

    if (error) {
      console.error("❌ error");
      setIsLoadingSettings(false); // حتى لو في خطأ نوقف التحميل
    }
  }, [data, isSuccess, error]);

  const handleEmailSettingsSubmit = async () => {
    const jsonData = JSON.stringify({
      receive_private_messages: specialMessages,
      receive_activity_notifications: activityNotifications,
      receive_offers: offersUpdates,
    });
    EmailNotificationsDash.mutate(JSON.parse(jsonData));
  };
  // ------------------------------------------------------------------------------------------------------------------

  // إرسال رسالة تواصل معنا
  const [notification2, setNotification2] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  useEffect(() => {
    if (notification2?.type === "success") {
      setShowSuccessDialog(true);
      reset(); // لتصفير النموذج
      setTimeout(() => {
        setShowSuccessDialog(false);
      }, 3000);
    }
  }, [notification2 , reset]);
  
  const feedbackEmail = useFeedbackEmail(setNotification2);
  const { isPending: isLoadingSend } = feedbackEmail;

  const onSubmitContact = async (data: ContactFormValues) => {
    
    const jsonData = JSON.stringify({
      full_name: data.full_name,
      email: data.email,
      message: data.message
    });
    feedbackEmail.mutate(JSON.parse(jsonData));
  };

  // ------------------------------------------------------------------------------------------------------------------
  // حذف الحساب
  const [notification1, setNotification1] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const deleteAccount = useDeleteAccount(setNotification1);
  const { isPending: isLoadingDelete } = deleteAccount;

  const handleDeleteAccount = async () => {
    const jsonData = JSON.stringify({
      password: passwordOnDelete,
    });
    deleteAccount.mutate(JSON.parse(jsonData));
  };

  // ------------------------------------------------------------------------------------------------------------------
  if (isLoadingSettings) {
    return <SkeletonNotificationSettings />;
  }

  return (
    <div className="space-y-1 mx-auto">
      <Title title="الإعدادات" isPostPage={false} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
        {/* ------------- Noti -------------- */}
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}

        {/* إعدادات البريد */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEmailSettingsSubmit();
          }}
          className="bg-cwhite p-5 rounded-xl space-y-2"
        >
          <h2 className="font-bold text-5">اعدادات البريد الالكتروني</h2>
          <p className="text-md font-semibold text-cdarkgray">
            تحكم في الرسائل التي تصلك على بريدك الالكتروني:
          </p>

          {/* الحقول */}
          <div className="flex items-center justify-between border-b border-clightgray pb-4">
            <div>
              <p className="font-medium">استلام الرسائل الخاصة</p>
              <p className="text-sm text-gray-500">
                مثال: وصلك رسالة من مستخدم آخر
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={specialMessages}
                onChange={(e) => setSpecialMessages(e.target.checked)}
                className="sr-only peer "
              />
              <div className="w-11 h-7 bg-gray-200 rounded-full peer peer-checked:bg-cgreen after:content-[''] after:absolute after:top-1 after:start-[2px] after:bg-white after:border-2 after:border-cgreen after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"></div>
            </label>
          </div>

          <div className="flex items-center justify-between border-b border-clightgray pb-4">
            <div>
              <p className="font-medium">استلام إشعارات النشاط</p>
              <p className="text-sm text-gray-500">
                مثال: تمت الموافقة على إعلانك
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={activityNotifications}
                onChange={(e) => setActivityNotifications(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-7 bg-gray-200 rounded-full peer peer-checked:bg-cgreen after:content-[''] after:absolute after:top-1 after:start-[2px] after:bg-white after:border-2 after:border-cgreen after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">استلام عروض وتحديثات من المنصة</p>
              <p className="text-sm text-gray-500">
                تشمل التحديثات الترويجية والتعليمية
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={offersUpdates}
                onChange={(e) => setOffersUpdates(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-7 bg-gray-200 rounded-full peer peer-checked:bg-cgreen after:content-[''] after:absolute after:top-1 after:start-[2px] after:bg-white after:border-2 after:border-cgreen after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"></div>
              </label>
          </div>
          <p className="text-sm text-gray-500 pt-4 border-t border-clightgray">
            يمكنك إلغاء اشتراكك في الاشعارات في أي وقت من خلال إعدادات الحساب.
          </p>

          <button
            type="submit"
            disabled={isLoading}
            className="hover:scale-105 transition-all duration-150 w-[95%] flex justify-center items-center mx-auto py-3 bg-cgreen text-white text-6 font-semibold rounded-md hover:bg-chgreen disabled:opacity-60 "
          >
            {isLoading ? "جاري الحفظ..." : "حفظ الإعدادات"}
          </button>
        </form>

        {/* تواصل معنا */}
        <div className="bg-cwhite p-5 rounded-xl">
          <h2 className="font-bold text-lg mb-4 text-center">
            بحاجة مساعدة؟ تواصل معنا
          </h2>
          <form
            onSubmit={handleContactSubmit(onSubmitContact)}
            className="space-y-4 relative  h-[88%] w-full "
          >
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  {...register("full_name")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cgreen"
                />
                {errors.full_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.full_name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="البريد الالكتروني"
                  {...register("email")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cgreen"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="max-md:mb-12">
                <textarea
                  placeholder="ادخل رسالتك هنا"
                  {...register("message")}
                  className="w-full p-2 border border-gray-300 rounded-md md:h-40 lg:h-28 h-28 resize-none focus:outline-none focus:ring-1 focus:ring-cgreen"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoadingSend}
              className="w-full hover:scale-105 absolute bottom-0 bg-cgreen hover:bg-chgreen text-white py-3 rounded-md font-medium transition"
            >
              {isLoadingSend ? "جاري الحفظ..." : "إرسال رسالة الآن"}
            </button>
          </form>
        </div>
      </div>

      {/* حذف الحساب */}
      <div className="bg-cwhite p-5 rounded-xl">
        <h2 className="font-bold text-lg mb-2">حذف الحساب الشخصي</h2>
        <p className="text-6 text-cdarkgray mb-2 font-semibold">
          سيتم حذف جميع بياناتك ومحتوياتك من المنصة بشكل نهائي ولا يمكن التراجع
          عن هذا الإجراء.
        </p>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setShowDeleteConfirm(true)}
            className="flex hover:scale-105 max-sm:mt-4 bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-md font-medium transition gap-2"
          >
            <Trash className="w-5 h-5" />
            حذف حسابي نهائيًا
          </button>
        </div>
      </div>

      {/* نافذة تأكيد حذف الحساب */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {notification1 && (
            <Notification
              message={notification1.message}
              type={notification1.type}
              onClose={() => setNotification1(null)}
            />
          )}
          <div className="bg-white w-full md:max-w-md max-md:w-[350px] p-6 rounded-xl text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center">
                <Trash className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">حذف الحساب</h3>
            <p className="text-sm text-red-600 font-semibold">
              تحذير: هذه الخطوة نهائية ولا يمكن التراجع عنها.
            </p>
            <p className="text-sm text-gray-600">
              لتأكيد العملية، الرجاء إدخال كلمة المرور.
            </p>

            <input
              type="password"
              value={passwordOnDelete}
              onChange={(e) => setPasswordOnDelete(e.target.value)}
              placeholder="تأكيد كلمة المرور"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <button
                onClick={handleDeleteAccount}
                disabled={isLoadingDelete || !passwordOnDelete}
                className="w-full sm:w-[150px] font-semibold px-6 py-2 bg-red-400 text-white rounded-md hover:bg-red-700 transition"
              >
                {isLoadingDelete ? "جاري الحذف..." : "حذف الحساب"}
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="w-full sm:w-[150px] font-semibold px-6 py-2 border border-cgreen text-green-600 rounded-md hover:bg-green-100 transition"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* نافذة نجاح إرسال تواصل معنا */}
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
            <p className="text-sm text-gray-600">تم استلام الرد سنرد عليك بأقرب وقت ممكن</p>
          </div>
        </div>
      )}
    </div>
  );
}
