"use client";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import MedicalHistoryTable from "./dashboard/page";

const GoodMorningCard = () => {
  return (
   <div>
     <div
      className="w-full h-60 rounded-xl bg-cover bg-white bg-center p-6 flex items-center justify-between"
      style={{ backgroundImage: "url('/Banner.png')" }} // public folder e background
    >
      {/* Left Text Section */}
      <div className="flex flex-col  gap-1">
        <span className="text-[#2b6771] text-[34px] font-semibold">Good Morning</span>
        <span className="text-black text-[38px] font-semibold">Karar Mahmud</span>
        <span className="text-black text-[16px]">Have a nice day at work</span>
      </div>

      {/* Right Call Box */}
      <div className="flex items-center gap-3 bg-[#33abae] px-4 py-3 rounded-full">
        {/* Icon */}
        <FiPhoneCall className="text-[#2b6771] bg-white w-10 h-10 flex items-center justify-center rounded-full text-4xl p-3" />


        {/* Texts */}
        <div className="flex flex-col leading-tight w-40 h-10 justify-center">
  <span className="text-white font-semibold text-sm">IN Call</span>
  <span className="text-white text-xs">Click To End Call</span>
</div>

      </div>
     
    </div>
    <MedicalHistoryTable></MedicalHistoryTable>
   </div>
   
  );
};

export default GoodMorningCard;
