import {Route, Routes} from "react-router-dom";
import {useAuth} from "../middleware/AuthMiddleware";
import {routeItem} from "./item";

export const RenderRoute = () => {
  const {isAuthenticated} = useAuth();

  return (
    <Routes>
      {routeItem.map((r, i) => {
        if (r.isPrivate && isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  );
};
