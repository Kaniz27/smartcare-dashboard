import { CallStats } from "../../../types/CallStats";
import { baseApi } from "./baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query<{ data: CallStats }, void>({
      query: () => ({
        url: "/analytics/overview/",
        service: "system",
      }),
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardQuery } = dashboardApi;
