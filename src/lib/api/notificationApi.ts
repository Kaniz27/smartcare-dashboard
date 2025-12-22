import { NotificationResponse } from "../../types/Notification";
import { baseApi } from "./baseApi";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotification: builder.query<NotificationResponse, void>({
      query: () => ({ url: "/notification/", service: "system" }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetNotificationQuery } = notificationApi;
