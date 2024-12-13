import { Settings, Users, ChartSpline, Filter, House } from "lucide-react";

const sidebarNavigation = [
  {
    icon: House,
    item: "Overview",
    path: "/",
  },
  { icon: Filter, item: "Campaigns", path: "/campaigns" },
  {
    icon: ChartSpline,
    item: "Analytics",
    path: "/analytics",
    items: [],
  },
  { icon: Settings, item: "Settings", path: "/settings" },
  {
    icon: Users,
    item: "Users",
    path: "/users",
  },
];
export default sidebarNavigation;
