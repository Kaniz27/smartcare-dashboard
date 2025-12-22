// components/common/FormCheckboxGroupInput.tsx
"use client";

import { Checkbox, Form } from "antd";
import { Controller, Control, FieldError } from "react-hook-form";

interface Option {
  label: React.ReactNode;
  value: string;
}

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  options: Option[];
  error?: FieldError;
  className?: string;
}

const FormCheckboxGroupInput: React.FC<Props> = ({
  name,
  control,
  label,
  options,
  className,
  error,
}) => (
  <Form.Item
    label={label}
    className={`${className} mb-3`}
    help={error?.message}
    validateStatus={error ? "error" : ""}
    labelCol={{ span: 24 }}
  >
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Checkbox.Group
          {...field}
          options={options}
          className="flex flex-wrap gap-4"
        />
      )}
    />
  </Form.Item>
);

export default FormCheckboxGroupInput;
