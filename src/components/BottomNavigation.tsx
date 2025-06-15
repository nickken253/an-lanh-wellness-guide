
import { useNavigate } from 'react-router-dom';
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
      <div className="w-full max-w-md mx-auto bg-secondary/80 backdrop-blur-lg rounded-2xl shadow-lg flex justify-around items-center p-1.5">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className="flex-1 flex flex-col items-center justify-center gap-1 cursor-pointer group rounded-xl py-1"
          >
            <div className={`flex items-center justify-center h-8 w-16 rounded-full transition-all duration-300 ${
              currentTab === tab.id
                ? 'bg-primary/90 text-primary-foreground'
                : 'text-muted-foreground'
            }`}>
              <tab.icon size={22} />
            </div>
            <span className={`text-xs font-medium transition-all duration-300 ${
              currentTab === tab.id
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
