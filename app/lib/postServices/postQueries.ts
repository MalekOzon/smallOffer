import { EmailNotificationsDashType } from "@/app/types/authTypes";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getEmailNotificationsDash } from "../dashboardServices/dashboardApi";

// Email Notification
export function useGetEmailNotificationsDash() {
  return useQuery<EmailNotificationsDashType, AxiosError>({
    queryKey: ["accounts/dashboard/settings/"],
    queryFn: getEmailNotificationsDash,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
 