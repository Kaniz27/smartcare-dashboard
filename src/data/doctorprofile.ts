// data/doctorProfile.ts
export interface DoctorProfile {
  id: number;
  name: string;
  designation: string;
  qualifications: string[];
  email: string;
  address: string;
  experienceYears: number;
  experienceSince: number;
  rating: number;
  ratingDescription: string;
  image: string; 
}

export const doctorProfileData: DoctorProfile[] = [
  {
    id: 1,
    name: "Karar Mahmud",
    designation: "Consultant Retina & UVEA",
    qualifications: ["MBBS", "DDV (DU)", "MSc (SUB)", "DCPD (UK)"],
    email: "reyananisd@gmail.com",
    address: "21 Hazelmere Close, Billin",
    experienceYears: 16,
    experienceSince: 2011,
    rating: 5,
    ratingDescription: "This Doctor rating is Good",
    image: "/photo_4-removebg-preview 1.png",
  },
];
