
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import { EditProfileSheet, ProfileFormValues } from '@/components/EditProfileSheet';
import { UserProfile } from '@/types';

interface ProfileCardProps {
  user: UserProfile;
  onSave: (newUserData: ProfileFormValues) => void;
}

export const ProfileCard = ({ user, onSave }: ProfileCardProps) => {
  const xpProgress = (user.xp / user.xpToNext) * 100;

  return (
    <Card className="p-6 mb-6 rounded-3xl shadow-md relative">
      <div className="absolute top-6 right-6">
        <EditProfileSheet user={user} onSave={onSave}>
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Chỉnh sửa
          </Button>
        </EditProfileSheet>
      </div>
      
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
  );
};
