import { TransectionResponse } from "../../types";
import { baseApi } from "./baseApi";

export const transectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransection: builder.query<
      TransectionResponse,
      { search?: string; startDate?: string; endDate?: string }
    >({
      query: (params) => ({ url: "/transaction/", service: "system", params }),
      providesTags: ["Transactions"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetTransectionQuery } = transectionApi;
