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
import { Input } from "@/components/ui/input";
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
      <Page.Main>
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
              <FormField
                control={form.control}
                name="firstName"
                disabled={!edit}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Form>
          </div>
        </Surface>
      </Page.Main>
      <Page.Footer></Page.Footer>
    </Page>
  );
}
