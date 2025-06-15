
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const steps = [
    {
      title: "Mục tiêu của bạn là gì?",
      subtitle: "Chọn những gì bạn muốn cải thiện",
      multiSelect: true,
      options: [
        { id: 'flexibility', label: 'Tăng độ dẻo dai', icon: '🤸‍♀️', description: 'Cải thiện khả năng uốn cong cơ thể' },
        { id: 'stress', label: 'Giảm stress', icon: '😌', description: 'Thư giãn tinh thần, bình an nội tâm' },
        { id: 'strength', label: 'Tăng sức mạnh', icon: '💪', description: 'Xây dựng cơ bắp và sức bền' },
        { id: 'weight', label: 'Kiểm soát cân nặng', icon: '⚖️', description: 'Đốt cháy calo và giữ dáng' },
        { id: 'sleep', label: 'Cải thiện giấc ngủ', icon: '😴', description: 'Ngủ ngon và sâu giấc hơn' },
        { id: 'balance', label: 'Tăng thăng bằng', icon: '🕊️', description: 'Cân bằng cơ thể và tâm trí' }
      ]
    },
    {
      title: "Trình độ yoga của bạn?",
      subtitle: "Chúng tôi sẽ điều chỉnh bài tập phù hợp",
      options: [
        { id: 'beginner', label: 'Mới bắt đầu', icon: '🌱', description: 'Chưa có kinh nghiệm hoặc rất ít' },
        { id: 'intermediate', label: 'Trung bình', icon: '🌿', description: 'Đã tập được vài tháng đến 1 năm' },
        { id: 'advanced', label: 'Nâng cao', icon: '🌳', description: 'Đã tập yoga hơn 1 năm' }
      ]
    },
    {
      title: "Bạn muốn tập bao lâu mỗi ngày?",
      subtitle: "Lựa chọn thời gian phù hợp với lịch trình",
      options: [
        { id: '15', label: '15 phút', icon: '⏰', description: 'Phù hợp cho người bận rộn' },
        { id: '30', label: '30 phút', icon: '⏱️', description: 'Cân bằng giữa hiệu quả và thời gian' },
        { id: '45', label: '45 phút', icon: '⏲️', description: 'Tập trung và toàn diện' },
        { id: '60', label: '60 phút', icon: '🕐', description: 'Trải nghiệm đầy đủ nhất' }
      ]
    },
    {
      title: "Bạn có vấn đề sức khỏe nào cần lưu ý?",
      subtitle: "Chúng tôi sẽ điều chỉnh bài tập an toàn cho bạn",
      multiSelect: true,
      options: [
        { id: 'back_pain', label: 'Đau lưng', icon: '🦴', description: 'Đau lưng dưới hoặc trên' },
        { id: 'knee_issues', label: 'Vấn đề đầu gối', icon: '🦵', description: 'Đau khớp gối hoặc chấn thương' },
        { id: 'neck_pain', label: 'Đau cổ vai gáy', icon: '💆‍♀️', description: 'Căng thẳng vùng cổ vai' },
        { id: 'high_bp', label: 'Huyết áp cao', icon: '❤️', description: 'Cần tránh các tư thế đảo ngược' },
        { id: 'pregnancy', label: 'Mang thai', icon: '🤰', description: 'Yoga cho mẹ bầu' },
        { id: 'none', label: 'Không có', icon: '✅', description: 'Sức khỏe tốt, không vấn đề gì' }
      ]
    }
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    const stepKey = `step_${currentStep}`;
    
    if (currentStepData.multiSelect) {
      const currentSelections = answers[stepKey] || [];
      if (optionId === 'none') {
        setAnswers({ ...answers, [stepKey]: ['none'] });
      } else {
        const newSelections = currentSelections.includes(optionId)
          ? currentSelections.filter((id: string) => id !== optionId && id !== 'none')
          : [...currentSelections.filter((id: string) => id !== 'none'), optionId];
        setAnswers({ ...answers, [stepKey]: newSelections });
      }
    } else {
      setAnswers({ ...answers, [stepKey]: optionId });
    }
  };

  const isOptionSelected = (optionId: string) => {
    const stepKey = `step_${currentStep}`;
    if (currentStepData.multiSelect) {
      return (answers[stepKey] || []).includes(optionId);
    }
    return answers[`step_${currentStep}`] === optionId;
  };

  const canProceed = () => {
    const stepKey = `step_${currentStep}`;
    if (currentStepData.multiSelect) {
      return (answers[stepKey] || []).length > 0;
    }
    return answers[stepKey];
  };

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsLoading(true);
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-ivory-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-sage flex items-center justify-center animate-pulse">
            <span className="text-2xl text-white">🧘‍♀️</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
            Đang tạo lộ trình cho bạn...
          </h2>
          <p className="text-sage-600 mb-6">AI Coach đang phân tích và thiết kế chương trình tập luyện cá nhân</p>
          <div className="w-64 mx-auto">
            <Progress value={75} className="h-2" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8 pt-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="text-sage-600 hover:text-sage-800"
            >
              ← Quay lại
            </Button>
            <span className="text-sm text-sage-600 font-medium">
              {currentStep + 1}/{steps.length}
            </span>
          </div>
          <Progress value={progress} className="h-2 mb-6" />
          
          <h1 className="text-2xl font-serif font-bold text-sage-800 mb-2">
            {currentStepData.title}
          </h1>
          <p className="text-sage-600">
            {currentStepData.subtitle}
          </p>
        </div>

        {/* Options - Fixed height container to prevent layout shifts */}
        <div className="min-h-[400px] mb-8">
          <div className="space-y-3">
            {currentStepData.options.map((option) => (
              <Card
                key={option.id}
                className={`p-4 cursor-pointer transition-all duration-200 border-2 min-h-[80px] ${
                  isOptionSelected(option.id)
                    ? 'border-sage-500 bg-sage-50 shadow-md'
                    : 'border-sage-200 bg-white hover:border-sage-300 hover:shadow-sm'
                }`}
                onClick={() => handleOptionSelect(option.id)}
              >
                <div className="flex items-start space-x-3 h-full">
                  <span className="text-2xl flex-shrink-0">{option.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sage-800 mb-1">{option.label}</h3>
                    <p className="text-sm text-sage-600">{option.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {isOptionSelected(option.id) && (
                      <div className="w-6 h-6 rounded-full gradient-sage flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <Button
          onClick={handleNext}
          disabled={!canProceed()}
          className="w-full gradient-sage text-white font-medium py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentStep === steps.length - 1 ? 'Hoàn tất' : 'Tiếp tục'}
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
