"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Typography, Card } from "antd";
import { LoginFormData, loginSchema } from "../../schema/userLoginSchema";
import FormTextInput from "../../components/ui/FormTextInput";
import FormPasswordInput from "../../components/ui/FormPasswordInput";
import Link from "next/link";
import Image from "next/image";
import { img } from "../theme";

const { Title, Paragraph } = Typography;

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
}

const UserLoginForm = ({ onSubmit, isLoading = false }: LoginFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="min-h-[calc(100vh-100px)] flex justify-center flex-col items-center  bg-gray-50">
      <div className="mb-12">
        <Link href="https://hsblco.com/">
          <Image src={img?.logo} width={180} height={50} alt="logo" />
        </Link>
      </div>
      <Card className="w-full max-w-md p-6">
        <Title level={3} className="text-center mb-4">
          Sign-in
        </Title>
        <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
          <FormTextInput
            name="email"
            control={control}
            label="Email"
            error={errors.email}
          />
          <FormPasswordInput
            name="password"
            control={control}
            label="Password"
            error={errors.password}
          />
          <Button
            htmlType="submit"
            block
            loading={isLoading}
            className="bg-[#05678d]! hover:bg-[#2b6771] text-white! border-none"
          >
            <span>{isLoading ? "Signing in..." : "Sign-in"}</span>
          </Button>

          <div className="mt-4 flex justify-between">
            <Link
              href="/user/forgot-password"
              className="text-primary hover:text-blue-800 text-sm"
            >
              Forgot Password?
            </Link>

            <Link
              href="/user/register"
              className="text-white bg-[#05678d] hover:bg-[#2b6771] hover:text-white 
             px-4 py-2 rounded-md text-sm transition"
            >
              Sign Up
            </Link>
          </div>
          <Paragraph className="mt-6 mb-10! text-center">
            The HSBLCO LCC's version: V:3.2
          </Paragraph>
        </Form>
      </Card>
    </div>
  );
};

export default UserLoginForm;
