"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  Settings,
  Lock,
  LogOut,
  X,
  Menu,
  ChevronDown,
} from "lucide-react";
import userAvatar from "../../../public/resourses/userAvatar.svg";
import alertCircle from "../../../public/resourses/alert-circle.svg";
import { useLogout } from "@/app/lib/loginservices/mutations";
import Notification from "../ui/Notification";
import { useGetUserInfo } from "@/app/lib/dashboardServices/dashboardQueries";

const Header = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  const logout = useLogout(setNotification);
  const { isPending: isLoading } = logout;

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

  const cancelLogout = () => setShowLogoutConfirm(false);
  const handleLogout = () => setShowLogoutConfirm(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen && isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, isMobile]);

  const getUserInfo = useGetUserInfo();

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white  w-full relative">
      {/* زر القائمة في الشاشات الصغيرة */}
      <div className="md:hidden">
        <button onClick={onMenuClick} className="text-gray-700">
          <Menu size={28} />
        </button>
      </div>

      {/* حقل البحث */}
      <div className="mx-6 relative flex-1 md:w-[60%]">
        <button className="block md:hidden text-gray-500">
          <Search size={22} />
        </button>

        <div className="hidden md:block relative">
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="ابحث هنا ..."
            className="w-full pl-10 pr-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* المستخدم والقائمة المنسدلة */}
      <div className="flex px-4 justify-end items-center ml-1 max-sm:ml-0 space-x-reverse relative ">
        <Image
          src={userAvatar}
          alt="User Avatar"
          className="w-14 h-14 rounded-full object-cover border-2 border-cgreen mr-2"
        />

        <div className={`relative mr-1 ${!isMobile ? "group" : ""}`}>
          <div
            className="flex items-center cursor-pointer select-none"
            onClick={() => isMobile && setMenuOpen((prev) => !prev)}
          >
            <span className="text-6 font-medium mr-3">
              {getUserInfo.data?.username}
            </span>
            <span className="text-gray-400 mr-3">
              <ChevronDown />
            </span>
          </div>

          <div
            ref={menuRef}
            className={`
              absolute top-full left-0 mt-2 w-56
              bg-white border border-gray-200 rounded-md shadow-lg z-50
              ${
                isMobile
                  ? menuOpen
                    ? "block"
                    : "hidden"
                  : "invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200"
              }
            `}
          >
            {isMobile && (
              <div className="flex justify-end p-2 md:hidden">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>
            )}

            <ul className="text-sm text-gray-700">
              <li>
                <Link
                  href="/dashboard/profile"
                  onClick={() => isMobile && setMenuOpen(false)}
                  className="flex items-center px-4 py-2 hover:bg-gray-100"
                >
                  <Settings size={16} className="ml-2" />
                  تعديل المعلومات الشخصية
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/change-password"
                  onClick={() => isMobile && setMenuOpen(false)}
                  className="flex items-center px-4 py-2 hover:bg-gray-100"
                >
                  <Lock size={16} className="ml-2" />
                  تغيير كلمة المرور
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  <LogOut size={16} className="ml-2" />
                  تسجيل الخروج
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* إشعار */}
      {notification && (
        <div className="fixed top-5 right-5 z-[9999]">
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        </div>
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
                className="w-full sm:w-auto font-semibold px-6 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition"
              >
                إلغاء الأمر
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
