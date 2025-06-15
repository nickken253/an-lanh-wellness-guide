
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search, History, User } from 'lucide-react';

interface BottomNavigationProps {
  currentTab: 'home' | 'explore' | 'history' | 'profile';
}

const BottomNavigation = ({ currentTab }: BottomNavigationProps) => {
  const navigate = useNavigate();

  const tabs = [
    { id: 'home', label: 'Trang chủ', icon: Home, path: '/dashboard' },
    { id: 'explore', label: 'Khám phá', icon: Search, path: '/explore' },
    { id: 'history', label: 'Lịch sử', icon: History, path: '/history' },
    { id: 'profile', label: 'Hồ sơ', icon: User, path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 px-4 py-3 safe-area-bottom z-50">
      <div className="w-full max-w-md mx-auto glass-effect rounded-2xl shadow-lg shadow-sage-200/50 flex justify-around items-center p-1.5 space-x-1.5">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            onClick={() => navigate(tab.path)}
            className={`flex-1 flex flex-col items-center justify-center h-14 rounded-xl transition-all duration-300 ${
              currentTab === tab.id
                ? 'bg-sage-500 text-ivory-50 shadow-md shadow-sage-500/30'
                : 'text-sage-500 hover:bg-sage-100/50'
            }`}
          >
            <tab.icon size={20} />
            <span className="text-[11px] font-medium mt-1">{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
