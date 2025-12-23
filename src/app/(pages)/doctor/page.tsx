"use client";

import React from "react";
import Image from "next/image";
import { Table, TableProps, Space } from "antd";
import { Doctor, doctorList } from "@/data/doctors";

const columns: TableProps<Doctor>["columns"] = [
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
    title: "Degree / Bio",
    key: "degree_bio",
    render: (_, record) => (
      <div>
        <div className="font-semibold">{record.degree}</div>
        <div className="text-gray-600 text-sm">{record.bio}</div>
      </div>
    ),
  },
  {
    title: "Hospital",
    dataIndex: "hospital",
    key: "hospital",
  },
  
  {
    title: "Schedule",
    dataIndex: "schedule",
    key: "schedule",
  },
];

const DoctorListTable = () => {
  return (
    <div className="p-6 mt-10 bg-white rounded-xl shadow">
      <h2 className="text-[22px] font-semibold mb-4">Doctors List</h2>
      <Table<Doctor>
        rowKey="id"
        columns={columns}
        dataSource={doctorList}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default DoctorListTable;
