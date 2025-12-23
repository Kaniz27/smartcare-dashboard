"use client";

import React, { useState } from "react";
import { medicalHistoryData, MedicalHistoryItem } from "@/data/patienthistory";
import { Input, Space, Table, TableProps, Tag } from "antd";

const { Search } = Input;

const columns: TableProps<MedicalHistoryItem>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Problems",
    dataIndex: "problems",
    key: "problems",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Prescription / Report",
    key: "pr",
    render: () => (
      <Space>
        <Tag color="green">Prescription</Tag>
        <Tag color="blue">Report</Tag>
      </Space>
    ),
  },
  
];

const MedicalHistoryTable = () => {
  const [data, setData] = useState<MedicalHistoryItem[]>(medicalHistoryData);

  const onSearch = (value: string) => {
    const filtered = medicalHistoryData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(filtered);
  };

  return (
    <div className="p-6 mt-10 bg-white rounded-xl shadow">
      {/* 🔹 Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[22px] font-semibold">Today’s Patient</h2>

        <Search
          placeholder="Search patient name"
          allowClear
          onSearch={onSearch}
          style={{ width: 260 }}
        />
      </div>

      {/* 🔹 Table */}
      <Table<MedicalHistoryItem>
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default MedicalHistoryTable;
