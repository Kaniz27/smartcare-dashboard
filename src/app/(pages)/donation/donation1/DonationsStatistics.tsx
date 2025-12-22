"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Offline", value: 24 },
  { name: "Online", value: 39 },
  { name: "Operation", value: 11 },
  { name: "Other", value: 26 },
];

const COLORS = ["#2b6771", "#4dd0e1", "#ff9800", "#9c27b0"];

const DonationsStatistics = () => {
  return (
    <div
      className="mt-6 mx-auto p-4 mr-20 bg-white rounded-xl shadow"
      style={{ width: 300, height: 468 }}
    >
      <h2 className="text-xl font-semibold text-[#2b6771] mb-1">
        Statistics
      </h2>
      <h3 className="text-gray-600 mb-4">
        Donations Statistics
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="45%"
            outerRadius={100}
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="left"
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonationsStatistics;
