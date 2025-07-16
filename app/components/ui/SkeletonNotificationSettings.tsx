// components/ui/SkeletonNotificationSettings.tsx
export default function SkeletonNotificationSettings() {
  return (
    <div className="bg-white p-5 rounded-xl space-y-4 animate-pulse max-w-md mx-auto">
      {/* العنوان */}
      <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
      {/* الوصف */}
      <div className="h-4 w-2/3 bg-gray-300 rounded"></div>

      {/* العناصر الثلاثة */}
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between border-b border-gray-200 pb-4"
        >
          <div className="space-y-2">
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
            <div className="h-3 w-32 bg-gray-300 rounded"></div>
          </div>
          <div className="w-11 h-7 bg-gray-300 rounded-full"></div>
        </div>
      ))}

      {/* ملاحظة */}
      <div className="h-4 w-full bg-gray-300 rounded mt-4"></div>

      {/* زر الحفظ */}
      <div className="h-10 w-full bg-gray-400 rounded"></div>
    </div>
  );
}
