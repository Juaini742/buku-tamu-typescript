import DetailsGuest from "../component/molecules/client/Guest/Details";
import NewsDetails from "../component/molecules/client/News/details";
import Login from "../component/pages/Login";
import Register from "../component/pages/Register";
import AddGuest from "../component/pages/admin/Add.Guest";
import Dashboard from "../component/pages/admin/Dashboard";
import GuestDetails from "../component/pages/admin/Guest.Details";
import GuestUpdate from "../component/pages/admin/Guest.Update";
import ProfileAdmin from "../component/pages/admin/Profile";
import ProfileAdminUpdate from "../component/pages/admin/Profile.update";
import Report from "../component/pages/admin/Report";
import Table from "../component/pages/admin/Table";
import GuestPage from "../component/pages/client/Guest";
import GuestForm1 from "../component/pages/client/Guest.Form.1";
import GuestForm2 from "../component/pages/client/Guest.Form.2";
import Home from "../component/pages/client/Home";
import NewsPage from "../component/pages/client/News";
import PressRelease from "../component/pages/client/Press.Release";
import Profile from "../component/pages/client/Profile";
import ProfileUpdate from "../component/pages/client/Profile.Update";
import Publication from "../component/pages/client/Publicatin";
import StaticTable from "../component/pages/client/Static.Table";
import Suggestion from "../component/pages/client/Suggestion";
import PrivateRoute from "../middleware/PrivateRoute";

interface RouteItem {
  name: string;
  path: string;
  element: React.ReactElement;
  isPrivate: boolean;
}

export const routeItem: RouteItem[] = [
  {
    name: "Register",
    path: "/register",
    element: <Register />,
    isPrivate: false,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },

  // Client Accessable
  {
    name: "Home",
    path: "/",
    element: <PrivateRoute element={<Home />} />,
    isPrivate: true,
  },
  {
    name: "News",
    path: "/news",
    element: <PrivateRoute element={<NewsPage />} />,
    isPrivate: true,
  },
  {
    name: "statikTable",
    path: "/statikTable",
    element: <PrivateRoute element={<StaticTable />} />,
    isPrivate: true,
  },
  {
    name: "Publication",
    path: "/publication",
    element: <PrivateRoute element={<Publication />} />,
    isPrivate: true,
  },
  {
    name: "NewsDetails",
    path: "/news_details/:id",
    element: <PrivateRoute element={<NewsDetails />} />,
    isPrivate: true,
  },
  {
    name: "PressRelease",
    path: "/press",
    element: <PrivateRoute element={<PressRelease />} />,
    isPrivate: true,
  },
  {
    name: "Suggestion",
    path: "/suggest",
    element: <PrivateRoute element={<Suggestion />} />,
    isPrivate: true,
  },
  {
    name: "GuestForm1",
    path: "/guest1",
    element: <PrivateRoute element={<GuestForm1 />} />,
    isPrivate: true,
  },
  {
    name: "GuestForm2",
    path: "/guest1/guest2",
    element: <PrivateRoute element={<GuestForm2 />} />,
    isPrivate: true,
  },
  {
    name: "GuestPage",
    path: "/guest1/guest2/guest3",
    element: <PrivateRoute element={<GuestPage />} />,
    isPrivate: true,
  },
  {
    name: "DetailsGuest",
    path: "/guestDetails/:id",
    element: <PrivateRoute element={<DetailsGuest />} />,
    isPrivate: true,
  },
  {
    name: "Profile",
    path: "/profile",
    element: <PrivateRoute element={<Profile />} />,
    isPrivate: true,
  },
  // Admin Accessable

  {
    name: "Dashboard",
    path: "/dashboard",
    element: <PrivateRoute element={<Dashboard />} />,
    isPrivate: true,
  },

  {
    name: "AddGuest",
    path: "/addGuest",
    element: <PrivateRoute element={<AddGuest />} />,
    isPrivate: true,
  },
  {
    name: "GuestDetails",
    path: "/guestDetail/:id",
    element: <PrivateRoute element={<GuestDetails />} />,
    isPrivate: true,
  },
  {
    name: "GuestUpdate",
    path: "/guestUpdate/:id",
    element: <PrivateRoute element={<GuestUpdate />} />,
    isPrivate: true,
  },
  {
    name: "Table",
    path: "/table",
    element: <PrivateRoute element={<Table />} />,
    isPrivate: true,
  },
  {
    name: "Report",
    path: "/report",
    element: <PrivateRoute element={<Report />} />,
    isPrivate: true,
  },
  {
    name: "ProfileAdmin",
    path: "/profileAdmin",
    element: <PrivateRoute element={<ProfileAdmin />} />,
    isPrivate: true,
  },
  {
    name: "ProfileUpdate",
    path: "/profileUpdate/:id",
    element: <PrivateRoute element={<ProfileUpdate />} />,
    isPrivate: true,
  },
  {
    name: "ProfileAdminUpdate",
    path: "/profileAdminUpdate/:id",
    element: <PrivateRoute element={<ProfileAdminUpdate />} />,
    isPrivate: true,
  },
];
