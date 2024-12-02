import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ tokenPresent, children }) => {
  if (!tokenPresent) {
    // Redirect to landing page if no token is present
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
