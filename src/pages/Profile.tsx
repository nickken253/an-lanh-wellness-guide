
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import BottomNavigation from '@/components/BottomNavigation';
import { useNavigate } from 'react-router-dom';

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
    { icon: '⚙️', label: 'Cài đặt tài khoản', action: () => console.log('Settings') },
    { icon: '🔔', label: 'Thông báo', action: () => console.log('Notifications') },
    { icon: '💡', label: 'Mẹo tập luyện', action: () => console.log('Tips') },
    { icon: '📞', label: 'Hỗ trợ', action: () => console.log('Support') },
    { icon: 'ℹ️', label: 'Giới thiệu ứng dụng', action: () => console.log('About') },
  ];

  const xpProgress = (user.xp / user.xpToNext) * 100;

  return (
    <div className="min-h-screen bg-ivory-50 pb-20">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-serif font-bold text-sage-800">Hồ sơ cá nhân</h1>
        </div>

        {/* Profile Card */}
        <Card className="p-6 mb-6 bg-white shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="w-16 h-16 bg-sage-500">
              <AvatarFallback className="text-white text-xl font-bold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-sage-800">{user.name}</h2>
              <p className="text-sage-600 text-sm">{user.email}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge className="bg-sage-100 text-sage-700">Level {user.level}</Badge>
                <span className="text-xs text-sage-500">
                  Tham gia từ {new Date(user.joinDate).toLocaleDateString('vi-VN')}
                </span>
              </div>
            </div>
          </div>

          {/* XP Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-sage-600">Kinh nghiệm</span>
              <span className="font-semibold text-sage-800">{user.xp}/{user.xpToNext} XP</span>
            </div>
            <div className="w-full bg-sage-100 rounded-full h-3">
              <div 
                className="gradient-sage h-3 rounded-full transition-all duration-300"
                style={{ width: `${xpProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-sage-500 mt-1">
              Còn {user.xpToNext - user.xp} XP để lên level {user.level + 1}
            </p>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 text-center bg-white shadow-sm">
            <div className="text-2xl mb-2">📅</div>
            <div className="text-xl font-bold text-sage-800 mb-1">{user.totalSessions}</div>
            <p className="text-xs text-sage-600">Buổi tập</p>
          </Card>
          <Card className="p-4 text-center bg-white shadow-sm">
            <div className="text-2xl mb-2">⏰</div>
            <div className="text-xl font-bold text-sage-800 mb-1">{user.totalMinutes}</div>
            <p className="text-xs text-sage-600">Phút tập</p>
          </Card>
        </div>

        {/* Badges Collection */}
        <Card className="p-6 mb-6 bg-white shadow-sm">
          <h3 className="font-serif font-bold text-sage-800 mb-4">Bộ sưu tập huy hiệu</h3>
          <div className="grid grid-cols-3 gap-4">
            {badges.map((badge) => (
              <Popover key={badge.id}>
                <PopoverTrigger asChild>
                  <button
                    className={`text-center p-3 rounded-xl transition-all cursor-pointer ${
                      badge.earned
                        ? 'bg-sage-50 border-2 border-sage-200 hover:bg-sage-100'
                        : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                    }`}
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <h4 className={`text-xs font-semibold ${
                      badge.earned ? 'text-sage-800' : 'text-gray-400'
                    }`}>
                      {badge.name}
                    </h4>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-4 bg-white shadow-lg rounded-xl border border-sage-200">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{badge.icon}</div>
                    <h3 className="font-serif font-bold text-sage-800 mb-2">{badge.name}</h3>
                    <p className="text-sm text-sage-600 leading-relaxed">{badge.description}</p>
                    {badge.earned ? (
                      <div className="mt-3 px-3 py-1 bg-sage-100 text-sage-700 text-xs rounded-full inline-block">
                        ✅ Đã đạt được
                      </div>
                    ) : (
                      <div className="mt-3 px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full inline-block">
                        🔒 Chưa mở khóa
                      </div>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </Card>

        {/* Menu Items */}
        <Card className="p-4 bg-white shadow-sm">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={item.action}
                className="w-full justify-start text-left p-4 h-auto hover:bg-sage-50 rounded-xl"
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span className="text-sage-700">{item.label}</span>
              </Button>
            ))}
            
            <hr className="my-4 border-sage-100" />
            
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="w-full justify-start text-left p-4 h-auto hover:bg-red-50 text-red-600 rounded-xl"
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
