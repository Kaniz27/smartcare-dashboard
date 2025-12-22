"use client";

import React, { useState } from "react";
import { Card, Form, Input, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

const UploadReportPage = () => {
  const [fileList, setFileList] = useState<any[]>([]);

  const uploadProps: UploadProps = {
    beforeUpload: (file) => {
      const isPdf = file.type === "application/pdf";
      if (!isPdf) {
        message.error("Only PDF files are allowed!");
        return Upload.LIST_IGNORE;
      }
      setFileList([file]);
      return false;
    },
    fileList,
    onRemove: () => {
      setFileList([]);
    },
    maxCount: 1,
  };

  const onFinish = (values: any) => {
    if (fileList.length === 0) {
      message.error("Please upload a PDF report");
      return;
    }

    const formData = new FormData();
    formData.append("patientName", values.patientName);
    formData.append("reportName", values.reportName);
    formData.append("file", fileList[0]);

    console.log("Form Data:", values, fileList[0]);

    message.success("Report uploaded successfully!");
  };

  return (
    <div className="max-w-2xl mt-20 mx-auto p-6  rounded-md">
      <Card
        title={
          <h2 className="text-2xl font-bold mt-2 text-[#2b6771]">
            Upload Patient Report
          </h2>
        }
        bordered={false}
      >
        <Form layout="vertical" onFinish={onFinish}>
          {/* Patient Name */}
          <Form.Item
            label="Patient Name"
            name="patientName"
            rules={[{ required: true, message: "Patient name is required" }]}
          >
            <Input placeholder="Enter patient name" />
          </Form.Item>

          {/* Report Name */}
          <Form.Item
            label="Report Name"
            name="reportName"
            rules={[{ required: true, message: "Report name is required" }]}
          >
            <Input placeholder="Enter report name" />
          </Form.Item>

          {/* PDF Upload */}
          <Form.Item label="Upload Report (PDF)">
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Select PDF</Button>
            </Upload>
          </Form.Item>

          {/* Submit */}
          <Form.Item>
            <Button
              htmlType="submit"
              block
              className="!bg-[#2b6771] hover:!bg-[#245a63] !text-white !border-none"
            >
              Upload Report
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default UploadReportPage;
