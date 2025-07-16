"use client";
import React, { useEffect, useState } from "react";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  duration?: number;
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  duration = 4000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-4 left-4 right-4 sm:top-5 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:right-auto z-50 pointer-events-auto">
      <div
        className={`w-full max-w-xl mx-auto p-4 sm:p-6 rounded-lg shadow-lg text-sm sm:text-lg transition-all duration-300 ${
          type === "success"
            ? "bg-green-100 text-green-900 border border-green-400"
            : "bg-red-100 text-red-900 border border-red-400"
        }`}
      >
        <div className="flex justify-between items-start sm:items-center gap-3">
          <span className="whitespace-pre-line font-semibold flex-1 leading-relaxed">{message}</span>
          <button
            className="flex-shrink-0 text-2xl sm:text-3xl font-bold text-gray-700 hover:text-gray-900 transition-colors duration-200 p-1 -m-1"
            onClick={() => {
              setVisible(false);
              onClose?.();
            }}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
