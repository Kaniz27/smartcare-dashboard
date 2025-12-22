import { User } from "../../types";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ token: string; user: User }, { email: string; password: string }>({
      query: (credentials) => ({ url: "/auth/login", method: "POST", body: credentials }),
    }),
    register: build.mutation<{ token: string; user: User }, { name: string; email: string; password: string }>({
      query: (body) => ({ url: "/auth/register", method: "POST", body }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation } = authApi;
