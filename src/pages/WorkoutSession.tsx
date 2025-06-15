
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Pause, Square, Play } from 'lucide-react';

const WorkoutSession = () => {
  const navigate = useNavigate();
  const [currentPose, setCurrentPose] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isResting, setIsResting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showPauseMenu, setShowPauseMenu] = useState(false);
  const [aiMessage, setAiMessage] = useState('');

  const poses = [
    { name: 'Tư thế Núi', sanskrit: 'Tadasana', duration: 30, image: '🏔️' },
    { name: 'Tư thế Chào mặt trời', sanskrit: 'Surya Namaskara', duration: 120, image: '🌅' },
    { name: 'Tư thế Con chó úp mặt', sanskrit: 'Adho Mukha Svanasana', duration: 60, image: '🐕' },
    { name: 'Tư thế Chiến binh I', sanskrit: 'Virabhadrasana I', duration: 45, image: '⚔️' },
    { name: 'Tư thế Tam giác', sanskrit: 'Trikonasana', duration: 30, image: '🔺' }
  ];

  const aiMessages = [
    'Giữ thăng bằng và hít thở đều',
    'Nâng tay cao hơn một chút',
    'Tuyệt vời! Giữ tư thế này',
    'Thả lỏng vai, thở sâu',
    'Duỗi thẳng lưng'
  ];

  const totalPoses = poses.length;
  const progressPercentage = ((currentPose + 1) / totalPoses) * 100;

  useEffect(() => {
    if (!isPaused && !isResting) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            if (currentPose < poses.length - 1) {
              setIsResting(true);
              setCurrentPose(currentPose + 1);
              return 10; // Rest time
            } else {
              navigate('/workout-summary');
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isPaused, isResting, currentPose, poses.length, navigate]);

  useEffect(() => {
    if (isResting) {
      const restTimer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsResting(false);
            setTimeRemaining(poses[currentPose].duration);
            return poses[currentPose].duration;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(restTimer);
    }
  }, [isResting, currentPose, poses]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      if (!isResting && !isPaused) {
        const randomMessage = aiMessages[Math.floor(Math.random() * aiMessages.length)];
        setAiMessage(randomMessage);
        setTimeout(() => setAiMessage(''), 3000);
      }
    }, 8000);

    return () => clearInterval(messageInterval);
  }, [isResting, isPaused]);

  const handlePause = () => {
    setIsPaused(true);
    setShowPauseMenu(true);
  };

  const handleResume = () => {
    setIsPaused(false);
    setShowPauseMenu(false);
  };

  const handleStop = () => {
    navigate('/workout-summary');
  };

  if (isResting) {
    return (
      <div className="min-h-screen bg-ivory-50 flex items-center justify-center p-4">
        <div className="text-center max-w-xs mx-auto">
          <div className="text-6xl font-bold text-sage-800 mb-3">
            {timeRemaining}
          </div>
          <h2 className="text-xl font-serif font-bold text-sage-800 mb-3">
            Nghỉ ngơi
          </h2>
          <p className="text-sage-600 mb-6 text-sm">Chuẩn bị cho động tác tiếp theo</p>
          
          <Card className="p-4 bg-white shadow-lg rounded-xl">
            <div className="text-3xl mb-2">{poses[currentPose].image}</div>
            <h3 className="text-sm font-semibold text-sage-800 mb-1">Động tác tiếp theo</h3>
            <p className="text-xs text-sage-600">{poses[currentPose].name}</p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-50 relative">
      {/* Top Bar */}
      <div className="p-3 bg-white shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-sm font-serif font-bold text-sage-800 flex-1 truncate">
            {poses[currentPose].name}
          </h1>
          <div className="text-lg font-bold text-sage-800 ml-2">
            {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
          </div>
        </div>
        <Progress value={progressPercentage} className="h-1.5" />
      </div>

      {/* Main Video Area */}
      <div className="relative h-80 bg-gradient-to-br from-sage-200 to-sage-300 m-3 rounded-xl overflow-hidden">
        {/* Simulated camera view */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl opacity-50">{poses[currentPose].image}</div>
        </div>
        
        {/* AI Skeleton Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-36 border-2 border-sage-600 border-dashed rounded-full opacity-30"></div>
        </div>

        {/* Instructor Video (Small) */}
        <div className="absolute top-3 right-3 w-16 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-xl">{poses[currentPose].image}</div>
        </div>
      </div>

      {/* AI Feedback */}
      <div className="px-3 mb-3">
        {aiMessage && (
          <Card className="p-2.5 bg-sage-100 border-sage-300 animate-fade-in">
            <p className="text-sage-800 text-center text-sm font-medium">💬 {aiMessage}</p>
          </Card>
        )}
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-sage-200">
        <div className="flex justify-center space-x-4">
          <Button
            onClick={handlePause}
            className="gradient-sage text-white px-6 py-3 rounded-xl"
          >
            <Pause size={20} />
          </Button>
          <Button
            onClick={handleStop}
            variant="outline"
            className="border-coral-300 text-coral-600 px-6 py-3 rounded-xl"
          >
            <Square size={20} />
          </Button>
        </div>
      </div>

      {/* Pause Menu */}
      {showPauseMenu && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-xs bg-white rounded-xl shadow-2xl p-4">
            <h3 className="text-lg font-serif font-bold text-sage-800 mb-4 text-center">
              Tạm dừng
            </h3>
            
            <div className="space-y-2.5">
              <Button
                onClick={handleResume}
                className="w-full gradient-sage text-white py-2.5 rounded-lg text-sm"
              >
                <Play size={16} className="mr-2" />
                Tiếp tục
              </Button>
              
              <Button
                variant="outline"
                className="w-full border-sage-300 text-sage-700 py-2.5 rounded-lg text-sm"
              >
                Cài đặt
              </Button>
              
              <Button
                onClick={handleStop}
                variant="outline"
                className="w-full border-coral-300 text-coral-600 py-2.5 rounded-lg text-sm"
              >
                Kết thúc buổi tập
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WorkoutSession;
