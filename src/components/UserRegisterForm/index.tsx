// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { Button, Form, Row, Col, Card, Typography, Alert, App } from "antd";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import dayjs from "dayjs";
// import customParseFormat from "dayjs/plugin/customParseFormat";
// import { useRegisterMerchantMutation } from "../../../lib/api/merchantApi";
// import FormTextInput from "../../ui/FormTextInput";
// import FormNumberInput from "../../ui/FormNumberInput";
// import { merchantSchema, MerchantFormData } from "../../../schema";
// import { useRouter } from "next/navigation";

// dayjs.extend(customParseFormat);

// const { Title, Text } = Typography;

// type MerchantFormDataWithFiles = MerchantFormData & {
//   articleIncoporation?: File;
//   licence?: File;
//   passport?: File;
//   utilityBill?: File;
// };

// const UserRegisterForm = () => {
//   const { message } = App.useApp();
//   const router = useRouter();
//   const {
//     handleSubmit,
//     control,
//     setValue,
//     formState: { errors },
//   } = useForm<MerchantFormDataWithFiles>({
//     resolver: zodResolver(merchantSchema),
//     defaultValues: {
//       companyName: "",
//       corporateName: "",
//       businessAddress: "",
//       billingAddress: "",
//       // Ensure number inputs are initialized to a default value that matches your schema type (e.g., 0 or '').
//       companyZip: undefined,
//       companyCity: "",
//       companyState: "",
//       corporateZip: undefined,
//       corporateCity: "",
//       corporateState: "",
//       phone: "",
//       email: "",
//       website: "",
//       ownerFirstName: "",
//       ownerLastName: "",
//       ownership: undefined,
//       ownerTItle: "",
//       ownerAddress: "",
//       ownerPhone: "",
//     },
//   });

//   const [registerMerchant, { isLoading, error }] =
//     useRegisterMerchantMutation();

//   const onSubmit = async (data: MerchantFormData) => {
//     try {
//       const formData = new FormData();

//       Object.entries(data).forEach(([key, value]) => {
//         if (value == null) return;

//         // Type guard to safely check File or FileList
//         if (typeof File !== "undefined" && value instanceof File) {
//           formData.append(key, value);
//         } else {
//           formData.append(key, String(value));
//         }
//       });

//       await registerMerchant(formData).unwrap();
//       message.success("Registration successful!");
//       router.push("/user/login");
//     } catch (err) {
//       console.error("Registration failed:", err);
//       message.error("Registration failed. Please check your inputs.");
//     }
//   };

//   const handleFileChange = (
//     key: keyof MerchantFormDataWithFiles,
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const file = e.target.files?.[0];
//     if (file) setValue(key, file);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
//       <div className="max-w-7xl mx-auto bg-white shadow-xl  p-6 lg:p-10 my-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <Title level={2} className="text-blue-700">
//             Merchant Application Form
//           </Title>
//           <Alert
//             message="Please re-check. Permissible documents (Complete and Upload) with your application."
//             type="warning"
//             showIcon
//             className="my-4"
//           />
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Section 1: Pre-Application Information */}
//           <Card
//             title={
//               <Text strong className="text-lg">
//                 Section 1: Company Information
//               </Text>
//             }
//           >
//             <Row gutter={[24, 16]}>
//               <Col xs={24} md={12}>
//                 <FormTextInput
//                   type="text"
//                   name="companyName"
//                   control={control}
//                   label="Client's Business Name (Doing Business As)"
//                   placeholder="Business Name"
//                   error={errors.companyName}
//                 />
//               </Col>
//               <Col xs={24} md={12}>
//                 <FormTextInput
//                   type="text"
//                   name="corporateName"
//                   control={control}
//                   label="Client's Legal / Corporate Name (Use Blank for Proprietorship)"
//                   placeholder="Legal Name"
//                   error={errors.corporateName}
//                 />
//               </Col>
//             </Row>

//             <Row gutter={[24, 16]}>
//               <Col xs={24} md={12}>
//                 <FormTextInput
//                   type="text"
//                   name="businessAddress"
//                   control={control}
//                   label="Business Address"
//                   placeholder="Street Address"
//                   error={errors.businessAddress}
//                 />
//               </Col>
//               <Col xs={24} md={12}>
//                 <FormTextInput
//                   type="text"
//                   name="billingAddress"
//                   control={control}
//                   label="Billing Address (If Different Than Location Address)"
//                   placeholder="Billing Address"
//                   error={errors.billingAddress}
//                 />
//               </Col>
//               <Col xs={24} md={4}>
//                 <FormTextInput
//                   type="text"
//                   name="companyCity"
//                   control={control}
//                   label="City"
//                   placeholder="City"
//                   error={errors.companyCity}
//                 />
//               </Col>
//               <Col xs={24} md={4}>
//                 <FormTextInput
//                   type="text"
//                   name="companyState"
//                   control={control}
//                   label="State"
//                   placeholder="State"
//                   error={errors.companyState}
//                 />
//               </Col>
//               <Col xs={24} md={4}>
//                 <FormNumberInput
//                   name="companyZip"
//                   control={control}
//                   label="ZIP"
//                   placeholder="ZIP"
//                   error={errors.companyZip}
//                 />
//               </Col>
//               <Col xs={24} md={4}>
//                 <FormTextInput
//                   type="text"
//                   name="corporateCity"
//                   control={control}
//                   label="City"
//                   placeholder="City"
//                   error={errors.corporateCity}
//                 />
//               </Col>
//               <Col xs={24} md={4}>
//                 <FormTextInput
//                   type="text"
//                   name="corporateState"
//                   control={control}
//                   label="State"
//                   placeholder="State"
//                   error={errors.corporateState}
//                 />
//               </Col>
//               <Col xs={24} md={4}>
//                 <FormNumberInput
//                   name="corporateZip"
//                   control={control}
//                   label="ZIP"
//                   placeholder="ZIP"
//                   error={errors.corporateZip}
//                 />
//               </Col>
//             </Row>

//             <Row gutter={[24, 16]}>
//               <Col xs={24} md={8}>
//                 <FormTextInput
//                   type="text"
//                   name="phone"
//                   control={control}
//                   label="Client Phone No."
//                   placeholder="Phone Number"
//                   error={errors.phone}
//                 />
//               </Col>
//               <Col xs={24} md={8}>
//                 <FormTextInput
//                   type="email"
//                   name="email"
//                   control={control}
//                   label="Client E-mail Address"
//                   placeholder="Email"
//                   error={errors.email}
//                 />
//               </Col>
//               <Col xs={24} md={8}>
//                 <FormTextInput
//                   type="url"
//                   name="website"
//                   control={control}
//                   label="Website Address (Optional)"
//                   placeholder="Website URL"
//                   error={errors.website}
//                 />
//               </Col>
//             </Row>
//           </Card>

//           {/* Section 1.2: Owner / Partner / Officer 1 */}
//           <Card
//             title={
//               <Text strong className="text-lg">
//                 OWNER / PARTNER / OFFICER 1
//               </Text>
//             }
//           >
//             <Row gutter={[24, 16]}>
//               <Col xs={24} md={8}>
//                 <FormTextInput
//                   type="text"
//                   name="ownerFirstName"
//                   control={control}
//                   label="First Name"
//                   placeholder="First Name"
//                   error={errors.ownerFirstName}
//                 />
//               </Col>
//               <Col xs={24} md={8}>
//                 <FormTextInput
//                   type="text"
//                   name="ownerLastName"
//                   control={control}
//                   label="Last Name"
//                   placeholder="Last Name"
//                   error={errors.ownerLastName}
//                 />
//               </Col>
//               <Col xs={24} md={8}>
//                 <FormNumberInput
//                   name="ownership"
//                   control={control}
//                   label="% Ownership"
//                   placeholder="% Ownership"
//                   error={errors.ownership}
//                 />
//               </Col>
//             </Row>

//             <Row gutter={[24, 16]}>
//               <Col xs={24} md={8}>
//                 <FormTextInput
//                   name="ownerTItle"
//                   control={control}
//                   label="Title"
//                   placeholder="Owner TItle"
//                   error={errors.ownerTItle}
//                 />
//               </Col>
//               <Col xs={24} md={8}>
//                 <FormTextInput
//                   name="ownerAddress"
//                   control={control}
//                   label="Home Address (No P.O. Box)"
//                   placeholder="Home Address"
//                   error={errors.ownerAddress}
//                 />
//               </Col>
//               <Col xs={24} md={8}>
//                 <FormTextInput
//                   name="ownerPhone"
//                   control={control}
//                   label="Phone"
//                   placeholder="ownerPhone"
//                   error={errors.ownerPhone}
//                 />
//               </Col>
//             </Row>
//           </Card>

//           {/* Document Uploads */}
//           <Card
//             title={
//               <Text strong className="text-lg">
//                 Document Uploads
//               </Text>
//             }
//           >
//             <Title level={4}>Documents Required:</Title>

//             <Row gutter={[24, 16]}>
//               {(
//                 [
//                   "articleIncoporation",
//                   "licence",
//                   "passport",
//                   "utilityBill",
//                 ] as const
//               ).map((key) => (
//                 <Col xs={24} md={12} key={key}>
//                   <label>
//                     {key
//                       .replace(/([A-Z])/g, " $1")
//                       .replace(/^./, (str) => str.toUpperCase())}
//                     <input
//                       className="border py-1 px-2 w-full"
//                       type="file"
//                       onChange={(e) => handleFileChange(key, e)}
//                     />
//                   </label>
//                 </Col>
//               ))}
//             </Row>
//           </Card>

//           {/* Submit Button */}
//           <Form.Item className="text-center mt-8">
//             <Button
//               type="primary"
//               htmlType="submit"
//               size="large"
//               loading={isLoading}
//             >
//               Register Merchant
//             </Button>
//           </Form.Item>

//           {error && (
//             <Alert
//                 message={
//   <Title level={5} className="capitalize">
//  Error
//   </Title>
// }
//               description={
//                 (error as any).data?.message || "An unexpected error occurred."
//               }
//               type="error"
//               showIcon
//               className="mt-4"
//             />
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserRegisterForm;
import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
