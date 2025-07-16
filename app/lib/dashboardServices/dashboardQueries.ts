import { useQuery } from "@tanstack/react-query";
import { getEmailNotificationsDash, getUserFav, getUserInfo, getUserPosts } from "./dashboardApi";
import { AxiosError } from "axios";
import { EmailNotificationsDashType, getUserInfoType } from "@/app/types/authTypes";

// Email Notification
export function useGetEmailNotificationsDash() {
  return useQuery<EmailNotificationsDashType, AxiosError>({
    queryKey: ["accounts/dashboard/settings/"],
    queryFn: getEmailNotificationsDash,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

// User Information
export function useGetUserInfo() {
  return useQuery<getUserInfoType, AxiosError>({
    queryKey: ["accounts/dashboard/"],
    queryFn: getUserInfo,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

// Get user Ads
export const useGetUserPosts = (page: number) => {
  return useQuery({
    queryKey: ['user-ads', page],
    queryFn: () => getUserPosts(page),
  });
};

// Get user Fav
export const useGetUserFav = (page: number) => {
  return useQuery({
    queryKey: ['user-fav', page],
    queryFn: () => getUserFav(page),
  });
};