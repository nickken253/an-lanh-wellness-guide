
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Share2, Home, Trophy, Clock, Flame } from 'lucide-react';

const WorkoutSummary = () => {
  const navigate = useNavigate();

  const workoutStats = {
    duration: '15 phút 23 giây',
    calories: '47 kcal',
    poses: 5,
    streak: 8
  };

  const achievements = [
    { 
      title: 'Streak Master', 
      description: '8 ngày liên tiếp', 
      icon: '🔥',
      isNew: true 
    },
    { 
      title: 'Morning Warrior', 
      description: 'Tập buổi sáng', 
      icon: '🌅',
      isNew: false 
    }
  ];

  const handleShare = () => {
    console.log('Sharing workout results...');
  };

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-3">
      <div className="w-full max-w-sm">
        {/* Success Animation Area */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-3 animate-bounce">🎉</div>
          <h1 className="text-2xl font-serif font-bold text-foreground mb-2">
            Tuyệt vời!
          </h1>
          <p className="text-muted-foreground text-base">
            Bạn đã hoàn thành buổi tập yoga
          </p>
        </div>

        {/* Stats Card */}
        <Card className="p-4 rounded-3xl shadow-md mb-4">
          <h2 className="text-base font-serif font-bold text-foreground mb-3 text-center">
            Thống kê buổi tập
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            <Card className="text-center p-3 rounded-2xl shadow-sm">
              <Clock className="mx-auto mb-1.5 text-muted-foreground" size={20} />
              <div className="text-lg font-bold text-foreground">{workoutStats.duration}</div>
              <p className="text-xs text-muted-foreground">Thời gian</p>
            </Card>
            
            <Card className="text-center p-3 rounded-2xl shadow-sm border-2 border-primary/50">
              <Flame className="mx-auto mb-1.5 text-primary" size={20} />
              <div className="text-lg font-bold text-primary">{workoutStats.calories}</div>
              <p className="text-xs text-primary/80">Calo đốt</p>
            </Card>
            
            <Card className="text-center p-3 rounded-2xl shadow-sm">
              <div className="text-xl mb-1.5">🧘‍♀️</div>
              <div className="text-lg font-bold text-foreground">{workoutStats.poses}</div>
              <p className="text-xs text-muted-foreground">Tư thế</p>
            </Card>
            
            <Card className="text-center p-3 rounded-2xl shadow-sm">
              <div className="text-xl mb-1.5">🔥</div>
              <div className="text-lg font-bold text-foreground">{workoutStats.streak}</div>
              <p className="text-xs text-muted-foreground">Ngày streak</p>
            </Card>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-4 rounded-3xl shadow-md mb-4">
          <h2 className="text-base font-serif font-bold text-foreground mb-3 text-center">
            Huy hiệu đạt được
          </h2>
          
          <div className="space-y-2.5">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 p-3 rounded-2xl ${
                  achievement.isNew 
                    ? 'bg-card shadow-sm border-2 border-primary/50' 
                    : 'bg-muted/50'
                }`}
              >
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-semibold text-foreground">{achievement.title}</h3>
                    {achievement.isNew && (
                      <span className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                        MỚI!
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
                {achievement.isNew && (
                  <Trophy className="text-primary" size={20} />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <Button
            onClick={handleShare}
            variant="secondary"
            className="w-full py-3 rounded-xl text-sm shadow-sm"
          >
            <Share2 size={16} className="mr-2" />
            Chia sẻ thành tích
          </Button>
          
          <Button
            onClick={handleGoHome}
            className="w-full py-3 rounded-xl text-base font-medium shadow-lg active:scale-95"
          >
            <Home size={16} className="mr-2" />
            Về Trang chủ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSummary;
