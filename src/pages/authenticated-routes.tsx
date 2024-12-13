import { RootLayout } from "@/components/local/layouts/root-layout";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function AuthenticatedLayout() {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(() => {
    const token = Cookies.get("access_token");
    if (token) {
      return true;
    }
    return false;
  });

  if (isAuthenticated) {
    return <RootLayout />;
  } else {
    console.log(isAuthenticated);

    return <Navigate to="/login" />;
  }
}

export default AuthenticatedLayout;
