
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
    <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t z-50">
      <div className="w-full max-w-4xl mx-auto flex justify-around items-center h-[var(--bottom-nav-height)] safe-area-bottom">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className="flex-1 flex flex-col items-center justify-center gap-1 cursor-pointer h-full group"
          >
            <tab.icon
              size={24}
              className={`transition-colors duration-200 ${
                currentTab === tab.id
                  ? 'text-primary'
                  : 'text-muted-foreground group-hover:text-foreground'
              }`}
            />
            <span
              className={`text-xs font-medium transition-colors duration-200 ${
                currentTab === tab.id
                  ? 'text-primary'
                  : 'text-muted-foreground group-hover:text-foreground'
              }`}
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
