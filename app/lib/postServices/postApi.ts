import axiosInstance from "../loginservices/api";
import { GenericPostPayload } from "./postType";



// API لنشر إعلان عام
export const createPost = async (data: GenericPostPayload) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (
      value === undefined ||
      value === null ||
      value === '' ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return; // تجاهل القيم الفارغة
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== '' && item !== null && item !== undefined) {
          formData.append(`${key}[]`, item);
        }
      });
    } else {
      formData.append(key, value as string);
    }
  });


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
  
// export const createPost = async (formData: FormData) => {
//   const response = await axiosInstance.post(
//     "accounts/posts/generic/",
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );
//   return response.data;
// };


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

