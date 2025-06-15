
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { SettingsDialog } from '@/components/SettingsDialog';
import { UserRoundCog } from 'lucide-react';

const menuItems = [
    { icon: '🔔', label: 'Thông báo', action: () => console.log('Notifications') },
    { icon: '💡', label: 'Mẹo tập luyện', action: () => console.log('Tips') },
    { icon: '📞', label: 'Hỗ trợ', action: () => console.log('Support') },
    { icon: 'ℹ️', label: 'Giới thiệu ứng dụng', action: () => console.log('About') },
];

export const ProfileMenu = () => {
    const navigate = useNavigate();

    return (
        <Card className="p-2 rounded-3xl shadow-md">
            <div className="space-y-1">
                <SettingsDialog>
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left p-3 h-auto hover:bg-secondary rounded-2xl"
                >
                    <UserRoundCog className="w-5 h-5 mr-3" />
                    <span className="text-foreground">Cài đặt tài khoản</span>
                </Button>
                </SettingsDialog>
                
                {menuItems.map((item, index) => (
                <Button
                    key={index}
                    variant="ghost"
                    onClick={item.action}
                    className="w-full justify-start text-left p-3 h-auto hover:bg-secondary rounded-2xl"
                >
                    <span className="text-xl mr-3">{item.icon}</span>
                    <span className="text-foreground">{item.label}</span>
                </Button>
                ))}
                
                <hr className="my-2 border-border" />
                
                <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="w-full justify-start text-left p-3 h-auto hover:bg-destructive/10 text-destructive rounded-2xl"
                >
                <span className="text-xl mr-3">🚪</span>
                <span>Đăng xuất</span>
                </Button>
            </div>
        </Card>
    );
};
