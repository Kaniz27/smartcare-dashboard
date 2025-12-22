const env = process.env;
const isDev = env.NEXT_PUBLIC_IS_DEV === "true";

export const SERVICE_URLS = {
  local: isDev ? env.NEXT_PUBLIC_LOCAL_URL : env.NEXT_PUBLIC_SERVER_URL,
  system: isDev
    ? env.NEXT_PUBLIC_SHARED_LOCAL_URL
    : env.NEXT_PUBLIC_SHARED_SERVER_URL,
};
