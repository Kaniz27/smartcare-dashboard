"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, Card, Typography, Row, Col, Alert, Space } from "antd";
import {
  BankOutlined,
  UserOutlined,
  CreditCardOutlined,
  SafetyCertificateOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { BankingFormValues, bankingSchema } from "../../../schema";

const { Title, Text } = Typography;

export default function BankingTab() {
  const [showAccountNumber, setShowAccountNumber] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BankingFormValues>({
    resolver: zodResolver(bankingSchema),
    defaultValues: {
      bankName: "Bank of America",
      accountName: "NovaTech Solutions LLC",
      accountNumber: "12345678901234",
      routingNumber: "026009593",
      swiftCode: "BOFAUS3N",
    },
  });

  const onSubmit = (data: BankingFormValues) => {
    console.log("Banking Data:", data);
  };

  return (
    <Card styles={{ body: { padding: 0 } }}>
      <div style={{ marginBottom: "20px" }}>
        <Title level={5} style={{ margin: 0 }}>
          Bank Account Details
        </Title>
        <Text type="secondary">
          Manage your banking information for receiving payments
        </Text>
      </div>

      {/* Secure Info Alert */}
      <Alert
        message={
          <Text style={{ color: "#856404", fontWeight: 600 }}>
            Secure Information
          </Text>
        }
        description={
          <Text style={{ color: "#856404" }}>
            Your bank details are encrypted and securely stored
          </Text>
        }
        type="warning"
        showIcon
        icon={<SafetyCertificateOutlined style={{ color: "#856404" }} />}
        style={{
          backgroundColor: "#fff3cd",
          border: "1px solid #ffeeba",
          marginBottom: "24px",
        }}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={[24, 24]}>
          {/* Bank Name */}
          <Col span={12}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              <BankOutlined /> <strong>Bank Name *</strong>
            </label>
            <Controller
              name="bankName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  status={errors.bankName ? "error" : ""}
                />
              )}
            />
          </Col>

          {/* Account Name */}
          <Col span={12}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              <UserOutlined /> <strong>Account Name *</strong>
            </label>
            <Controller
              name="accountName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  status={errors.accountName ? "error" : ""}
                />
              )}
            />
          </Col>

          {/* Account Number */}
          <Col span={24}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              <CreditCardOutlined /> <strong>Account Number *</strong>
            </label>
            <Space.Compact style={{ width: "100%" }}>
              <Controller
                name="accountNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type={showAccountNumber ? "text" : "password"}
                    size="large"
                    status={errors.accountNumber ? "error" : ""}
                  />
                )}
              />
              <Button
                size="large"
                onClick={() => setShowAccountNumber(!showAccountNumber)}
              >
                {showAccountNumber ? "Hide" : "Show"}
              </Button>
            </Space.Compact>
          </Col>

          {/* Routing Number */}
          <Col span={12}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              <strong>Routing Number</strong>
            </label>
            <Controller
              name="routingNumber"
              control={control}
              render={({ field }) => <Input {...field} size="large" />}
            />
          </Col>

          {/* SWIFT Code */}
          <Col span={12}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              <strong>SWIFT/BIC Code</strong>
            </label>
            <Controller
              name="swiftCode"
              control={control}
              render={({ field }) => <Input {...field} size="large" />}
            />
          </Col>
        </Row>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          size="large"
          style={{ marginTop: "24px" }}
          htmlType="submit"
        >
          Save Banking Info
        </Button>
      </form>
    </Card>
  );
}
