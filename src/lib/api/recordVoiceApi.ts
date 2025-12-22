import { baseApi } from "./baseApi";

export const recordVoiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendVoiceChunk: builder.mutation<void, FormData>({
      query: (formData) => ({
        url: "/assistants/recorded-voice/",
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data", 
        },
        service: "system",
      }),
    }),
  }),
});

export const { useSendVoiceChunkMutation } = recordVoiceApi;
