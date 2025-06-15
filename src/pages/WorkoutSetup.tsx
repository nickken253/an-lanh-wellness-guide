
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { X, Music, Volume2 } from 'lucide-react';

const WorkoutSetup = () => {
  const navigate = useNavigate();
  const [selectedMusic, setSelectedMusic] = useState('meditation');
  const [selectedVoice, setSelectedVoice] = useState('female');
  const [skipWarmup, setSkipWarmup] = useState(false);

  const musicOptions = [
    { id: 'meditation', label: 'Thiền định', icon: '🧘‍♀️', description: 'Nhạc thiền nhẹ nhàng' },
    { id: 'nature', label: 'Thiên nhiên', icon: '🌿', description: 'Âm thanh tự nhiên' },
    { id: 'instrumental', label: 'Không lời', icon: '🎵', description: 'Nhạc cụ êm dịu' },
    { id: 'silence', label: 'Im lặng', icon: '🔇', description: 'Không có nhạc nền' }
  ];

  const voiceOptions = [
    { id: 'female', label: 'Giọng Nữ', icon: '👩', description: 'Nhẹ nhàng, dịu dàng' },
    { id: 'male', label: 'Giọng Nam', icon: '👨', description: 'Trầm ấm, vững chãi' }
  ];

  const handleStart = () => {
    console.log('Starting workout with settings:', { selectedMusic, selectedVoice, skipWarmup });
    navigate('/workout-session');
  };

  return (
    <div className="min-h-screen bg-black/50 backdrop-blur-sm flex items-center justify-center p-3">
      <Card className="w-full max-w-sm bg-card rounded-3xl shadow-lg p-1">
       <div className="rounded-[22px] p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-serif font-bold text-foreground">
              Cài đặt buổi tập
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full h-8 w-8 text-muted-foreground bg-muted hover:bg-muted/80"
            >
              <X size={18} />
            </Button>
          </div>

          {/* Music Selection */}
          <div className="mb-5">
            <div className="flex items-center space-x-2 mb-3">
              <Music size={18} className="text-muted-foreground" />
              <h3 className="text-base font-semibold text-foreground">Âm nhạc</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {musicOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`p-3 cursor-pointer transition-all duration-200 rounded-2xl ${
                    selectedMusic === option.id
                      ? 'bg-secondary ring-2 ring-primary'
                      : 'bg-muted/60 hover:bg-muted'
                  }`}
                  onClick={() => setSelectedMusic(option.id)}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{option.icon}</div>
                    <p className="font-medium text-foreground text-sm">{option.label}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{option.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Voice Selection */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Volume2 size={18} className="text-muted-foreground" />
              <h3 className="text-base font-semibold text-foreground">Giọng hướng dẫn</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {voiceOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`p-3 cursor-pointer transition-all duration-200 rounded-2xl ${
                    selectedVoice === option.id
                      ? 'bg-secondary ring-2 ring-primary'
                      : 'bg-muted/60 hover:bg-muted'
                  }`}
                  onClick={() => setSelectedVoice(option.id)}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{option.icon}</div>
                    <p className="font-medium text-foreground text-sm">{option.label}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{option.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skip Warmup Option */}
          <div className="mb-8">
            <div className="flex items-center justify-between p-3 bg-muted/60 rounded-2xl">
              <div>
                <p className="text-sm font-medium text-foreground">Bỏ qua phần khởi động</p>
                <p className="text-xs text-muted-foreground">Chuyển thẳng vào bài tập chính</p>
              </div>
              <Switch
                checked={skipWarmup}
                onCheckedChange={setSkipWarmup}
              />
            </div>
          </div>

          {/* Start Button */}
          <Button
            onClick={handleStart}
            size="lg"
            className="w-full font-medium text-base rounded-xl shadow-lg active:scale-95 transition-all"
          >
            Sẵn sàng! 🚀
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default WorkoutSetup;
