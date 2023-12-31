import {useDispatch, useSelector} from "react-redux";
import {Hed1} from "../../../atoms";
import {getUserByToken} from "../../../../store/actions/auth.action";
import {useEffect} from "react";
import Cookies from "js-cookie";

function HomeSection1Admin(props: {bigTitle: any}) {
  const {bigTitle} = props;

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.data);
  const token = Cookies.get("refreshToken");

  useEffect(() => {
    dispatch(getUserByToken(token));
  }, [dispatch, token]);

  return (
    <div className="flex-wrap-between gap-3 my-10">
      <div className="">
        <Hed1 variant="title-bold">{bigTitle}</Hed1>
        <Hed1 variant="title">Buku Tamu Badan Pusat Statistik Kab. HST</Hed1>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden">
          <img src={auth.file} alt="profile" className="w-full" />
        </div>
        <div className="">
          <h1 className="font-bold">{auth.username}</h1>
          <p>{auth.role} BPS Kab. HST</p>
        </div>
      </div>
    </div>
  );
}

export default HomeSection1Admin;
