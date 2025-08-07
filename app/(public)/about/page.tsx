"use client"
import { Users, Target, Award, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            من نحن
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
            منصة العروض الصغيرة - المكان الأمثل لبيع وشراء المنتجات بسهولة وأمان
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <p className="text-lg text-gray-600 mb-6">
                بدأت منصة العروض الصغيرة كفكرة بسيطة لتسهيل عملية البيع والشراء بين الأفراد في المجتمع المحلي. 
                نحن نؤمن بأن كل شخص لديه شيء قيم يمكن أن يبيعه أو يشتريه.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                منذ تأسيسنا في عام 2024، عملنا بجد لتطوير منصة سهلة الاستخدام وآمنة تمكن المستخدمين من 
                التواصل والتفاعل بثقة وأمان.
              </p>
              <p className="text-lg text-gray-600">
                اليوم، نحن فخورون بخدمة آلاف المستخدمين في جميع أنحاء سوريا، ونسعى دائماً لتطوير خدماتنا 
                وتحسين تجربة المستخدم.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">+10,000</h3>
                  <p className="text-gray-600">مستخدم نشط</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">+50,000</h3>
                  <p className="text-gray-600">إعلان منشور</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">+15</h3>
                  <p className="text-gray-600">محافظة</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">98%</h3>
                  <p className="text-gray-600">رضا العملاء</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">مهمتنا</h3>
              <p className="text-lg text-gray-600">
                تسهيل عملية البيع والشراء بين الأفراد من خلال منصة آمنة وسهلة الاستخدام، 
                مما يساهم في تنشيط الاقتصاد المحلي وخلق فرص جديدة للجميع.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
              <p className="text-lg text-gray-600">
                أن نكون المنصة الأولى والأكثر موثوقية للبيع والشراء في المنطقة، 
                ونكون جزءاً أساسياً من الحياة اليومية للناس.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">الثقة</h3>
              <p className="text-gray-600">
                نضع ثقة المستخدمين في المقام الأول ونعمل بجد لحماية بياناتهم وضمان أمان معاملاتهم.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">المجتمع</h3>
              <p className="text-gray-600">
                نؤمن بأهمية بناء مجتمع قوي ومتعاون حيث يمكن للجميع المساهمة والاستفادة.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">التميز</h3>
              <p className="text-gray-600">
                نسعى دائماً للتميز في خدماتنا وتحسين تجربة المستخدم من خلال التطوير المستمر.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">فريق العمل</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">فريق التطوير</h3>
              <p className="text-gray-600">
                فريق متخصص من المطورين يعملون على تطوير وتحسين المنصة باستمرار
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">فريق الدعم</h3>
              <p className="text-gray-600">
                فريق دعم فني متاح على مدار الساعة لمساعدة المستخدمين وحل مشاكلهم
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">فريق التسويق</h3>
              <p className="text-gray-600">
                فريق تسويق محترف يعمل على تطوير استراتيجيات النمو والتوسع
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            انضم إلينا اليوم
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            ابدأ رحلتك مع منصة العروض الصغيرة واكتشف عالم من الفرص
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              إنشاء حساب جديد
            </a>
            <a 
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 