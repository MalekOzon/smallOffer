import { UserAdsResponse } from "@/app/types/authTypes";
import axiosInstance from "../loginservices/api";
import { externalAd, internalAd } from "./searchType";

// Get Search REs
export const getSearchRes = async (page: number, page_size: number , searchParam :string) => {
  const res = await axiosInstance.get<UserAdsResponse>(
    `accounts/posts/cards/?page=${page}&page_size=${page_size}&${searchParam}`
  );
  return res.data;
};


export const getInternalAd = async () => {
  const res = await axiosInstance.get<internalAd[]>(
    `accounts/home/images`
  );
  return res.data;
};

export const getExternalAd = async () => {
  const res = await axiosInstance.get<externalAd[]>(
    `accounts/home/ads`
  );
  return res.data;
};


