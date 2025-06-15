
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BottomNavigation from '@/components/BottomNavigation';
import { Calendar, History as HistoryIcon } from 'lucide-react';

const History = () => {
  const [viewMode, setViewMode] = useState<'calendar' | 'stats'>('calendar');

  const workoutHistory = [
    { date: '2024-01-15', workout: 'Yoga Chào Mặt Trời', duration: 15, calories: 45, completed: true },
    { date: '2024-01-14', workout: 'Yoga Thư Giãn Tối', duration: 20, calories: 55, completed: true },
    { date: '2024-01-13', workout: 'Yoga Tăng Sức Mạnh', duration: 30, calories: 85, completed: true },
    { date: '2024-01-12', workout: 'Thiền Chánh Niệm', duration: 10, calories: 15, completed: true },
    { date: '2024-01-11', workout: 'Yoga Dẻo Dai', duration: 25, calories: 70, completed: true },
    { date: '2024-01-10', workout: 'Yoga Chào Mặt Trời', duration: 15, calories: 45, completed: true },
    { date: '2024-01-09', workout: 'Yoga Giảm Stress', duration: 20, calories: 50, completed: true },
  ];

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const stats = {
    totalWorkouts: workoutHistory.length,
    totalMinutes: workoutHistory.reduce((sum, workout) => sum + workout.duration, 0),
    totalCalories: workoutHistory.reduce((sum, workout) => sum + workout.calories, 0),
    currentStreak: 7,
    longestStreak: 12,
    averageDuration: Math.round(workoutHistory.reduce((sum, workout) => sum + workout.duration, 0) / workoutHistory.length)
  };

  const hasWorkoutOnDate = (date: number) => {
    const dateStr = `2024-01-${date.toString().padStart(2, '0')}`;
    return workoutHistory.some(workout => workout.date === dateStr);
  };

  const renderCalendar = () => {
    const days = [];
    const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

    // Day headers
    dayNames.forEach(day => {
      days.push(
        <div key={day} className="text-center text-sm font-medium text-sage-600 p-2">
          {day}
        </div>
      );
    });

    // Empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let date = 1; date <= daysInMonth; date++) {
      const hasWorkout = hasWorkoutOnDate(date);
      const isToday = date === new Date().getDate();
      
      days.push(
        <div
          key={date}
          className={`p-2 text-center relative rounded-lg transition-colors ${
            isToday
              ? 'bg-sage-500 text-white font-bold'
              : hasWorkout
              ? 'bg-sage-100 text-sage-800 font-semibold'
              : 'text-sage-400 hover:bg-sage-50'
          }`}
        >
          <span className="text-sm">{date}</span>
          {hasWorkout && !isToday && (
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-sage-500 rounded-full"></div>
          )}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-1">{days}</div>;
  };

  const renderStats = () => (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 text-center bg-white shadow-sm">
          <div className="text-2xl mb-2">📊</div>
          <div className="text-2xl font-bold text-sage-800 mb-1">{stats.totalWorkouts}</div>
          <p className="text-xs text-sage-600">Tổng buổi tập</p>
        </Card>
        <Card className="p-4 text-center bg-white shadow-sm">
          <div className="text-2xl mb-2">⏰</div>
          <div className="text-2xl font-bold text-sage-800 mb-1">{stats.totalMinutes}</div>
          <p className="text-xs text-sage-600">Tổng phút tập</p>
        </Card>
        <Card className="p-4 text-center bg-white shadow-sm">
          <div className="text-2xl mb-2">🔥</div>
          <div className="text-2xl font-bold text-sage-800 mb-1">{stats.totalCalories}</div>
          <p className="text-xs text-sage-600">Calo đã đốt</p>
        </Card>
        <Card className="p-4 text-center bg-white shadow-sm">
          <div className="text-2xl mb-2">📈</div>
          <div className="text-2xl font-bold text-sage-800 mb-1">{stats.averageDuration}</div>
          <p className="text-xs text-sage-600">Phút/buổi TB</p>
        </Card>
      </div>

      {/* Streak Stats */}
      <Card className="p-6 bg-white shadow-sm">
        <h3 className="font-serif font-bold text-sage-800 mb-4">Chuỗi ngày tập luyện</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-coral-50 rounded-xl">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-xl font-bold text-coral-600 mb-1">{stats.currentStreak}</div>
            <p className="text-sm text-coral-600">Hiện tại</p>
          </div>
          <div className="text-center p-4 bg-sage-50 rounded-xl">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-xl font-bold text-sage-600 mb-1">{stats.longestStreak}</div>
            <p className="text-sm text-sage-600">Kỷ lục</p>
          </div>
        </div>
      </Card>

      {/* Recent Workouts */}
      <Card className="p-6 bg-white shadow-sm">
        <h3 className="font-serif font-bold text-sage-800 mb-4">Hoạt động gần đây</h3>
        <div className="space-y-3">
          {workoutHistory.slice(0, 5).map((workout, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-sage-50 rounded-xl">
              <div className="flex-1">
                <h4 className="font-semibold text-sage-800 text-sm">{workout.workout}</h4>
                <p className="text-xs text-sage-600">
                  {new Date(workout.date).toLocaleDateString('vi-VN')}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 text-xs text-sage-600">
                  <span>⏱️ {workout.duration}m</span>
                  <span>🔥 {workout.calories}cal</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-ivory-50 pb-20">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-serif font-bold text-sage-800 mb-4">Lịch sử tập luyện</h1>
          
          {/* View Toggle */}
          <div className="flex space-x-2">
            <Button
              variant={viewMode === 'calendar' ? 'default' : 'outline'}
              onClick={() => setViewMode('calendar')}
              className={`rounded-xl ${
                viewMode === 'calendar'
                  ? 'gradient-sage text-white'
                  : 'border-sage-200 text-sage-600 hover:bg-sage-50'
              }`}
            >
              <Calendar size={16} className="mr-2" />
              Lịch
            </Button>
            <Button
              variant={viewMode === 'stats' ? 'default' : 'outline'}
              onClick={() => setViewMode('stats')}
              className={`rounded-xl ${
                viewMode === 'stats'
                  ? 'gradient-sage text-white'
                  : 'border-sage-200 text-sage-600 hover:bg-sage-50'
              }`}
            >
              <HistoryIcon size={16} className="mr-2" />
              Thống kê
            </Button>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'calendar' ? (
          <Card className="p-6 bg-white shadow-sm">
            <div className="mb-4">
              <h2 className="font-serif font-bold text-sage-800 text-center">
                Tháng {currentMonth + 1}, {currentYear}
              </h2>
              <p className="text-sm text-sage-600 text-center mt-1">
                Những ngày có tập luyện được tô sáng
              </p>
            </div>
            {renderCalendar()}
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-sage-100 rounded"></div>
                <span className="text-sage-600">Đã tập</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-sage-500 rounded"></div>
                <span className="text-sage-600">Hôm nay</span>
              </div>
            </div>
          </Card>
        ) : (
          renderStats()
        )}
      </div>

      <BottomNavigation currentTab="history" />
    </div>
  );
};

export default History;
