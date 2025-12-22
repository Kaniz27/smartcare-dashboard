"use client";
import { Form, Input } from "antd";
import { Controller, Control, FieldError } from "react-hook-form";

interface FormPasswordInputProps {
  name: string;
  control: Control<any>;
  label: string;
  className?: string;
  placeholder?: string;
  error?: FieldError;
  disabled?: boolean;
}

const { Password } = Input;

const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
  name,
  control,
  label,
  placeholder,
  error,
  className,
  disabled = false,
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
        <Password
          {...field}
          placeholder={placeholder}
          disabled={disabled}
          className=""
        />
      )}
    />
  </Form.Item>
);

export default FormPasswordInput;
