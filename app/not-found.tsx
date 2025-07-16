import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-cgreen">404</h1>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          الصفحة غير موجودة
        </h2>
        
        <p className="text-gray-600 mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-cgreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-chgreen transition duration-300"
          >
            العودة للصفحة الرئيسية
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="text-cgreen hover:text-chgreen transition duration-300"
            >
              من نحن
            </Link> 
            <Link
              href="/contact"
              className="text-cgreen hover:text-chgreen transition duration-300"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 