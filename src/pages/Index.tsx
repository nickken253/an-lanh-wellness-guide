
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="min-h-screen bg-ivory-50 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-sage flex items-center justify-center animate-float">
            <span className="text-3xl text-white">🧘‍♀️</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-2">An Lành</h1>
          <p className="text-sage-600 font-medium">Yoga cho tâm hồn an yên</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-50">
      {/* Intro Slides */}
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full gradient-sage flex items-center justify-center">
              <span className="text-5xl text-white">🧘‍♀️</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-sage-800 mb-4">
              Chào mừng đến với An Lành
            </h1>
            <p className="text-lg text-sage-600 mb-8 leading-relaxed">
              Ứng dụng yoga cá nhân hóa với AI Coach, giúp bạn xây dựng thói quen sống lành mạnh ngay tại nhà
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-sage-200">
                <h3 className="font-serif font-semibold text-sage-800 mb-2">🎯 Tập luyện cá nhân hóa</h3>
                <p className="text-sm text-sage-600">Lộ trình được thiết kế riêng cho mục tiêu và trình độ của bạn</p>
              </div>
              
              <div className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-sage-200">
                <h3 className="font-serif font-semibold text-sage-800 mb-2">🤖 AI Coach thông minh</h3>
                <p className="text-sm text-sage-600">Trợ lý AI đồng hành, hướng dẫn và động viên bạn mỗi ngày</p>
              </div>
              
              <div className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-sage-200">
                <h3 className="font-serif font-semibold text-sage-800 mb-2">🌱 Xây dựng thói quen lành mạnh</h3>
                <p className="text-sm text-sage-600">Theo dõi tiến trình và duy trì động lực lâu dài</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-3">
          <Button 
            onClick={() => navigate('/onboarding')}
            className="w-full gradient-sage text-white font-medium py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Bắt đầu hành trình
          </Button>
          
          <Button 
            onClick={() => navigate('/dashboard')}
            variant="outline"
            className="w-full border-sage-300 text-sage-700 font-medium py-6 text-lg rounded-2xl hover:bg-sage-50"
          >
            Đã có tài khoản? Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
