export type GalleryImage = {
  id: number;
  image: string;
};

export type GenericPostPayload  = {
  gallery_images?: GalleryImage[];
  title: string;
  offer_type: 'sell' | 'search';
  description: string;
  price: string;
  price_type: "fixed" | "negotiable";
  city: string;
  hood: string;
  detailed_location?: string; // جعلها اختيارية
  cover_image?: File | string | null;
  gallery?: (File | string)[];
  category: string;
  subcategory: string;
};

export type CarDetailsPayload = {
  car: {
    external_features?: string[];      // نفترض array من النصوص
    internal_features?: string[];      // array من النصوص
    protection?: string[];             // array من النصوص
    number_of_doors?: "two_three" | "four" | "five" | string; // لو عندك خيارات محددة استخدم union type
    hu?: string;                      // تاريخ بصيغة ISO string
    environmental_sticker: string;
    class_of_pollutants: string;
    color?: string;
    internal_materials?: string;
    brand: string;
    model?: string;
    mileage: number;
    status: "damaged" | "used" | "new" | string;  // مثال للـ union type حسب الحالات الممكنة
    first_registration: number;       // تاريخ ISO string
    fuel_type: "gasoline" | "diesel" | "electric" | "hybrid" | string;
    performance?: number;
    gearbox: "manual" | "automatic" | string;
    car_type?: "small_car" | "sedan" | "suv" | "truck" | string;
  };
};

export type LandDetailsPayload = {
  outdoorspace: {
    land_type: "residential_plot" | "garden" | "agriculture_forest" | "other_property";
    offer_type: "sale" | "rent";
    area: number;
    available_from?: string; 
  };
};

export type HouseDetailsPayload = {
  house: {
    available_from?: string;
    general_characteristics?: string[];
    furniture?: string[];
    bath?: number;
    real_estate_space: number;
    house_type?: string;
    bed_room?: number;
    room: number;
    year?: number;
    offer_type: "sale" | "rent";
  };
};

export type ApartmentDetailsPayload = {
  apartment: {
    available_from?: string;
    real_estate_space: number;
    general_characteristics?: string[];
    floor: number;
    furniture?: string[];
    bath?: number;
    bed_room?: number;
    room: number;
    year?: number;
    offer_type: "sale" | "rent";
  };
};

export type ElectronicsDetailsPayload = {
  electronics: {
    status: "new" | "used_very_good" | "working_good" | "defective";
  };
};

export type MobileDetailsPayload = {
  mobile: {
    brand: string;
    status: "new" | "used_very_good" | "working_good" | "defective";
    color?: string;
    accessories?: boolean;
    
  };
};

export type CarPostPayload = GenericPostPayload  & CarDetailsPayload;
export type LandPostPayload = GenericPostPayload & LandDetailsPayload;
export type HousePostPayload = GenericPostPayload & HouseDetailsPayload;
export type ApartmentPostPayload = GenericPostPayload & ApartmentDetailsPayload;
export type ElectronicsPostPayload = GenericPostPayload & ElectronicsDetailsPayload;
export type MobilePostPayload = GenericPostPayload & MobileDetailsPayload;

// ---------------------------------------------------------------------------------

export type PublicProfileInfoType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    user: {
      first_name: string;
      last_name: string;
      city: string;
      profile_image: string | null;
      total_posts: number;
      total_views: number;
      average_rating: number;
      rating_count: number;
    };
    posts: Array<{
      id: number;
      offer_type: string;
      title: string;
      description: string;
      price: string;
      city: string;
      cover_image: string | null;
      subcategory: string;
      status: string;
      created_at: string;
      fav: boolean; // تم تغييره إلى boolean بناءً على استجابة الـ API
    }>;
  };
};


export type AdPreview = {
  id: number;
  offer_type: 'sell' | 'search';
  title: string;
  description: string;
  city: string;
  price: string;
  price_type?: 'fixed'; // اختياري بناءً على الـ API
  hood?: string; // اختياري
  detailed_location?: string; // اختياري
  status?: 'accepted' | 'pending' | 'declined'; // اختياري
  cover_image: string;
  category: string;
  subcategory?: string;
  user_first_name?: string;
  user_last_name?: string;
  user_city?: string;
  user_profile_image?: string;
  username?: string;
  fav?: "added" | "removed";
  views?: number;
  created_at?: string;
  gallery_images?: { id: number; image: string }[];
  mobile?: {
    id: number;
    status: 'new' | 'used'; // أضف الحالات الممكنة
    brand?: string;
    color?: string;
    accessories?: boolean;
  };
  electronics?: {
    status: "new" | "used_very_good" | "working_good" | "defective";
  };
  car?: {
    external_features?: string[];      // نفترض array من النصوص
    internal_features?: string[];      // array من النصوص
    protection?: string[];             // array من النصوص
    number_of_doors?: "two_three" | "four" | "five" | string; // لو عندك خيارات محددة استخدم union type
    hu?: string;                      // تاريخ بصيغة ISO string
    environmental_sticker: string;
    class_of_pollutants: string;
    color?: string;
    internal_materials?: string;
    brand: string;
    model?: string;
    mileage: number;
    status: "damaged" | "used" | "new" | string;  // مثال للـ union type حسب الحالات الممكنة
    first_registration: number;       // تاريخ ISO string
    fuel_type: "gasoline" | "diesel" | "electric" | "hybrid" | string;
    performance?: number;
    gearbox: "manual" | "automatic" | string;
    car_type?: "small_car" | "sedan" | "suv" | "truck" | string;
  }; 
  outdoorspace?: {
    land_type: "residential_plot" | "garden" | "agriculture_forest" | "other_property";
    offer_type: "sale" | "rent";
    area: number;
    available_from?: string; 
  };
  house?: {
    available_from?: string;
    general_characteristics?: string[];
    furniture?: string[];
    bath?: number;
    real_estate_space: number;
    house_type?: string;
    bed_room?: number;
    room: number;
    year?: number;
    offer_type: "sale" | "rent";
  };
  apartment?: {
    available_from?: string;
    real_estate_space: number;
    general_characteristics?: string[];
    floor: number;
    furniture?: string[];
    bath?: number;
    bed_room?: number;
    room: number;
    year?: number;
    offer_type: "sale" | "rent";
  };
};