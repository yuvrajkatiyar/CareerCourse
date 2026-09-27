import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({
  children,
}) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return (
      <Navigate
        to="/admin-login"
        replace
      />
    );
  }

  // Logged in but not admin
  if (role !== "admin") {
    return (
      <Navigate
        to="/admin-login"
        replace
      />
    );
  }

  return children;
}