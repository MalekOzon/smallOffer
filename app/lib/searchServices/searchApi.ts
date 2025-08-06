import { UserAdsResponse } from "@/app/types/authTypes";
import axiosInstance from "../loginservices/api";

// Get Search REs
export const getSearchRes = async (page: number, page_size: number , searchParam :string) => {
  console.log("searchParam", searchParam);
  const res = await axiosInstance.get<UserAdsResponse>(
    `accounts/posts/cards/?page=${page}&page_size=${page_size}&${searchParam}`
  );
  return res.data;
};

