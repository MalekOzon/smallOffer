import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { createCarPost, createPost, createLandPost, createHousePost, createApartmentPost, createElectronicsPost, createMobilePost } from "./postApi";
import { extractMessages } from "../loginservices/mutations";

type NotificationSetter = (v: { message: string; type: "success" | "error" }) => void;

// فورم عام
export function useCreatePost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createPost(formData),

    onMutate: () => {
      console.log("جاري إنشاء إعلان جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان جديد", error);
      if (axios.isAxiosError(error)) {
        console.log("Response status:", error.response?.status);
        console.log("Response data:", error.response?.data);
        console.log("Response headers:", error.response?.headers);
        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
        console.log("messages: ", messages);
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
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
      console.log("Done Global Form")
      setNotification({ message: data.detail, type: "success" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/generic/"] });
    },
  });
}

// فورم خاص سيارات
export function useCreateCarPost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createCarPost(formData),
    onMutate: () => {
      console.log("جاري إنشاء إعلان سيارة جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان سيارة", error);
      if (axios.isAxiosError(error)) {
        console.log("Response status:", error.response?.status);
        console.log("Response data:", error.response?.data);
        console.log("Response headers:", error.response?.headers);
        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
        console.log("messages: ", messages);
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
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
      console.log("Done CAR Form")
      setNotification({ message: data.detail, type: "success" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/cars/"] });
    },
  });
}


// فورم خاص إلكترونيات
export function useCreateElectronicsPost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createElectronicsPost(formData),
    onMutate: () => {
      console.log("جاري إنشاء إعلان سيارة جديد...");
    },
    onError: (error: unknown) => {
      console.log("جاري إنشاء إعلان إلكترونيات جديد...");
      if (axios.isAxiosError(error)) {
        console.log("Response status:", error.response?.status);
        console.log("Response data:", error.response?.data);
        console.log("Response headers:", error.response?.headers);
        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
        console.log("messages: ", messages);
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
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
      console.log("Done الكترونياتForm")
      setNotification({ message: data.detail, type: "success" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/electronics/"] });
    },
  });
}


// فورم خاص منازل
export function useCreateHousePost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createHousePost(formData),
    onMutate: () => {
      console.log("جاري إنشاء إعلان منزل جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان منزل", error);
      if (axios.isAxiosError(error)) {
        console.log("Response status:", error.response?.status);
        console.log("Response data:", error.response?.data);
        console.log("Response headers:", error.response?.headers);
        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
        console.log("messages: ", messages);
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
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
      setNotification({ message: data.detail, type: "success" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/houses/"] });
    },
  });
}



// فورم خاص أراضي
export function useCreateLandPost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createLandPost(formData),
    onMutate: () => {
      console.log("جاري إنشاء إعلان أرض جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان أرض", error);
      if (axios.isAxiosError(error)) {
        console.log("Response status:", error.response?.status);
        console.log("Response data:", error.response?.data);
        console.log("Response headers:", error.response?.headers);
        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
        console.log("messages: ", messages);
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
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
      setNotification({ message: data.detail, type: "success" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/outdoor-space/"] });
    },
  });
}



// فورم خاص شقق
export function useCreateApartmentPost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createApartmentPost(formData),

    onMutate: () => {
      console.log("جاري إنشاء إعلان شقة جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان شقة", error);
      if (axios.isAxiosError(error)) {
        console.log("Response status:", error.response?.status);
        console.log("Response data:", error.response?.data);
        console.log("Response headers:", error.response?.headers);
        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
        console.log("messages: ", messages);
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
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
      setNotification({ message: data.detail, type: "success" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/apartment/"] });
    },
  });
}



// فورم خاص موبايلات
export function useCreateMobilePost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createMobilePost(formData),

    onMutate: () => {
      console.log("جاري إنشاء إعلان موبايل جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان موبايل", error);
      if (axios.isAxiosError(error)) {
        console.log("Response status:", error.response?.status);
        console.log("Response data:", error.response?.data);
        console.log("Response headers:", error.response?.headers);
        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
        console.log("messages: ", messages);
        const fallbackMessage = detail || "حدث خطأ غير معروف.";
        const finalMessage = messages.length ? messages.join("\n") : fallbackMessage;
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
      setNotification({ message: data.detail, type: "success" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/mobile/"] });
    },
  });
}
