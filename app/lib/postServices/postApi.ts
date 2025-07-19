import axiosInstance from "../loginservices/api";
import { ApartmentPostPayload, CarPostPayload, ElectronicsPostPayload, GenericPostPayload, HousePostPayload, LandPostPayload, MobilePostPayload } from "./postType";

export const createPost = async (formData: FormData) => {
  const response = await axiosInstance.post(
    "accounts/posts/generic/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};


// API لنشر إعلان سيارة
export const createCarPost = async (formData: FormData) => {
  const response = await axiosInstance.post(
    "accounts/posts/cars/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};


// API لنشر إعلان إلكترونيات
export const createElectronicsPost = async (formData: FormData) => {
  const response = await axiosInstance.post(
    "accounts/posts/electronics/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

// API لنشر إعلان منزل
export const createHousePost = async (formData: FormData) => {
  const response = await axiosInstance.post(
    "accounts/posts/house/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};


// API لنشر إعلان أرض
export const createLandPost = async (formData: FormData) => {
  const response = await axiosInstance.post(
    "accounts/posts/outdoor-space/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};



// API لنشر إعلان شقة
export const createApartmentPost = async (formData: FormData) => {
  const response = await axiosInstance.post(
    "accounts/posts/apartment/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};


// API لنشر إعلان موبايل
export const createMobilePost = async (formData: FormData) => {
  const response = await axiosInstance.post(
    "accounts/posts/mobile/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

// GETTER -----------------------------------------------------------------------------------------------------

// Get Generic Post id
export const getGenericPostId = async (id: string) => {
  const res = await axiosInstance.get<GenericPostPayload>(
    `accounts/posts/generic/`+id
  );
  return res.data;
};

// Get Car Post id
export const getCarPostId = async (id: string) => {
  const res = await axiosInstance.get<CarPostPayload>(
    `accounts/posts/cars/`+id
  );
  return res.data;
};

// Get electronics Post id
export const getElectronicPostId = async (id: string) => {
  const res = await axiosInstance.get<ElectronicsPostPayload>(
    `accounts/posts/electronics/`+id
  );
  return res.data;
};

// Get House Post id
export const getHousePostId = async (id: string) => {
  const res = await axiosInstance.get<HousePostPayload>(
    `accounts/posts/house/`+id
  );
  return res.data;
};

// Get Mobile Post id
export const getMobilePostId = async (id: string) => {
  const res = await axiosInstance.get<MobilePostPayload>(
    `accounts/posts/mobile/`+id
  );
  return res.data;
};

// Get Outdoor-space Post id
export const getOutdoorSpacePostId = async (id: string) => {
  const res = await axiosInstance.get<LandPostPayload>(
    `accounts/posts/outdoor-space/`+id
  );
  return res.data;
};

// Get Apartment Post id
export const getApartmentPostId = async (id: string) => {
  const res = await axiosInstance.get<ApartmentPostPayload>(
    `accounts/posts/apartment/`+id
  );
  return res.data;
};


