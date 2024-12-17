import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "@/pages/home/home";
import Login from "@/pages/login/login";
import LoginErrorBoundary from "./login/error";
import AuthenticatedLayout from "./authenticated-routes";
import Campaigns from "./campaigns/campaigns";
import Users from "./users/users";
import ForgotPasswordPage from "./login/forgot-password";
import ResetPasswordPage from "./login/reset-password";
import { CreateUsers } from "./users/create";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "campaigns",
        element: <Campaigns />,
      },
      {
        path: "analytics",
        element: <div>Analytics</div>,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
      {
        path: "users",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: "create",
            element: <CreateUsers />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <LoginErrorBoundary />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
    errorElement: <LoginErrorBoundary />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
    errorElement: <LoginErrorBoundary />,
  },
]);

export default routes;
