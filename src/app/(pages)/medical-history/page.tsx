"use client";

import React, { useState } from "react";
import {
  Table,
  TableProps,
  Tag,
  Input,
  Button,
  Modal,
  Card,
  Form,
  Upload,
  message,
  
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { medicalHistoryData, MedicalHistoryItem } from "@/data/madicalhistory1";

const { Search } = Input;

const statusColors: Record<string, string> = {
  Pending: "orange",
  Completed: "green",
  Withdraw: "red",
};

const MedicalHistoryPage = () => {
  const [data, setData] = useState<MedicalHistoryItem[]>(medicalHistoryData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<string>("");

  // Search function
  const onSearch = (value: string) => {
    const filtered = medicalHistoryData.filter((item) =>
      item.patientName.toLowerCase().includes(value.toLowerCase())
    );
    setData(filtered);
  };

  // Upload props
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
    onRemove: () => setFileList([]),
    maxCount: 1,
  };

  const handleUploadFinish = (values: any) => {
    if (fileList.length === 0) {
      message.error("Please upload a PDF report");
      return;
    }

    const formData = new FormData();
    formData.append("patientName", selectedPatient);
    formData.append("reportName", values.reportName);
    formData.append("file", fileList[0]);

    console.log("Form Data:", selectedPatient, values, fileList[0]);
    message.success("Report uploaded successfully!");
    setIsModalOpen(false);
    setFileList([]);
  };

  // Table columns
  const columns: TableProps<MedicalHistoryItem>["columns"] = [
    {
      title: "Patient Name",
      dataIndex: "patientName",
      key: "patientName",
    },
    {
      title: "Doctor Name",
      dataIndex: "doctorName",
      key: "doctorName",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Appointment Date",
      dataIndex: "appointmentDate",
      key: "appointmentDate",
    },
    {
      title: "Appointment Time",
      dataIndex: "appointmentTime",
      key: "appointmentTime",
    },
    {
      title: "Last Appointment",
      dataIndex: "lastAppointmentDate",
      key: "lastAppointmentDate",
    },
    
    {
      title: "Upload Report",
      key: "upload",
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            setSelectedPatient(record.patientName);
            setIsModalOpen(true);
          }}
        >
          Upload
        </Button>
      ),
    },
  ];

  return (
    <div className="p-6 mt-10 bg-white rounded-xl shadow mx-auto max-w-[1200px]">
      {/* Header + Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-0">
        <h2 className="text-[22px] font-semibold">Medical History</h2>
        <Search
          placeholder="Search patient name"
          allowClear
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      </div>

      {/* Table */}
      <Table<MedicalHistoryItem>
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
      />

      {/* Upload Modal */}
      <Modal
        title={`Upload Report for ${selectedPatient}`}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Card>
          <Form layout="vertical" onFinish={handleUploadFinish}>
            <Form.Item
              label="Report Name"
              name="reportName"
              rules={[{ required: true, message: "Report name is required" }]}
            >
              <Input placeholder="Enter report name" />
            </Form.Item>

            <Form.Item label="Upload Report (PDF)">
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Select PDF</Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                block
                type="primary"
                className="bg-[#2b6771] hover:bg-[#245a63]"
              >
                Upload Report
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Modal>
    </div>
  );
};

export default MedicalHistoryPage;
