export type MedicalHistoryItem = {
  id: number;
  patientName: string;
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
  lastAppointmentDate?: string; // optional
  department: string;
};

export const medicalHistoryData: MedicalHistoryItem[] = [
  {
    id: 1,
    patientName: "Karar Mahmud",
    doctorName: "Dr. Ayesha Rahman",
    appointmentDate: "2025-05-19",
    appointmentTime: "10:00 AM",
    lastAppointmentDate: "2025-04-15",
    department: "Cardiology",
  },
  {
    id: 2,
    patientName: "Rahim Uddin",
    doctorName: "Dr. Imran Hossain",
    appointmentDate: "2025-05-20",
    appointmentTime: "02:00 PM",
    lastAppointmentDate: "2025-03-10",
    department: "Orthopedics",
  },
  {
    id: 3,
    patientName: "Sadia Akter",
    doctorName: "Dr. Karar Mahmud",
    appointmentDate: "2025-05-21",
    appointmentTime: "11:30 AM",
    lastAppointmentDate: "2025-02-28",
    department: "Dermatology",
  },
  {
    id: 4,
    patientName: "Monir Hossain",
    doctorName: "Dr. Ayesha Rahman",
    appointmentDate: "2025-05-22",
    appointmentTime: "09:00 AM",
    lastAppointmentDate: "2025-01-15",
    department: "Pediatrics",
  },
  {
    id: 5,
    patientName: "Shamima Begum",
    doctorName: "Dr. Imran Hossain",
    appointmentDate: "2025-05-23",
    appointmentTime: "03:00 PM",
    lastAppointmentDate: "2025-04-10",
    department: "Neurology",
  },
];
