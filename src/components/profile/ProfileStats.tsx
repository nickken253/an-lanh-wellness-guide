
import { Card } from '@/components/ui/card';

interface ProfileStatsProps {
  totalSessions: number;
  totalMinutes: number;
}

export const ProfileStats = ({ totalSessions, totalMinutes }: ProfileStatsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <Card className="p-4 text-center rounded-2xl shadow-md">
        <div className="text-2xl mb-2">📅</div>
        <div className="text-xl font-bold text-foreground mb-1">{totalSessions}</div>
        <p className="text-xs text-muted-foreground">Buổi tập</p>
      </Card>
      <Card className="p-4 text-center rounded-2xl shadow-md">
        <div className="text-2xl mb-2">⏰</div>
        <div className="text-xl font-bold text-foreground mb-1">{totalMinutes}</div>
        <p className="text-xs text-muted-foreground">Phút tập</p>
      </Card>
    </div>
  );
};
