"use client";

import React from 'react';
import DoctorCards from './history/DoctorsCard';
import DoctorProfile from './history/DoctorProfile';
import DoctorTabs from './history/DoctorTabs';

const Page = () => {
  return (
    <div className="flex gap-2 p-4">
  {/* Doctor Cards 40% */}
  <div className="w-[35%]">
    <DoctorCards />
  </div>

  {/* Doctor Profile 60% */}
  <div className="w-[65%]">
    <DoctorProfile />
    <DoctorTabs></DoctorTabs>
  </div>
</div>

  );
};

export default Page;
