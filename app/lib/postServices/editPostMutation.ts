import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { extractMessages } from "../loginservices/mutations";
import {
  editApartmentForm,
  editCarForm,
  editElectronicsForm,
  editGenericForm,
  editHouseForm,
  editMobileForm,
  editOutdoor_spaceForm,
} from "./postApi";
import { NotificationSetter } from "./postMutations";
import { useRouter } from "next/navigation";

// فورم خاص Generic
export function useEditGenericForm(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: ({ formData, id }: { formData: FormData; id: string }) =>
      editGenericForm(formData, id),

    onMutate: () => {
      console.log("جاري تعديل إعلان  ...");
    },
    onError: (error: unknown) => {
      console.log("خطا في تعديل اعلان ", error);
      if (axios.isAxiosError(error)) {


        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setNotification({ message: data.detail, type: "success" });
      setTimeout(() => {
        router.push("/dashboard/ads");
      }, 2000);
    },
    onSettled: (variables) => {
      queryClient.invalidateQueries({
        queryKey: ["accounts/posts/generic/" + variables.id],
      });
    },
  });
}

// فورم خاص CAr
export function useEditCarForm(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: ({ formData, id }: { formData: FormData; id: string }) =>
      editCarForm(formData, id),

    onMutate: () => {
      console.log("جاري تعديل إعلان  ...");
    },
    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {


        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setNotification({ message: data.detail, type: "success" });
      setTimeout(() => {
        router.push("/dashboard/ads");
      }, 2000);
    },
    onSettled: (variables) => {
      queryClient.invalidateQueries({
        queryKey: ["accounts/posts/cars/" + variables.id],
      });
    },
  });
}

// فورم خاص House
export function useEditHouseForm(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: ({ formData, id }: { formData: FormData; id: string }) =>
      editHouseForm(formData, id),

    onMutate: () => {
      console.log("جاري تعديل إعلان  ...");
    },
    onError: (error: unknown) => {
      console.log("خطا في تعديل اعلان ", error);
      if (axios.isAxiosError(error)) {


        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setNotification({ message: data.detail, type: "success" });
      setTimeout(() => {
        router.push("/dashboard/ads");
      }, 2000);
    },
    onSettled: (variables) => {
      queryClient.invalidateQueries({
        queryKey: ["accounts/posts/house/" + variables.id],
      });
    },
  });
}

// فورم خاص Apartment
export function useEditApartmentForm(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: ({ formData, id }: { formData: FormData; id: string }) =>
      editApartmentForm(formData, id),

    onMutate: () => {
      console.log("جاري تعديل إعلان  ...");
    },
    onError: (error: unknown) => {
      console.log("خطا في تعديل اعلان ", error);
      if (axios.isAxiosError(error)) {


        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setNotification({ message: data.detail, type: "success" });
      setTimeout(() => {
        router.push("/dashboard/ads");
      }, 2000);
    },
    onSettled: (variables) => {
      queryClient.invalidateQueries({
        queryKey: ["accounts/posts/apartment/" + variables.id],
      });
    },
  });
}

// فورم خاص Mobile
export function useEditMobileForm(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: ({ formData, id }: { formData: FormData; id: string }) =>
      editMobileForm(formData, id),

    onMutate: () => {
      console.log("جاري تعديل إعلان  ...");
    },
    onError: (error: unknown) => {
      console.log("خطا في تعديل اعلان ", error);
      if (axios.isAxiosError(error)) {


        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setNotification({ message: data.detail, type: "success" });
      setTimeout(() => {
        router.push("/dashboard/ads");
      }, 2000);
    },
    onSettled: (variables) => {
      queryClient.invalidateQueries({
        queryKey: ["accounts/posts/mobile/" + variables.id],
      });
    },
  });
}

// فورم خاص Outdoor_space
export function useEditOutdoor_spaceForm(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: ({ formData, id }: { formData: FormData; id: string }) =>
      editOutdoor_spaceForm(formData, id),

    onMutate: () => {
      console.log("جاري تعديل إعلان  ...");
    },
    onError: (error: unknown) => {
      console.log("خطا في تعديل اعلان ", error);
      if (axios.isAxiosError(error)) {


        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setNotification({ message: data.detail, type: "success" });
      setTimeout(() => {
        router.push("/dashboard/ads");
      }, 2000);
    },
    onSettled: (variables) => {
      queryClient.invalidateQueries({
        queryKey: ["accounts/posts/outdoor-space/" + variables.id],
      });
    },
  });
}

// فورم خاص Electronics
export function useEditElectronicForm(setNotification: NotificationSetter) {
  const queryClient = useQueryClient();
  const router = useRouter(); // إنشاء مثيل للراوتر

  return useMutation({
    mutationFn: ({ formData, id }: { formData: FormData; id: string }) =>
      editElectronicsForm(formData, id),

    onMutate: () => {
      console.log("جاري تعديل إعلان  ...");
    },
    onError: (error: unknown) => {
      console.log("خطا في تعديل اعلان ", error);
      if (axios.isAxiosError(error)) {


        const detail = error.response?.data?.detail;
        const errors = error.response?.data?.errors;
        let messages = errors ? extractMessages(errors) : [];
        if (!messages.length) {
          messages = extractMessages(error.response?.data || {});
        }
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
      setNotification({ message: data.detail, type: "success" });
      setTimeout(() => {
        router.push("/dashboard/ads");
      }, 2000);
    },
    onSettled: (variables) => {
      queryClient.invalidateQueries({
        queryKey: ["accounts/posts/electronics/" + variables.id],
      });
    },
  });
}
