
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { BadgeInfo } from '@/types';

interface BadgesCollectionProps {
  badges: BadgeInfo[];
}

export const BadgesCollection = ({ badges }: BadgesCollectionProps) => {
  return (
    <Card className="p-6 mb-6 rounded-3xl shadow-md">
      <h3 className="font-serif font-bold text-foreground mb-4">Bộ sưu tập huy hiệu</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {badges.map((badge) => (
          <Dialog key={badge.id}>
            <DialogTrigger asChild>
              <button
                className={`text-center p-3 rounded-2xl transition-all cursor-pointer ${
                  badge.earned
                    ? 'bg-card shadow-md active:scale-95'
                    : 'bg-muted/50 opacity-60'
                }`}
                disabled={!badge.earned}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h4 className={`text-xs font-semibold ${
                  badge.earned ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {badge.name}
                </h4>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-card rounded-3xl border-none shadow-lg">
              <div className="text-center p-4">
                <div className="text-6xl mb-4">{badge.icon}</div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{badge.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{badge.description}</p>
                {badge.earned ? (
                  <div className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full inline-block">
                    ✅ Đã đạt được
                  </div>
                ) : (
                  <div className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full inline-block">
                    🔒 Chưa mở khóa
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Card>
  );
};
