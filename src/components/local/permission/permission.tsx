import React from "react";

const Scope = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const Users = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Permission = ({
  flag,
  children,
}: {
  flag: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <p>Permission: {flag}</p>
      {children}
    </div>
  );
};

export default Object.assign(Scope, { Users, Permission });
