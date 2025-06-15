
export interface UserProfile {
  name: string;
  email: string;
  level: number;
  xp: number;
  xpToNext: number;
  totalMinutes: number;
  totalSessions: number;
  joinDate: string;
  height: number;
  weight: number;
  gender: string;
  dob: string;
}

export interface BadgeInfo {
    id: number;
    name: string;
    icon: string;
    description: string;
    earned: boolean;
}
