import {
    Card,
    Avatar,
    Typography,
    Button,
    Space,
} from "antd";
import {
    MailOutlined,
    PhoneOutlined,
    GlobalOutlined,
    EditOutlined,
} from "@ant-design/icons";
import { UserProfile } from "../../../types";
import { img } from "../../../theme";
import Image from "next/image";

const { Title, Text } = Typography;

interface AvatarCardProps {
    profile: UserProfile;
    onEdit: () => void;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ profile, onEdit }) => (
    <Card
        className="shadow-xl! ! border-t-4! border-t-blue-500!"
        cover={
            <div className="p-8! bg-blue-50 flex! flex-col! items-center!">
                <Avatar
                    size={120}
                    className="bg-red-500! mb-4! text-4xl! shadow-2xl!"
                    icon={
                        <Image
                            src={img?.avatar}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    }
                />
                <Title level={3} className="">
                    {profile.name}
                </Title>
                <Text type="secondary">{profile.role}</Text>
                <Button
                    type="primary"
                    icon={<EditOutlined />}
                    className="mt-4 bg-blue-500! hover:bg-blue-600! transition duration-200 shadow-md!"
                    onClick={onEdit}
                >
                    Edit Profile
                </Button>
            </div>
        }
    >
        <Space direction="vertical" size="middle" className="w-full">
            <div className="flex items-center text-gray-700">
                <MailOutlined className="mr-3 text-lg text-blue-500!" />
                <Text>{profile.email}</Text>
            </div>
            <div className="flex items-center text-gray-700">
                <PhoneOutlined className="mr-3 text-lg text-blue-500!" />
                <Text>{profile.phone}</Text>
            </div>
            <div className="flex items-center text-gray-700">
                <GlobalOutlined className="mr-3 text-lg text-blue-500!" />
                <Text>{profile.organization}</Text>
            </div>
        </Space>
    </Card>
);

export default AvatarCard;