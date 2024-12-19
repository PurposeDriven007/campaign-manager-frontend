import { useAppSelector } from "@/application/hooks/selector";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function CreateUserPermission() {
  const hasCreateUserPermission = useAppSelector(
    (state) => state.user.permissions?.users.canUpdate
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!hasCreateUserPermission) {
      toast.error("You do not have permission to create a user.");
      navigate("/users");
    }
  }, [hasCreateUserPermission, navigate]);

  return <Outlet />;
}
