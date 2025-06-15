
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
    <div className="min-h-screen bg-black/50 flex items-center justify-center p-3">
      <Card className="w-full max-w-sm bg-white rounded-xl shadow-xl">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-serif font-bold text-sage-800">
              Cài đặt buổi tập
            </h2>
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="rounded-full p-1.5 h-8 w-8"
            >
              <X size={16} />
            </Button>
          </div>

          {/* Music Selection */}
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-3">
              <Music size={16} className="text-sage-600" />
              <h3 className="text-sm font-semibold text-sage-800">Âm nhạc</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {musicOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`p-2.5 cursor-pointer transition-all duration-200 border-2 ${
                    selectedMusic === option.id
                      ? 'border-sage-500 bg-sage-50'
                      : 'border-sage-200 hover:border-sage-300'
                  }`}
                  onClick={() => setSelectedMusic(option.id)}
                >
                  <div className="text-center">
                    <div className="text-xl mb-0.5">{option.icon}</div>
                    <p className="font-medium text-sage-800 text-xs">{option.label}</p>
                    <p className="text-[10px] text-sage-600 leading-tight">{option.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Voice Selection */}
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-3">
              <Volume2 size={16} className="text-sage-600" />
              <h3 className="text-sm font-semibold text-sage-800">Giọng hướng dẫn</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {voiceOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`p-2.5 cursor-pointer transition-all duration-200 border-2 ${
                    selectedVoice === option.id
                      ? 'border-sage-500 bg-sage-50'
                      : 'border-sage-200 hover:border-sage-300'
                  }`}
                  onClick={() => setSelectedVoice(option.id)}
                >
                  <div className="text-center">
                    <div className="text-xl mb-0.5">{option.icon}</div>
                    <p className="font-medium text-sage-800 text-xs">{option.label}</p>
                    <p className="text-[10px] text-sage-600 leading-tight">{option.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skip Warmup Option */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-3 bg-sage-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-sage-800">Bỏ qua phần khởi động</p>
                <p className="text-xs text-sage-600">Chuyển thẳng vào bài tập chính</p>
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
            className="w-full gradient-sage text-white font-medium py-3 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Sẵn sàng! 🚀
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default WorkoutSetup;
