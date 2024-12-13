"use client";

import * as React from "react";
import {
  Home,
  Settings,
  Users,
  HelpCircle,
  BarChart2,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Define the structure for our navigation items
type NavItem = {
  title: string;
  icon: React.ElementType;
  href?: string;
  isActive?: boolean;
  children?: NavItem[];
};

// Sample navigation data with nested items
const navItems: NavItem[] = [
  { title: "Dashboard", icon: Home, href: "/", isActive: true },
  {
    title: "Analytics",
    icon: BarChart2,
    children: [
      { title: "Overview", icon: ChevronRight, href: "/analytics/overview" },
      { title: "Reports", icon: ChevronRight, href: "/analytics/reports" },
    ],
  },
  { title: "Users", icon: Users, href: "/users" },
  {
    title: "Settings",
    icon: Settings,
    children: [
      { title: "Profile", icon: ChevronRight, href: "/settings/profile" },
      { title: "Security", icon: ChevronRight, href: "/settings/security" },
    ],
  },
  { title: "Help", icon: HelpCircle, href: "/help" },
];

const NavItemComponent: React.FC<{ item: NavItem; depth?: number }> = ({
  item,
  depth = 0,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (item.children) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="w-full justify-between">
            <span className="flex items-center gap-3">
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children.map((child) => (
              <SidebarMenuSubItem key={child.title}>
                <NavItemComponent item={child} depth={depth + 1} />
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuButton asChild isActive={item.isActive}>
      <a href={item.href} className="flex items-center gap-3">
        <item.icon className="h-4 w-4" />
        <span>{item.title}</span>
      </a>
    </SidebarMenuButton>
  );
};

export default function NestedSidebarNavigation() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="px-6 text-lg font-semibold">My App</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <NavItemComponent item={item} />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  );
}
