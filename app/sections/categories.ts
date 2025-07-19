import houses from "../../public/resourses/houses.svg"
import fashion from "../../public/resourses/fashion.svg"
import mobile from "../../public/resourses/mobile.svg"
import service from "../../public/resourses/service.svg"
import pets from "../../public/resourses/pets.svg"
import books from "../../public/resourses/books.svg"
import car from "../../public/resourses/car.svg"
import bike from "../../public/resourses/bike.svg"
import tractor from "../../public/resourses/tractor.svg"
import bus from "../../public/resourses/bus.svg"
import truck from "../../public/resourses/truck.svg"
import tools from "../../public/resourses/tools.svg"
import boat from "../../public/resourses/boat.svg"
import pick_up from "../../public/resourses/pick-up.svg"
import tablet from "../../public/resourses/tablet.svg"
import suit from "../../public/resourses/suit.svg"
import store from "../../public/resourses/store.svg"
import sneakers from "../../public/resourses/sneakers.svg"
import screen_show from "../../public/resourses/screen-show.svg"
import screen from "../../public/resourses/screen.svg"
import puzzle from "../../public/resourses/puzzle.svg"
import mic from "../../public/resourses/mic.svg"
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
      { label: "دراجات نارية", icon: bike, slug: "motorcycles", href: "/categories/vehicles/motorcycles" },
      { label: "جرارات", icon: tractor, slug: "tractors", href: "/categories/vehicles/tractors" },
      { label: "حافلات", icon: bus, slug: "bus", href: "/categories/vehicles/buses" },
      { label: "قطع غيار", icon: tools, slug: "spare_parts", href: "/categories/vehicles/parts" },
      { label: "بيك اب", icon: pick_up, slug: "pickup", href: "/categories/vehicles/pickup" },
      { label: "شاحنات", icon: truck, slug: "trucks", href: "/categories/vehicles/trucks" },
      { label: "قوارب", icon: boat, slug: "boats", href: "/categories/vehicles/boats" },
    ],
  },
  {
    name: "الموضة والجمال",
    icon: fashion,
    slug: "fashion_beauty",
    items: [
      { label: "ملابس نسائية", icon: dress, slug: "womens_clothes", href: "/categories/fashion/womens_clothing" },
      { label: "ملابس أطفال", icon: kid, slug: "childrens_clothing", href: "/categories/fashion/kids_clothing" },
      { label: "ملابس رجالية", icon: suit, slug: "menswear", href: "/categories/fashion/mens_clothing" },
      { label: "حقائب واكسسوارات", icon: bag, slug: "bags_accessories", href: "/categories/fashion/bags_accessories" },
      { label: "مكياج وعناية شخصية", icon: make_up, slug: "makeup", href: "/categories/fashion/makeup" },
      { label: "أحذية", icon: heels, slug: "shoes", href: "/categories/fashion/shoes" },
      { label: "ملابس رياضية", icon: sneakers, slug: "sport_clouths", href: "/categories/fashion/sportswear" },
    ],
  },
  {
    name: "الخدمات",
    icon: service,
    slug: "services",
    items: [
      { label: "خدمات نقل وتوصيل", icon: truck, slug: "delivery", href: "/categories/services/transport" },
      { label: "تنظيف وصيانة", icon: clean, slug: "cleaning_maintenance", href: "/categories/services/cleaning" },
      { label: "سوفت وير", icon: laptop, slug: "software", href: "/categories/services/software" },
      { label: "خدمات منزلية", icon: home, slug: "home_services", href: "/categories/services/home_services" },
      { label: "تصليح الأجهزة", icon: tools, slug: "repair", href: "/categories/services/device_repair" },
    ],
  },
  {
    name: "الإلكترونيات والكهربائيات",
    icon: mobile,
    slug: "electronics",
    items: [
      { label: "موبايلات", icon: mobile, slug: "mobiles", href: "/categories/electronics/mobiles" },
      { label: "أجهزة لوحية", icon: tablet, slug: "tablets", href: "/categories/electronics/tablets" },
      { label: "أجهزة كمبيوتر ولابتوب", icon: laptop, slug: "pc", href: "/categories/electronics/computers" },
      { label: "شاشات وأجهزة مكتبية", icon: screen, slug: "screens", href: "/categories/electronics/screens" },
      { label: "ألعاب الفيديو", icon: gaming, slug: "games", href: "/categories/electronics/gaming" },
      { label: "تلفزيونات وأجهزة عرض", icon: screen_show, slug: "tv", href: "/categories/electronics/tv_projectors" },
      { label: "أجهزة منزلية", icon: household, slug: "home_appliances", href: "/categories/electronics/household_appliances" },
      { label: "قطع وملحقات", icon: puzzle, slug: "parts_accessories", href: "/categories/electronics/accessories" },
      { label: "ملحقات صوت وفيديو", icon: listen, slug: "audio_video_accessories", href: "/categories/electronics/audio_video" },
    ],
  },
  {
    name: "العقارات",
    icon: houses,
    slug: "real_estate",
    items: [
      { label: "شقق", icon: building, slug: "apartments", href: "/categories/real_estate/apartments" },
      { label: "منازل", icon: home, slug: "houses", href: "/categories/real_estate/houses" },
      { label: "أراضي", icon: land, slug: "outdoor-space", href: "/categories/real_estate/lands" },
      { label: "مكاتب ومحلات", icon: store, slug: "shops_offices", href: "/categories/real_estate/offices" },
      { label: "شاليهات ومزارع", icon: barn, slug: "chalets", href: "/categories/real_estate/chalets" },
      { label: "خدمات النقل والترحيل", icon: truck, slug: "transportation", href: "/categories/real_estate/moving_services" },
    ],
  },
  {
    name: "الحيوانات الأليفة",
    icon: pets,
    slug: "pets",
    items: [
      { label: "الكلاب", icon: dog, slug: "dogs", href: "/categories/pets/dogs" },
      { label: "القطط", icon: cat, slug: "cats", href: "/categories/pets/cats" },
      { label: "أسماك", icon: fish, slug: "fishes", href: "/categories/pets/fish" },
      { label: "خيول", icon: horse, slug: "horses", href: "/categories/pets/horses" },
      { label: "طيور ومزرعة", icon: bird, slug: "birds", href: "/categories/pets/birds" },
      { label: "مستلزمات ورعاية", icon: pets, slug: "supplies_care", href: "/categories/pets/supplies" },
    ],
  },
  {
    name: "الدورات والتعليم",
    icon: books,
    slug: "learning",
    items: [
      { label: "دروس خصوصية", icon: books, slug: "private_leasons", href: "/categories/education/tutoring" },
      { label: "دورات كمبيوتر", icon: laptop, slug: "cs_courses", href: "/categories/education/computer_courses" },
      { label: "فن وتصميم", icon: art, slug: "art", href: "/categories/education/art_design" },
      { label: "طبخ وخبز", icon: cook, slug: "cooking", href: "/categories/education/cooking" },
      { label: "رياضة وصحة", icon: gym, slug: "sport", href: "/categories/education/fitness" },
      { label: "موسيقى وغناء", icon: mic, slug: "music", href: "/categories/education/music" },
    ],
  },
];
