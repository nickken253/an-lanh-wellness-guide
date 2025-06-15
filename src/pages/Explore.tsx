
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BottomNavigation from '@/components/BottomNavigation';
import { Search } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Explore = () => {
  const navigate = useNavigate();
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
      description: 'Khởi đầu hoàn hảo cho hành trình yoga của bạn',
      imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9'
    },
    {
      title: 'Yoga giảm stress',
      duration: '14 ngày',
      level: 'Cơ bản',
      sessions: 14,
      image: '😌',
      description: 'Thư giãn tâm trí, giải tỏa căng thẳng',
      imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86'
    },
    {
      title: 'Yoga tăng sức mạnh',
      duration: '21 ngày',
      level: 'Trung bình',
      sessions: 21,
      image: '💪',
      description: 'Xây dựng cơ bắp và sức bền toàn thân',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843'
    },
    {
      title: 'Yoga dẻo dai',
      duration: '30 ngày',
      level: 'Trung bình',
      sessions: 30,
      image: '🤸‍♀️',
      description: 'Cải thiện độ dẻo dai và linh hoạt',
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
    }
  ];

  const challenges = [
    {
      title: 'Thử thách 30 ngày yoga',
      participants: '2.5K',
      duration: '30 ngày',
      image: '🎯',
      description: 'Tập yoga mỗi ngày trong 30 ngày',
      reward: 'Huy hiệu Kiên trì',
      imageUrl: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb'
    },
    {
      title: 'Tuần lễ thiền định',
      participants: '1.2K',
      duration: '7 ngày',
      image: '🧘‍♀️',
      description: 'Thiền 10 phút mỗi ngày trong 1 tuần',
      reward: 'Huy hiệu Tâm tịnh',
      imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9'
    }
  ];

  const poses = [
    { name: 'Tư thế Chiến binh I', sanskrit: 'Virabhadrasana I', level: 'Cơ bản', image: '⚔️', imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86' },
    { name: 'Tư thế Con chó úp mặt', sanskrit: 'Adho Mukha Svanasana', level: 'Cơ bản', image: '🐕', imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843' },
    { name: 'Tư thế Cây', sanskrit: 'Vrikshasana', level: 'Cơ bản', image: '🌳', imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e' },
    { name: 'Tư thế Rắn hổ mang', sanskrit: 'Bhujangasana', level: 'Cơ bản', image: '🐍', imageUrl: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb' }
  ];

  const meditations = [
    { title: 'Thiền hơi thở cơ bản', duration: '5 phút', image: '🌬️', type: 'Breathing', imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9' },
    { title: 'Thiền tĩnh tâm', duration: '10 phút', image: '🧘‍♀️', type: 'Mindfulness', imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86' },
    { title: 'Thiền trước khi ngủ', duration: '15 phút', image: '🌙', type: 'Sleep', imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843' },
    { title: 'Thiền năng lượng sáng', duration: '8 phút', image: '☀️', type: 'Energy', imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e' }
  ];

  const handleStartWorkout = () => {
    navigate('/workout-details');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'programs':
        return (
          <div className="space-y-4">
            {programs.map((program, index) => (
              <Card key={index} className="bg-card shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
                <AspectRatio ratio={16/9}>
                    <img src={program.imageUrl} alt={program.title} className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-5">
                    <div className="flex items-start space-x-4">
                        <div className="text-3xl mt-1">{program.image}</div>
                        <div className="flex-1">
                            <h3 className="font-bold text-foreground mb-2">{program.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                            <div className="flex items-center flex-wrap gap-2 mb-3">
                                <Badge variant="secondary">
                                    📅 {program.duration}
                                </Badge>
                                <Badge variant="secondary">
                                    📊 {program.level}
                                </Badge>
                                <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                                    🎯 {program.sessions} buổi
                                </Badge>
                            </div>
                            <Button 
                                onClick={handleStartWorkout}
                                className="w-full bg-primary text-primary-foreground rounded-xl"
                            >
                                Bắt đầu lộ trình
                            </Button>
                        </div>
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
              <Card key={index} className="bg-card shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                    <img src={challenge.imageUrl} alt={challenge.title} className="object-cover w-full h-full" />
                </AspectRatio>
                <div className="p-5">
                    <div className="flex items-start space-x-4">
                        <div className="text-3xl mt-1">{challenge.image}</div>
                        <div className="flex-1">
                            <h3 className="font-bold text-foreground mb-2">{challenge.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                            <div className="flex items-center flex-wrap gap-2 mb-3">
                                <Badge variant="secondary">
                                    👥 {challenge.participants} người tham gia
                                </Badge>
                                <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                                    🏆 {challenge.reward}
                                </Badge>
                            </div>
                            <Button className="w-full bg-accent text-accent-foreground rounded-xl">
                                Tham gia thử thách
                            </Button>
                        </div>
                    </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'poses':
        return (
          <div className="grid grid-cols-2 gap-4">
            {poses.map((pose, index) => (
              <Card key={index} className="bg-card shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                  <img src={pose.imageUrl} alt={pose.name} className="object-cover w-full h-full"/>
                </AspectRatio>
                <div className="p-3">
                  <div className="flex items-start space-x-2">
                      <div className="text-xl mt-0.5">{pose.image}</div>
                      <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-sm leading-tight">{pose.name}</h3>
                          <p className="text-xs text-muted-foreground italic">{pose.sanskrit}</p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {pose.level}
                          </Badge>
                      </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'meditation':
        return (
          <div className="space-y-4">
            {meditations.map((meditation, index) => (
              <Card key={index} className="bg-card shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
                <div className="flex items-center p-3 space-x-4">
                  <img src={meditation.imageUrl} alt={meditation.title} className="w-20 h-20 object-cover rounded-xl"/>
                  <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{meditation.title}</h3>
                      <p className="text-muted-foreground text-xl">{meditation.image}</p>
                      <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                              ⏱️ {meditation.duration}
                          </Badge>
                          <Badge variant="secondary" className="bg-accent/20 text-accent-foreground text-xs">
                              {meditation.type}
                          </Badge>
                      </div>
                  </div>
                  <Button size="sm" className="bg-primary text-primary-foreground rounded-lg self-center">
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
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-4">Khám phá</h1>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Tìm kiếm bài tập, tư thế..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border rounded-xl"
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
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted'
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
