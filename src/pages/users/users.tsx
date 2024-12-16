import { Header } from "@/components/local/header/header";
import Page from "../page";
import { Button } from "@/components/ui/button";
import { ListFilter, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/users/create");
  };

  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Main>
        <div className="user-management">
          <h1 className="text-2xl font-bold">User Management</h1>
          <p>
            Manage your users here. You can add, edit, delete and view users.
          </p>
        </div>
        <div className="flex space-x-2 mt-2">
          <div className="flex-1">
            <span>
              <strong></strong>
            </span>
          </div>
          <div className="relative mb-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Search users..."
              className="border rounded p-2 pl-10 w-full"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <Button variant="outline">
            <ListFilter />
            <span>Filters</span>
          </Button>
          <Button onClick={handleAddUser}>
            <UserPlus />
            <span>Add User</span>
          </Button>
        </div>
      </Page.Main>
      <Page.Footer></Page.Footer>
    </Page>
  );
}

export default Users;
