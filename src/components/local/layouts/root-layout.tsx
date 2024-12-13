import { Outlet } from "react-router-dom";
import { Container } from "../container/container";
import clsx from "clsx";
import { useAppSelector } from "@/application/hooks/selector";
import NestedSidebarNavigation from "../sidebar/sidebarNew";
import Sidebar from "../sidebar/mainSidebar";

export function RootLayout() {
  const isExpanded = useAppSelector((state) => state.sidebar.isExpanded);

  return (
    <Container
      maxWidth="2xl"
      className="px-0 grid grid-cols-12"
      id="root_layout"
    >
      <aside
        className={clsx(
          { "col-span-3": isExpanded, "col-span-1": !isExpanded },
          "min-h-screen border-r"
        )}
      >
        <Sidebar />
        {/* <NestedSidebarNavigation /> */}
      </aside>
      <div
        className={clsx({
          "col-span-9": isExpanded,
          "col-span-11": !isExpanded,
        })}
      >
        <Outlet />
      </div>
    </Container>
  );
}
