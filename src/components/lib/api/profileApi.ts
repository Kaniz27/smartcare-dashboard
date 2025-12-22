import { Profile } from "../../types";
import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<{ data: Profile }, void>({
      query: () => ({
        url: "/auth/profile/",
        service: "system",
      }),
      providesTags: ["Profile"],
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
