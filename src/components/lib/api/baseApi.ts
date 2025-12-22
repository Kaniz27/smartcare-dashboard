import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVICE_URLS } from "../../../config/siteConfig";
import { TAGS } from "../../../utils/tags";
import Cookies from "js-cookie";

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const value = document.cookie
    .split("; ")
    .find((c) => c.startsWith(name + "="));
  return value ? decodeURIComponent(value.split("=")[1]) : null;
}

// The raw base query handles token injection
const rawBaseQuery = fetchBaseQuery({
  baseUrl: "/", // overridden dynamically
  prepareHeaders: (headers) => {
    // Get access token from cookies
    const accessToken = getCookie("access_token");

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    headers.set("Content-Type", "application/json");
    return headers;
  },
});

// Enhanced base query for dynamic URLs and token refresh handling
const dynamicBaseQuery = async (args, api, extraOptions) => {
  const { service = "local" } = args;
  const baseUrl = SERVICE_URLS[service] || SERVICE_URLS.local;

  const modifiedArgs =
    typeof args === "string"
      ? { url: args, baseUrl }
      : {
          ...args,
          url: args.url.startsWith("http") ? args.url : `${baseUrl}${args.url}`,
        };

  const result = await rawBaseQuery(modifiedArgs, api, extraOptions);

  // Handle unauthorized responses
  if (result?.error?.status === 401) {
    if (typeof window !== "undefined") {
      // Clear cookies
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      window.open("/user/login", "_self");
    }
  }

  return result;
};

// Create the API instance
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: dynamicBaseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
