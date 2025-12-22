"use client";

import React from "react";
import Image from "next/image";
import { Space, Table, TableProps, Tag } from "antd";
import { medicalHistoryData, MedicalHistoryItem } from "@/data/medicalhistory";

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
    key: "name",
    width: 180,
    render: (_, record) => (
      <Space style={{ whiteSpace: "nowrap" }}>
        <Image
          src={record.image}
          alt={record.name}
          width={30}
          height={30}
          className="rounded-full"
        />
        <span>{record.name}</span>
      </Space>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 110,
    render: (status) => (
      <Tag color={statusColors[status]}>{status}</Tag>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 120,
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    width: 100,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: 140,
  },
  {
    title: "Hospital",
    dataIndex: "hospital",
    key: "hospital",
    width: 160,
  },
  {
    title: "Prescription & Report",
    key: "prescription_report",
    width: 220,
    render: (_, record) => (
      <div
        className="flex gap-2"
        style={{ whiteSpace: "nowrap" }}
      >
        <span className="px-2 py-1 text-sm rounded bg-[#cde1e8] text-[#2b6771]">
          {record.prescription || "Prescription"}
        </span>

        <span className="px-2 py-1 text-sm rounded bg-[#cde1e8] text-[#2b6771]">
          {record.report ? "Report" : "Report"}
        </span>
      </div>
    ),
  },
];

/* ---------------- Component ---------------- */
const MedicalHistoryTable = () => {
  return (
    <div className="mx-auto mt-10 w-[831px] bg-white p-6 rounded-xl shadow">
      <h2 className="mb-4 text-[22px] font-semibold">
        Appointment List
      </h2>

      <Table<MedicalHistoryItem>
        rowKey="id"
        columns={columns}
        dataSource={medicalHistoryData}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default MedicalHistoryTable;
