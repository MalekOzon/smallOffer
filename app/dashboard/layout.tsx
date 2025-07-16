"use client";

import { ReactNode, useState } from "react";
import Header from "../components/dashborad/Header";
import { SidebarContent } from "../components/dashborad/Sidebar";
import { X } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full h-screen overflow-hidden relative">
      {/* السايدبار الثابت على الشاشات الكبيرة */}
      <div className="hidden md:block w-[15%] max-lg:w-[20%] h-full shadow-md">
        <SidebarContent />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex-1 flex flex-col h-full w-full">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="w-full h-full  max-sm:w-full max-sm:-mr-1 bg-gray-200 rounded-md text-right">
          <div className="w-[96%] mx-[2%] h-full">
            {children}
          </div>
        </main>
      </div>

      {/* السايدبار المنبثق في الشاشات الصغيرة */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full">
          <div className="w-64 h-full bg-white shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={24} />
            </button>
            <SidebarContent onNavigate={() => setSidebarOpen(false)} />
          </div>
          <div
            className="flex-1 bg-black opacity-40"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
