import { Header } from "@/components/local/header/header";
import Page from "../page";
import { Button } from "@/components/ui/button";
import { ListFilter, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { EllipsisVertical } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/local/table/table";
import { Badge } from "@/components/local/badge/badge";
import Toolbar from "@/components/local/toolbar/toolbar";
import { Paginate } from "@/components/local/pagination/paginate";

const dummydata = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Campaign Manager",
    lastActive: "Offline",
    dateAdded: "2021-08-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Admin",
    lastActive: "Online",
    dateAdded: "2021-07-22",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Reporting",
    lastActive: "Offline",
    dateAdded: "2021-09-01",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    role: "Campaign Manager",
    lastActive: "Online",
    dateAdded: "2021-06-30",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    role: "Reporting",
    lastActive: "Offline",
    dateAdded: "2021-05-20",
  },
  {
    id: 6,
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "Admin",
    lastActive: "Online",
    dateAdded: "2021-04-10",
  },
  {
    id: 7,
    name: "Emma Thomas",
    email: "emma.thomas@example.com",
    role: "Campaign Manager",
    lastActive: "Offline",
    dateAdded: "2021-03-25",
  },
  {
    id: 8,
    name: "Frank Harris",
    email: "frank.harris@example.com",
    role: "Reporting",
    lastActive: "Online",
    dateAdded: "2021-02-18",
  },
  {
    id: 9,
    name: "Grace Lee",
    email: "grace.lee@example.com",
    role: "Admin",
    lastActive: "Offline",
    dateAdded: "2021-01-30",
  },
  {
    id: 10,
    name: "Henry Walker",
    email: "henry.walker@example.com",
    role: "Campaign Manager",
    lastActive: "Online",
    dateAdded: "2020-12-15",
  },
  {
    id: 11,
    name: "Ivy Martinez",
    email: "ivy.martinez@example.com",
    role: "Admin",
    lastActive: "Online",
    dateAdded: "2020-11-05",
  },
  {
    id: 12,
    name: "Jack White",
    email: "jack.white@example.com",
    role: "Campaign Manager",
    lastActive: "Offline",
    dateAdded: "2020-10-20",
  },
  {
    id: 13,
    name: "Karen Black",
    email: "karen.black@example.com",
    role: "Reporting",
    lastActive: "Online",
    dateAdded: "2020-09-15",
  },
];

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
      <Page.SubHeader>
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
      </Page.SubHeader>
      <Page.Main>
        <div>
          <Table>
            <TableHeader className="">
              <TableRow className="">
                <TableHead>Users</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Date Added</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummydata.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    <div className="grid grid-cols-1">
                      <span className="text-sm font-semibold">{user.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {user.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`badge ${
                        user.lastActive === "Online"
                          ? "badge-success"
                          : "badge-muted"
                      }`}
                    >
                      {user.lastActive}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span>{user.dateAdded}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <EllipsisVertical />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Page.Main>
      <Page.Footer>
        <Toolbar>
          <Paginate length={dummydata.length} />
        </Toolbar>
      </Page.Footer>
    </Page>
  );
}

export default Users;
