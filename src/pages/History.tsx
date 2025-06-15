import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BottomNavigation from '@/components/BottomNavigation';
import { Calendar, History as HistoryIcon, Flame, Activity, Clock, Award } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';

const History = () => {
  const [viewMode, setViewMode] = useState<'calendar' | 'stats'>('stats');

  const workoutHistory = [
    { date: '2024-01-15', workout: 'Yoga Chào Mặt Trời', duration: 15, calories: 45, completed: true },
    { date: '2024-01-14', workout: 'Yoga Thư Giãn Tối', duration: 20, calories: 55, completed: true },
    { date: '2024-01-13', workout: 'Yoga Tăng Sức Mạnh', duration: 30, calories: 85, completed: true },
    { date: '2024-01-12', workout: 'Thiền Chánh Niệm', duration: 10, calories: 15, completed: true },
    { date: '2024-01-11', workout: 'Yoga Dẻo Dai', duration: 25, calories: 70, completed: true },
    { date: '2024-01-10', workout: 'Yoga Chào Mặt Trời', duration: 15, calories: 45, completed: true },
    { date: '2024-01-09', workout: 'Yoga Giảm Stress', duration: 20, calories: 50, completed: true },
  ];

  const chartData = workoutHistory.slice(0, 7).reverse().map(w => ({
    name: new Date(w.date).toLocaleDateString('vi-VN', { weekday: 'short' }),
    minutes: w.duration,
  }));

  const chartConfig = {
    minutes: {
      label: "Phút",
      color: "#A3B18A",
    },
  } satisfies ChartConfig;

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
              ? 'bg-sage-500 text-white font-bold shadow-neumorphic-out-sm'
              : hasWorkout
              ? 'bg-sage-100 text-sage-800 font-semibold'
              : 'text-sage-400 hover:bg-sage-50'
          }`}
        >
          <span className="text-sm">{date}</span>
          {hasWorkout && !isToday && (
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-sage-500 rounded-full"></div>
          )}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-2">{days}</div>;
  };

  const renderStats = () => (
    <div className="space-y-6 animate-fade-in">
      {/* Weekly Chart */}
      <Card className="p-4 sm:p-6 bg-ivory-50 shadow-neumorphic-out rounded-3xl">
        <h3 className="font-serif font-bold text-sage-800 text-lg mb-1">Tổng quan tuần</h3>
        <p className="text-sm text-sage-600 mb-4">Thời gian tập luyện (phút)</p>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-sage-100" />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              className="text-xs text-sage-500"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel indicator="dot" className="bg-ivory-50/80 glass-effect rounded-2xl" />}
            />
            <Bar dataKey="minutes" fill="var(--color-minutes)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </Card>

      {/* Streak Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 text-sage-800 bg-ivory-50 shadow-neumorphic-out rounded-3xl">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold">Chuỗi hiện tại</h4>
            <Flame size={20} className="text-coral-500"/>
          </div>
          <div className="text-3xl font-bold">{stats.currentStreak} <span className="text-lg font-normal">ngày</span></div>
        </Card>
        <Card className="p-4 text-sage-800 bg-ivory-50 shadow-neumorphic-out rounded-3xl">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold">Kỷ lục</h4>
            <Award size={20} className="text-sandy-400"/>
          </div>
          <div className="text-3xl font-bold">{stats.longestStreak} <span className="text-lg font-normal">ngày</span></div>
        </Card>
      </div>

      {/* Overview Stats */}
      <Card className="p-4 bg-ivory-50 shadow-neumorphic-out rounded-3xl">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <Activity className="mx-auto mb-2 text-sage-500" size={24}/>
            <div className="text-xl font-bold text-sage-800">{stats.totalWorkouts}</div>
            <p className="text-xs text-sage-600">Buổi tập</p>
          </div>
          <div>
            <Clock className="mx-auto mb-2 text-sage-500" size={24}/>
            <div className="text-xl font-bold text-sage-800">{stats.totalMinutes}</div>
            <p className="text-xs text-sage-600">Phút</p>
          </div>
          <div>
            <Flame className="mx-auto mb-2 text-coral-500" size={24}/>
            <div className="text-xl font-bold text-sage-800">{stats.totalCalories}</div>
            <p className="text-xs text-sage-600">Calo</p>
          </div>
        </div>
      </Card>
      
      {/* Recent Workouts */}
      <Card className="p-4 sm:p-6 bg-ivory-50 shadow-neumorphic-out rounded-3xl">
        <h3 className="font-serif font-bold text-sage-800 text-lg mb-4">Hoạt động gần đây</h3>
        <div className="space-y-3">
          {workoutHistory.slice(0, 3).map((workout, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-ivory-50 shadow-neumorphic-in-sm rounded-xl">
              <div className="flex-1">
                <h4 className="font-semibold text-sage-800 text-sm">{workout.workout}</h4>
                <p className="text-xs text-sage-600">
                  {new Date(workout.date).toLocaleDateString('vi-VN')}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-3 text-xs text-sage-600">
                  <span><Clock size={12} className="inline mr-1" />{workout.duration}m</span>
                  <span><Flame size={12} className="inline mr-1" />{workout.calories}cal</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-ivory-50 pb-28">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-serif font-bold text-sage-800 mb-4">Lịch sử tập luyện</h1>
          
          {/* View Toggle */}
          <div className="flex p-1 space-x-1 bg-ivory-50 shadow-neumorphic-in rounded-2xl">
            <Button
              variant="ghost"
              onClick={() => setViewMode('calendar')}
              className={`flex-1 rounded-xl transition-all ${
                viewMode === 'calendar'
                  ? 'shadow-neumorphic-out-sm bg-sage-100 text-sage-700'
                  : 'text-sage-600'
              }`}
            >
              <Calendar size={16} className="mr-2" />
              Lịch
            </Button>
            <Button
              variant="ghost"
              onClick={() => setViewMode('stats')}
              className={`flex-1 rounded-xl transition-all ${
                viewMode === 'stats'
                  ? 'shadow-neumorphic-out-sm bg-sage-100 text-sage-700'
                  : 'text-sage-600'
              }`}
            >
              <HistoryIcon size={16} className="mr-2" />
              Thống kê
            </Button>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'calendar' ? (
          <Card className="p-6 bg-ivory-50 shadow-neumorphic-out rounded-3xl">
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
                <div className="w-3 h-3 bg-sage-100 rounded-sm"></div>
                <span className="text-sage-600">Đã tập</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-sage-500 rounded-sm"></div>
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
