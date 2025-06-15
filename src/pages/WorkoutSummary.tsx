
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
    // Handle sharing logic
    console.log('Sharing workout results...');
  };

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-ivory-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Success Animation Area */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce">🎉</div>
          <h1 className="text-3xl font-serif font-bold text-sage-800 mb-2">
            Tuyệt vời!
          </h1>
          <p className="text-sage-600 text-lg">
            Bạn đã hoàn thành buổi tập yoga
          </p>
        </div>

        {/* Stats Card */}
        <Card className="p-6 bg-white shadow-lg rounded-2xl mb-6">
          <h2 className="text-lg font-serif font-bold text-sage-800 mb-4 text-center">
            Thống kê buổi tập
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-sage-50 rounded-xl">
              <Clock className="mx-auto mb-2 text-sage-600" size={24} />
              <div className="text-xl font-bold text-sage-800">{workoutStats.duration}</div>
              <p className="text-sm text-sage-600">Thời gian</p>
            </div>
            
            <div className="text-center p-4 bg-coral-50 rounded-xl">
              <Flame className="mx-auto mb-2 text-coral-600" size={24} />
              <div className="text-xl font-bold text-coral-800">{workoutStats.calories}</div>
              <p className="text-sm text-coral-600">Calo đốt</p>
            </div>
            
            <div className="text-center p-4 bg-sandy-50 rounded-xl">
              <div className="text-2xl mb-2">🧘‍♀️</div>
              <div className="text-xl font-bold text-sandy-800">{workoutStats.poses}</div>
              <p className="text-sm text-sandy-600">Tư thế</p>
            </div>
            
            <div className="text-center p-4 bg-sage-50 rounded-xl">
              <div className="text-2xl mb-2">🔥</div>
              <div className="text-xl font-bold text-sage-800">{workoutStats.streak}</div>
              <p className="text-sm text-sage-600">Ngày streak</p>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-6 bg-white shadow-lg rounded-2xl mb-6">
          <h2 className="text-lg font-serif font-bold text-sage-800 mb-4 text-center">
            Huy hiệu đạt được
          </h2>
          
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-xl ${
                  achievement.isNew 
                    ? 'bg-gradient-to-r from-coral-100 to-sage-100 border-2 border-coral-300' 
                    : 'bg-sage-50'
                }`}
              >
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-sage-800">{achievement.title}</h3>
                    {achievement.isNew && (
                      <span className="bg-coral-500 text-white text-xs px-2 py-1 rounded-full">
                        MỚI!
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-sage-600">{achievement.description}</p>
                </div>
                {achievement.isNew && (
                  <Trophy className="text-coral-500" size={24} />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-full border-sage-300 text-sage-700 py-4 rounded-2xl"
          >
            <Share2 size={20} className="mr-2" />
            Chia sẻ thành tích
          </Button>
          
          <Button
            onClick={handleGoHome}
            className="w-full gradient-sage text-white py-4 rounded-2xl text-lg font-medium"
          >
            <Home size={20} className="mr-2" />
            Về Trang chủ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSummary;
