import { useAppSelector } from "@/application/hooks/selector";
import React from "react";

interface ScopeProps extends React.HTMLAttributes<HTMLDivElement> {
  scope: "read" | "delete" | "update" | "create" | "export";
}

function Permission(props: ScopeProps) {
  const permission = useAppSelector((state) => state.user.permission);
  return <div>Scope</div>;
}
Permission.displayName = "Scope";
