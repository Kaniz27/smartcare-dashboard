import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Doctor = {
  id: number;
  name: string;
  image: string | StaticImport;
  hospital: string;
  degree: string;
  bio: string;
  schedule: string; // e.g., "Mon-Fri 10am-5pm"
};

export const doctorList: Doctor[] = [
  {
    id: 1,
    name: "Dr. Karar Mahmud",
    image: "https://i.pravatar.cc/150?img=10",
    hospital: "Square Hospital Ltd.",
    degree: "MBBS, FCPS",
    bio: "Expert in General Medicine with 10 years of experience.",
    schedule: "Mon-Fri 10:00 AM - 5:00 PM",
  },
  {
    id: 2,
    name: "Dr. Ayesha Rahman",
    image: "https://i.pravatar.cc/150?img=11",
    hospital: "United Hospital Dhaka",
    degree: "MBBS, MD",
    bio: "Specialist in Pediatrics with 8 years of practice.",
    schedule: "Tue-Sat 9:00 AM - 4:00 PM",
  },
  {
    id: 3,
    name: "Dr. Imran Hossain",
    image: "https://i.pravatar.cc/150?img=12",
    hospital: "Evercare Hospital Dhaka",
    degree: "MBBS, MS (Surgery)",
    bio: "Experienced Surgeon focusing on minimally invasive techniques.",
    schedule: "Mon-Thu 11:00 AM - 6:00 PM",
  },
  // aro doctor add korte paro
];
