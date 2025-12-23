/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Cookies from "js-cookie";
import UserLoginForm from "../../../components/UserLoginForm";
import { useRouter } from "next/navigation";
import { LoginFormData } from "../../../schema";
import { useLoginMerchantMutation } from "../../../lib/api/merchantApi";
import { App } from "antd";

const UserLoginPage = () => {
  const [loginMerchant, { isLoading }] = useLoginMerchantMutation();
  const router = useRouter();
  const { message } = App.useApp();


  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginMerchant(data).unwrap();
      const { access, refresh } = response.data;

      // ✅ Use proper cookie settings for domain/deployment
      const isProd = process.env.NODE_ENV === "production";

      Cookies.set("access_token", access, {
        path: "/",
        sameSite: isProd ? "lax" : "lax", 
        secure: isProd,
      });

      Cookies.set("refresh_token", refresh, {
        path: "/",
        sameSite: isProd ? "lax" : "lax",
        secure: isProd,
      });

      message.success(response.message);
      router.push("/dashboard");
    } catch (err:any) {
      message.error(err?.message || "Login failed");
    }
  };

  return <UserLoginForm onSubmit={onSubmit} isLoading={isLoading} />;
};

export default UserLoginPage;
