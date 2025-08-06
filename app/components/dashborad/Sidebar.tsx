"use client";
import { motion } from "framer-motion"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  List,
  Heart,
  Mail,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";
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
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  
  
  const router = useRouter()

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
      {navItems.map(({ label, href, icon: Icon }, index) => {
        const isActive = pathname === href;

        // تأثير الظهور التدريجي لكل عنصر
        const itemVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
        };

        return (
          <motion.div
          className="w-full"
            key={href}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }} // تأثير عند التحويم
            whileTap={{ scale: 0.95 }} // تأثير عند النقر
          >
            <Link
              href={href}
              onClick={onNavigate}
              className={`w-full flex items-center px-4 py-4 my-2 rounded-md transition-all 
                ${
                  isActive
                    ? 'bg-cgreen text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              <Icon size={20} className="ml-2" />
              <span>{label}</span>
            </Link>
          </motion.div>
        );
      })}
    </nav>

      {/* تسجيل الخروج */}
      <div className="pt-4 border-t flex justify-center">
      {/* لف الزر داخل motion.button */}
      <motion.button
        onClick={() => router.push('/')}
        className="flex items-center justify-center gap-1 text-cgreen px-3 py-2 rounded-md hover:bg-chgreen hover:text-cwhite transition-all"
        whileHover={{ scale: 1.05 }} // تأثير عند التحويم
        whileTap={{ scale: 0.95 }} // تأثير عند النقر
        initial={{ opacity: 0, y: 20 }} // الحالة الابتدائية
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} // الحركة عند الظهور
      >
        <LogOut size={18} />
        <span className="text-sm w-[100px] font-semibold">عودة للرئيسية</span>
      </motion.button>
    </div>

      {/* إشعار */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

    </div>
  );
}
