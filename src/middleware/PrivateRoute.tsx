// PrivateRoute.tsx
import React from "react";
import {Navigate, Route, RouteProps, Routes} from "react-router-dom";
import {useAuth} from "./AuthMiddleware";

interface PrivateRouteProps extends RouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({element, ...rest}) => {
  const {isAuthenticated} = useAuth();

  const localStorageToken = localStorage.getItem("token");

  if (!isAuthenticated && !localStorageToken) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route {...rest} path="*" element={element} />
    </Routes>
  );
};

export default PrivateRoute;
