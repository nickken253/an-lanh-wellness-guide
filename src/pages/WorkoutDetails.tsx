
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
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="rounded-full bg-white/80 backdrop-blur-sm shadow-sm"
          >
            <ArrowLeft size={20} />
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="h-64 bg-gradient-to-br from-sage-200 to-sage-300 flex items-center justify-center">
          <div className="text-6xl">{workout.image}</div>
        </div>
      </div>

      <div className="p-6 -mt-8 relative z-10">
        {/* Main Info Card */}
        <Card className="p-6 bg-white shadow-lg rounded-2xl mb-6">
          <h1 className="text-2xl font-serif font-bold text-sage-800 mb-3">
            {workout.title}
          </h1>
          
          <div className="flex items-center space-x-4 mb-4">
            <Badge variant="secondary" className="bg-sage-100 text-sage-700">
              <Clock size={14} className="mr-1" />
              {workout.duration}
            </Badge>
            <Badge variant="secondary" className="bg-sandy-100 text-sandy-700">
              <TrendingUp size={14} className="mr-1" />
              {workout.level}
            </Badge>
            <Badge variant="secondary" className="bg-coral-100 text-coral-700">
              <Flame size={14} className="mr-1" />
              {workout.calories}
            </Badge>
          </div>
          
          <p className="text-sage-600 leading-relaxed">
            {workout.description}
          </p>
        </Card>

        {/* Poses List */}
        <Card className="p-6 bg-white shadow-lg rounded-2xl mb-6">
          <h2 className="text-lg font-serif font-bold text-sage-800 mb-4">
            Các tư thế trong bài tập
          </h2>
          
          <div className="space-y-3">
            {workout.poses.map((pose, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-sage-50 rounded-xl">
                <div className="text-2xl">{pose.image}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sage-800">{pose.name}</h3>
                  <p className="text-sm text-sage-600 italic">{pose.sanskrit}</p>
                </div>
                <div className="text-sm text-sage-600 font-medium">
                  {pose.duration}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Benefits */}
        <Card className="p-6 bg-white shadow-lg rounded-2xl mb-24">
          <h2 className="text-lg font-serif font-bold text-sage-800 mb-4">
            Lợi ích của bài tập
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-sage-50 rounded-xl">
              <div className="text-2xl mb-2">💪</div>
              <p className="text-sm font-medium text-sage-800">Tăng sức mạnh</p>
            </div>
            <div className="text-center p-4 bg-sage-50 rounded-xl">
              <div className="text-2xl mb-2">🤸‍♀️</div>
              <p className="text-sm font-medium text-sage-800">Cải thiện độ dẻo</p>
            </div>
            <div className="text-center p-4 bg-sage-50 rounded-xl">
              <div className="text-2xl mb-2">😌</div>
              <p className="text-sm font-medium text-sage-800">Giảm stress</p>
            </div>
            <div className="text-center p-4 bg-sage-50 rounded-xl">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-sm font-medium text-sage-800">Tăng năng lượng</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Fixed Start Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-sage-200">
        <Button
          onClick={handleStartWorkout}
          className="w-full gradient-sage text-white font-medium py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Play size={20} className="mr-2" />
          Bắt đầu tập
        </Button>
      </div>
    </div>
  );
};

export default WorkoutDetails;
