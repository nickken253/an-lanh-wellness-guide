
import * as React from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger, SheetFooter } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự." }),
  height: z.coerce.number().positive({ message: "Chiều cao phải là số dương." }),
  weight: z.coerce.number().positive({ message: "Cân nặng phải là số dương." }),
  gender: z.string(),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), { message: "Ngày sinh không hợp lệ." }),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface EditProfileSheetProps {
  children: React.ReactNode;
  user: Partial<ProfileFormValues>;
  onSave: (data: ProfileFormValues) => void;
}

export function EditProfileSheet({ children, user, onSave }: EditProfileSheetProps) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
        name: user.name || "",
        height: user.height || 0,
        weight: user.weight || 0,
        gender: user.gender || "other",
        dob: user.dob ? new Date(user.dob).toISOString().split('T')[0] : "",
    },
  });

  function onSubmit(data: ProfileFormValues) {
    onSave(data);
    toast.success("Hồ sơ đã được cập nhật thành công!");
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="bg-card border-none">
        <SheetHeader>
          <SheetTitle className="font-serif text-xl text-foreground">Chỉnh sửa hồ sơ</SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Cập nhật thông tin cá nhân của bạn.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên</FormLabel>
                  <FormControl>
                    <Input placeholder="Tên của bạn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chiều cao (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="170" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cân nặng (kg)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="65" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Giới tính</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn giới tính" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Nam</SelectItem>
                      <SelectItem value="female">Nữ</SelectItem>
                      <SelectItem value="other">Khác</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ngày sinh</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter className="pt-4">
              <Button type="submit">Lưu thay đổi</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
