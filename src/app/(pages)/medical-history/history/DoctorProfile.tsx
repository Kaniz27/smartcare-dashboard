"use client";

import React from "react";
import Image from "next/image";
import {
  doctorProfileData,
  DoctorProfile as DoctorProfileType,
} from "@/data/doctorprofile";
import { FiMail, FiMapPin, FiStar } from "react-icons/fi";

const DoctorProfile = () => {
  const doctor: DoctorProfileType = doctorProfileData[0];

  return (
    <div className="flex bg-white p-4  rounded-xl shadow max-w-5xl gap-6">
      {/* Image */}
      <div className="flex-shrink-0 -mb-4">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={260}
          height={240}
          className="rounded-xl"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-2 justify-between w-full">
        {/* Name, Designation, Qualification */}
        <div className="space-y-1">
          <h2 className="text-[24px] font-bold">{doctor.name}</h2>
          <p className="text-gray-600 text-[18px] font-semibold">
            {doctor.designation}
          </p>
          <p className="text-gray-700 text-[18px] font-normal">
            {doctor.qualifications.join(", ")}
          </p>
        </div>

        {/* Email & Address */}
        <div className="flex gap-6 text-gray-600">
          {/* Email */}
          <div className="flex flex-col gap-1 text-gray-600">
            <div className="flex items-center gap-2">
              <FiMail className="text-gray-500" />
              <h1 className="font-medium">Email Address</h1>
            </div>
            <span className=" text-gray-700">{doctor.email}</span>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1 text-gray-600">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-gray-500" />
              <h1 className="font-medium">Address</h1>
            </div>
            <span className=" text-gray-700">{doctor.address}</span>
          </div>
        </div>

        {/* Experience & Rating */}
        <div className="flex items-center gap-6 mt-2">
          <div className="flex flex-col text-gray-700">
            <span className="font-bold text-[#2b6771] text-[14px]">Experience:</span>
            <span className="text-gray-600 ">
             <span className="text-[22px] font-bold text-black"> {doctor.experienceYears}</span> yrs (since {doctor.experienceSince})
            </span>
          </div>

          <div className="flex flex-col  font-semibold">
            <span className="font-bold text-[#2b6771]">Rating:</span>
            <div className="flex text-yellow-700 items-center gap-2">
              <FiStar />
              <span className="">
                <span className="text-[22px] font-bold text-black">{doctor.rating}</span> - <span className="text-gray-600">{doctor.ratingDescription}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
