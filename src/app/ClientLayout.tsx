"use client";

import { ReactNode, Suspense, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../components/common/Navbar";
import Providers from "../providers/Providers";
import "@ant-design/v5-patch-for-react-19";
import Sidebar from "../components/common/Sidebar";
import { Affix, Layout } from "antd";
import IsLoadingSpin from "../components/common/IsLoadingSpin";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const { Content, Footer } = Layout;

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";

  const hideNav =
    pathname.startsWith("/login") ||
    pathname.startsWith("/user/login") ||
    pathname.startsWith("/user/register");

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PK!
  );

  return (
    <Providers>
      {!hideNav && (
        <Navbar
          collapsed={collapsed}
          toggleCollapsed={toggleCollapsed}
        />
      )}

      <div className="flex bg-gray-50 min-h-[calc(100vh-160px)]">
        {!hideNav && (
          <Affix className="shadow-none! bg-white!">
            <Sidebar collapsed={collapsed} />
          </Affix>
        )}

        <Layout>
          <Content className={`${!hideNav && "py-20"} flex-1 p-6 bg-[#e3f6f5]`}>
            <Suspense fallback={<IsLoadingSpin  />}>
              <Elements stripe={stripePromise}>
                {children}
              </Elements>
            </Suspense>
          </Content>
        </Layout>
      </div>

     
    </Providers>
  );
}
