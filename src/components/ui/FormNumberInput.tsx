/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form, InputNumber } from "antd";
import { Controller, Control, FieldError } from "react-hook-form";

interface FormNumberInputProps {
  name?: any;
  control?: Control<any>;
  label: string;
  placeholder?: string;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  error?: FieldError;
  disabled?: boolean;
  prefix?: React.ReactNode;
}

const FormNumberInput: React.FC<FormNumberInputProps> = ({
  name,
  control,
  label,
  placeholder,
  min,
  max,
  step,
  error,
  className,
  disabled = false,
  prefix,
}) => {
  return (
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
          <InputNumber
            {...field}
            prefix={prefix}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            disabled={disabled}
            style={{ width: "100%" }}
            className=""
          />
        )}
      />
    </Form.Item>
  );
};

export default FormNumberInput;
