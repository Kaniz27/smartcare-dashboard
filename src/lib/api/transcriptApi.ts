import { TranscriptQueryParams, TranscriptResponse } from "../../types";
import { baseApi } from "./baseApi";

export const transcriptApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTranscripts: builder.query<
      TranscriptResponse,
      TranscriptQueryParams,
      void
    >({
      query: () => ({
        url: "/transcripts/",
        service: "system",
      }),
    }),
  }),
});

export const { useGetTranscriptsQuery } = transcriptApi;
