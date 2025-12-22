"use client";

import React from "react";

const donations = [
  { title: "Total Donations", amount: "$2,055,683.25" },
  { title: "As-Sunnah Foundation", amount: "$4,050.25" },
  { title: "BIRDEM Hospital", amount: "$3,055.25" },
  { title: "BIRDEM Hospital", amount: "$3,055.25" },
  { title: "BIRDEM Hospital", amount: "$3,055.25" },
  { title: "BIRDEM Hospital", amount: "$3,055.25" },
];

const DonationsGrid = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {donations.map((donation, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl w-[261px] h-[152px] shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-gray-500 font-medium py-4 text-sm">{donation.title}</h3>
            <p className="text-2xl font-semibold text-[#2b6771] mt-2">{donation.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationsGrid;
