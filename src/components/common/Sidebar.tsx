"use client";

import { Layout, Menu, MenuProps } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";
import { RiSettings2Line, RiShieldUserLine } from "react-icons/ri";
import {
  FaUserMd,
  FaCalendarCheck,
  FaFileMedical,
  FaPrescriptionBottleAlt,
  FaDonate,
} from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";

const { Sider } = Layout;

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();

  const mainItems: MenuProps["items"] = [
    {
      key: "/dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => router.push("/dashboard"),
    },
    {
      key: "/doctor",
      icon: <FaUserMd />, // ✅ Doctor List
      label: "Doctor List",
      onClick: () => router.push("/doctor"),
    },
    {
      key: "/appointment",
      icon: <FaCalendarCheck />, // ✅ Appointment
      label: "Appointment List",
      onClick: () => router.push("/appointment"),
    },
    {
      key: "/medical-history",
      icon: <FaFileMedical />, // ✅ Medical History
      label: "Medical History",
      onClick: () => router.push("/medical-history"),
    },
    {
      key: "/prescription",
      icon: <FaPrescriptionBottleAlt />, // ✅ Prescription
      label: "Prescription",
      onClick: () => router.push("/prescription"),
    },
    {
      key: "/donation",
      icon: <FaDonate />, // ✅ Donation
      label: "Donation",
      onClick: () => router.push("/donation"),
    },
    {
      key: "/setting",
      icon: <RiSettings2Line />,
      label: "Setting",
      children: [
        {
          key: "/profile",
          icon: <CgProfile />,
          label: "Profile",
          onClick: () => router.push("/profile"),
        },
        {
          key: "/setting/user-management",
          icon: <LuUsersRound />,
          label: "User Management",
          onClick: () => router.push("/user/setting/user-management"),
        },
        {
          key: "/setting/role-management",
          icon: <RiShieldUserLine />,
          label: "Role Management",
          onClick: () => router.push("/user/setting/role-management"),
        },
      ],
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={220}
      className="z-40 !h-screen !bg-[#ebfffe]"
    >
      {/* Logo */}
      <div className="flex items-center justify-center py-6">
        <Image
          src="/sidebar.png"
          alt="Sidebar Logo"
          width={collapsed ? 40 : 120}
          height={40}
        />
      </div>

      {/* Menu */}
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        items={mainItems}
        theme="light"
        className="border-0 !bg-[#ebfffe]"
      />

      {/* Donation Banner */}
      <div className="mt-12 flex flex-col p-4 items-center">
        <div className="relative w-50 h-40 bg-[#33aeab] rounded-lg flex justify-center items-center px-3">
          <Image
            src="/OBJECTS.png"
            alt="Donation Banner"
            fill
            className="object-cover rounded-full"
          />
          <Link
            href="/donationcard"
            className="relative px-6 py-2 !bg-[#08668E] !text-white font-semibold rounded-full"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
