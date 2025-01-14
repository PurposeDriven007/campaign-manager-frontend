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
import {
  InputOTPGroup,
  InputOTPSlot,
  InputOTP,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useAppDispatch } from "@/application/hooks/selector";
import {
  setEmail,
  setNextStep,
  setVerfiedEmail,
} from "@/application/feature/advertiser-signup";

const schema: z.ZodSchema = z.object({
  email: z.string().email({
    message: "A valid email address is required.",
  }),
  otp: z.string().min(4, {
    message: "Enter a valid OTP.",
  }),
});

export function AdvertiserEmailVerification() {
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const handleRequestOTP = async () => {
    await form.trigger("email");
    toast.success("OTP sent to your email address successfully.");
  };

  const handleVerifyOTP = async () => {
    // Once the email is verified, the user can proceed to the next step.
    // Otherwise the next step will be disabled.
    try {
      // log form values
      console.log(form.getValues());
      await form.trigger("otp");
      dispatch(setVerfiedEmail(true));
      dispatch(setNextStep());
      dispatch(setEmail(form.getValues().email));
      toast.success("OTP verified successfully.");
    } catch (error) {
      toast.error("Invalid OTP. Please try again.");
    }
  };
  return (
    <Form {...form}>
      <div className="grid grid-cols-1 gap-4">
        <Surface className="w-full p-4">
          <div className="grid grid-cols-1  mb-4">
            <span className="text-base font-semibold">Email Address</span>
            <span className="text-sm text-muted-foreground">
              Email verification is required to proceed with the registration.
            </span>
          </div>
          <div className="grid grid-cols-12 gap-4 mb-4 items-center">
            <div className="col-span-10">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Advertiser Email *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="admin@organization.com"
                        type="email"
                      />
                    </FormControl>
                    <FormDescription>
                      Enter your email address to receive the OTP.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Button onClick={handleRequestOTP} className="md:self-center">
                Request OTP
              </Button>
            </div>
          </div>
        </Surface>
        <Surface className="w-full p-4">
          <div className="grid grid-cols-1  mb-4">
            <span className="text-base font-semibold">OTP Verification</span>
            <span className="text-sm text-muted-foreground">
              Enter the OTP sent to your email address.
            </span>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-10">
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OTP *</FormLabel>
                    <FormControl>
                      <InputOTP
                        {...field}
                        maxLength={4}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      Enter the OTP sent to your email address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Button onClick={handleVerifyOTP} className="md:self-center">
                Verify OTP
              </Button>
            </div>
          </div>
        </Surface>
      </div>
    </Form>
  );
}
