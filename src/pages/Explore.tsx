
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BottomNavigation from '@/components/BottomNavigation';
import { Search } from 'lucide-react';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('programs');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'programs', label: 'Lộ trình tập' },
    { id: 'challenges', label: 'Thử thách' },
    { id: 'poses', label: 'Tư thế' },
    { id: 'meditation', label: 'Thiền & Thở' }
  ];

  const programs = [
    {
      title: 'Yoga cho người mới bắt đầu',
      duration: '7 ngày',
      level: 'Cơ bản',
      sessions: 7,
      image: '🌱',
      description: 'Khởi đầu hoàn hảo cho hành trình yoga của bạn'
    },
    {
      title: 'Yoga giảm stress',
      duration: '14 ngày',
      level: 'Cơ bản',
      sessions: 14,
      image: '😌',
      description: 'Thư giãn tâm trí, giải tỏa căng thẳng'
    },
    {
      title: 'Yoga tăng sức mạnh',
      duration: '21 ngày',
      level: 'Trung bình',
      sessions: 21,
      image: '💪',
      description: 'Xây dựng cơ bắp và sức bền toàn thân'
    },
    {
      title: 'Yoga dẻo dai',
      duration: '30 ngày',
      level: 'Trung bình',
      sessions: 30,
      image: '🤸‍♀️',
      description: 'Cải thiện độ dẻo dai và linh hoạt'
    }
  ];

  const challenges = [
    {
      title: 'Thử thách 30 ngày yoga',
      participants: '2.5K',
      duration: '30 ngày',
      image: '🎯',
      description: 'Tập yoga mỗi ngày trong 30 ngày',
      reward: 'Huy hiệu Kiên trì'
    },
    {
      title: 'Tuần lễ thiền định',
      participants: '1.2K',
      duration: '7 ngày',
      image: '🧘‍♀️',
      description: 'Thiền 10 phút mỗi ngày trong 1 tuần',
      reward: 'Huy hiệu Tâm tịnh'
    }
  ];

  const poses = [
    { name: 'Tư thế Chiến binh I', sanskrit: 'Virabhadrasana I', level: 'Cơ bản', image: '⚔️' },
    { name: 'Tư thế Con chó úp mặt', sanskrit: 'Adho Mukha Svanasana', level: 'Cơ bản', image: '🐕' },
    { name: 'Tư thế Cây', sanskrit: 'Vrikshasana', level: 'Cơ bản', image: '🌳' },
    { name: 'Tư thế Rắn hổ mang', sanskrit: 'Bhujangasana', level: 'Cơ bản', image: '🐍' }
  ];

  const meditations = [
    { title: 'Thiền hơi thở cơ bản', duration: '5 phút', image: '🌬️', type: 'Breathing' },
    { title: 'Thiền tĩnh tâm', duration: '10 phút', image: '🧘‍♀️', type: 'Mindfulness' },
    { title: 'Thiền trước khi ngủ', duration: '15 phút', image: '🌙', type: 'Sleep' },
    { title: 'Thiền năng lượng sáng', duration: '8 phút', image: '☀️', type: 'Energy' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'programs':
        return (
          <div className="space-y-4">
            {programs.map((program, index) => (
              <Card key={index} className="p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{program.image}</div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-sage-800 mb-2">{program.title}</h3>
                    <p className="text-sm text-sage-600 mb-3">{program.description}</p>
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="secondary" className="bg-sage-100 text-sage-700">
                        📅 {program.duration}
                      </Badge>
                      <Badge variant="secondary" className="bg-sandy-100 text-sandy-700">
                        📊 {program.level}
                      </Badge>
                      <Badge variant="secondary" className="bg-coral-100 text-coral-700">
                        🎯 {program.sessions} buổi
                      </Badge>
                    </div>
                    <Button className="w-full gradient-sage text-white rounded-xl">
                      Bắt đầu lộ trình
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'challenges':
        return (
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{challenge.image}</div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-sage-800 mb-2">{challenge.title}</h3>
                    <p className="text-sm text-sage-600 mb-3">{challenge.description}</p>
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="secondary" className="bg-sage-100 text-sage-700">
                        👥 {challenge.participants} người tham gia
                      </Badge>
                      <Badge variant="secondary" className="bg-coral-100 text-coral-700">
                        🏆 {challenge.reward}
                      </Badge>
                    </div>
                    <Button className="w-full gradient-coral text-white rounded-xl">
                      Tham gia thử thách
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'poses':
        return (
          <div className="grid grid-cols-1 gap-4">
            {poses.map((pose, index) => (
              <Card key={index} className="p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{pose.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sage-800">{pose.name}</h3>
                    <p className="text-sm text-sage-600 italic">{pose.sanskrit}</p>
                    <Badge variant="secondary" className="bg-sage-100 text-sage-700 text-xs mt-1">
                      {pose.level}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'meditation':
        return (
          <div className="grid grid-cols-1 gap-4">
            {meditations.map((meditation, index) => (
              <Card key={index} className="p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{meditation.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sage-800">{meditation.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="bg-sage-100 text-sage-700 text-xs">
                        ⏱️ {meditation.duration}
                      </Badge>
                      <Badge variant="secondary" className="bg-sandy-100 text-sandy-700 text-xs">
                        {meditation.type}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" className="gradient-sage text-white rounded-lg">
                    Bắt đầu
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-ivory-50 pb-20">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-serif font-bold text-sage-800 mb-4">Khám phá</h1>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400" size={20} />
            <Input
              placeholder="Tìm kiếm bài tập, tư thế..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-sage-200 rounded-xl"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap rounded-xl ${
                activeTab === tab.id
                  ? 'gradient-sage text-white'
                  : 'border-sage-200 text-sage-600 hover:bg-sage-50'
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content */}
        {renderContent()}
      </div>

      <BottomNavigation currentTab="explore" />
    </div>
  );
};

export default Explore;
