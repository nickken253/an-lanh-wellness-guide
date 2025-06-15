
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Sun, Moon } from "lucide-react";
import * as React from "react";

export function SettingsDialog({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

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
      </DialogContent>
    </Dialog>
  );
}
