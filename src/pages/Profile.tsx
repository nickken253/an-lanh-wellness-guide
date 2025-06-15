
import { useState } from 'react';
import BottomNavigation from '@/components/BottomNavigation';
import { UserProfile, BadgeInfo } from '@/types';
import { ProfileCard } from '@/components/profile/ProfileCard';
import { ProfileStats } from '@/components/profile/ProfileStats';
import { BadgesCollection } from '@/components/profile/BadgesCollection';
import { ProfileMenu } from '@/components/profile/ProfileMenu';
import { ProfileFormValues } from '@/components/EditProfileSheet';

const Profile = () => {
  const [user, setUser] = useState<UserProfile>({
    name: 'An Bùi',
    email: 'an.bui@example.com',
    level: 8,
    xp: 2350,
    xpToNext: 2500,
    totalMinutes: 420,
    totalSessions: 28,
    joinDate: '2024-01-01',
    height: 175,
    weight: 68,
    gender: 'male',
    dob: '1995-05-20',
  });

  const handleProfileUpdate = (newUserData: ProfileFormValues) => {
    setUser(prevUser => ({ ...prevUser, ...newUserData }));
  };

  const badges: BadgeInfo[] = [
    { id: 1, name: 'Người mới', icon: '🌱', description: 'Hoàn thành buổi tập đầu tiên', earned: true },
    { id: 2, name: 'Kiên trì', icon: '🔥', description: 'Tập 7 ngày liên tiếp', earned: true },
    { id: 3, name: 'Thử thách', icon: '🎯', description: 'Hoàn thành 1 thử thách', earned: true },
    { id: 4, name: 'Thời gian', icon: '⏰', description: 'Tập tổng cộng 10 giờ', earned: true },
    { id: 5, name: 'Thánh tập', icon: '💪', description: 'Tập 30 ngày trong tháng', earned: false },
    { id: 6, name: 'Bậc thầy', icon: '🧘‍♀️', description: 'Đạt level 10', earned: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 flex flex-col items-center">
      <div className="p-6 w-full max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-serif font-bold text-foreground">Hồ sơ cá nhân</h1>
        </div>

        <ProfileCard user={user} onSave={handleProfileUpdate} />
        
        <ProfileStats totalSessions={user.totalSessions} totalMinutes={user.totalMinutes} />

        <BadgesCollection badges={badges} />

        <ProfileMenu />
      </div>

      <BottomNavigation currentTab="profile" />
    </div>
  );
};

export default Profile;
