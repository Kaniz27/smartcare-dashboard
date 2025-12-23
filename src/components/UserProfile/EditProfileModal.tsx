/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    Typography,
    Button,
    Modal,
    Form,
    Input,
} from "antd";
import {
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
    EditOutlined,
} from "@ant-design/icons";
import { UserProfile } from "@/types/User";

interface EditProfileModalProps {
    initialValues: UserProfile;
    isOpen: boolean;
    onCancel: () => void;
    onFinish: (values:any) => void;
    isSubmitting: boolean;
}

const { Title } = Typography;

const EditProfileModal: React.FC<EditProfileModalProps> = ({
    initialValues,
    isOpen,
    onCancel,
    onFinish,
    isSubmitting,
}) => (
    <Modal
        title={
            <Title level={4} className="">
                <EditOutlined /> Edit Profile
            </Title>
        }
        open={isOpen}
        onCancel={onCancel}
        footer={null}
        destroyOnHidden
    >
        <Form
            layout="vertical"
            initialValues={initialValues}
            onFinish={onFinish}
            className="mt-6"
        >
            <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: "Please input your name!" }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Full Name" />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email Address"
                rules={[
                    {
                        required: true,
                        type: "email",
                        message: "Please input a valid email!",
                    },
                ]}
            >
                <Input prefix={<MailOutlined />} placeholder="Email Address" disabled />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: "Please input your phone number!" }]}
            >
                <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
            </Form.Item>
            <Form.Item className="mt-8">
                <Button type="primary" htmlType="submit" block loading={isSubmitting}>
                    Save Changes
                </Button>
            </Form.Item>
        </Form>
    </Modal>
);

export default EditProfileModal