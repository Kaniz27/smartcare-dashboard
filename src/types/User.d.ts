export type User = { id: string; name: string; email: string };

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  organization: string;
  lastLogin: string;
}

export interface Profile {
  email: string;
  user_id: string;
  first_name: string;
  last_name: string;
  profile_pic?: File;
}

// export type UserProfile = {
//   companyName: string;
//   corporateName?: string;
//   businessAddress: string;
//   billingAddress?: string;
//   companyZip: number;
//   companyCity: string;
//   companyState: string;
//   corporateZip: number;
//   corporateCity?: string;
//   corporateState?: string;
//   phone: string;
//   email: string;
//   website?: string;
//   ownerFirstName: string;
//   ownerLastName: string;
//   ownership: number;
//   ownerTItle: string;
//   ownerAddress: string;
//   ownerPhone: string;
//   articleIncoporation?: File;
//   licence?: File;
//   passport?: File;
//   utilityBill?: File;
// };
