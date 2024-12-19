import * as React from "react";

import { cn } from "@/lib/utils";

const Page = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col max-h-svh", className)}
    {...props}
  />
));
Page.displayName = "Page";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
Header.displayName = "Header";

const SubHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("m-4", className)} {...props} />
));
SubHeader.displayName = "SubHeader";

const Main = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grow overflow-auto m-4", className)}
    {...props}
  />
));

Main.displayName = "Main";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("border-t", className)} {...props} />
));

export default Object.assign(Page, { Header, SubHeader, Footer, Main });
