import * as React from "react";
import { cn } from "@/lib/utils";

const Menu = React.forwardRef<
  HTMLMenuElement,
  React.HTMLAttributes<HTMLMenuElement>
>(({ className, ...props }, ref) => (
  <menu
    ref={ref}
    className={cn("flex flex-col space-y-0 justify-center", className)}
    {...props}
  />
));
Menu.displayName = "SidebarMenu";

const Item = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      "h-12 hover:bg-accent block py-1 px-4 rounded-md transition cursor-pointer flex flex-row items-center",
      className
    )}
    {...props}
  />
));
Item.displayName = "MenuItem";

const Icon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-10 w-10 flex items-center justify-center", className)}
    {...props}
  />
));
Icon.displayName = "MenuIcon";

export default Object.assign(Menu, { Item, Icon });
