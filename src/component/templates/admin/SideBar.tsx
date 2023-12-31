import {useState} from "react";
import {navitems} from "./db";
import {useEffect} from "react";
import {Button} from "../../atoms";
import Cookies from "js-cookie";
import {logoutAction} from "../../../store/actions/auth.action";
import {useDispatch} from "react-redux";

function SideBar(props: {isVisible: any}) {
  const {isVisible} = props;
  const [items, setItems] = useState([]);
  const currentPath = window.location.pathname;
  const dispatch = useDispatch();
  const token = Cookies.get("refreshToken");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logoutAction(token));
  };

  useEffect(() => {
    setItems(navitems);
  }, []);

  return (
    <nav
      className={`w-[250px] bg-primary h-screen fixed top-16 transition-all duration-500 ${
        isVisible ? "translate-x-0" : "-translate-x-72"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="p-5">
          <h1 className="text-sm font-bold text-white">
            Kantor Badan Pusat Statistik
          </h1>
        </div>
        <div className="p-3">
          <ul className="text-white font-semibold">
            {items.map((item: any) => (
              <li
                key={item.id}
                className={` ${currentPath === item.active ? "active" : ""}`}
              >
                <a href={item.path} className="list-items">
                  <span>{item.icon}</span>

                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <Button
            onClick={handleSubmit}
            variant="outline"
            className="py-3 px-10 text-white font-bold"
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
