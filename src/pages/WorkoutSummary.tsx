
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
    <div className="min-h-screen bg-ivory-50 flex items-center justify-center p-3">
      <div className="w-full max-w-sm">
        {/* Success Animation Area */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-3 animate-bounce">🎉</div>
          <h1 className="text-2xl font-serif font-bold text-sage-800 mb-2">
            Tuyệt vời!
          </h1>
          <p className="text-sage-600 text-base">
            Bạn đã hoàn thành buổi tập yoga
          </p>
        </div>

        {/* Stats Card */}
        <Card className="p-4 bg-white shadow-lg rounded-xl mb-4">
          <h2 className="text-base font-serif font-bold text-sage-800 mb-3 text-center">
            Thống kê buổi tập
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-sage-50 rounded-lg">
              <Clock className="mx-auto mb-1.5 text-sage-600" size={20} />
              <div className="text-lg font-bold text-sage-800">{workoutStats.duration}</div>
              <p className="text-xs text-sage-600">Thời gian</p>
            </div>
            
            <div className="text-center p-3 bg-coral-50 rounded-lg">
              <Flame className="mx-auto mb-1.5 text-coral-600" size={20} />
              <div className="text-lg font-bold text-coral-800">{workoutStats.calories}</div>
              <p className="text-xs text-coral-600">Calo đốt</p>
            </div>
            
            <div className="text-center p-3 bg-sandy-50 rounded-lg">
              <div className="text-xl mb-1.5">🧘‍♀️</div>
              <div className="text-lg font-bold text-sandy-800">{workoutStats.poses}</div>
              <p className="text-xs text-sandy-600">Tư thế</p>
            </div>
            
            <div className="text-center p-3 bg-sage-50 rounded-lg">
              <div className="text-xl mb-1.5">🔥</div>
              <div className="text-lg font-bold text-sage-800">{workoutStats.streak}</div>
              <p className="text-xs text-sage-600">Ngày streak</p>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-4 bg-white shadow-lg rounded-xl mb-4">
          <h2 className="text-base font-serif font-bold text-sage-800 mb-3 text-center">
            Huy hiệu đạt được
          </h2>
          
          <div className="space-y-2.5">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 p-3 rounded-lg ${
                  achievement.isNew 
                    ? 'bg-gradient-to-r from-coral-100 to-sage-100 border border-coral-300' 
                    : 'bg-sage-50'
                }`}
              >
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-semibold text-sage-800">{achievement.title}</h3>
                    {achievement.isNew && (
                      <span className="bg-coral-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        MỚI!
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-sage-600">{achievement.description}</p>
                </div>
                {achievement.isNew && (
                  <Trophy className="text-coral-500" size={20} />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-full border-sage-300 text-sage-700 py-3 rounded-xl text-sm"
          >
            <Share2 size={16} className="mr-2" />
            Chia sẻ thành tích
          </Button>
          
          <Button
            onClick={handleGoHome}
            className="w-full gradient-sage text-white py-3 rounded-xl text-base font-medium"
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
