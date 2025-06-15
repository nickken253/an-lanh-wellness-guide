
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BottomNavigation from '@/components/BottomNavigation';
import { Home, Search, History, Profile } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [streak, setStreak] = useState(7);
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Chào buổi sáng';
    if (hour < 18) return 'Chào buổi chiều';
    return 'Chào buổi tối';
  };

  const todayWorkout = {
    title: 'Yoga Chào Mặt Trời',
    duration: '15 phút',
    level: 'Cơ bản',
    description: 'Khởi động hoàn hảo cho ngày mới với chuỗi động tác truyền thống',
    image: '🌅'
  };

  const challenges = [
    {
      title: 'Thử thách 30 ngày',
      progress: 7,
      total: 30,
      description: 'Tập yoga mỗi ngày trong 30 ngày'
    }
  ];

  const recommendations = [
    { title: 'Yoga thư giãn tối', duration: '20 phút', image: '🌙', type: 'evening' },
    { title: 'Yoga cho lưng khỏe', duration: '25 phút', image: '🦴', type: 'therapy' },
    { title: 'Thiền chánh niệm', duration: '10 phút', image: '🧘‍♀️', type: 'meditation' },
    { title: 'Yoga năng lượng', duration: '30 phút', image: '⚡', type: 'energy' }
  ];

  return (
    <div className="min-h-screen bg-ivory-50 pb-20">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-serif font-bold text-sage-800 mb-2">
            {getGreeting()}, An! 👋
          </h1>
          <p className="text-sage-600">Hãy bắt đầu ngày mới với năng lượng tích cực</p>
        </div>

        {/* Streak Counter */}
        <Card className="p-6 mb-6 gradient-coral text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-3xl">🔥</span>
                <span className="text-3xl font-bold">{streak}</span>
              </div>
              <p className="text-white/90 font-medium">ngày liên tiếp</p>
              <p className="text-white/80 text-sm">Bạn đang làm rất tốt!</p>
            </div>
            <div className="text-right">
              <div className="text-4xl mb-2">🏆</div>
              <p className="text-white/90 text-sm">Streak Master</p>
            </div>
          </div>
        </Card>

        {/* Today's Workout */}
        <Card className="p-6 mb-6 bg-white shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">{todayWorkout.image}</div>
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-sage-800 mb-2">
                Bài tập cho hôm nay
              </h2>
              <h3 className="text-lg font-semibold text-sage-700 mb-1">
                {todayWorkout.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-sage-600 mb-3">
                <span>⏱️ {todayWorkout.duration}</span>
                <span>📊 {todayWorkout.level}</span>
              </div>
              <p className="text-sage-600 text-sm mb-4">
                {todayWorkout.description}
              </p>
              <Button className="w-full gradient-sage text-white font-medium py-3 rounded-xl">
                Bắt đầu tập 🚀
              </Button>
            </div>
          </div>
        </Card>

        {/* Current Challenge */}
        {challenges.map((challenge, index) => (
          <Card key={index} className="p-6 mb-6 bg-white shadow-lg">
            <h2 className="text-lg font-serif font-bold text-sage-800 mb-3">
              Thử thách đang tham gia
            </h2>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-sage-700">{challenge.title}</h3>
                <p className="text-sm text-sage-600">{challenge.description}</p>
              </div>
              <div className="text-2xl">🎯</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-sage-600">Tiến trình</span>
                <span className="font-semibold text-sage-800">
                  {challenge.progress}/{challenge.total} ngày
                </span>
              </div>
              <div className="w-full bg-sage-100 rounded-full h-2">
                <div 
                  className="gradient-sage h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </Card>
        ))}

        {/* Recommendations */}
        <div className="mb-6">
          <h2 className="text-lg font-serif font-bold text-sage-800 mb-4">
            Khám phá thêm
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {recommendations.map((item, index) => (
              <Card key={index} className="p-4 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-2xl mb-2">{item.image}</div>
                <h3 className="font-semibold text-sage-800 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-sage-600">⏱️ {item.duration}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="p-4 text-center bg-white shadow-sm">
            <div className="text-2xl mb-2">📅</div>
            <div className="text-2xl font-bold text-sage-800 mb-1">12</div>
            <p className="text-xs text-sage-600">Buổi tập</p>
          </Card>
          <Card className="p-4 text-center bg-white shadow-sm">
            <div className="text-2xl mb-2">⏰</div>
            <div className="text-2xl font-bold text-sage-800 mb-1">180</div>
            <p className="text-xs text-sage-600">Phút tập</p>
          </Card>
          <Card className="p-4 text-center bg-white shadow-sm">
            <div className="text-2xl mb-2">🏅</div>
            <div className="text-2xl font-bold text-sage-800 mb-1">5</div>
            <p className="text-xs text-sage-600">Huy hiệu</p>
          </Card>
        </div>
      </div>

      <BottomNavigation currentTab="home" />
    </div>
  );
};

export default Dashboard;
