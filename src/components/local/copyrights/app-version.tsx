import * as React from "react";
import { cn } from "@/lib/utils";

const App = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-center", className)} {...props} />
));
App.displayName = "AppMeta";

const Version = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-sm", className)} {...props} />
));

export default Object.assign(App, { Version });
