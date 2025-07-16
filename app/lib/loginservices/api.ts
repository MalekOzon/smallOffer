import { forgetPasswordType, loginType, signupType, signupStep1Type, signupStep2Type, resetPasswordType, resendEmailCodeType, resendUrlType, logoutType } from "@/app/types/authTypes";
import axios from "axios";

const BASE_URL = "https://smalloffertest.onrender.com/api/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refreshToken")
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const res = await axios.post(`${BASE_URL}accounts/token/refresh/`, {
          refresh: refreshToken,
        });

        const { access, refresh } = res.data; // استخراج كلا الحقلين
        localStorage.setItem("accessToken", access); // تحديث الـ access token
        localStorage.setItem("refreshToken", refresh); // تحديث الـ refresh token

        originalRequest.headers.Authorization = `Bearer ${access}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;


// Signup
export const createUserFirst = async (data: signupType) => {
  const response = await axiosInstance.post("accounts/register/", data);
  return response.data;
};

// Singup Step1
export const validateUserFirst = async (data: signupStep1Type) => {
  const response = await axiosInstance.post("accounts/verify-email/", data);
  return response.data;
};

// Singup Step2
export const createUserSecond = async (data: signupStep2Type) => {
  const response =  await axiosInstance.post("accounts/second-register/", data);
  return response.data;
};

// Login 
export const loginUser = async (data: loginType) => {
  const response = await axiosInstance.post("accounts/login/", data);
  return response.data;
};

// Logout
export const logoutUser = async (data: logoutType) => {
  const response = await axiosInstance.post("accounts/logout/", data);
  return response.data;
};

// Forget Password 
export const forgetPassword = async (data: forgetPasswordType) => {
  const response =  await axiosInstance.post("accounts/password/request-reset/", data);
  return response.data;
};

// Reset Password 
export const resetPassword = async (data: resetPasswordType) => {
  const response = await axiosInstance.post("accounts/password/set-new/", data);
  return response.data;
};

// Resend Code 
export const resendCode = async (data: resendEmailCodeType) => {
  const response = await axiosInstance.post("accounts/resend-email/", data);
  return response.data;
};

// Resend URL 
export const resendUrl = async (data: resendUrlType) => {
  const response = await axiosInstance.post("accounts/password/resend-url/", data);
  return response.data;
};


