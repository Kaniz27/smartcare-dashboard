import { SupportTicketFormValues } from "../../types";
import { baseApi } from "./baseApi"; 

export const supportApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createTicket: builder.mutation<
      { success: boolean; data: SupportTicketFormValues },
      SupportTicketFormValues
    >({
      query: (ticket) => ({
        url: "/support-tickets/",
        method: "POST",
        body: ticket,
        service: "system",
      }),
    }),
  }),
});

export const { useCreateTicketMutation } = supportApi;
