const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            شروط الخدمة
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. قبول الشروط</h2>
              <p className="text-gray-600 mb-4">
                باستخدام منصة العروض الصغيرة، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
                إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام الخدمة.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. وصف الخدمة</h2>
              <p className="text-gray-600 mb-4">
                منصة العروض الصغيرة هي منصة إلكترونية تتيح للمستخدمين نشر إعلانات البيع والشراء 
                والتفاعل مع المستخدمين الآخرين. نحن نعمل كوسيط بين البائعين والمشترين.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. مسؤوليات المستخدم</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>تقديم معلومات دقيقة وصحيحة عند التسجيل</li>
                <li>عدم نشر محتوى مخالف أو مسيء</li>
                <li>احترام حقوق الملكية الفكرية</li>
                <li>عدم استخدام الخدمة لأغراض غير قانونية</li>
                <li>حماية معلومات الحساب الشخصي</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. المحتوى والمنشورات</h2>
              <p className="text-gray-600 mb-4">
                المستخدم مسؤول عن جميع المحتويات التي ينشرها على المنصة. نحن نحتفظ بالحق في 
                إزالة أي محتوى مخالف أو مسيء دون إشعار مسبق.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. الخصوصية</h2>
              <p className="text-gray-600 mb-4">
                نحن نلتزم بحماية خصوصية المستخدمين. راجع سياسة الخصوصية الخاصة بنا لفهم 
                كيفية جمع واستخدام معلوماتك الشخصية.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. الأمان</h2>
              <p className="text-gray-600 mb-4">
                نحن نعمل على توفير بيئة آمنة للمستخدمين، لكن لا يمكننا ضمان الأمان المطلق. 
                المستخدم مسؤول عن اتخاذ الاحتياطات اللازمة لحماية نفسه.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. التعديلات</h2>
              <p className="text-gray-600 mb-4">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعار المستخدمين بالتغييرات 
                المهمة عبر البريد الإلكتروني أو إشعار على المنصة.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. إنهاء الخدمة</h2>
              <p className="text-gray-600 mb-4">
                يمكن للمستخدم إنهاء استخدام الخدمة في أي وقت. نحتفظ بالحق في تعليق أو إنهاء 
                الحسابات التي تنتهك هذه الشروط.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. القانون المطبق</h2>
              <p className="text-gray-600 mb-4">
                تخضع هذه الشروط لقوانين الجمهورية العربية السورية. أي نزاع سيتم حله في 
                المحاكم المختصة في دمشق.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. التواصل</h2>
              <p className="text-gray-600 mb-4">
                إذا كان لديك أي أسئلة حول هذه الشروط، يمكنك التواصل معنا عبر صفحة تواصل معنا 
                أو عبر البريد الإلكتروني: legal@small-offer.com
              </p>
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

export default TermsPage; 