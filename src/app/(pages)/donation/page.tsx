import React from 'react';
import DonationsGrid from './donation1/DonationsGrid';
import DonationsStatistics from './donation1/DonationsStatistics';

import MedicalHistoryTable1 from './donation1/MedicalHistoryTable1';
import ActivityGraph from './donation1/ActivityGraph';

const Page = () => {
    return (
        <div className="flex gap-6">
            {/* First child - 70% width */}
            <div className="flex-[7]">
                <DonationsGrid />
               <MedicalHistoryTable1></MedicalHistoryTable1>
            </div>

            {/* Second child - 30% width */}
            <div className="flex-[3]">
                <DonationsStatistics />
                <ActivityGraph></ActivityGraph>
            </div>
        </div>
    );
};

export default Page;
