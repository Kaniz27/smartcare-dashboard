import { baseApi } from "./baseApi";
import { AvailableNumber } from "../../types";

export const twilioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPurchasedNumbers: builder.query<{ numbers: AvailableNumber[] }, void>({
      query: () => ({ url: "/twilio/numbers" }),
    }),

    getAvailableNumbers: builder.query<{ numbers: AvailableNumber[] }, void>({
      query: () => ({ url: "/twilio/available" }),
    }),

    purchaseNumber: builder.mutation<any, { phoneNumber: string }>({
      query: (body) => ({
        url: "/twilio/purchase",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetPurchasedNumbersQuery,
  useLazyGetAvailableNumbersQuery,
  usePurchaseNumberMutation,
} = twilioApi;
