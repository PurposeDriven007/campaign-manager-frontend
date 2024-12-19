import { Header } from "@/components/local/header/header";
import Page from "../page";

export function UserEdit() {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Main>
        <h1>User Edit</h1>
      </Page.Main>
      <Page.Footer></Page.Footer>
    </Page>
  );
}
