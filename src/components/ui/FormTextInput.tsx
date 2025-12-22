// components/common/FormTextInput.tsx
"use client";
import { Form, Input } from "antd";
import { Controller, Control, FieldError } from "react-hook-form";

interface FormTextInputProps {
  name: string;
  control: Control<any>;
  label: string;
  className?: string;
  placeholder?: string;
  type?: "text" | "email" | "url";
  error?: FieldError;
  disabled?: boolean;
  prefix?: React.ReactNode;
}

const FormTextInput: React.FC<FormTextInputProps> = ({
  name,
  control,
  label,
  placeholder,
  type = "text",
  error,
  className,
  disabled = false,
  prefix,
}) => (
  <Form.Item
    label={label}
    help={error?.message}
    validateStatus={error ? "error" : ""}
    className={`${className} mb-3`}
    labelCol={{ span: 24 }}
  >
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          prefix={prefix}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    />
  </Form.Item>
);

export default FormTextInput;
