"use client";

import React, { useState } from "react";
import Image from "next/image";
import { medicalHistoryData, MedicalHistoryItem } from "@/data/medicalhistory";
import { Space, Table, TableProps, Tag } from "antd";

const statusColors: Record<MedicalHistoryItem["status"], string> = {
  Pending: "orange",
  Completed: "green",
  Withdraw: "red",
};

const columns: TableProps<MedicalHistoryItem>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, record) => (
      <Space size="middle">
        <Image
          className="rounded-full"
          width={30}
          height={30}
          src={record.image}
          alt={record.name}
        />
        <span>{record.name}</span>
      </Space>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (s: MedicalHistoryItem["status"]) => (
      <Tag color={statusColors[s]}>{s}</Tag>
    ),
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
  // Prescription + Report in same column
  {
    title: "Prescription & Report",
    key: "prescription_report",
    render: (record: MedicalHistoryItem) => (
      <div className="flex gap-2">
  {record.prescription ? (
    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
      {record.prescription}
    </span>
  ) : (
    <span className="px-2 py-1 bg-[#cde1e8] text-[#2b6771] rounded">
      Prescription
    </span>
  )}
  {record.report ? (
    <a
      href={record.report}
      target="_blank"
      rel="noopener noreferrer"
      className="px-2 py-1 bg-blue-100 text-blue-800 rounded inline-block"
    >
      Report
    </a>
  ) : (
    <span className="px-2 py-1 bg-[#cde1e8] text-[#2b6771] rounded">
      Report
    </span>
  )}
</div>

    ),
  },
];

const MedicalHistoryTable = () => {
  const [data, setData] = useState<MedicalHistoryItem[]>(medicalHistoryData);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="p-6 mt-10 bg-white rounded-xl shadow">
      <h2 className="text-[22px] font-semibold mb-4">Appointment List</h2>
      <Table<MedicalHistoryItem> rowKey="id" columns={columns} dataSource={data} />
    </div>
  );
};

export default MedicalHistoryTable;
