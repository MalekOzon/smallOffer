import axios from "axios";
import { extractMessages } from "../loginservices/mutations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changePasswordDash, deleteAccount, EmailNotificationsDash, feedbackEmail, setUserInfo } from "./dashboardApi";
import { changePasswordDashType, deleteAccountType, EmailNotificationsDashType, feedbackEmailType } from "@/app/types/authTypes";


// Change Password Dash
export function useChangePasswordDash(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: changePasswordDashType) => changePasswordDash(data),
    onMutate: () => {
      console.log("جاري تغيير كلمة المرور...");
    },
    onError: (error: unknown) => {
      console.log("Error in change password")
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        const messages = errors ? extractMessages(errors) : [];
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n"): fallbackMessage;
        setNotification({
          message: finalMessage,
          type: "error",
        });
      } else {
        setNotification({
          message: "حدث خطأ أثناء الاتصال بالسيرفر.",
          type: "error",
        });
      }
    },

    onSuccess: (data) => {
      console.log("Password Changed")
      setNotification({
        message: data.detail,
        type: "success",
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/dashboard/change-password/"] });
    },
  });
}

// ---------------------------------------------------------------------------------------------------------------------------
// Notifications Upddate
export function useEmailNotificationsDash(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: EmailNotificationsDashType) => EmailNotificationsDash(data),
    onMutate: () => {
      console.log("جاري تغيير  اعدادات الاشعارات...");
    },
    onError: (error: unknown) => {
      console.log("Error in change password")
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        const messages = errors ? extractMessages(errors) : [];
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n"): fallbackMessage;
        setNotification({
          message: finalMessage,
          type: "error",
        });
      } else {
        setNotification({
          message: "حدث خطأ أثناء الاتصال بالسيرفر.",
          type: "error",
        });
      }
    },

    onSuccess: (data) => {
      console.log("NOTI Changed")
      setNotification({
        message: data.detail,
        type: "success",
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/dashboard/settings/"] });
    },
  });
}

// ---------------------------------------------------------------------------------------------------------------------------
// Delete Account
export function useDeleteAccount(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteAccountType) => deleteAccount(data),
    onMutate: () => {
      console.log("جاري حذف الحساب...");
    },
    onError: (error: unknown) => {
      console.log("Error in Delete Account")
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        const messages = errors ? extractMessages(errors) : [];
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n"): fallbackMessage;
        setNotification({
          message: finalMessage,
          type: "error",
        });
      } else {
        setNotification({
          message: "حدث خطأ أثناء الاتصال بالسيرفر.",
          type: "error",
        });
      }
    },

    onSuccess: (data) => {
      console.log("Account DELETED")
      setNotification({
        message: data.detail,
        type: "success",
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/dashboard/settings/"] });
    },
  });
}

// ---------------------------------------------------------------------------------------------------------------------------
// Send Feedback Email
export function useFeedbackEmail(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: feedbackEmailType) => feedbackEmail(data),
    onMutate: () => {
      console.log("جاري ارسال الايميل ...");
    },
    onError: (error: unknown) => {
      console.log("Error in Send Email")
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        const messages = errors ? extractMessages(errors) : [];
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n"): fallbackMessage;
        setNotification({
          message: finalMessage,
          type: "error",
        });
      } else {
        setNotification({
          message: "حدث خطأ أثناء الاتصال بالسيرفر.",
          type: "error",
        });
      }
    },

    onSuccess: (data) => {
      console.log("Email Send Done")
      setNotification({
        message: data.detail,
        type: "success",
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/dashboard/settings/feedback/"] });
    },
  });
}

// ---------------------------------------------------------------------------------------------------------------------------
// Send Feedback Email
export function useSetUserInfo(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => setUserInfo(formData),

    onMutate: () => {
      console.log("جاري تعديل البيانات  ...");
    },
    onError: (error: unknown) => {
      console.log("Error in Edit Info")
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        const messages = errors ? extractMessages(errors) : [];
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n"): fallbackMessage;
        setNotification({
          message: finalMessage,
          type: "error",
        });
      } else {
        setNotification({
          message: "حدث خطأ أثناء الاتصال بالسيرفر.",
          type: "error",
        });
      }
    },

    onSuccess: (data) => {
      console.log("data: ",data)
      setNotification({
        message: data.detail,
        type: "success",
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/dashboard/"] });
    },
  });
}

// ---------------------------------------------------------------------------------------------------------------------------
