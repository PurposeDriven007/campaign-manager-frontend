import Surface from "@/components/local/surface/surface";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/local/input/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PencilLine } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const editUserSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters long",
  }),
  middleName: z.string().optional(),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters long",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  bio: z.string().optional(),
});

export function PersonalInformation() {
  const [edit, setEdit] = useState(false);

  const form = useForm<z.infer<typeof editUserSchema>>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      bio: "",
    },
  });
  return (
    <Surface className="w-full p-4">
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-1  mb-4">
          <span className="text-base font-semibold">Personal Information</span>
          <span className="text-sm text-muted-foreground">
            Manage your personal information here. You can update your personal
            information.
          </span>
        </div>
        <div>
          <Button
            className="rounded-full"
            variant={edit ? "default" : "outline"}
            size="sm"
            onClick={() => setEdit(!edit)}
          >
            <span>Edit</span>
            <PencilLine size={16} />
          </Button>
        </div>
      </div>
      <div>
        <Form {...form}>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={!edit}
                        variant="ghost"
                        {...field}
                        value="Biswarup"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="middleName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={!edit}
                        variant="ghost"
                        {...field}
                        value=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={!edit}
                        variant="ghost"
                        {...field}
                        value="Bouri"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={!edit}
                        variant="ghost"
                        {...field}
                        value="Biswarup.Bouri@verse.in"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Type your message here."
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </Form>
      </div>
    </Surface>
  );
}
