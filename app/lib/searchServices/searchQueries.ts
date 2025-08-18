import { useQuery } from "@tanstack/react-query";
import { getExternalAd, getInternalAd, getSearchRes } from "./searchApi";


// Get Search REs
export const useGetSearchRes = (page: number, page_size: number, searchParam: string) => {
  return useQuery({
    queryKey: ["searchRes", page, page_size, searchParam], // أضف searchParam إلى queryKey
    queryFn: () => getSearchRes(page, page_size, searchParam),
    enabled: !!searchParam, // لا تقم بتنفيذ الاستعلام إذا كان searchParam فارغًا
  });
};

export const useGetInternalAd = () => {
  return useQuery({
    queryKey: ["internalAd"], // أضف searchParam إلى queryKey
    queryFn: () => getInternalAd(),
  });
};

export const useGetExternalAd = () => {
  return useQuery({
    queryKey: ["externalAd"], // أضف searchParam إلى queryKey
    queryFn: () => getExternalAd(),
  });
};