import Sidebar from "./sidebar";
import Toolbar from "@/components/local/toolbar/toolbar";
import App from "../copyrights/app-version";
import Copyrights from "../copyrights/copyright";
import { XSUserInfoCard } from "../user/xs-user-info-card";
import { useAppSelector } from "@/application/hooks/selector";
import sidebarNavigation from "@/constants/sidebarNavigation";
import clsx from "clsx";
import { Tooltip } from "@/components/ui/tooltip";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useNavigate } from "react-router-dom";

function MainSidebar() {
  const isExpanded = useAppSelector((state) => state.sidebar.isExpanded);
  const navigate = useNavigate();

  return (
    <Sidebar>
      <Sidebar.Header>
        <Toolbar>
          <Toolbar.List>
            <Toolbar.Item>
              <div className="text-lg font-bold">Campaign Manager</div>
            </Toolbar.Item>
          </Toolbar.List>
        </Toolbar>
      </Sidebar.Header>
      <Sidebar.Container>
        <Sidebar.Group>
          <Sidebar.Menu
            className={clsx({
              "items-center": !isExpanded,
            })}
          >
            {sidebarNavigation.map((nav, index) => (
              <Sidebar.Menu.Item
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(nav.path);
                }}
              >
                <Sidebar.Menu.Icon>
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <nav.icon />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white p-4">
                        <p>{nav.item}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Sidebar.Menu.Icon>
                {isExpanded && <span>{nav.item}</span>}
              </Sidebar.Menu.Item>
            ))}
          </Sidebar.Menu>
        </Sidebar.Group>
      </Sidebar.Container>
      <Sidebar.Footer>
        <XSUserInfoCard />
        <Copyrights>
          <Copyrights.Text>&copy; 2024 Nexverse Inc.</Copyrights.Text>
          <App>
            <App.Version>0.0.0-local</App.Version>
          </App>
        </Copyrights>
      </Sidebar.Footer>
    </Sidebar>
  );
}

export default MainSidebar;
