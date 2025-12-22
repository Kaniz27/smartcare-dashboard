"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Row, Col, Typography, Space, Card, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";

import { ProfileFormValues, profileSchema } from "../../schema/profileSchema";
import FormTextInput from "../../../components/ui/FormTextInput";

const { Title, Text } = Typography;

export default function PersonalTab() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "John Doe",
      email: "john@mail.com",
      phoneNumber: "+1 (555) 000-0000",
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      {/* Personal Information Form */}
      <Card styles={{ body: { padding: 0 } }}>
        <Title level={5} style={{ marginBottom: 24 }}>
          Personal Information
        </Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <FormTextInput
                className="mb-0!"
                name="fullName"
                control={control}
                label="Full Name *"
                placeholder="Enter full name"
                error={errors.fullName}
              />
            </Col>

            <Col span={24}>
              <Row gutter={[24, 24]} align="bottom">
                <Col span={22}>
                  <FormTextInput
                    className="mb-0!"
                    name="email"
                    label="Email Address"
                    control={control}
                    type="email"
                    placeholder="Enter email address"
                    error={errors.email}
                  />
                </Col>
                <Col span={2}>
                  <Button>Verify</Button>
                </Col>

                <Col span={22}>
                  <FormTextInput
                    className="mb-0!"
                    label="Phone Number"
                    name="phoneNumber"
                    control={control}
                    placeholder="Enter phone number"
                    error={errors.phoneNumber}
                  />
                </Col>
                <Col span={2}>
                  <Button>Verify</Button>
                </Col>
              </Row>
            </Col>
          </Row>

          <Button
            type="primary"
            icon={<SaveOutlined />}
            style={{ marginTop: 20 }}
            htmlType="submit"
          >
            Save Changes
          </Button>
        </form>
      </Card>

      <Divider />

      <Card styles={{ body: { padding: 0 } }} className="border-0!">
        <div className="mb-4">
          <Title level={5}>Account Information</Title>
        </div>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Text type="secondary">User ID</Text>
            <br />
            <Text strong>019b1c7a-a010-72ba-bee2-32a22cabbab7</Text>
          </Col>

          <Col span={12}>
            <Text type="secondary">Vendor ID</Text>
            <br />
            <Text strong>019b1c7f-f33d-711a-b8e4-3fd2360aeb7c</Text>
          </Col>

          <Col span={12}>
            <Text type="secondary">Role</Text>
            <br />
            <Text>Vendor</Text>
          </Col>

          <Col span={12}>
            <Text type="secondary">Account Status</Text>
            <br />
            <Text style={{ color: "#52c41a" }}>Verified</Text>
          </Col>
        </Row>
      </Card>
    </>
  );
}
