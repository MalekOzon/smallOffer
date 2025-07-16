"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  List,
  Heart,
  Mail,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import alertCircle from "../../../public/resourses/alert-circle.svg";
import { useLogout } from "@/app/lib/loginservices/mutations";
import Notification from "../ui/Notification";

const navItems = [
  { label: "الرئيسية", href: "/dashboard", icon: Home },
  { label: "إعلاناتي", href: "/dashboard/ads", icon: List },
  { label: "المفضلة", href: "/dashboard/favorites", icon: Heart },
  { label: "رسائلي", href: "/dashboard/messages", icon: Mail },
  { label: "فواتيري", href: "/dashboard/rules", icon: BookOpen },
  { label: "الإعدادات", href: "/dashboard/settings", icon: Settings },
];

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const logout = useLogout(setNotification);
  const { isPending: isLoading } = logout;

  const handleLogout = () => setShowLogoutConfirm(true);
  const cancelLogout = () => setShowLogoutConfirm(false);

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    const refreshToken = localStorage.getItem("refreshToken");
    const jsonData = JSON.stringify({ refresh: refreshToken });
    logout.mutate(JSON.parse(jsonData), {
      onSuccess: () => {
        window.location.href = "/";
      },
    });
  };

  return (
    <div className="w-full h-full bg-white  flex flex-col justify-between px-4 py-6">
      {/* الشعار */}
      <div className="mb-8 flex justify-center max-md:mt-10">
        <Link href="/" className="text-2xl font-bold text-cgreen">
          Small Offer
        </Link>
      </div>

      {/* عناصر التنقل */}
      <nav className="flex flex-col items-start gap-2 flex-1 mt-4">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={`w-full flex items-center px-4 py-4 my-2 rounded-md transition-all 
                ${
                  isActive
                    ? "bg-cgreen text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <Icon size={20} className="ml-2" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* تسجيل الخروج */}
      <div className="pt-4 border-t flex justify-center">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-1 text-red-600 px-3 py-2 rounded-md hover:bg-red-50 transition-all"
        >
          <LogOut size={18} />
          <span className="text-sm w-[100px] font-semibold">تسجيل الخروج</span>
        </button>
      </div>

      {/* إشعار */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      {/* تأكيد تسجيل الخروج */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md sm:max-w-lg mx-4 p-6 sm:p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-400 rounded-full flex items-center justify-center">
                <Image
                  src={alertCircle}
                  alt="alertCircle"
                  className="w-10 sm:w-12"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              تسجيل الخروج
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              هل أنت متأكد من تسجيل الخروج؟
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                onClick={confirmLogout}
                disabled={isLoading}
                className="w-full sm:w-auto font-semibold px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex justify-center items-center gap-2">
                    جاري المعالجة...
                  </span>
                ) : (
                  "تسجيل الخروج"
                )}
              </button>
              <button
                onClick={cancelLogout}
                className="w-full sm:w-auto font-semibold px-6 py-2 border border-cgreen text-chgreen rounded-md hover:bg-green-50 transition"
              >
                إلغاء الأمر
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
