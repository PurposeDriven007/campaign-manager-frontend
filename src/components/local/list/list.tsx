import { cn } from "@/lib/utils";
import React from "react";

const List = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("grid grid-cols-1 divide-y", className)}
    {...props}
  />
));
List.displayName = "List";

const ListItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      "py-2 flex flex-row items-center hover:bg-accent hover:text-accent-foreground cursor-pointer",
      className
    )}
    {...props}
  />
));

const ListIcon = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("mr-2 inline-block", className)} {...props} />
));

const ListAction = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("px-4 py-2 bg-blue-500 text-white rounded", className)}
    {...props}
  />
));

const ListItemText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
));

export default Object.assign(List, {
  Item: ListItem,
  Icon: ListIcon,
  Action: ListAction,
  Text: ListItemText,
});
