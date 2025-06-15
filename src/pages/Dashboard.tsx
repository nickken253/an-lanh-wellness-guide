
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BottomNavigation from '@/components/BottomNavigation';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    { title: 'Yoga thư giãn tối', duration: '20 phút', image: '🌙', type: 'evening', imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843' },
    { title: 'Yoga cho lưng khỏe', duration: '25 phút', image: '🦴', type: 'therapy', imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86' },
    { title: 'Thiền chánh niệm', duration: '10 phút', image: '🧘‍♀️', type: 'meditation', imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e' },
    { title: 'Yoga năng lượng', duration: '30 phút', image: '⚡', type: 'energy', imageUrl: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb' }
  ];

  const handleStartWorkout = () => {
    navigate('/workout-details');
  };

  return (
    <div className="min-h-screen bg-background pb-20 flex flex-col items-center">
      <div className="p-6 w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {getGreeting()}, An! 👋
          </h1>
          <p className="text-muted-foreground">Hãy bắt đầu ngày mới với năng lượng tích cực</p>
        </div>

        {/* Streak Counter */}
        <Card className="p-6 mb-6 rounded-3xl shadow-md text-card-foreground">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-3xl">🔥</span>
                <span className="text-3xl font-bold">{streak}</span>
              </div>
              <p className="font-medium">ngày liên tiếp</p>
              <p className="text-muted-foreground text-sm">Bạn đang làm rất tốt!</p>
            </div>
            <div className="text-right">
              <div className="text-4xl mb-2">🏆</div>
              <p className="text-muted-foreground text-sm">Streak Master</p>
            </div>
          </div>
        </Card>

        {/* Today's Workout */}
        <Card className="p-6 mb-6 rounded-3xl shadow-md">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">{todayWorkout.image}</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Bài tập cho hôm nay
              </h2>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {todayWorkout.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                <span>⏱️ {todayWorkout.duration}</span>
                <span>📊 {todayWorkout.level}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {todayWorkout.description}
              </p>
              <Button 
                onClick={handleStartWorkout}
                className="w-full font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-all"
              >
                Bắt đầu tập 🚀
              </Button>
            </div>
          </div>
        </Card>

        {/* Current Challenge */}
        {challenges.map((challenge, index) => (
          <Card key={index} className="p-6 mb-6 rounded-3xl shadow-md">
            <h2 className="text-lg font-bold text-foreground mb-3">
              Thử thách đang tham gia
            </h2>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-foreground">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </div>
              <div className="text-2xl">🎯</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tiến trình</span>
                <span className="font-semibold text-foreground">
                  {challenge.progress}/{challenge.total} ngày
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 shadow-inner">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </Card>
        ))}

        {/* Recommendations */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4">
            Khám phá thêm
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendations.map((item, index) => (
              <Card 
                key={index} 
                className="rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer active:scale-95 overflow-hidden flex flex-col"
                onClick={handleStartWorkout}
              >
                <AspectRatio ratio={16 / 9}>
                  <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-3 flex-grow">
                  <div className='flex items-start space-x-2'>
                    <div className="text-xl mt-0.5">{item.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">⏱️ {item.duration}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="p-4 text-center rounded-2xl shadow-md">
            <div className="text-2xl mb-2">📅</div>
            <div className="text-2xl font-bold text-foreground mb-1">12</div>
            <p className="text-xs text-muted-foreground">Buổi tập</p>
          </Card>
          <Card className="p-4 text-center rounded-2xl shadow-md">
            <div className="text-2xl mb-2">⏰</div>
            <div className="text-2xl font-bold text-foreground mb-1">180</div>
            <p className="text-xs text-muted-foreground">Phút tập</p>
          </Card>
          <Card className="p-4 text-center rounded-2xl shadow-md">
            <div className="text-2xl mb-2">🏅</div>
            <div className="text-2xl font-bold text-foreground mb-1">5</div>
            <p className="text-xs text-muted-foreground">Huy hiệu</p>
          </Card>
        </div>
      </div>

      <BottomNavigation currentTab="home" />
    </div>
  );
};

export default Dashboard;
