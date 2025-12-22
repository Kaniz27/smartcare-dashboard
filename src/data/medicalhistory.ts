import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type MedicalHistoryItem = {
  id: number;
  name: string;
  status: "Pending" | "Completed" | "Withdraw";
  date: string;
  time: string;
  phone: string;
  image: string |StaticImport;
  hospital: string;
};

export const medicalHistoryData:MedicalHistoryItem[] = [
  {
    id: 1,
    name: "Karar Mahmud",
    status: "Pending",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://i.pravatar.cc/150?img=1",
    hospital: "Square Hospital Ltd.",
  },
  {
    id: 2,
    name: "Karar Mahmud",
    status: "Completed",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://i.pravatar.cc/150?img=2",
    hospital: "United Hospital Dhaka",
  },
  {
    id: 3,
    name: "Karar Mahmud",
    status: "Completed",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://i.pravatar.cc/150?img=3",
    hospital: "Labaid Specialized Hospital",
  },
  {
    id: 4,
    name: "Karar Mahmud",
    status: "Withdraw",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://i.pravatar.cc/150?img=4",
    hospital: "Evercare Hospital Dhaka",
  },
  {
    id: 5,
    name: "Karar Mahmud",
    status: "Withdraw",
    date: "May 19, 2025",
    time: "03:20 pm",
    phone: "01601528792",
    image: "https://i.pravatar.cc/150?img=5",
    hospital: "Popular Diagnostic Centre",
  },
];
