"use client";

import { Tabs, Avatar, Tag, Typography } from "antd";
import {
  UserOutlined,
  BankOutlined,
  SecurityScanOutlined,
  CheckCircleFilled,
  InfoCircleOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import PersonalTab from "../profile/PersonalTab";
// import BankingTab from "./BankingTab";
// import SecurityTab from "./SecurityTab";
// import ShopInfoTab from "./ShopInfoTab";
// import BusinessTab from "./BusinessTab";

const { Title, Text } = Typography;

export default function ProfileLayout() {
  return (
    <div className="bg-white p-6 max-w-7xl mx-auto  shadow-lg">
      <div
        style={{
          height: 300,
          background: "url('/images/profile/banner1.jpg') center/cover",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 50,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Avatar
            size={120}
            src="/images/profile/profile.jpg"
            style={{ border: "4px solid white" }}
          />

          <div style={{ color: "white" }}>
            <Title level={2} style={{ color: "white", margin: 0 }}>
              NovaTech Solutions{" "}
              <Tag color="success" icon={<CheckCircleFilled />}>
                Verified
              </Tag>
              <Tag>Standard Vendor</Tag>
            </Title>
            <Text style={{ color: "white" }}>
              Vendor since December 14, 2025
            </Text>
          </div>
        </div>
      </div>

      <div style={{ padding: 12 }}>
        <Tabs
          defaultActiveKey="personal"
          items={[
            {
              key: "personal",
              label: "Personal",
              icon: <UserOutlined />,
              children: <PersonalTab />,
            },
            // {
            //   key: "shop_info",
            //   label: "Shop Info",
            //   icon: <InfoCircleOutlined />,
            //   children: <ShopInfoTab />,
            // },
            // {
            //   key: "business",
            //   label: "Business",
            //   icon: <ShopOutlined />,
            //   children: <BusinessTab />,
            // },
            // {
            //   key: "banking",
            //   label: "Banking",
            //   icon: <BankOutlined />,
            //   children: <BankingTab />,
            // },
            // {
            //   key: "security",
            //   label: "Security",
            //   icon: <SecurityScanOutlined />,
            //   children: <SecurityTab />,
            // },
          ]}
        />
      </div>
    </div>
  );
}
