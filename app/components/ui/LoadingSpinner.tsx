import React from "react";
import { Loader2 } from "lucide-react"; // تأكد من تثبيت lucide-react: npm install lucide-react

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-36">
      <Loader2 className="w-8 h-8 animate-spin text-gray-600" />
    </div>
  );
};

export default LoadingSpinner;