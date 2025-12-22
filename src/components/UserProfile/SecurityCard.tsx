
import {
    Card,
    Typography,
    Button,
} from "antd";
import {
    LockOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const SecurityCard: React.FC = () => (
    <Card
        title={
            <Title level={3}>
                <LockOutlined /> Security & Access
            </Title>
        }
        className="shadow-xl "
    >
        <Text className="text-gray-600 block mb-4">
            Manage your password and two-factor authentication settings.
        </Text>
        <Button
            type="default"
            danger
            className="border-red-400 text-red-600 hover:border-red-500"
        >
            Change Password
        </Button>
    </Card>
);

export default SecurityCard