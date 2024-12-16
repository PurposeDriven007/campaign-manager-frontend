import { Header } from "@/components/local/header/header";
import Page from "../page";
import { CreateUserForm } from "./create-user-form";
export function CreateUsers() {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Main>
        <div className="my-4">
          <h1 className="text-2xl font-bold">Add New User</h1>
          <p>
            Please fill out the form below to create a new user. Ensure all
            required fields are completed accurately.
          </p>
        </div>
        <div className="m-4">
          <CreateUserForm />
        </div>
      </Page.Main>
    </Page>
  );
}
