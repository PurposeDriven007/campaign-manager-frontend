import React from "react";
import { cn } from "@/lib/utils";

const Surface = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm w-[200px]",
      className
    )}
    {...props}
  />
));
Surface.displayName = "Surface";

export default Surface;
