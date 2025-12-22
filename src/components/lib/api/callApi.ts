import { countryCodeData } from "../../constant/countryCodeData";
import { baseApi } from "./baseApi";

export const callApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCall: builder.mutation({
      query: (data) => ({
        url: "/call_campaign/",
        method: "POST",
        body: data,
        service: "system",
      }),
    }),
    getCountryCodes: builder.query({
      queryFn: async () => {
        try {
          return { data: countryCodeData };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const {
  useCreateCallMutation,
  useLazyGetCountryCodesQuery,
} = callApi;
