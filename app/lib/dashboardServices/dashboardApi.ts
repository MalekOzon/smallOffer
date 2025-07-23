import {
  changePasswordDashType,
  deleteAccountType,
  EmailNotificationsDashType,
  feedbackEmailType,
  UserAdsResponse,
} from "@/app/types/authTypes";
import axiosInstance from "../loginservices/api";

// Change Password Dash
export const changePasswordDash = async (data: changePasswordDashType) => {
  const response = await axiosInstance.post(
    "accounts/dashboard/change-password/",
    data
  );
  return response.data;
};

// Patch EmailSetting
export const EmailNotificationsDash = async (
  data: EmailNotificationsDashType
) => {
  const response = await axiosInstance.patch(
    "accounts/dashboard/settings/",
    data
  );
  return response.data;
};

// Get EmailSetting
export const getEmailNotificationsDash = async () => {
  const response = await axiosInstance.get("accounts/dashboard/settings/");
  return response.data;
};

// Delete Account
export const deleteAccount = async (data: deleteAccountType) => {
  const response = await axiosInstance.delete("accounts/dashboard/", { data }); // just in delete
  return response.data;
};

// Send Feedback Email
export const feedbackEmail = async (data: feedbackEmailType) => {
  const response = await axiosInstance.post(
    "accounts/dashboard/settings/feedback/",
    data
  );
  return response.data;
};

// Send Account Info
// export const setUserInfo = async (data: setUserInfoType) => {
//   const response = await axiosInstance.patch("accounts/dashboard/", data);
//   return response.data;
// };

export const setUserInfo = async (formData : FormData) => {
  const response = await axiosInstance.patch(
    "accounts/dashboard/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

// Get UserInfo
export const getUserInfo = async () => {
  const response = await axiosInstance.get("accounts/dashboard/");
  return response.data;
};

// Get user Ads
export const getUserPosts = async (page: number, page_size: number) => {
  const res = await axiosInstance.get<UserAdsResponse>(
    `accounts/dashboard/posts/cards/?page=${page}&page_size=${page_size}&ordering=-created_at`
  );
  return res.data;
};

// Get user Fav
export const getUserFav = async (page: number, page_size: number) => {
  const res = await axiosInstance.get<UserAdsResponse>(
`accounts/dashboard/favorites/cards/?page=${page}&page_size=${page_size}&ordering=-created_at`
  );
  return res.data;
};
