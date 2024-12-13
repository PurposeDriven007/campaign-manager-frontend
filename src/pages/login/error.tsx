import { useRouteError } from "react-router-dom";

function LoginErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
}

export default LoginErrorBoundary;
