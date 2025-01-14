import { useAppSelector } from "@/application/hooks/selector";
import Surface from "@/components/local/surface/surface";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { generatePassword } from "@/utils/generatePassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createAdvertiserSchema = z.object({
  name: z
    .string({
      message: "Advertiser name is required.",
    })
    .min(3, {
      message: "Advertiser name must be at least 3 characters.",
    }),
  email: z
    .string({
      message: "Advertiser email is required.",
    })
    .email("Invalid email address")
    .refine(
      (email) =>
        !/(yopmail\.com|mailinator\.com|guerrillamail\.com|10minutemail\.com)$/.test(
          email
        ),
      {
        message: "Disposable email addresses are not allowed",
      }
    ),
  dmain: z.string({
    message: "Advertiser domain is required.",
  }),
  domainCategory: z.string({
    message: "Advertiser domain category is required.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  address: z
    .string({
      message: "Advertiser address is required.",
    })
    .min(3, {
      message: "Advertiser address must be at least 3 characters.",
    }),
  country: z.string({
    message: "Advertiser country is required.",
  }),
  state: z.string({
    message: "Advertiser state is required.",
  }),
  city: z.string({
    message: "Advertiser city is required.",
  }),
  zip: z.number({
    message: "Advertiser zip is required.",
  }),
  phone: z.string({
    message: "Advertiser phone is required.",
  }),
});

export function AdvertiserDetails() {
  const email = useAppSelector((state) => state.advertiserSignup.email);
  const form = useForm<z.infer<typeof createAdvertiserSchema>>({
    resolver: zodResolver(createAdvertiserSchema),
    defaultValues: {
      name: "",
      email: email,
      password: "",
      dmain: "",
      domainCategory: "",
      address: "",
    },
  });

  const handleGeneratePassword = () => {
    form.setValue("password", generatePassword());
  };

  return (
    <Form {...form}>
      <Surface className="w-full p-4">
        <div className="grid grid-cols-1  mb-4">
          <span className="text-base font-semibold">Basic Information</span>
          <span className="text-sm text-muted-foreground">
            Basic information about the advertiser
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Advertiser Name *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Enter the name of the advertiser
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    type="email"
                    {...field}
                    value={email}
                    disabled
                  />
                </FormControl>
                <FormDescription>Email verified</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dmain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Domain *</FormLabel>
                <FormControl>
                  <Input placeholder="example.com" type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the domain of the advertiser (e.g. example.com)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="domainCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Domain Category *</FormLabel>
                <FormControl>
                  <Input placeholder="Technology" type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Select the domain category from the dropdown list
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Surface>
      <Surface className="w-full p-4 mt-4">
        <div className="grid grid-cols-1  mb-4">
          <span className="text-base font-semibold">
            Business Address & Contact Information
          </span>
          <span className="text-sm text-muted-foreground">
            Business address and contact information of the advertiser for
            billing and communications.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234 Main St, City, State, Zip"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter the address of the advertiser
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country *</FormLabel>
                <FormControl>
                  <Input placeholder="United States" type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Select the country from the dropdown list
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City *</FormLabel>
                <FormControl>
                  <Input placeholder="Los Angeles" type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the city of the advertiser
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State/Provision *</FormLabel>
                <FormControl>
                  <Input placeholder="California" type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the state of the advertiser
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zipcode *</FormLabel>
                <FormControl>
                  <Input placeholder="90001" type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the zipcode of the advertiser
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Surface>
      <Surface className="w-full p-4 mt-4">
        <div className="grid grid-cols-1  mb-4">
          <span className="text-base font-semibold">
            Credentials & Passwords
          </span>
          <span className="text-sm text-muted-foreground">
            Initial password for the advertiser to login. You can change it in
            the profile settings.
          </span>
        </div>
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
                  Generate or enter a password for your account
                </FormDescription>
              </FormItem>
            )}
          />
          <Button onClick={handleGeneratePassword} className="md:self-center">
            Generate
          </Button>
        </div>
      </Surface>
    </Form>
  );
}
