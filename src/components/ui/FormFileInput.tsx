/* eslint-disable @typescript-eslint/no-explicit-any */
// components/common/FormFileInput.tsx
"use client";
import { Form, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Controller, Control, FieldError } from "react-hook-form";
import { UploadFile } from "antd/es/upload/interface";

interface FormFileInputProps {
  name: string;
  control: Control<any>;
  label: string;
  className?: string;
  error?: FieldError;
  disabled?: boolean;
  maxCount?: number;
  onchange?: (file: File | null) => void; // callback
}

const FormFileInput: React.FC<FormFileInputProps> = ({
  name,
  control,
  label,
  error,
  className,
  disabled = false,
  maxCount = 1,
  onchange,
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
      render={({ field: { onChange, value } }) => {
        const fileList: UploadFile[] = value
          ? [
              {
                uid: "-1",
                name: value.name,
                status: "done",
                originFileObj: value,
              } as UploadFile,
            ]
          : [];

        return (
          <Upload
            beforeUpload={() => false}
            onChange={(info) => {
              const file = info.fileList[0]?.originFileObj || null;

              onChange(file); // react-hook-form state update

              if (onchange) {
                onchange(file); // your custom callback
              }
            }}
            onRemove={() => {
              onChange(null);
              if (onchange) onchange(null);
            }}
            fileList={fileList}
            maxCount={maxCount}
            disabled={disabled}
          >
            <Button icon={<UploadOutlined />}>Choose File</Button>
          </Upload>
        );
      }}
    />
  </Form.Item>
);

export default FormFileInput;
