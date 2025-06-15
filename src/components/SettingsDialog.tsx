
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Sun, Moon, Bell, Globe } from "lucide-react";
import * as React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";

export function SettingsDialog({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);
  const [language, setLanguage] = React.useState('vi');

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card rounded-3xl border-none shadow-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl text-foreground">Cài đặt</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2 py-4">
          <div className="flex-1">
            <Label htmlFor="dark-mode" className="flex items-center text-foreground cursor-pointer">
              {theme === 'dark' ? <Moon className="mr-2 h-5 w-5" /> : <Sun className="mr-2 h-5 w-5" />}
              Chế độ tối
            </Label>
            <p className="text-xs text-muted-foreground mt-1">
              Chuyển đổi giữa giao diện sáng và tối.
            </p>
          </div>
          <Switch
            id="dark-mode"
            checked={theme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
        </div>
        <hr className="my-2 border-border" />
        <div className="flex items-center space-x-2 py-4">
          <div className="flex-1">
            <Label htmlFor="notifications" className="flex items-center text-foreground cursor-pointer">
              <Bell className="mr-2 h-5 w-5" />
              Thông báo
            </Label>
            <p className="text-xs text-muted-foreground mt-1">
              Nhận thông báo về lịch tập và cập nhật.
            </p>
          </div>
          <Switch
            id="notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </div>
        <div className="flex items-center space-x-2 py-4">
          <div className="flex-1">
            <Label htmlFor="language" className="flex items-center text-foreground">
              <Globe className="mr-2 h-5 w-5" />
              Ngôn ngữ
            </Label>
            <p className="text-xs text-muted-foreground mt-1">
              Chọn ngôn ngữ hiển thị cho ứng dụng.
            </p>
          </div>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Ngôn ngữ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vi">Tiếng Việt</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DialogContent>
    </Dialog>
  );
}
