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

const editAddressSchema = z.object({
  city: z.string().min(2, {
    message: "City name must be at least 2 characters long",
  }),
  state: z.string().min(2, {
    message: "State name must be at least 2 characters long",
  }),
  country: z.string().min(2, {
    message: "Country name must be at least 2 characters long",
  }),
});

export function AddressInformation() {
  const [edit, setEdit] = useState(false);

  const form = useForm<z.infer<typeof editAddressSchema>>({
    resolver: zodResolver(editAddressSchema),
    defaultValues: {
      city: "Banglore",
      state: "Karnataka",
      country: "India",
    },
  });
  return (
    <Surface className="w-full p-4">
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-1  mb-4">
          <span className="text-base font-semibold">Address</span>
          <span className="text-sm text-muted-foreground">
            Manage your address here. You can update your address information
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
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input disabled={!edit} variant="ghost" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input disabled={!edit} variant="ghost" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input disabled={!edit} variant="ghost" {...field} />
                    </FormControl>
                    <FormMessage />
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
