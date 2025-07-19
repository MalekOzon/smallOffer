import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {  ApartmentPostPayload, CarPostPayload, ElectronicsPostPayload, GenericPostPayload, HousePostPayload, LandPostPayload, MobilePostPayload } from "./postType";
import { getApartmentPostId, getCarPostId, getElectronicPostId, getGenericPostId, getHousePostId, getMobilePostId, getOutdoorSpacePostId } from "./postApi";

//  Get Generic Post ID
export function useGetGenericPostId(id?: string) {
  return useQuery<GenericPostPayload, AxiosError>({
    queryKey: ["accounts/posts/generic", id],
    queryFn: () => getGenericPostId(id!), // use id! since enabled prevents undefined
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

//  Get Car Post ID
export function useGetCarPostId(id?: string) {
  return useQuery<CarPostPayload, AxiosError>({
    queryKey: ["accounts/posts/cars", id],
    queryFn: () => getCarPostId(id!), // use id! since enabled prevents undefined
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

//  Get House Post ID
export function useGetHousePostId(id?: string) {
  return useQuery<HousePostPayload, AxiosError>({
    queryKey: ["accounts/posts/house", id],
    queryFn: () => getHousePostId(id!), // use id! since enabled prevents undefined
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

//  Get Apartment Post ID
export function useGetApartmentPostId(id?: string) {
  return useQuery<ApartmentPostPayload, AxiosError>({
    queryKey: ["accounts/posts/apartment", id],
    queryFn: () => getApartmentPostId(id!), // use id! since enabled prevents undefined
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

//  Get Mobile Post ID
export function useGetMobilePostId(id?: string) {
  return useQuery<MobilePostPayload, AxiosError>({
    queryKey: ["accounts/posts/mobile", id],
    queryFn: () => getMobilePostId(id!), // use id! since enabled prevents undefined
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

//  Get Electronics Post ID
export function useGetElectronicsPostId(id?: string) {
  return useQuery<ElectronicsPostPayload, AxiosError>({
    queryKey: ["accounts/posts/electronics", id],
    queryFn: () => getElectronicPostId(id!), // use id! since enabled prevents undefined
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

//  Get OutdoorSpace Post ID
export function useGetOutdoorSpacePostId(id?: string) {
  return useQuery<LandPostPayload, AxiosError>({
    queryKey: ["accounts/posts/outdoor-space", id],
    queryFn: () => getOutdoorSpacePostId(id!), // use id! since enabled prevents undefined
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

