"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import { DownOutlined } from "@ant-design/icons";

/* -------- Data (image matched) -------- */
const data = [
  { day: "MON", value: 2200 },
  { day: "TUE", value: 1000 },
  { day: "WED", value: 2300 },
  { day: "THU", value: 1400 },
  { day: "FRI", value: 2313 }, // highlighted
  { day: "SAT", value: 700 },
  { day: "SUN", value: 2000 },
];

/* -------- Tooltip -------- */
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-[#1f2347] text-white px-3 py-1 text-sm rounded-lg">
        {payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
};

/* -------- Component -------- */
const ActivityCard = () => {
  return (
    <div
      className="bg-white mt-10 rounded-xl p-4"
      style={{ width: 300, height: 468 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[#2b6771] text-sm">Activity</p>
          <h3 className="font-semibold text-base">Last 7 Days</h3>
        </div>

        <div className="flex items-center gap-1 bg-[#e8f6f8] text-[#2b6771] px-3 py-1 rounded-full text-xs cursor-pointer">
          Weekly <DownOutlined />
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={14}>
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 3000]}
              ticks={[0, 1000, 2000, 3000]}
              tickFormatter={(v) =>
                v === 0 ? "0" : `${v / 1000}k`
              }
              tick={{ fontSize: 11 }}
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={index === 4 ? "#6ed3e6" : "#0b5c7a"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityCard;
