import { Header } from "@/components/local/header/header";
import Page from "../page";
import { CreateUserForm } from "./create-user-form";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch } from "@/application/hooks/selector";
import { setShouldSubmit } from "@/application/feature/userRegistration";

export function CreateUsers() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setShouldSubmit(true));
    // navigate("/users");
  };
  const handleSave = (e: any) => {
    e.preventDefault();
    toast("User Saved", {
      description: "The user's information has been successfully saved.",
    });
  };
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Main>
        <div className="my-4">
          <h1 className="text-2xl font-bold">Add New User</h1>
          <p className="text-sm text-muted-foreground">
            Please fill out the form below to create a new user. Ensure all
            required fields are completed accurately.
          </p>
        </div>
        <div className="">
          <Suspense fallback={<div>Loading...</div>}>
            <CreateUserForm />
          </Suspense>
          <div className="my-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={handleSave}>
              <Save />
              Save
            </Button>
            <Button onClick={handleSubmit}>
              <UserPlus />
              Create
            </Button>
          </div>
        </div>
      </Page.Main>
      <Page.Footer></Page.Footer>
    </Page>
  );
}
