import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import Toolbar from "../toolbar/toolbar";

export function Header() {
  return (
    <header className="">
      <Toolbar>
        <Toolbar.List>
          <Breadcrumbs />
        </Toolbar.List>
      </Toolbar>
    </header>
  );
}
