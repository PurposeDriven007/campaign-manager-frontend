import * as React from "react";
import { cn } from "@/lib/utils";

import SidebarMenu from "../menu/sidebar-menu";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("h-full flex flex-col", className)} {...props} />
));
Sidebar.displayName = "Sidebar";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
Header.displayName = "SidebarHeader";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col spac-y-2", className)}
    {...props}
  />
));
Footer.displayName = "SidebarFooter";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 p-2", className)} {...props} />
));
Container.displayName = "SidebarContainer";

const Group = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));

export default Object.assign(Sidebar, {
  Header,
  Footer,
  Group,
  Container,
  Menu: SidebarMenu,
});
