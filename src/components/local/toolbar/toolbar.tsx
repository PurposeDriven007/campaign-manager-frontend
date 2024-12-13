import * as React from "react";
import { cn } from "@/lib/utils";

const Toolbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("sticky border-b h-16 w-full flex flex-row", className)}
    {...props}
  />
));
Toolbar.displayName = "Toolbar";

interface ToolbarListProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "left" | "right";
}

const ToolbarList = React.forwardRef<HTMLDivElement, ToolbarListProps>(
  ({ className, align = "left", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "px-4 flex h-full items-center gap-1",
        { "justify-end": align === "right" },
        className
      )}
      {...props}
    />
  )
);
ToolbarList.displayName = "ToolbarList";

const ToolbarItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
ToolbarItem.displayName = "ToolbarItem";

export default Object.assign(Toolbar, { List: ToolbarList, Item: ToolbarItem });
