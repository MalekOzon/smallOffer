import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { createCarPost, createPost, createLandPost, createHousePost, createApartmentPost, createElectronicsPost, createMobilePost, createReport, createRate } from "./postApi";
import { extractMessages } from "../loginservices/mutations";
import { useRouter } from "next/navigation";

export type NotificationSetter = (v: { message: string; type: "success" | "error" }) => void;

// فورم عام
export function useCreatePost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: (formData: FormData) => createPost(formData),

    onMutate: () => {
      console.log("جاري إنشاء إعلان جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان جديد", error);
      if (axios.isAxiosError(error)) {

        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/generic/"] });
    },
  });
}

// فورم خاص سيارات
export function useCreateCarPost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: (formData: FormData) => createCarPost(formData),
    onMutate: () => {
      console.log("جاري إنشاء إعلان سيارة جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان سيارة", error);
      if (axios.isAxiosError(error)) {

        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/cars/"] });
    },
  });
}


// فورم خاص إلكترونيات
export function useCreateElectronicsPost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: (formData: FormData) => createElectronicsPost(formData),
    onMutate: () => {
      console.log("جاري إنشاء إعلان سيارة جديد...");
    },
    onError: (error: unknown) => {
      console.log("جاري إنشاء إعلان إلكترونيات جديد...");
      if (axios.isAxiosError(error)) {

        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/electronics/"] });
    },
  });
}


// فورم خاص منازل
export function useCreateHousePost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: (formData: FormData) => createHousePost(formData),
    onMutate: () => {
      console.log("جاري إنشاء إعلان منزل جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان منزل", error);
      if (axios.isAxiosError(error)) {

        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/houses/"] });
    },
  });
}



// فورم خاص أراضي
export function useCreateLandPost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: (formData: FormData) => createLandPost(formData),
    onMutate: () => {
      console.log("جاري إنشاء إعلان أرض جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان أرض", error);
      if (axios.isAxiosError(error)) {

        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/outdoor-space/"] });
    },
  });
}



// فورم خاص شقق
export function useCreateApartmentPost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: (formData: FormData) => createApartmentPost(formData),

    onMutate: () => {
      console.log("جاري إنشاء إعلان شقة جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان شقة", error);
      if (axios.isAxiosError(error)) {

        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/apartment/"] });
    },
  });
}



// فورم خاص موبايلات
export function useCreateMobilePost(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: (formData: FormData) => createMobilePost(formData),

    onMutate: () => {
      console.log("جاري إنشاء إعلان موبايل جديد...");
    },
    onError: (error: unknown) => {
      console.log("خطا في انشاء اعلان موبايل", error);
      if (axios.isAxiosError(error)) {

        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts/posts/mobile/"] });
    },
  });
}


// REport
export function useCreateReport(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ formData, username }: { formData: FormData; username: string }) => createReport(formData, username),

    onMutate: () => {
      console.log("جاري الابلاغ   ...");
    },
    onError: (error: unknown) => {
      console.log("خطا ف ي الابلاغ", error);
      if (axios.isAxiosError(error)) {

        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      queryClient.invalidateQueries({ queryKey: ["accounts/report-user"] });
    },
  });
}



// rate
export function useCreateRate(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ formData, username }: { formData: FormData; username: string }) => createRate(formData, username),

    onMutate: () => {
      console.log("جاري Rate   ...");
    },
    onError: (error: unknown) => {
      console.log("خطا ف ي rate", error);
      if (axios.isAxiosError(error)) {

        
        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      queryClient.invalidateQueries({ queryKey: ["accounts/rate-user"] });
    },
  });
}

