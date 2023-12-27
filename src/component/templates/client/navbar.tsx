import {Dropdown, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {Button} from "../../atoms";
import {items} from "../../db";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {IoMenu} from "react-icons/io5";
import {logoutAction} from "../../../store/actions/auth.action";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";

function Navbar() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const token = Cookies.get("refreshToken");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logoutAction(token));
  };

  const hanldeVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="bg-primary fixed w-full top-0 z-50">
      <div className="container flex justify-between items-center h-16 ">
        <div className="text-white">BPS</div>
        <div className="flex md:hidden">
          <button onClick={hanldeVisible} className="text-white text-3xl">
            <IoMenu />
          </button>
        </div>
        <ul className={`navStyle ${visible ? "hidden" : "flex"}`}>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <Dropdown menu={{items}}>
            <Link to="">
              <Space>
                Data
                <DownOutlined />
              </Space>
            </Link>
          </Dropdown>
          <li>
            <Link to="/suggest">Beri Saran</Link>
          </li>
          <li>
            <Link to="/guest1">Data Tamu</Link>
          </li>
          <li>
            <Link to="/profile">Profil</Link>
          </li>
          <div>
            <Button onClick={handleSubmit} variant="outline" className="px-5">
              Logout
            </Button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
