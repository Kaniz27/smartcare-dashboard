"use client";

import React from "react";

const DoctorCards = () => {
  const cards = [
    {
      hospital: "BIRDEM General Hospital",
      date: "14th-16th May 2025",
      day: "Saturday, Sunday, Monday",
      time: "12:00pm to 03:00pm",
      price: "1200tk",
    },
    {
      hospital: "Apollo Hospitals",
      date: "14th-16th May 2025",
      day: "Saturday, Sunday, Monday",
      time: "12:00pm to 03:00pm",
      price: "1200tk",
    },
    {
      hospital: "Labaid Hospital",
      date: "14th-16th May 2025",
      day: "Saturday, Sunday, Monday",
      time: "12:00pm to 03:00pm",
      price: "1200tk",
    },
    {
      hospital: "Evna Sina hospital",
      date: "14th-16th May 2025",
      day: "Saturday, Sunday, Monday",
      time: "12:00pm to 03:00pm",
      price: "1200tk",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-[400px]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white w-full p-4 rounded shadow"
        >
          <div>
            {index === 0 && (
              <h1 className="border-b pb-1 font-bold text-[20px] text-[#2b6771] mb-2">
                Doctors Chamber
              </h1>
            )}
            <p className="text-[#2b6771] text-[20px] font-medium">{card.hospital}</p>
          </div>
          <p className="text-gray-600 text-[16px]">Date: {card.date}</p>
          <p className="text-gray-600 text-[16px]">Day: {card.day}</p>
          <p className="text-gray-600 text-[16px]">Time: {card.time}</p>
          <p className="text-gray-800 text-[16px] font-semibold mt-2">
            Doctor Visited Price: {card.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DoctorCards;
