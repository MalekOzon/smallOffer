import houses from "../../public/resourses/houses.svg"
import fashion from "../../public/resourses/fashion.svg"
import mobile from "../../public/resourses/mobile.svg"
import service from "../../public/resourses/service.svg"
import pets from "../../public/resourses/pets.svg"
import books from "../../public/resourses/books.svg"
import car from "../../public/resourses/car.svg"
import bike from "../../public/resourses/bike.svg"
import truck from "../../public/resourses/truck.svg"
import tools from "../../public/resourses/tools.svg"
import boat from "../../public/resourses/boat.svg"
import tablet from "../../public/resourses/tablet.svg"
import suit from "../../public/resourses/suit.svg"
import store from "../../public/resourses/store.svg"
import sneakers from "../../public/resourses/sneakers.svg"
import screen_show from "../../public/resourses/screen-show.svg"
import puzzle from "../../public/resourses/puzzle.svg"
import make_up from "../../public/resourses/make-up.svg"
import listen from "../../public/resourses/listen.svg"
import laptop from "../../public/resourses/laptop.svg"
import land from "../../public/resourses/land.svg"
import household from "../../public/resourses/household.svg"
import horse from "../../public/resourses/horse.svg"
import home from "../../public/resourses/home.svg"
import heels from "../../public/resourses/heels.svg"
import gym from "../../public/resourses/gym.svg"
import gaming from "../../public/resourses/gaming.svg"
import fish from "../../public/resourses/fish.svg"
import dress from "../../public/resourses/dress.svg"
import dog from "../../public/resourses/dog.svg"
import cook from "../../public/resourses/cook.svg"
import clean from "../../public/resourses/clean.svg"
import cat from "../../public/resourses/cat.svg"
import building from "../../public/resourses/building.svg"
import bird from "../../public/resourses/bird.svg"
import barn from "../../public/resourses/barn.svg"
import bag from "../../public/resourses/bag.svg"
import art from "../../public/resourses/art.svg"
import kid from "../../public/resourses/kid.svg"

export const categories = [
  {
    name: "الآليات",
    icon: car,
    slug: "vehicles",
    items: [
      { label: "سيارات", icon: car, slug: "cars", href: "/categories/vehicles/cars" },
      { label: "سكوتر كهربائي", icon: bike, slug: "scooter", href: "/categories/vehicles/scooter" },
      { label: "شاحنات", icon: truck, slug: "cabins", href: "/categories/vehicles/cabins" },
      { label: "دراجة هوائية", icon: bike, slug: "bicycle", href: "/categories/vehicles/bicycle" },
      { label: "قوارب", icon: boat, slug: "boats", href: "/categories/vehicles/boats" },
      { label: "قطع غيار", icon: tools, slug: "spare_parts", href: "/categories/vehicles/spare_parts" },
      { label: "دراجات نارية", icon: bike, slug: "motorcycles", href: "/categories/vehicles/motorcycles" },
    ],
  },
  {
    name: "الموضة والجمال",
    icon: fashion,
    slug: "fashion_beauty",
    items: [
      { label: "ملابس نسائية", icon: dress, slug: "womens_clothes", href: "/categories/fashion/womens_clothes" },
      { label: "ملابس أطفال", icon: kid, slug: "childrens_clothing", href: "/categories/fashion/childrens_clothing" },
      { label: "ملابس رجالية", icon: suit, slug: "menswear", href: "/categories/fashion/menswear" },
      { label: "حقائب واكسسوارات", icon: bag, slug: "accessories", href: "/categories/fashion/accessories" },
      { label: "مكياج وعناية شخصية", icon: make_up, slug: "makeup", href: "/categories/fashion/makeup" },
      { label: "أحذية", icon: heels, slug: "shoes", href: "/categories/fashion/shoes" },
      { label: "مستلزمات أطفال", icon: sneakers, slug: "child_needs", href: "/categories/fashion/child_needs" },
    ],
  },
  {
    name: "الخدمات",
    icon: service,
    slug: "services",
    items: [
      { label: "تنظيف وصيانة", icon: clean, slug: "cleaning_maintenance", href: "/categories/services/cleaning_maintenance" },
      { label: "خدمات منزلية", icon: home, slug: "home_services", href: "/categories/services/home_services" },
      { label: "خدمات الكترونية", icon: laptop, slug: "electronic_services", href: "/categories/services/electronic_services" },
      { label: "خدمات النقل والترحيل", icon: truck, slug: "transportation", href: "/categories/services/transportation" },
      { label: "صيانة أجهزة سوفتوير", icon: laptop, slug: "pc_maintenance", href: "/categories/services/pc_maintenance" },
      { label: "تصليح الأجهزة المنزلية", icon: tools, slug: "house_repair", href: "/categories/services/house_repair" },
      { label: "تصليح آليات", icon: tools, slug: "vehicles_repair", href: "/categories/services/vehicles_repair" },
    ],
  },
  {
    name: "الإلكترونيات والكهربائيات",
    icon: mobile,
    slug: "electronics",
    items: [
      { label: "موبايلات", icon: mobile, slug: "mobiles", href: "/categories/electronics/mobiles" },
      { label: "أجهزة لوحية", icon: tablet, slug: "tablets", href: "/categories/electronics/tablets" },
      { label: "أجهزة كمبيوتر ولابتوب", icon: laptop, slug: "pc", href: "/categories/electronics/pc" },
      { label: "ألعاب الفيديو", icon: gaming, slug: "games", href: "/categories/electronics/games" },
      { label: "تلفزيونات وأجهزة عرض", icon: screen_show, slug: "tv", href: "/categories/electronics/tv" },
      { label: "أجهزة منزلية", icon: household, slug: "home_appliances", href: "/categories/electronics/home_appliances" },
      { label: "قطع وملحقات", icon: puzzle, slug: "parts_accessories", href: "/categories/electronics/parts_accessories" },
      { label: "ملحقات صوت وفيديو", icon: listen, slug: "audio_video_accessories", href: "/categories/electronics/audio_video_accessories" },
    ],
  },
  {
    name: "العقارات",
    icon: houses,
    slug: "real_estate",
    items: [
      { label: "شقق", icon: building, slug: "apartments", href: "/categories/real_estate/apartments" },
      { label: "منازل", icon: home, slug: "houses", href: "/categories/real_estate/houses" },
      { label: "أراضي", icon: land, slug: "outdoor-space", href: "/categories/real_estate/outdoor-space" },
      { label: "مكاتب ومحلات", icon: store, slug: "shops_offices", href: "/categories/real_estate/shops_offices" },
      { label: "شاليهات ومزارع", icon: barn, slug: "chalets", href: "/categories/real_estate/chalets" },
    ],
  },
  {
    name: "الحيوانات الأليفة",
    icon: pets,
    slug: "pets",
    items: [
      { label: "الكلاب", icon: dog, slug: "dogs", href: "/categories/pets/dogs" },
      { label: "القطط", icon: cat, slug: "cats", href: "/categories/pets/cats" },
      { label: "أسماك", icon: fish, slug: "fishes", href: "/categories/pets/fishes" },
      { label: "خيول", icon: horse, slug: "horses", href: "/categories/pets/horses" },
      { label: "طيور ومزرعة", icon: bird, slug: "birds", href: "/categories/pets/birds" },
      { label: "مستلزمات ورعاية", icon: pets, slug: "supplies_care", href: "/categories/pets/supplies_care" },
    ],
  },
  {
    name: "الدورات والتعليم",
    icon: books,
    slug: "learning",
    items: [
      { label: "طبخ وخبز", icon: cook, slug: "cooking", href: "/categories/learning/cooking" },
      { label: "دروس خصوصية", icon: books, slug: "private_leasons", href: "/categories/learning/private_leasons" },
      { label: "دورات كمبيوتر", icon: laptop, slug: "cs_courses", href: "/categories/learning/cs_courses" },
      { label: "فن وتصميم", icon: art, slug: "art", href: "/categories/learning/art" },
      { label: "رياضة وصحة", icon: gym, slug: "sport", href: "/categories/learning/sport" },
      { label: "دورات لغة", icon: books, slug: "language_courses", href: "/categories/learning/language_courses" },
      { label: "دروس أخرى", icon: books, slug: "other", href: "/categories/learning/other" },
    ],
  },
  {
    name: "وظائف",
    icon: bag,
    slug: "jobs",
    items: [],
  },
];
