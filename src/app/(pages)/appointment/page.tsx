"use client";

import React, { useState } from "react";
import Image from "next/image";
import { medicalHistoryData, MedicalHistoryItem } from "@/data/medicalhisrory";
import { Input, Space, Table, TableProps, Tag } from "antd";

const { Search } = Input;

/* ---------------- Status Colors ---------------- */
const statusColors: Record<MedicalHistoryItem["status"], string> = {
  Pending: "orange",
  Completed: "green",
  Withdraw: "red",
};

/* ---------------- Columns ---------------- */
const columns: TableProps<MedicalHistoryItem>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, record) => (
      <Space>
        <Image
          src={record.image}
          alt={record.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span>{record.name}</span>
      </Space>
    ),
  },
  {
    title: "Problems",
    dataIndex: "problems",
    key: "problems",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => <Tag color={statusColors[status]}>{status}</Tag>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Hospital",
    dataIndex: "hospital",
    key: "hospital",
  },
  {
    title: "Prescription / Report",
    key: "pr",
    render: (_, record) => (
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
