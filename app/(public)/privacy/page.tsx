const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            سياسة الخصوصية
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. مقدمة</h2>
              <p className="text-gray-600 mb-4">
                نحن في منصة العروض الصغيرة نلتزم بحماية خصوصية المستخدمين. هذه السياسة توضح 
                كيفية جمع واستخدام وحماية معلوماتك الشخصية.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. المعلومات التي نجمعها</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">المعلومات الشخصية:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>الاسم الكامل</li>
                <li>عنوان البريد الإلكتروني</li>
                <li>رقم الهاتف</li>
                <li>العنوان</li>
                <li>معلومات الحساب المصرفي (إذا لزم الأمر)</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">معلومات الاستخدام:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>عنوان IP</li>
                <li>نوع المتصفح</li>
                <li>نظام التشغيل</li>
                <li>صفحات الويب التي تزورها</li>
                <li>وقت وتاريخ الزيارات</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. كيفية استخدام المعلومات</h2>
              <p className="text-gray-600 mb-4">
                نستخدم معلوماتك الشخصية للأغراض التالية:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>إنشاء وإدارة حسابك الشخصي</li>
                <li>معالجة المعاملات والمدفوعات</li>
                <li>التواصل معك بخصوص الخدمة</li>
                <li>تحسين تجربة المستخدم</li>
                <li>إرسال إشعارات مهمة</li>
                <li>منع الاحتيال وإساءة الاستخدام</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. مشاركة المعلومات</h2>
              <p className="text-gray-600 mb-4">
                لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>بموافقتك الصريحة</li>
                <li>لتقديم الخدمات المطلوبة (مثل معالجة المدفوعات)</li>
                <li>للامتثال للقوانين والأنظمة</li>
                <li>لحماية حقوقنا وممتلكاتنا</li>
                <li>في حالة الاندماج أو الاستحواذ</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. حماية المعلومات</h2>
              <p className="text-gray-600 mb-4">
                نتخذ إجراءات أمنية مناسبة لحماية معلوماتك الشخصية:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>تشفير البيانات الحساسة</li>
                <li>استخدام جدران الحماية</li>
                <li>مراقبة الوصول للأنظمة</li>
                <li>تحديث البرامج الأمنية بانتظام</li>
                <li>تدريب الموظفين على الأمان</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-gray-600 mb-4">
                نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتقديم خدمات مخصصة. 
                يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. حقوق المستخدم</h2>
              <p className="text-gray-600 mb-4">
                لديك الحق في:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>الوصول إلى معلوماتك الشخصية</li>
                <li>تصحيح المعلومات غير الدقيقة</li>
                <li>حذف معلوماتك الشخصية</li>
                <li>تقييد معالجة معلوماتك</li>
                <li>نقل معلوماتك إلى منصة أخرى</li>
                <li>الاعتراض على معالجة معلوماتك</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. الاحتفاظ بالبيانات</h2>
              <p className="text-gray-600 mb-4">
                نحتفظ بمعلوماتك الشخصية طالما كان حسابك نشطاً أو حسب الحاجة لتقديم الخدمات. 
                قد نحتفظ ببعض المعلومات لفترة أطول للامتثال للقوانين أو لحل النزاعات.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. التغييرات على السياسة</h2>
              <p className="text-gray-600 mb-4">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإشعارك بالتغييرات المهمة 
                عبر البريد الإلكتروني أو إشعار على المنصة.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. التواصل</h2>
              <p className="text-gray-600 mb-4">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>البريد الإلكتروني: privacy@small-offer.com</li>
                <li>صفحة التواصل معنا</li>
                <li>الهاتف: +963 123 456 789</li>
              </ul>
            </section>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                آخر تحديث: يناير 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage; 