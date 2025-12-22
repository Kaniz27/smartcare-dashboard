import { LoginFormData, signupSchema } from "../../../schema/userLoginSchema";
import { baseApi } from "../api/baseApi";
import { User } from "../../types";
import z from "zod";

export const merchantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerMerchant: builder.mutation<
      { token: string; user: User },
      z.infer<typeof signupSchema>
    >({
      query: (data) => ({
        url: "/auth/signup/",
        method: "POST",
        body: data,
        service: "system",
      }),
    }),

    loginMerchant: builder.mutation({
      query: (credentials: LoginFormData) => ({
        url: "/auth/login/",
        method: "POST",
        body: credentials,
        service: "system",
      }),
    }),
  }),

  overrideExisting: false,
});

export const { useRegisterMerchantMutation, useLoginMerchantMutation } =
  merchantApi;
