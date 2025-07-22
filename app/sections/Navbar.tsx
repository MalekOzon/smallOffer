"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Search, X, Menu, Heart, AlertCircle, ChevronDown } from "lucide-react";
import { useLogout } from "@/app/lib/loginservices/mutations";
import Notification from "../components/ui/Notification";
import userAvatar from "../../public/resourses/userAvatar.svg";
import { useGetUserInfo } from "../lib/dashboardServices/dashboardQueries";
import { categories } from "./categories";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const logout = useLogout(setNotification);
  const { isPending: isLoading } = logout;
  const getUserInfo = useGetUserInfo();
  
  const isLoggedIn = getUserInfo.data?.username;

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // إعادة حساب مواقع القوائم المنسدلة عند تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      // إجبار إعادة التصيير لتحديث مواقع القوائم المنسدلة
      setShowMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!showMenu) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    }
    if (window.innerWidth < 768) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const [rowConfig, setRowConfig] = useState<{ first: number; second: number }>(
    { first: categories.length, second: 0 }
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 923) {
        setRowConfig({ first: 5, second: 3 });
      } else if (width < 1080) {
        setRowConfig({ first: 6, second: 2 });
      } else if (width < 1176) {
        setRowConfig({ first: 7, second: 1 });
      } else {
        setRowConfig({ first: categories.length, second: 0 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const firstRow = categories.slice(0, rowConfig.first);
  const secondRow = categories.slice(
    rowConfig.first,
    rowConfig.first + rowConfig.second
  );

console.log("first " , firstRow);
console.log("second " , secondRow);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm w-full relative">
        {/* موبايل: خط أول */}
        <div className="flex items-center justify-between p-2  md:hidden">
          {/* جزء المستخدم أو زر تسجيل الدخول */}
          <div
            className="flex items-center gap-2 relative md:hidden"
            ref={userMenuRef}
            >
            {isLoggedIn ? (
              <>
                <div
                  className="flex items-center cursor-pointer select-none"
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  <ChevronDown className="text-cdarkgray " />
                  <span className="font-bold text-cdarkgray text-6 mr-1">
                    {getUserInfo.data?.username}
                  </span>
                  <Image
                    src={userAvatar}
                    alt="User Avatar"
                    className="w-14 h-14 rounded-full object-cover border-2 border-cgreen mr-2"
                  />
                </div>
                {/* القائمة المنسدلة للموبايل */}
                {showMenu && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="text-sm text-gray-700">
                      <li>
                        <Link
                          href="/dashboard"
                          onClick={() => setShowMenu(false)}
                          className="flex items-center px-4 py-2 hover:bg-gray-100"
                        >
                          متجري
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/messages"
                          onClick={() => setShowMenu(false)}
                          className="flex items-center px-4 py-2 hover:bg-gray-100"
                        >
                          رسائلي
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/profile"
                          onClick={() => setShowMenu(false)}
                          className="flex items-center px-4 py-2 hover:bg-gray-100"
                        >
                          تعديل المعلومات الشخصية
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setShowLogoutConfirm(true);
                            setShowMenu(false);
                          }}
                          className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50"
                        >
                          تسجيل الخروج
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link
                href="/login"
                className="bg-chgreen text-white px-4 py-2 rounded-lg font-semibold"
              >
                تسجيل الدخول
              </Link>
            )}
          </div>
          {/* زر القلب */}
          <Link href="/dashboard/favorites" className="text-cdarkgray max-sm:ml-16">
            <Heart />
          </Link>
          {/* اللوغو */}
          <Link href="/" className="text-2xl font-bold text-cgreen">
            Small Offer
          </Link>
        </div>
        {/* موبايل: خط ثاني */}
        <div className="flex items-center justify-between px-4 pb-2 md:hidden">
          {/* زر البحث */}
          <div className="flex-1">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="اكتب هنا"
                className="w-full pl-10 pr-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cgreen text-right"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={22} />
              </span>
            </div>
          </div>
          {/* زر القائمة */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-700 ml-3 mr-5"
            aria-label="فتح القائمة"
          >
            <Menu size={28} />
          </button>
        </div>


        {/* ديسكتوب: الهيدر القديم */}
        <div className="hidden md:flex items-center justify-between py-2 px-3">
          <Link href="/" className="text-2xl font-bold text-cgreen">
            Small Offer
          </Link>
          <div className="mx-6 relative flex-1 md:w-[40%] max-w-md">
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="ابحث هنا ..."
              className="w-full pl-10 pr-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cgreen"
            />
          </div>
          <div className="flex items-center space-x-4 space-x-reverse ml-4">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard/favorites">
                  <Heart className="text-cgreen" size={28} />
                </Link>
                <div
                  className="relative mr-3 hidden md:block"
                  onMouseEnter={() => setShowMenu(true)}
                  onMouseLeave={() => setShowMenu(false)}
                >
                  <div className="flex items-center cursor-pointer select-none">
                    <Image
                      src={userAvatar}
                      alt="User Avatar"
                      className="w-14 h-14 rounded-full mr-2 object-cover border-2 border-cgreen"
                    />
                    <span className="text-6 font-medium mr-3">
                      {getUserInfo.data?.username}
                    </span>
                    <span className="text-gray-400 mr-3">
                      <ChevronDown />
                    </span>
                  </div>
                  {showMenu && (
                    <div className="absolute top-full left-0 w-56 bg-cwhite border border-gray-200 rounded-md shadow-lg z-50">
                      <ul className="text-sm text-gray-700">
                        <li>
                          <Link
                            href="/dashboard"
                            onClick={() => setShowMenu(false)}
                            className="flex text-6 items-center  px-4 py-2 hover:bg-gray-100"
                          >
                            متجري
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard/messages"
                            onClick={() => setShowMenu(false)}
                            className="flex  text-6  items-center  px-4 py-2 hover:bg-gray-100"
                          >
                            رسائلي
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard/profile"
                            onClick={() => setShowMenu(false)}
                            className="flex text-6  items-center  px-4 py-2 hover:bg-gray-100"
                          >
                            تعديل المعلومات الشخصية
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setShowLogoutConfirm(true);
                              setShowMenu(false);
                            }}
                            className="w-full flex  text-6  items-center px-4 py-2 text-red-600 hover:bg-red-50"
                          >
                            تسجيل الخروج
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-cgreen transition duration-300"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  href="/signup"
                  className="bg-cgreen text-white px-4 py-2 rounded-lg hover:bg-chgreen transition duration-300 mr-6"
                >
                  إنشاء حساب
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Notification */}
        {notification && (
          <div className="fixed top-5 right-5 z-[9999]">
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          </div>
        )}

        {/* Logout Confirmation */}
        {showLogoutConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md sm:max-w-lg mx-4 p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-400 rounded-full flex items-center justify-center">
                  <AlertCircle />
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
                  {isLoading ? "جاري المعالجة..." : "تسجيل الخروج"}
                </button>
                <button
                  onClick={cancelLogout}
                  className="w-full sm:w-auto font-semibold px-6 py-2 border border-cgreen text-cgreen rounded-md hover:bg-green-50 transition"
                >
                  إلغاء الأمر
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sidebar (Mobile Only) */}
      {isMobile && isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed inset-y-0 left-0 w-full bg-cwhite shadow-lg z-50 transform translate-x-0 transition-transform ease-in-out duration-300 overflow-y-auto"
        >
          <div className="flex flex-col justify-between items-center p-4 border-b border-cdarkgray">
            <Link
              href="/"
              className="text-3xl w-full flex justify-center mb-4 font-bold text-cgreen"
            >
              Small Offer
            </Link>
            <div className="flex w-full justify-between items-center ">
              <h3 className="text-xl font-bold  ">الفئات</h3>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-cdarkgray outline rounded-full p-1 "
              >
                <X size={27} className="text-cgreen" />
              </button>
            </div>
          </div>
          <ul className="p-4 space-y-4 mt-4">
            {categories.map((cat, idx) => (
              <li key={idx} className="py-4 text-xl ">
                <Link
                  href={cat.slug || "#"}
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center gap-2 flex-grow"
                >
                  <Image src={cat.icon} alt={cat.name} width={26} height={26} />
                  <span>{cat.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="w-full bg-cgreen text-white py-2 rounded-lg font-semibold hover:bg-chgreen transition"
              >
                تصفح كل الإعلانات
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Overlay for Sidebar */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Navigation Categories (Desktop Only) */}
      {!isMobile && (
        <nav className="bg-cgray border-t border-b py-2 border-gray-200">
          <div className="flex flex-wrap items-center">
            {firstRow.map((cat, idx) => (
              <div
                key={idx}
                className="relative group w-full sm:w-auto text-center sm:text-left "
              >
                <Link
                  href={cat.slug || "#"}
                  className="block sm:inline-block px-2 py-3 rounded-lg font-bold text-base transition-all duration-200
                          bg-transparent text-cdarkgray group-hover:bg-cgreen group-hover:text-white "
                >
                  <div className="flex items-center justify-center sm:justify-start">
                    <Image
                      src={cat.icon}
                      alt={cat.name}
                      width={24}
                      height={24}
                      className=" mr-2 transition-all duration-200 group-hover:invert group-hover:brightness-0 group-hover:filter group-hover:drop-shadow group-hover:text-white"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(56%) sepia(16%) saturate(1162%) hue-rotate(110deg) brightness(93%) contrast(92%)",
                      }}
                    />
                    <span className="mr-2 transition-all duration-200 group-hover:text-white">
                      {cat.name}
                    </span>
                  </div>
                </Link>
                {/* القائمة المنسدلة للصف الأول */}
                <div
                  className={`absolute top-full ${
                    idx < 3 ? "right-0" : "left-0"
                  } w-[410px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200`}
                >
                  {/* العنوان */}
                  <div className="p-4 border-b border-clightgray">
                    <h3 className="text-cgreen text-lg font-bold flex items-center gap-2">
                      <Image
                        src={cat.icon}
                        alt={cat.name}
                        width={20}
                        height={20}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(56%) sepia(16%) saturate(1162%) hue-rotate(110deg) brightness(93%) contrast(92%)",
                        }}
                      />
                      {cat.name}
                    </h3>
                  </div>
                  {/* العناصر */}
                  <ul className="p-4 grid grid-cols-2 gap-x-2 gap-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href || "#"}
                          className="flex items-center  text-cdarkgray hover:text-cgreen text-sm font-medium transition-all duration-200"
                        >
                          <Image
                            src={item.icon}
                            alt={item.label}
                            width={20}
                            height={20}
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(56%) sepia(16%) saturate(1162%) hue-rotate(110deg) brightness(93%) contrast(92%)",
                            }}
                          />
                          <span className="mr-2">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* زر تصفح */}
                  <div className="px-4 pb-4">
                    <button className="w-full bg-cgreen text-white py-2 rounded-md font-semibold hover:bg-chgreen transition">
                      تصفح كل {cat.name}
                    </button>
                  </div>
                  {/* سطر فاصل */}
                  <div className="border-t border-clightgray" />
                  {/* تواصل معنا */}
                  <div className="p-4 flex  items-center gap-2 text-sm text-gray-700">
                    <p>لديك اقتراح؟ تواصل معنا واقترح تصنيف جديد.</p>
                    <button className="border border-cgreen text-cgreen px-4 py-1 rounded-md font-medium hover:bg-cgreen hover:text-white transition">
                      تواصل معنا
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {secondRow.length > 0 && (
            <div className="flex flex-wrap items-center px-1 mt-2 ">
              {secondRow.map((cat, idx) => (
                <div
                  key={idx}
                  className="relative group w-full sm:w-auto text-center sm:text-left"
                >
                  <Link
                    href={cat.slug || "#"}
                    className="block sm:inline-block px-1 py-3 rounded-lg font-bold text-base transition-all duration-200
      bg-transparent text-cdarkgray group-hover:bg-cgreen group-hover:text-white "
                  >
                    <div className="flex items-center justify-center sm:justify-start">
                      <Image
                        src={cat.icon}
                        alt={cat.name}
                        width={24}
                        height={24}
                        className=" mr-2 transition-all duration-200 group-hover:invert group-hover:brightness-0 group-hover:filter group-hover:drop-shadow group-hover:text-white"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(56%) sepia(16%) saturate(1162%) hue-rotate(110deg) brightness(93%) contrast(92%)",
                        }}                      />
                      <span className="mr-2 transition-all duration-200 group-hover:text-white">
                        {cat.name}
                      </span>
                    </div>
                  </Link>
                  {/* القائمة المنسدلة للصف الثاني */}
                  <div className="absolute top-full right-0 w-[410px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    {/* العنوان */}
                    <div className="p-4 border-b border-clightgray">
                      <h3 className="text-cgreen text-lg font-bold flex items-center gap-2">
                        <Image
                          src={cat.icon}
                          alt={cat.name}
                          width={20}
                          height={20}
                          className=" mr-2 transition-all duration-200 group-hover:invert group-hover:brightness-0 group-hover:filter group-hover:drop-shadow group-hover:text-white"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(56%) sepia(16%) saturate(1162%) hue-rotate(110deg) brightness(93%) contrast(92%)",
                          }}
                        />
                        {cat.name}
                      </h3>
                    </div>
                    {/* العناصر */}
                    <ul className="p-4 grid grid-cols-2 gap-x-4 gap-y-3">
                      {cat.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.href || "#"}
                            className="flex items-center gap-2 text-cdarkgray  hover:text-cgreen text-sm font-medium transition-all duration-200"
                          >
                            <Image
                              src={item.icon}
                              alt={item.label}
                              width={20}
                              height={20}
                              style={{
                                filter:
                                  "brightness(0) saturate(100%) invert(56%) sepia(16%) saturate(1162%) hue-rotate(110deg) brightness(93%) contrast(92%)",
                              }}
                            />
                            <span className="mr-2">{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {/* زر تصفح */}
                    <div className="px-4 pb-4">
                      <button className="w-full bg-cgreen text-white py-2 rounded-md font-semibold hover:bg-chgreen transition">
                        تصفح كل {cat.name}
                      </button>
                    </div>
                    {/* سطر فاصل */}
                    <div className="border-t border-clightgray" />
                    {/* تواصل معنا */}
                    <div className="p-4 flex  items-center gap-2 text-sm text-gray-700">
                      <p>لديك اقتراح؟ تواصل معنا واقترح تصنيف جديد.</p>
                      <button className="border border-cgreen text-cgreen px-4 py-1 rounded-md font-medium hover:bg-cgreen hover:text-white transition">
                        تواصل معنا
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
