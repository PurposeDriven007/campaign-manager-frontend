import { Header } from "@/components/local/header/header";
import Page from "../page";
function Home() {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Main></Page.Main>
      <Page.Footer>
        <p>Footer content</p>
      </Page.Footer>
    </Page>
  );
}

export default Home;
