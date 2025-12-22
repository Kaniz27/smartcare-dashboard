import { CallLog, CallLogStats, CallStatsResponse } from "../../types";
import { baseApi } from "./baseApi";

export const callLogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCallLogs: builder.query<
      { data: CallLog[]; length: number },
      { page?: number; limit?: number }
    >({
      query: (params) => ({
        url: "/call-logs/",
        params,
        service: "system",
      }),
    }),
    getCallLogStats: builder.query<
      { data: CallLogStats[]; length: number },
      { page?: number; limit?: number }
    >({
      query: () => ({
        url: "/call-logs/stats/",
        service: "system",
      }),
    }),
    getCallLogById: builder.query<CallLog, string>({
      query: (id) => ({
        url: `/call-logs/${id}/`,
        service: "system",
      }),
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetCallLogsQuery,
  useGetCallLogStatsQuery,
  useGetCallLogByIdQuery,
} = callLogApi;
