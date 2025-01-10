import { Header } from "@/components/local/header/header";
import Page from "../../page";
import Surface from "@/components/local/surface/surface";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { PersonalInformation } from "./personal-information";
import { AddressInformation } from "./address";
import { PasswordInformation } from "./password";

export function MyProfile() {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Main className="grid grid-cols-1 gap-4">
        <div className="user-management">
          <h1 className="text-2xl font-bold ">My Profile</h1>
          <p className="text-sm text-muted-foreground">
            Manage your profile here. You can update your personal information
            and password, and view your activity.
          </p>
        </div>
        <Surface className="w-full p-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                className="rounded-full h-28 w-28"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid grid-cols-1 gap-2">
              <h2 className="text-base font-semibold">Biswarup Bouri</h2>
              <span className="text-sm text-muted-foreground">Admin</span>
              <span className="text-sm text-muted-foreground">
                Banglore, India
              </span>
            </div>
          </div>
        </Surface>
        <PersonalInformation />
        <AddressInformation />
        <PasswordInformation />
      </Page.Main>
    </Page>
  );
}
