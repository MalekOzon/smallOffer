import { useQuery } from "@tanstack/react-query";
import { getSearchRes } from "./searchApi";


// Get Search REs
export const useGetSearchRes = (page: number, page_size: number, searchParam: string) => {
  console.log("searchParamQQQQQ", searchParam);
  return useQuery({
    queryKey: ["searchRes", page, page_size, searchParam], // أضف searchParam إلى queryKey
    queryFn: () => getSearchRes(page, page_size, searchParam),
    enabled: !!searchParam, // لا تقم بتنفيذ الاستعلام إذا كان searchParam فارغًا
  });
};