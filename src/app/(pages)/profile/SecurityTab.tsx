"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Typography, Form } from "antd";

import { SecurityFormValues, securitySchema } from "../../../schema";
import FormPasswordInput from "../../ui/FormPasswordInput";

const { Title, Text } = Typography;

export default function SecurityTab() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SecurityFormValues>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SecurityFormValues) => {
    console.log("Password Update Data:", data);
  };

  return (
    <Card
      styles={{ body: { padding: 0 } }}
      variant="borderless"
      className="p-0!"
    >
      <div style={{ marginBottom: 24 }}>
        <Title level={5} style={{ margin: 0 }}>
          Change Password
        </Title>
        <Text type="secondary">
          Update your password to keep your account secure
        </Text>
      </div>

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <FormPasswordInput
          name="currentPassword"
          control={control}
          label="Current Password *"
          placeholder="Enter current password"
          error={errors.currentPassword}
        />

        <FormPasswordInput
          name="newPassword"
          control={control}
          label="New Password *"
          placeholder="Enter new password"
          error={errors.newPassword}
        />

        <FormPasswordInput
          name="confirmPassword"
          control={control}
          label="Confirm New Password *"
          placeholder="Confirm new password"
          error={errors.confirmPassword}
        />

        <Button
          type="primary"
          size="large"
          htmlType="submit"
          style={{ fontWeight: 600, padding: "0 30px" }}
        >
          Update Password
        </Button>
      </Form>
    </Card>
  );
}
