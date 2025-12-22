import { TopupFormType } from "../../../schema";
import { baseApi } from "./baseApi";

export const topupApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    topUp: builder.mutation<
      { success: boolean; data: TopupFormType },
      TopupFormType
    >({
      query: (body) => ({
        url: "/topup/",
        method: "POST",
        body,
        service: "system",
      }),
      invalidatesTags: ["Dashboard", "Transactions"],
    }),
  }),
});

export const { useTopUpMutation } = topupApi;
