import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generatePassword } from "../../utils/generatePassword";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import Surface from "@/components/local/surface/surface";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/application/hooks/selector";
import { useQuery } from "@tanstack/react-query";
import { getRoles } from "@/apis";

const createUserSchema = z.object({
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
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  role: z.string(),
  permissions: z.object({
    users: z
      .object({
        canRead: z.boolean(),
        canUpdate: z.boolean(),
      })
      .optional(),
    accounts: z
      .object({
        canRead: z.boolean(),
        canUpdate: z.boolean(),
      })
      .optional(),
    campaigns: z
      .object({
        canRead: z.boolean(),
        canUpdate: z.boolean(),
      })
      .optional(),
  }),
});

export function CreateUserForm() {
  const shouldSubmit = useAppSelector(
    (state) => state.userRegistration.shouldSubmit
  );
  const dispatch = useAppDispatch();

  const { data: roles } = useQuery({
    queryKey: ["getRoles"],
    queryFn: getRoles,
  });

  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: generatePassword(),
      role: "Campaign Manager",
    },
  });

  const handleGeneratePassword = (e: any) => {
    e.preventDefault();

    form.setValue("password", generatePassword());
  };

  useEffect(() => {
    if (form.getValues().role.includes("Admin")) {
      form.setValue("permissions", {
        users: {
          canRead: true,
          canUpdate: true,
        },
        accounts: {
          canRead: true,
          canUpdate: true,
        },
        campaigns: {
          canRead: true,
          canUpdate: true,
        },
      });
    }
    if (form.getValues().role.includes("Campaign Manager")) {
      form.setValue("permissions", {
        users: {
          canRead: true,
          canUpdate: false,
        },
        accounts: {
          canRead: true,
          canUpdate: false,
        },
        campaigns: {
          canRead: true,
          canUpdate: true,
        },
      });
    }
    if (form.getValues().role.includes("Reporting")) {
      form.setValue("permissions", {
        users: {
          canRead: true,
          canUpdate: false,
        },
        accounts: {
          canRead: true,
          canUpdate: false,
        },
        campaigns: {
          canRead: true,
          canUpdate: false,
        },
      });
    }
  }, [form.watch()]);

  useEffect(() => {
    if (shouldSubmit) {
      form.handleSubmit((data) => {
        console.log(data);
      })();
    }
  }, [shouldSubmit]);

  return (
    <>
      <Form {...form}>
        <Surface className="w-full p-4">
          <div className="grid grid-cols-1  mb-4">
            <span className="text-base font-semibold">
              Basic User Information
            </span>
            <span className="text-sm text-muted-foreground">
              Basic user information required to create the user account.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
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
                    <Input placeholder="Middle name" {...field} />
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
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
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
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col md:flex-row gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      Generate or enter a password for the user
                    </FormDescription>
                  </FormItem>
                )}
              />
              <Button
                onClick={handleGeneratePassword}
                className="md:self-center"
              >
                Generate
              </Button>
            </div>
          </div>
        </Surface>
        <Surface className="w-full p-4 mt-4">
          <div className="grid grid-cols-1  mb-4">
            <span className="text-base font-semibold">
              Roles and Permissions
            </span>
            <span className="text-sm text-muted-foreground">
              Set user role and permissions. Permissions are user-based and
              allow for granular access control.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue>
                            {field.value || "Select user role"}
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background">
                        {roles?.map((role) => (
                          <SelectItem key={role.id} value={role.name}>
                            {role.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select user role from the dropdown
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-4">
              <span className="text-sm font-medium leading-none ">
                Permissions
              </span>
              <Tabs defaultValue="users" className="w-full">
                <TabsList className="space-x-4 w-full justify-start">
                  <TabsTrigger value="users">Users</TabsTrigger>
                  <TabsTrigger value="accounts">Accounts</TabsTrigger>
                  <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                </TabsList>
                <TabsContent value="users">
                  <FormField
                    control={form.control}
                    name="permissions.users.canRead"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between p-3">
                        <div className="space-y-0.5">
                          <FormLabel>
                            Can Read <span className="text-sm">(View)</span>
                          </FormLabel>
                          <FormDescription>
                            Allow user to view users
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-readonly
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="permissions.users.canUpdate"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between p-3">
                        <div className="space-y-0.5">
                          <FormLabel>
                            Can Update <span className="text-sm">(Update)</span>
                          </FormLabel>
                          <FormDescription>
                            Allow user to update users
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-readonly
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </TabsContent>
                <TabsContent value="accounts">
                  <FormField
                    control={form.control}
                    name="permissions.accounts.canRead"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between p-3">
                        <div className="space-y-0.5">
                          <FormLabel>
                            Can Read <span className="text-sm">(View)</span>
                          </FormLabel>
                          <FormDescription>
                            Allow user to view accounts
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-readonly
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="permissions.accounts.canUpdate"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between p-3">
                        <div className="space-y-0.5">
                          <FormLabel>
                            Can Update <span className="text-sm">(Update)</span>
                          </FormLabel>
                          <FormDescription>
                            Allow user to update accounts
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-readonly
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </TabsContent>
                <TabsContent value="campaigns">
                  <>
                    <FormField
                      control={form.control}
                      name="permissions.campaigns.canRead"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between p-3">
                          <div className="space-y-0.5">
                            <FormLabel>
                              Can Read <span className="text-sm">(View)</span>
                            </FormLabel>
                            <FormDescription>
                              Allow user to view campaigns
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              aria-readonly
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="permissions.campaigns.canUpdate"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between p-3">
                          <div className="space-y-0.5">
                            <FormLabel>
                              Can Update{" "}
                              <span className="text-sm">(Update)</span>
                            </FormLabel>
                            <FormDescription>
                              Allow user to update campaigns
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              aria-readonly
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Surface>
      </Form>
    </>
  );
}
