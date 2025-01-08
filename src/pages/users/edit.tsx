import { Header } from "@/components/local/header/header";
import Page from "../page";
import Surface from "@/components/local/surface/surface";
import { PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
import { Input } from "@/components/local/input/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
});

export function UserEdit() {
  const [edit, setEdit] = useState(false);
  const form = useForm<z.infer<typeof editUserSchema>>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
    },
  });
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.SubHeader>
        <div className="user-management">
          <h1 className="text-2xl font-bold ">My Profile</h1>
          <p className="text-sm text-muted-foreground">
            Manage your profile here. You can upadte your personal information
            and password, and view your activity.
          </p>
        </div>
      </Page.SubHeader>
      <Page.Main className="grid grid-cols-1 gap-4">
        <Surface className="w-full p-4">
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-1  mb-4">
              <span className="text-base font-semibold">
                Personal Information
              </span>
              <span className="text-sm text-muted-foreground">
                User Personal Information
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
            </Form>
          </div>
        </Surface>
        <Surface className="w-full p-4">
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-1  mb-4">
              <span className="text-base font-semibold">
                Personal Information
              </span>
              <span className="text-sm text-muted-foreground">
                User Personal Information
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
            </Form>
          </div>
        </Surface>
      </Page.Main>
    </Page>
  );
}
