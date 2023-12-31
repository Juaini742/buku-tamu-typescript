import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {routeItem} from "./item";
import {AuthProvider} from "../middleware/AuthMiddleware";

export const RootRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {routeItem.map((item, i) => (
            <Route key={i} path={item.path} element={item.element} />
          ))}
        </Routes>
      </AuthProvider>
    </Router>
  );
};
