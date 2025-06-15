
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search, History, Profile } from 'lucide-react';

interface BottomNavigationProps {
  currentTab: 'home' | 'explore' | 'history' | 'profile';
}

const BottomNavigation = ({ currentTab }: BottomNavigationProps) => {
  const navigate = useNavigate();

  const tabs = [
    { id: 'home', label: 'Trang chủ', icon: Home, path: '/dashboard' },
    { id: 'explore', label: 'Khám phá', icon: Search, path: '/explore' },
    { id: 'history', label: 'Lịch sử', icon: History, path: '/history' },
    { id: 'profile', label: 'Hồ sơ', icon: Profile, path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-sage-200 px-4 py-2 safe-area-bottom">
      <div className="flex justify-around">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            onClick={() => navigate(tab.path)}
            className={`flex-1 flex flex-col items-center space-y-1 py-3 px-2 rounded-xl transition-colors ${
              currentTab === tab.id
                ? 'text-sage-700 bg-sage-50'
                : 'text-sage-400 hover:text-sage-600 hover:bg-sage-50/50'
            }`}
          >
            <tab.icon size={20} />
            <span className="text-xs font-medium">{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
