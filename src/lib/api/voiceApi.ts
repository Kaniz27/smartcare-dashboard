import { VoiceResponse } from "../../types";
import { baseApi } from "./baseApi";

export const voiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVoices: builder.query<{ data: VoiceResponse[] }, void>({
      query: () => ({
        url: "/voices/",
        service: "system",
      }),
    }),
  }),
});

export const { useGetVoicesQuery, useLazyGetVoicesQuery } = voiceApi;
