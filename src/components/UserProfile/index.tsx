/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import {
  Typography,
  Row,
  Col,
  Alert,
} from "antd";
import AvatarCard from "./AvatarCard";
import AccountInfoCard from "./AccountInfoCard";
import SecurityCard from "./SecurityCard";
import EditProfileModal from "./EditProfileModal";
import { UserProfile } from "@/types/User";
import IsLoadingSpin from "../common/IsLoadingSpin";

const { Title, } = Typography;

const MOCK_USER_DATA: UserProfile = {
  id: "user-001",
  name: "Stratezik",
  email: "dave@stratezik.com",
  phone: "+1 782 830 5969",
  role: "Administrator",
  organization: "Stratezik Digital Inc.",
  lastLogin: "2025-11-16 10:30 AM",
};

const useGetUserProfileQuery = () => {
  const [data, setData] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(MOCK_USER_DATA);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading, isError: false };
};


const UserProfilePage: React.FC = () => {
  const { data: user, isLoading, isError } = useGetUserProfileQuery();
  const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) setProfileData(user);
  }, [user]);

  const handleEditFinish = (values:any) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setProfileData((prev) => (prev ? { ...prev, ...values } : null));
      setIsSubmitting(false);
      setIsModalOpen(false);
    }, 1500);
  };

  if (isLoading) return <IsLoadingSpin />;
  if (isError || !profileData)
    return (
      <Alert
          message={
            <Title level={5} className="capitalize">
           Error
            </Title>
          }
        description="Failed to load user profile."
        type="error"
        showIcon
        className="p-8"
      />
    );

  return (
    <>
      <Title level={2} className=" text-3xl font-extrabold">
        My Profile
      </Title>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          <AvatarCard
            profile={profileData}
            onEdit={() => setIsModalOpen(true)}
          />
        </Col>
        <Col xs={24} lg={16}>
          <AccountInfoCard profile={profileData} />
          <SecurityCard />
        </Col>
      </Row>

      <EditProfileModal
        initialValues={profileData}
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onFinish={handleEditFinish}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default UserProfilePage;
