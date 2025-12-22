import { baseApi } from "./baseApi";
import {
  AvailableDataNumber,
  AvailableNumberData,
  CountryKeyValue,
} from "../../types";

export const phoneNumberApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPurchasedNumbers: builder.query<AvailableDataNumber, void>({
      query: () => ({ url: "/phone_numbers/", service: "system" }),
    }),

    getAvailableNumbers: builder.query<
      AvailableNumberData,
      { country?: string } | void
    >({
      query: (params) => ({
        url: "/phone_numbers/available/",
        service: "system",
        params: params ? { country: params.country } : undefined,
      }),
    }),

    getCountries: builder.query<CountryKeyValue, void>({
      query: () => ({ url: "/countries/", service: "system" }),
    }),
    purchaseNumber: builder.mutation<any, { phone_number: string }>({
      query: (body) => ({
        url: "/phone_numbers/purchase/",
        method: "POST",
        body,
        service: "system",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetPurchasedNumbersQuery,
  useGetAvailableNumbersQuery,
  useLazyGetAvailableNumbersQuery,
  useGetCountriesQuery,
  useLazyGetCountriesQuery,
  usePurchaseNumberMutation,
} = phoneNumberApi;
