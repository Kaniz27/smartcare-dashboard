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
  Select,
  InputNumber,
  Space,
  Divider,
} from "antd";
import {
  BankOutlined,
  FileTextOutlined,
  AuditOutlined,
  PercentageOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { BusinessFormValues, businessSchema } from "../../../schema";

const { Title, Text } = Typography;

export default function BusinessTab() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessFormValues>({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      businessType: "LLC",
      yearsInBusiness: 1,
      registrationNumber: "CA-LLC-8742331",
      taxId: "US-TIN-94-8273641",
    },
  });

  const onSubmit = (data: BusinessFormValues) => {
    console.log("Business Data:", data);
  };

  return (
    <>
      {/* Business Legal Information Form */}
      <Card styles={{ body: { padding: 0 } }}>
        <div style={{ marginBottom: "20px" }}>
          <Title level={5} style={{ margin: 0 }}>
            Business Legal Information
          </Title>
          <Text type="secondary">
            Manage your business registration and tax details
          </Text>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[24, 24]}>
            {/* Business Type */}
            <Col span={12}>
              <label style={{ display: "block", marginBottom: "8px" }}>
                <BankOutlined /> <strong>Business Type *</strong>
              </label>
              <Controller
                name="businessType"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    size="large"
                    style={{ width: "100%" }}
                    placeholder="Select type"
                  >
                    <Select.Option value="Sole Proprietorship">
                      Sole Proprietorship
                    </Select.Option>
                    <Select.Option value="LLC">LLC</Select.Option>
                    <Select.Option value="Corporation">
                      Corporation
                    </Select.Option>
                    <Select.Option value="Partnership">
                      Partnership
                    </Select.Option>
                  </Select>
                )}
              />
            </Col>

            {/* Years in Business */}
            <Col span={12}>
              <label style={{ display: "block", marginBottom: "8px" }}>
                <strong>Years in Business</strong>
              </label>
              <Controller
                name="yearsInBusiness"
                control={control}
                render={({ field }) => (
                  <InputNumber
                    {...field}
                    size="large"
                    style={{ width: "100%" }}
                    min={0}
                  />
                )}
              />
            </Col>

            {/* Registration Number */}
            <Col span={12}>
              <label style={{ display: "block", marginBottom: "8px" }}>
                <FileTextOutlined />{" "}
                <strong>Business Registration Number</strong>
              </label>
              <Controller
                name="registrationNumber"
                control={control}
                render={({ field }) => <Input {...field} size="large" />}
              />
            </Col>

            {/* Tax ID */}
            <Col span={12}>
              <label style={{ display: "block", marginBottom: "8px" }}>
                <AuditOutlined /> <strong>Tax ID / EIN</strong>
              </label>
              <Controller
                name="taxId"
                control={control}
                render={({ field }) => <Input {...field} size="large" />}
              />
            </Col>
          </Row>

          <Button
            type="primary"
            icon={<SaveOutlined />}
            size="large"
            style={{ marginTop: "24px", fontWeight: "bold" }}
            htmlType="submit"
          >
            Save Business Info
          </Button>
        </form>
      </Card>
      <Divider />
      {/* Commission Settings Section */}
      <Card styles={{ body: { padding: 0 } }} className="border-0!">
        <div style={{ marginBottom: "20px" }}>
          <Title level={4} style={{ margin: 0 }}>
            Commission Settings
          </Title>
          <Text type="secondary">Platform commission rate for your sales</Text>
        </div>

        <Card styles={{ body: { padding: 0 } }} className="border-0!">
          <Row justify="space-between" align="middle">
            <Col>
              <Space direction="vertical" size={0}>
                <Title level={5} style={{ margin: 0 }}>
                  <PercentageOutlined /> Current Commission Rate
                </Title>
                <Text type="secondary">
                  This rate is set by the platform administrator
                </Text>
              </Space>
            </Col>
            <Col>
              <Title level={2} style={{ margin: 0, color: "#2f54eb" }}>
                10.00%
              </Title>
            </Col>
          </Row>
        </Card>
      </Card>
    </>
  );
}
