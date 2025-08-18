"use client";
import aboutPhoto from "../../../public/resourses/aboutPhoto.svg";
import Image from "next/image";
import aimAbout from "../../../public/resourses/aimAbout.svg";
import rectangleAbout from "../../../public/resourses/rectangleAbout.svg";
import loveAbout from "../../../public/resourses/loveAbout.svg";
import cerAbout from "../../../public/resourses/cerAbout.svg";
import checkAbout from "../../../public/resourses/checkAbout.svg";
import icon2 from "../../../public/resourses/Icon-2.svg";

const AboutPage = () => {
  return (
    <div className="min-h-screen  mt-5">
      {/* Hero Section */}
      <section className=" mx-10 flex justify-between h-full max-md:flex-col-reverse">
        <div className="flex flex-col justify-center p-6  text-gray-800 w-1/2 max-md:w-full  ">
          <h1 className="text-3xl font-bold max-md:text-2xl">عن Small-offer</h1>
          <p className="w-[80%] ml-auto mt-2 text-xl max-md:w-full max-md:text-lg">
            منصة العروض الصغيرة - وجهتك المثالية لبيع وشراء المنتجات بسهولة
            وأمان، مع تجربة سلسة تمنحك الثقة والراحة في كل خطوة
          </p>
        </div>
        <div>
          <Image src={aboutPhoto} alt="sora" width={1000} height={1000} />
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <p className="text-lg text-gray-600 mb-6">
                انطلقت منصة العروض الصغيرة من فكرة بسيطة تهدف إلى تسهيل عملية
                البيع والشراء بين الأفراد في المجتمع المحلي. نؤمن أن لكل شخص
                شيئًا قيّمًا ليقدمه أو يبحث عنه، لذلك عملنا على تطوير منصة آمنة
                وسهلة الاستخدام تتيح للمستخدمين التواصل والتفاعل بثقة. اليوم،
                نفتخر بخدمة آلاف المستخدمين في مختلف أنحاء سوريا، ونواصل العمل
                لتطوير خدماتنا وتحسين تجربة المستخدم باستمرار.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                منذ تأسيسنا في عام 2024، عملنا بجد لتطوير منصة سهلة الاستخدام
                وآمنة تمكن المستخدمين من التواصل والتفاعل بثقة وأمان.
              </p>
              <p className="text-lg text-gray-600">
                اليوم، نحن فخورون بخدمة آلاف المستخدمين في جميع أنحاء سوريا،
                ونسعى دائماً لتطوير خدماتنا وتحسين تجربة المستخدم.
              </p>
            </div>
            <div className="rounded-lg shadow-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image src={icon2} alt="sora" width={100} height={100} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    +10,000
                  </h3>
                  <p className="text-gray-600">مستخدم نشط</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={rectangleAbout}
                      alt="sora"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    +50,000
                  </h3>
                  <p className="text-gray-600">إعلان منشور</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image src={aimAbout} alt="sora" width={100} height={100} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    +15
                  </h3>
                  <p className="text-gray-600">محافظة</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={loveAbout}
                      alt="sora"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    98%
                  </h3>
                  <p className="text-gray-600">رضا العملاء</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className=" py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src={checkAbout} alt="sora" width={1000} height={1000} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">مهمتنا</h3>
              <p className="text-lg text-gray-600">
                تسهيل عملية البيع والشراء بين الأفراد عبر منصة آمنة وسهلة
                الاستخدام، بما يساهم في تنشيط الاقتصاد المحلي وخلق فرص جديدة
                للجميع.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src={cerAbout} alt="sora" width={1000} height={1000} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
              <p className="text-lg text-gray-600">
                أن نكون المنصة الأولى والأكثر موثوقية للبيع والشراء في المنطقة،
                ونكون جزءًا أساسيًا من الحياة اليومية للناس.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            قيمنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src={loveAbout} alt="sora" width={1000} height={1000} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                الثقة
              </h3>
              <p className="text-gray-600">
                نضع ثقة المستخدمين في المقام الأول، ونعمل بجد لحماية بياناتهم
                وضمان أمان معاملاتهم.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src={icon2} alt="sora" width={1000} height={1000} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                المجتمع
              </h3>
              <p className="text-gray-600">
                نؤمن بأهمية بناء مجتمع قوي ومتعاون، حيث يمكن للجميع المساهمة
                والاستفادة.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src={cerAbout} alt="sora" width={1000} height={1000} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                التميز
              </h3>
              <p className="text-gray-600">
                نسعى دائمًا للتميز في خدماتنا وتحسين تجربة المستخدم من خلال
                التطوير المستمر.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-8 sm:py-12 bg-[#D8F5EA] text-black">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            انضم إلينا اليوم
          </h2>
          <p className="mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
            ابدأ رحلتك مع منصة العروض الصغيرة واكتشف عالماً من الفرص
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-cgreen text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-chgreen hover:scale-105 transition duration-300 text-sm sm:text-base"
            >
              إنشاء حساب جديد
            </a>
            <a
              href="/contact"
              className="border border-cgreen text-cgreen px-6 sm:px-8 py-3 rounded-lg font-semibold hover:scale-105 bg-white transition duration-300 text-sm sm:text-base"
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
