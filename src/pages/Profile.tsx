
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import BottomNavigation from '@/components/BottomNavigation';
import { useNavigate } from 'react-router-dom';
import { SettingsDialog } from '@/components/SettingsDialog';
import { UserRoundCog } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const [user] = useState({
    name: 'An Bùi',
    email: 'an.bui@example.com',
    level: 8,
    xp: 2350,
    xpToNext: 2500,
    totalMinutes: 420,
    totalSessions: 28,
    joinDate: '2024-01-01'
  });

  const badges = [
    { id: 1, name: 'Người mới', icon: '🌱', description: 'Hoàn thành buổi tập đầu tiên', earned: true },
    { id: 2, name: 'Kiên trì', icon: '🔥', description: 'Tập 7 ngày liên tiếp', earned: true },
    { id: 3, name: 'Thử thách', icon: '🎯', description: 'Hoàn thành 1 thử thách', earned: true },
    { id: 4, name: 'Thời gian', icon: '⏰', description: 'Tập tổng cộng 10 giờ', earned: true },
    { id: 5, name: 'Thánh tập', icon: '💪', description: 'Tập 30 ngày trong tháng', earned: false },
    { id: 6, name: 'Bậc thầy', icon: '🧘‍♀️', description: 'Đạt level 10', earned: false },
  ];

  const menuItems = [
    { icon: '🔔', label: 'Thông báo', action: () => console.log('Notifications') },
    { icon: '💡', label: 'Mẹo tập luyện', action: () => console.log('Tips') },
    { icon: '📞', label: 'Hỗ trợ', action: () => console.log('Support') },
    { icon: 'ℹ️', label: 'Giới thiệu ứng dụng', action: () => console.log('About') },
  ];

  const xpProgress = (user.xp / user.xpToNext) * 100;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-serif font-bold text-foreground">Hồ sơ cá nhân</h1>
        </div>

        {/* Profile Card */}
        <Card className="p-6 mb-6 rounded-3xl shadow-md">
          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="w-16 h-16 bg-secondary">
              <AvatarFallback className="text-secondary-foreground text-xl font-bold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-foreground">{user.name}</h2>
              <p className="text-muted-foreground text-sm">{user.email}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge variant="secondary">Level {user.level}</Badge>
                <span className="text-xs text-muted-foreground">
                  Tham gia từ {new Date(user.joinDate).toLocaleDateString('vi-VN')}
                </span>
              </div>
            </div>
          </div>

          {/* XP Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Kinh nghiệm</span>
              <span className="font-semibold text-foreground">{user.xp}/{user.xpToNext} XP</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{ width: `${xpProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Còn {user.xpToNext - user.xp} XP để lên level {user.level + 1}
            </p>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 text-center rounded-2xl shadow-md">
            <div className="text-2xl mb-2">📅</div>
            <div className="text-xl font-bold text-foreground mb-1">{user.totalSessions}</div>
            <p className="text-xs text-muted-foreground">Buổi tập</p>
          </Card>
          <Card className="p-4 text-center rounded-2xl shadow-md">
            <div className="text-2xl mb-2">⏰</div>
            <div className="text-xl font-bold text-foreground mb-1">{user.totalMinutes}</div>
            <p className="text-xs text-muted-foreground">Phút tập</p>
          </Card>
        </div>

        {/* Badges Collection */}
        <Card className="p-6 mb-6 rounded-3xl shadow-md">
          <h3 className="font-serif font-bold text-foreground mb-4">Bộ sưu tập huy hiệu</h3>
          <div className="grid grid-cols-3 gap-4">
            {badges.map((badge) => (
              <Dialog key={badge.id}>
                <DialogTrigger asChild>
                  <button
                    className={`text-center p-3 rounded-2xl transition-all cursor-pointer ${
                      badge.earned
                        ? 'bg-card shadow-md active:scale-95'
                        : 'bg-muted/50 opacity-60'
                    }`}
                    disabled={!badge.earned}
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <h4 className={`text-xs font-semibold ${
                      badge.earned ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {badge.name}
                    </h4>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card rounded-3xl border-none shadow-lg">
                  <div className="text-center p-4">
                    <div className="text-6xl mb-4">{badge.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">{badge.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{badge.description}</p>
                    {badge.earned ? (
                      <div className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full inline-block">
                        ✅ Đã đạt được
                      </div>
                    ) : (
                      <div className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full inline-block">
                        🔒 Chưa mở khóa
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </Card>

        {/* Menu Items */}
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
      </div>

      <BottomNavigation currentTab="profile" />
    </div>
  );
};

export default Profile;
