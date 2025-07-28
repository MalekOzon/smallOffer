"use client";
import React, { useState } from "react";
import { NotificationSetter, useCreateRate } from "@/app/lib/postServices/postMutations";

interface RateStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  setNotification: NotificationSetter;
}

const rateOptions = [
  { score: 5, label: "ممتاز - تجربة رائعة وأنصح باستعماله" },
  { score: 4, label: "جيد جدًا - المتجر جيد والخدمة ممتازة" },
  { score: 3, label: "مقبول - تجربة متوسطة وبها بعض الملاحظات" },
  { score: 2, label: "ضعيف - واجهت بعض المشاكل" },
  { score: 1, label: "سيء جدًا - تجربة سيئة ولا أنصح به" },
];

const RateStoreModal = ({ isOpen, onClose, username, setNotification }: RateStoreModalProps) => {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const mutation = useCreateRate(setNotification);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!selectedScore) return;
    const formData = new FormData();
    formData.append("score", selectedScore.toString());
    mutation.mutate({ formData, username }, { onSuccess: () => onClose() });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md md:max-w-2xl rounded-xl shadow-lg p-6 relative">

        <h2 className="text-2xl font-bold text-center mb-2">تقييم هذا المتجر</h2>
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          شكرا لاستخدامك منصتنا! نرجو منك تقييم تجربتك مع البائع، فملاحظاتك تساعد الآخرين في اتخاذ قراراتهم وتُساهم في تحسين جودة المتاجر على منصتنا.
        </p>

        <div className="space-y-3 mb-6">
          {rateOptions.map(({ score, label }) => (
            <label key={score} className="flex items-center gap-2 cursor-pointer text-gray-700 mb-6">
              <input
                type="radio"
                name="rate"
                value={score}
                checked={selectedScore === score}
                onChange={() => setSelectedScore(score)}
                className="accent-cgreen"
              />
              <span className="flex items-center gap-2">
                <span>{label}</span>
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill={i < score ? "#FFD600" : "#E0E0E0"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                  ))}
                </span>
              </span>
            </label>
          ))}
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
            disabled={!selectedScore || mutation.isPending}
            className="flex-1 py-2 bg-cgreen text-white rounded-md font-semibold hover:bg-chgreen transition disabled:opacity-50"
          >
            {mutation.isPending ? "جاري الإرسال..." : "تأكيد التقييم"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateStoreModal;
