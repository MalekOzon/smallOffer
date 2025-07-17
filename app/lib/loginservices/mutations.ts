"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createUserFirst,
  createUserSecond,
  forgetPassword,
  loginUser,
  logoutUser,
  resendCode,
  resendUrl,
  resetPassword,
  validateUserFirst,
} from "./api";
import {
  loginType,
  signupType,
  signupStep1Type,
  signupStep2Type,
  forgetPasswordType,
  resetPasswordType,
  resendEmailCodeType,
  resendUrlType,
  logoutType,
} from "@/app/types/authTypes";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEmail } from "../context/EmailContext";
import { usePhone } from "../context/PhoneContext";
import { fieldNameMap } from "../Errors"
// --------------Function--------------------
export function extractMessages(
  obj: { [key: string]: string | string[] | { [key: string]: unknown } },
  parentKey = ""
): string[] {
  const messages: string[] = [];

  const traverse = (
    o: { [key: string]: string | string[] | { [key: string]: unknown } },
    parentKey = ""
  ) => {
    for (const key in o) {
      const value = o[key];
      // استخدم الاسم العربي إذا كان موجودًا في الجدول
      const fieldName = parentKey ? `${parentKey}.${key}` : key;
      const displayName = fieldNameMap[key] || key;
      if (Array.isArray(value)) {
        value.forEach(msg => messages.push(`${displayName}: ${msg}`));
      } else if (typeof value === "string") {
        messages.push(`${displayName}: ${value}`);
      } else if (typeof value === "object" && value !== null) {
        traverse(
          value as { [key: string]: string | string[] | { [key: string]: unknown } },
          fieldName
        );
      }
    }
  };

  traverse(obj, parentKey);
  return messages;
}

// -------------------------------------------------------
// Signup
export function useCreateUserFirst(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setEmail } = useEmail();

  return useMutation({
    mutationFn: (data: signupType) => createUserFirst(data),

    onMutate: () => {
      console.log("جاري إنشاء الحساب...");
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;

        const messages = errors ? extractMessages(errors) : [];

        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length
          ? messages.join("\n")
          : fallbackMessage;

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
      setEmail(data.user.email);
      setNotification({
        message: data.detail,
        type: "success",
      });
      setTimeout(() => {
        router.push("signup/step1");
      }, 1200); // بعد انتهاء عرض التنبيه
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/register"] });
    },
  });
}

// ---------------------------------------------------------------------------------------------------------------------------
// Singup Step1
export function useValidateUserFirst(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: signupStep1Type) => validateUserFirst(data),
    onMutate: () => {
      console.log("mutate Signup Step1");
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;

        const messages = errors ? extractMessages(errors) : [];

        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length
          ? messages.join("\n")
          : fallbackMessage;

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
      setNotification({
        message: data.detail,
        type: "success",
      });
      setTimeout(() => {
        router.push("step2");
      }, 1200); // بعد انتهاء عرض التنبيه
    },

    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["accounts/verify-email/"],
        });
      }
    },
  });
}

// Singup Step2
export function useCreateUserSecond(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setPhoneNumber } = usePhone();

  return useMutation({
    mutationFn: (data: signupStep2Type) => createUserSecond(data),
    onMutate: () => {
      console.log("mutate Signup Step2");
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;

        const messages = errors ? extractMessages(errors) : [];

        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length
          ? messages.join("\n")
          : fallbackMessage;

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
      setPhoneNumber(data.user.phone_number);
      setNotification({
        message: data.detail,
        type: "success",
      });
      setTimeout(() => {
        router.push("step3");
      }, 2200); // بعد انتهاء عرض التنبيه
    },

    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["accounts/second-register/"],
        });
      }
    },
  });
}

// Login
export function useLogin(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: loginType) => loginUser(data),
    onMutate: () => {
      console.log("mutate Login");
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;

        const messages = errors ? extractMessages(errors) : [];

        console.log("detail: ", detail);
        console.log("errors: ", errors);
        console.log("messages: ", messages);
        
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length
          ? messages.join("\n")
          : fallbackMessage;

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
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      console.log("refresh: ", data.refresh);
      console.log("access: ", data.access);
      setNotification({
        message: data.detail,
        type: "success",
      });
      setTimeout(() => {
        router.push("/");
      }, 1200); // بعد انتهاء عرض التنبيه
    },

    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["accounts/login/"] });
      }
    },
  });
}

// Logout
export function useLogout(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: logoutType) => logoutUser(data),
    onMutate: () => {
      console.log("mutate Logout");
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;

        const messages = errors ? extractMessages(errors) : [];

        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length
          ? messages.join("\n")
          : fallbackMessage;

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
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      console.log("LOGOUT DONE");
      setNotification({
        message: data.detail,
        type: "success",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1200);
    },

    onSettled: async (_, error) => {
      console.log("settled Logout");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["accounts/logout/"] });
      }
    },
  });
}

// Forget Password
export function useForgetPassword(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: forgetPasswordType) => forgetPassword(data),
    onMutate: () => {
      console.log("mutate Forget Password ");
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;

        const messages = errors ? extractMessages(errors) : [];

        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length
          ? messages.join("\n")
          : fallbackMessage;

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
      setNotification({
        message: data.detail,
        type: "success",
      });
      setTimeout(() => {
        console.log("Forget Done");
      }, 1200); // بعد انتهاء عرض التنبيه
    },

    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["accounts/password/request-reset/"],
        });
      }
    },
  });
}

// Reset Password
export function useResetPassword(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (data: resetPasswordType) => resetPassword(data),
    onMutate: () => {
      console.log("mutate Reset Password ");
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        const messages = errors ? extractMessages(errors) : [];
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length
          ? messages.join("\n")
          : fallbackMessage;
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
      setNotification({
        message: data.detail,
        type: "success",
      });
      setTimeout(() => {
        router.push("/login");
      }, 1200); // بعد انتهاء عرض التنبيه
    },
    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["accounts/password/set-new/"],
        });
      }
    },
  });
}

// Resend Code
export function useResendEmailCode(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: resendEmailCodeType) => resendCode(data),
    onMutate: () => {
      console.log("mutate RESEND CODE ");
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        const messages = errors ? extractMessages(errors) : [];
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length
          ? messages.join("\n")
          : fallbackMessage;
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
      setNotification({
        message: data.detail,
        type: "success",
      });
    },
    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["accounts/password/resend-email/"],
        });
      }
    },
  });
}

// Resend URL
export function useResendUrl(
  setNotification: (v: { message: string; type: "success" | "error" }) => void
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: resendUrlType) => resendUrl(data),
    onMutate: () => {
      console.log("mutate RESEND URL ");
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        const messages = errors ? extractMessages(errors) : [];
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length
          ? messages.join("\n")
          : fallbackMessage;
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
      console.log("RESEND DONE");
      setNotification({
        message: data.detail,
        type: "success",
      });
    },
    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["accounts/password/resend-url/"],
        });
      }
    },
  });
}
