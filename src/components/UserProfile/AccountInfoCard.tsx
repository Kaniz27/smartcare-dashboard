import { UserProfile } from "@/types/User";
import {
    Card,
    Typography,
    Descriptions,
} from "antd";

const { Title, Text } = Typography;
interface AccountInfoCardProps {
    profile: UserProfile;
}

const AccountInfoCard: React.FC<AccountInfoCardProps> = ({ profile }) => (
    <Card
        variant="outlined"
        title={<Title level={3}>Account Information</Title>}
        className="shadow-xl  mb-6"
    >
        <Descriptions column={1} className="w-full">
            <Descriptions.Item label="User ID">{profile.id}</Descriptions.Item>
            <Descriptions.Item label="Role">
                <Text strong>{profile.role}</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Organization">
                {profile.organization}
            </Descriptions.Item>
            <Descriptions.Item label="Last Login">
                {profile.lastLogin}
            </Descriptions.Item>
        </Descriptions>
    </Card>
);

export default AccountInfoCard