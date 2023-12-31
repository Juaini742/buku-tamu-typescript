import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Home from "../component/pages/client/Home";
// import Register from "../component/pages/Register";
// import Login from "../component/pages/Login";
// import NewsDetails from "../component/molecules/client/News/details";
// import StaticTable from "../component/pages/client/Static.Table";
// import NewsPage from "../component/pages/client/News";
// import Publication from "../component/pages/client/Publicatin";
// import PressRelease from "../component/pages/client/Press.Release";
// import Suggestion from "../component/pages/client/Suggestion";
// import GuestPage from "../component/pages/client/Guest";
// import Profile from "../component/pages/client/Profile";
// import ProfileUpdate from "../component/pages/client/Profile.Update";
// import GuestForm1 from "../component/pages/client/Guest.Form.1";
// import GuestForm2 from "../component/pages/client/Guest.Form.2";
// import DetailsGuest from "../component/molecules/client/Guest/Details";
// import Dashboard from "../component/pages/admin/Dashboard";
// import ProfileAdmin from "../component/pages/admin/Profile";
// import ProfileAdminUpdate from "../component/pages/admin/Profile.update";
// import Report from "../component/pages/admin/Report";
// import GuestUpdate from "../component/pages/admin/Guest.Update";
// import GuestDetails from "../component/pages/admin/Guest.Details";
// import Table from "../component/pages/admin/Table";
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
          {/* <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} /> */}

          {/* Client */}
          {/* <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/statikTable" element={<StaticTable />} />
      <Route path="/publication" element={<Publication />} />
      <Route path="/news_details/:id" element={<NewsDetails />} />
      <Route path="/press" element={<PressRelease />} />
      <Route path="/suggest" element={<Suggestion />} />
      <Route path="/guest1" element={<GuestForm1 />} />
      <Route path="/guest1/guest2" element={<GuestForm2 />} />
      <Route path="/guest1/guest2/guest3" element={<GuestPage />} />
      <Route path="/guestDetails/:id" element={<DetailsGuest />} />
      <Route path="/profile" element={<Profile />} /> */}

          {/* Admin */}
          {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/guestDetail/:id" element={<GuestDetails />} />
      <Route path="/guestUpdate/:id" element={<GuestUpdate />} />
      <Route path="/table" element={<Table />} />
      <Route path="/report" element={<Report />} />
      <Route path="/profileAdmin" element={<ProfileAdmin />} />
      <Route path="/profileUpdate/:id" element={<ProfileUpdate />} />
      <Route path="/profileAdminUpdate/:id" element={<ProfileAdminUpdate />} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
};
