"use client";

import React, { useState } from "react";

const DoctorTabs = () => {
  const [activeTab, setActiveTab] = useState<"about" | "education" | "experience">("about");

  return (
    <div className="w-full max-w-5xl h-[350px] mt-8 mx-auto bg-white shadow rounded-lg p-4">
      {/* Tabs */}
      <div className="flex justify-between border-b  p-6 border-gray-300 mb-4">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-4 py-2 text-[16px] font-semibold ${
            activeTab === "about" ? "text-blue-600 border-b-2 border-blue-600" : "text-[#2b6771]"
          }`}
        >
          About
        </button>

        <button
          onClick={() => setActiveTab("education")}
          className={`px-4 py-2   text-[16px] font-semibold ${
            activeTab === "education" ? "text-blue-600 border-b-2 border-blue-600" : "text-[#2b6771]"
          }`}
        >
          Education
        </button>

        <button
          onClick={() => setActiveTab("experience")}
          className={`px-4 py-2 text-[16px] font-semibold ${
            activeTab === "experience" ? "text-blue-600 border-b-2 border-blue-600" : "text-[#2b6771]"
          }`}
        >
          Experience
        </button>
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 text-[16px] mt-3 space-y-2">
        {activeTab === "about" && (
          <p className="mt-10">
            Dr. Karar Mahmud is a Senior Consultant Orthopedic Surgeon at Apollo Hospitals, Chennai, with over 25 years of experience. He specializes in trauma, sports injury, and joint replacement surgeries, including robotic hip and knee replacements. Dr. Kosygin has been recognized as one of India's most inspiring orthopedic surgeons and has treated patients globally.
          </p>
        )}

        {activeTab === "education" && (
          <p className="mt-10">
            MBBS, MD (Orthopedics), Fellowship in Joint Replacement, Training in Robotic Orthopedic Surgery from leading institutions in India and abroad.
          </p>
        )}

        {activeTab === "experience" && (
          <p className="mt-10">
            Over 25 years of experience in orthopedic surgery, specializing in trauma, sports injuries, adult complex reconstruction, bone and soft tissue infections, regenerative cartilage techniques, and tumor reconstruction. Active in teaching and training medical professionals across more than 15 countries.
          </p>
        )}
      </div>
    </div>
  );
};

export default DoctorTabs;
