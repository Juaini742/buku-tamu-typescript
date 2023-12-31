import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
import {useEffect} from "react";
import {getUserByToken} from "../store/actions/auth.action";

const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.data);
  const token = Cookies.get("refreshToken");

  useEffect(() => {
    if (token) {
      dispatch(getUserByToken(token));
    }
  }, [dispatch, token]);

  return {auth, token};
};

export default useAuth;
