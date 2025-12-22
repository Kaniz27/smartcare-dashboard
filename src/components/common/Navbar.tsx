"use client";

import React from "react";
import { Dropdown, Avatar, Space, Typography, Button, App, MenuProps } from "antd";
import {
  UserOutlined,
  EditOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
const { Text } = Typography;

const Navbar = () => {
  const { message } = App.useApp();
  const router = useRouter();
 const pathname = usePathname()
  const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    message.success("Logged out successfully");
    router.push("/login");
  };

  /* Profile dropdown items */
  const profileMenuItems: MenuProps["items"] = [
    {
      key: "view",
      icon: <UserOutlined />,
      label: <Link href="/profile">View Profile</Link>,
    },
    {
      key: "edit",
      icon: <EditOutlined />,
      label: <Link href="/user/profile/edit">Edit Details</Link>,
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: <Link href="/user/setting">Settings</Link>,
    },
    { type: "divider" },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      danger: true,
      onClick: handleLogout,
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-[#ebfffe] flex items-center justify-between px-6 py-4 shadow-sm">
      
      {/* Left text */}
      <h1 className="text-3xl capitalize font-semibold text-[#2b6771] pl-60">
       {pathname.replace('/','').replace('-',' ')}
      </h1>

      {/* Right profile section */}
      <Dropdown menu={{ items: profileMenuItems }} trigger={["click"]}>
        <Button type="text" className="h-12 px-2 rounded-full ">
          <Space>
            <Avatar
              size={40}
              src="https://www.pngkey.com/png/detail/662-6626571_avatar-placeholder.png"
            />
            <div className="flex flex-col text-left">
              <Text className="text-sm font-semibold">Karar Mahmud</Text>
              <Text className="text-xs text-gray-500"> ID:202528</Text>
            </div>
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default Navbar;