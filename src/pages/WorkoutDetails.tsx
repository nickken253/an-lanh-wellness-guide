
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Play, Clock, TrendingUp, Flame } from 'lucide-react';

const WorkoutDetails = () => {
  const navigate = useNavigate();
  
  const workout = {
    title: 'Yoga Chào Mặt Trời',
    duration: '15 phút',
    level: 'Cơ bản',
    calories: '45 kcal',
    description: 'Khởi động hoàn hảo cho ngày mới với chuỗi động tác truyền thống của yoga. Bài tập này giúp đánh thức cơ thể, tăng cường tuần hoàn máu và mang lại năng lượng tích cực.',
    image: '🌅',
    poses: [
      { name: 'Tư thế Núi', sanskrit: 'Tadasana', duration: '30s', image: '🏔️' },
      { name: 'Tư thế Chào mặt trời', sanskrit: 'Surya Namaskara', duration: '2 phút', image: '🌅' },
      { name: 'Tư thế Con chó úp mặt', sanskrit: 'Adho Mukha Svanasana', duration: '1 phút', image: '🐕' },
      { name: 'Tư thế Chiến binh I', sanskrit: 'Virabhadrasana I', duration: '45s mỗi bên', image: '⚔️' },
      { name: 'Tư thế Tam giác', sanskrit: 'Trikonasana', duration: '30s mỗi bên', image: '🔺' },
      { name: 'Tư thế Cây', sanskrit: 'Vrikshasana', duration: '45s mỗi bên', image: '🌳' },
      { name: 'Tư thế Thư giãn', sanskrit: 'Savasana', duration: '2 phút', image: '🧘‍♀️' }
    ]
  };

  const handleStartWorkout = () => {
    navigate('/workout-setup');
  };

  return (
    <div className="min-h-screen bg-ivory-50">
      {/* Header */}
      <div className="relative">
        <div className="absolute top-3 left-3 z-10">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="rounded-full bg-white/80 backdrop-blur-sm shadow-sm h-8 w-8 p-1.5"
          >
            <ArrowLeft size={16} />
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="h-48 bg-gradient-to-br from-sage-200 to-sage-300 flex items-center justify-center">
          <div className="text-5xl">{workout.image}</div>
        </div>
      </div>

      <div className="p-3 -mt-6 relative z-10">
        {/* Main Info Card */}
        <Card className="p-4 bg-white shadow-lg rounded-xl mb-4">
          <h1 className="text-xl font-serif font-bold text-sage-800 mb-2">
            {workout.title}
          </h1>
          
          <div className="flex items-center space-x-2 mb-3 flex-wrap gap-y-1">
            <Badge variant="secondary" className="bg-sage-100 text-sage-700 text-xs">
              <Clock size={12} className="mr-1" />
              {workout.duration}
            </Badge>
            <Badge variant="secondary" className="bg-sandy-100 text-sandy-700 text-xs">
              <TrendingUp size={12} className="mr-1" />
              {workout.level}
            </Badge>
            <Badge variant="secondary" className="bg-coral-100 text-coral-700 text-xs">
              <Flame size={12} className="mr-1" />
              {workout.calories}
            </Badge>
          </div>
          
          <p className="text-sage-600 leading-relaxed text-sm">
            {workout.description}
          </p>
        </Card>

        {/* Poses List */}
        <Card className="p-4 bg-white shadow-lg rounded-xl mb-4">
          <h2 className="text-base font-serif font-bold text-sage-800 mb-3">
            Các tư thế trong bài tập
          </h2>
          
          <div className="space-y-2.5">
            {workout.poses.map((pose, index) => (
              <div key={index} className="flex items-center space-x-3 p-2.5 bg-sage-50 rounded-lg">
                <div className="text-xl">{pose.image}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-sage-800 truncate">{pose.name}</h3>
                  <p className="text-xs text-sage-600 italic truncate">{pose.sanskrit}</p>
                </div>
                <div className="text-xs text-sage-600 font-medium whitespace-nowrap">
                  {pose.duration}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Benefits */}
        <Card className="p-4 bg-white shadow-lg rounded-xl mb-20">
          <h2 className="text-base font-serif font-bold text-sage-800 mb-3">
            Lợi ích của bài tập
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-sage-50 rounded-lg">
              <div className="text-xl mb-1">💪</div>
              <p className="text-xs font-medium text-sage-800">Tăng sức mạnh</p>
            </div>
            <div className="text-center p-3 bg-sage-50 rounded-lg">
              <div className="text-xl mb-1">🤸‍♀️</div>
              <p className="text-xs font-medium text-sage-800">Cải thiện độ dẻo</p>
            </div>
            <div className="text-center p-3 bg-sage-50 rounded-lg">
              <div className="text-xl mb-1">😌</div>
              <p className="text-xs font-medium text-sage-800">Giảm stress</p>
            </div>
            <div className="text-center p-3 bg-sage-50 rounded-lg">
              <div className="text-xl mb-1">⚡</div>
              <p className="text-xs font-medium text-sage-800">Tăng năng lượng</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Fixed Start Button */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-sage-200">
        <Button
          onClick={handleStartWorkout}
          className="w-full gradient-sage text-white font-medium py-3 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Play size={16} className="mr-2" />
          Bắt đầu tập
        </Button>
      </div>
    </div>
  );
};

export default WorkoutDetails;
