"use client";
import React, { useState } from "react";
import { NotificationSetter, useCreateReport } from "@/app/lib/postServices/postMutations";

interface ReportStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  setNotification: NotificationSetter;
}



const reasons = [
  { label: "المتجر يبيع منتجات محظورة", value: "banned_products" },
  { label: "المحتوى غير لائق", value: "inappropriate_content" },
  { label: "معلومات مضللة", value: "misleading_info" },
  { label: "تعامل سيء أو لغة غير مناسبة", value: "bad_behavior" },
  { label: "أخرى", value: "other" },
];

const ReportStoreModal = ({ isOpen, onClose, username, setNotification }: ReportStoreModalProps) => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [details, setDetails] = useState("");
  const mutation = useCreateReport(setNotification);

  if (!isOpen) return null;

  const handleSubmit = () => {
    const chosen = reasons.find((r) => r.value === selectedReason);
    if (!chosen) return;

    const formData = new FormData();
    formData.append("reason", chosen.label);
    formData.append("builtin_reason", chosen.value);
    if (details.trim()) formData.append("details", details.trim());

    mutation.mutate({ formData, username }, { onSuccess: () => onClose() });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md md:max-w-2xl rounded-xl shadow-lg p-6 relative">
        {/* أيقونة */}
        <h2 className="text-2xl font-bold text-center mb-4">
          هل تواجه مشكلة مع هذا المتجر؟
        </h2>
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          نحن نحرص على أن تكون تجربة المستخدم آمنة ومريحة، إذا لاحظت سلوكاً مخالفاً من هذا المتجر يرجى تزويدنا بالتفاصيل
        </p>

        <div className="space-y-3 mb-6">
          <p className="font-bold text-gray-700">سبب الإبلاغ</p>
          {reasons.map((reason) => (
            <label key={reason.value} className="flex items-center gap-2 cursor-pointer text-gray-600">
              <input
                type="radio"
                name="reason"
                value={reason.value}
                onChange={() => setSelectedReason(reason.value)}
                checked={selectedReason === reason.value}
                className="accent-cgreen"
              />
              {reason.label}
            </label>
          ))}
        </div>

        <div className="mb-6">
          <label className="block font-bold text-gray-700 mb-2">
            يرجى وصف المشكلة بالتفصيل <span className="text-sm text-gray-500">(اختياري)</span>
          </label>
          <input
            type="text"
            placeholder="تفاصيل الإبلاغ"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cgreen"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={mutation.isPending}
            className="flex-1 py-2 border border-cgreen text-cgreen rounded-md font-semibold hover:bg-cgreen hover:text-white transition"
          >
            إلغاء الأمر
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedReason || mutation.isPending}
            className="flex-1 py-2 bg-cgreen text-white rounded-md font-semibold hover:bg-chgreen transition disabled:opacity-50"
          >
            {mutation.isPending ? "جاري الإرسال..." : "ارسال الإبلاغ"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportStoreModal;
