"use client"
import { useEffect, useState } from "react";

const useWindowWidth = (): number | null => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // تأكيد أن الكود يعمل فقط في المتصفح
    if (typeof window !== "undefined") {
      handleResize(); // لتعيين القيمة الأولية
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default useWindowWidth;
