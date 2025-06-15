
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
  
  const handleSkipRest = () => {
    setIsResting(false);
    setTimeRemaining(poses[currentPose].duration);
  };

  if (isResting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-xs mx-auto w-full">
          <div className="text-6xl font-bold text-foreground mb-3">
            {timeRemaining}
          </div>
          <h2 className="text-xl font-serif font-bold text-foreground mb-3">
            Nghỉ ngơi
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">Chuẩn bị cho động tác tiếp theo</p>
          
          <Card className="p-4 bg-card shadow-lg rounded-xl mb-4">
            <div className="text-3xl mb-2">{poses[currentPose].image}</div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Động tác tiếp theo</h3>
            <p className="text-xs text-muted-foreground">{poses[currentPose].name}</p>
          </Card>

          <Button
            onClick={handleSkipRest}
            className="w-full bg-primary text-primary-foreground font-medium py-2.5 text-sm rounded-xl"
          >
            Tập luôn
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <div className="p-3 bg-card shadow-sm flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-sm font-serif font-bold text-foreground flex-1 truncate">
            Bài tập {currentPose + 1}/{totalPoses}
          </h1>
          <div className="text-lg font-bold text-foreground ml-2">
            {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
          </div>
        </div>
        <Progress value={progressPercentage} className="h-1.5" />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col p-3 gap-3">
        {/* Instructor View */}
        <div className="flex-1 bg-secondary/30 rounded-xl overflow-hidden relative flex items-center justify-center">
            <div className="absolute top-2 left-2 bg-black/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">Động tác mẫu</div>
            <div className="text-center">
                <div className="text-5xl mb-2">{poses[currentPose].image}</div>
                <h3 className="font-semibold text-foreground">{poses[currentPose].name}</h3>
                <p className="text-xs text-muted-foreground italic mt-1">{poses[currentPose].sanskrit}</p>
            </div>
        </div>

        {/* User Camera View */}
        <div className="flex-1 bg-muted/50 rounded-xl overflow-hidden relative flex items-center justify-center">
            <div className="absolute top-2 left-2 bg-black/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">Camera của bạn</div>
            <div className="w-24 h-36 border-2 border-foreground/20 border-dashed rounded-full opacity-30"></div>
            {aiMessage && (
                <div className="absolute bottom-3 left-3 right-3">
                    <Card className="p-2.5 bg-card/90 border-border animate-fade-in backdrop-blur-sm">
                        <p className="text-foreground text-center text-sm font-medium">💬 {aiMessage}</p>
                    </Card>
                </div>
            )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex-shrink-0 p-4 bg-card border-t border-border">
        <div className="flex justify-center">
          <Button
            onClick={handlePause}
            className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
          >
            <Pause size={24} />
          </Button>
        </div>
      </div>

      {/* Pause Menu */}
      {showPauseMenu && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-xs bg-card rounded-xl shadow-2xl p-4">
            <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
              Tạm dừng
            </h3>
            
            <div className="space-y-2.5">
              <Button
                onClick={handleResume}
                className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm"
              >
                <Play size={16} className="mr-2" />
                Tiếp tục
              </Button>
              
              <Button
                variant="outline"
                className="w-full py-2.5 rounded-lg text-sm"
              >
                Cài đặt
              </Button>
              
              <Button
                onClick={handleStop}
                variant="destructive"
                className="w-full py-2.5 rounded-lg text-sm"
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
