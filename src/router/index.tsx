import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../component/pages/client/Home";
import NewsDetails from "../component/molecules/client/News/details";
import StaticTable from "../component/pages/client/Static.Table";
import NewsPage from "../component/pages/client/News";
import Publication from "../component/pages/client/Publicatin";
import PressRelease from "../component/pages/client/Press.Release";
import Suggestion from "../component/pages/client/Suggestion";
import GuestPage from "../component/pages/client/Guest";
import Register from "../component/pages/Register";
import Login from "../component/pages/Login";
import Profile from "../component/pages/client/Profile";
import ProfileUpdate from "../component/pages/client/Profile.Update";
import GuestForm1 from "../component/pages/client/Guest.Form.1";
import GuestForm2 from "../component/pages/client/Guest.Form.2";
import DetailsGuest from "../component/molecules/client/Guest/Details";

export const RootRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/news_details/:id" element={<NewsDetails />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/statikTable" element={<StaticTable />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/press" element={<PressRelease />} />
        <Route path="/suggest" element={<Suggestion />} />
        <Route path="/guest1" element={<GuestForm1 />} />
        <Route path="/guest1/guest2" element={<GuestForm2 />} />
        <Route path="/guest1/guest2/guest3" element={<GuestPage />} />
        <Route path="/guestDetails/:id" element={<DetailsGuest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileUpdate/:id" element={<ProfileUpdate />} />
      </Routes>
    </Router>
  );
};
