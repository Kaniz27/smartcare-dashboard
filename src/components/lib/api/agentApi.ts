import { AssistantConfigFormData } from "../../../schema/agentConfigSchema";
import {
  AgentDetailsTypes,
  ConfigMutationResponse,
  GetLanguagesResponse,
} from "../../types";
import { baseApi } from "./baseApi";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    saveAgentConfiguration: builder.mutation<
      ConfigMutationResponse,
      AssistantConfigFormData
    >({
      query: (configData) => ({
        url: "/assistants/",
        method: "POST",
        body: configData,
        service: "system",
      }),
    }),
    getAgents: builder.query<{ data: ConfigMutationResponse[] }, void>({
      query: () => ({
        url: "/assistants/",
        service: "system",
      }),
    }),
    getAgentAudio: builder.query<Blob, string>({
      query: (id) => ({
        url: `/assistants/${id}/audio/`,
        responseHandler: async (response) => response.blob(),
        service: "system",
      }),
    }),
    getLanguages: builder.query<GetLanguagesResponse, void>({
      query: () => ({
        url: "/assistants/language-and-voice/",
        service: "system",
      }),
    }),
    //   getAgents: builder.query<
    //   { data: ConfigMutationResponse[]; total: number },
    //   { page?: number; pageSize?: number }
    // >({
    //   query: ({ page = 1, pageSize = 10 } = {}) => ({
    //     url: `/assistants/`,
    //     service: "system",
    //     params: { page, page_size: pageSize },
    //   }),
    // }),
    getAgentDetails: builder.query<{ data: AgentDetailsTypes }, string>({
      query: (id) => ({
        url: `/assistants/${id}/`,
        service: "system",
      }),
    }),
    putAgentDetails: builder.mutation<
      AgentDetailsTypes,
      { id: string; formData: AssistantConfigFormData }
    >({
      query: ({ id, formData }) => ({
        url: `/assistants/${id}/`,
        method: "PUT",
        body: formData,
        service: "system",
      }),
    }),
    patchAgentDetails: builder.mutation<
      AgentDetailsTypes,
      { id: string; formData: AssistantConfigFormData }
    >({
      query: ({ id, formData }) => ({
        url: `/assistants/${id}/`,
        method: "PATCH",
        body: formData,
        service: "system",
      }),
    }),
    generatePrompt: builder.mutation<{ data: string }, { prompt: string }>({
      query: (body) => ({
        url: "/assistants/prompt/",
        method: "POST",
        body,
        service: "system",
      }),
    }),
  }),
});

export const {
  useSaveAgentConfigurationMutation,
  useGetAgentsQuery,
  useLazyGetAgentsQuery,
  useGetLanguagesQuery,
  useLazyGetLanguagesQuery,
  useGetAgentDetailsQuery,
  useLazyGetAgentDetailsQuery,
  usePutAgentDetailsMutation,
  usePatchAgentDetailsMutation,
  useLazyGetAgentAudioQuery,
  useGeneratePromptMutation,
} = agentApi;
