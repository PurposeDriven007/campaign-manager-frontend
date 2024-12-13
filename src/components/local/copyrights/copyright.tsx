import * as React from "react";
import { cn } from "@/lib/utils";

const Copyrights = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-baseline justify-center space-x-2 py-1",
      className
    )}
    {...props}
  />
));
Copyrights.displayName = "AppCopyRight";

const Text = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-sm", className)} {...props} />
));

export default Object.assign(Copyrights, { Text });
