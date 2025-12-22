"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Button,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Statistic,
  Divider,
} from "antd";
import {
  ShopOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  SaveOutlined,
  StarOutlined,
  RiseOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { ShopInfoFormValues, shopInfoSchema } from "../../../schema";

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function ShopInfoTab() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ShopInfoFormValues>({
    resolver: zodResolver(shopInfoSchema),
    defaultValues: {
      shopName: "NovaTech Solutions",
      shopDescription:
        "Global supplier of consumer electronics, smart devices, and IT accessories.",
      businessEmail: "support@novatechsolutions.com",
      businessPhone: "+1-415-782-9931",
      businessAddress:
        "245 Market Street, Suite 410, San Francisco, CA 94105, USA",
      websiteUrl: "https://www.novatechsolutions.com",
    },
  });

  const onSubmit = (data: ShopInfoFormValues) => {
    console.log("Shop Data:", data);
  };

  return (
    <>
      {/* Shop Details Form */}
      <Card styles={{ body: { padding: 0 } }}>
        <div style={{ marginBottom: "20px" }}>
          <Title level={5} style={{ margin: 0 }}>
            Shop Details
          </Title>
          <Text type="secondary">
            Manage your shop information and branding
          </Text>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <label>
                <ShopOutlined /> <strong>Shop Name *</strong>
              </label>
              <Controller
                name="shopName"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" style={{ marginTop: 8 }} />
                )}
              />
            </Col>

            <Col span={24}>
              <label>
                <strong>Shop Description</strong>
              </label>
              <Controller
                name="shopDescription"
                control={control}
                render={({ field }) => (
                  <TextArea {...field} rows={3} style={{ marginTop: 8 }} />
                )}
              />
            </Col>

            <Col span={12}>
              <label>
                <MailOutlined /> <strong>Business Email</strong>
              </label>
              <Controller
                name="businessEmail"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" style={{ marginTop: 8 }} />
                )}
              />
            </Col>

            <Col span={12}>
              <label>
                <PhoneOutlined /> <strong>Business Phone</strong>
              </label>
              <Controller
                name="businessPhone"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" style={{ marginTop: 8 }} />
                )}
              />
            </Col>

            <Col span={24}>
              <label>
                <EnvironmentOutlined /> <strong>Business Address</strong>
              </label>
              <Controller
                name="businessAddress"
                control={control}
                render={({ field }) => (
                  <TextArea {...field} rows={2} style={{ marginTop: 8 }} />
                )}
              />
            </Col>

            <Col span={24}>
              <label>
                <GlobalOutlined /> <strong>Website URL</strong>
              </label>
              <Controller
                name="websiteUrl"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" style={{ marginTop: 8 }} />
                )}
              />
            </Col>
          </Row>

          <Button
            type="primary"
            icon={<SaveOutlined />}
            size="large"
            style={{ marginTop: 24 }}
            htmlType="submit"
          >
            Save Shop Info
          </Button>
        </form>
      </Card>
      <Divider />
      {/* Shop Performance Metrics */}
      <Card styles={{ body: { padding: 0 } }} className="border-0!">
        <div className="mb-4">
          <Title level={4} style={{ margin: 0 }}>
            Shop Performance
          </Title>
          <Text type="secondary" style={{ fontSize: "12px" }}>
            Your shop statistics and metrics
          </Text>
        </div>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              bg-color="#f8f9fa"
              style={{ background: "#f8f9fa", textAlign: "center" }}
            >
              <Statistic
                title={
                  <Space>
                    <StarOutlined /> Average Rating
                  </Space>
                }
                value="4.7 / 5.0"
                valueStyle={{ fontWeight: "bold" }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ background: "#f8f9fa", textAlign: "center" }}>
              <Statistic
                title={
                  <Space>
                    <RiseOutlined /> Total Sales
                  </Space>
                }
                value={1050}
                valueStyle={{ fontWeight: "bold" }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ background: "#f8f9fa", textAlign: "center" }}>
              <Statistic
                title={
                  <Space>
                    <WalletOutlined /> Total Revenue
                  </Space>
                }
                value={50000}
                precision={2}
                prefix="$"
                valueStyle={{ color: "#3f8600", fontWeight: "bold" }}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
}
