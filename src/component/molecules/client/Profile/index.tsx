import {Input} from "antd";
import Cookies from "js-cookie";
import {Button, Card} from "../../../atoms";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserByToken} from "../../../../store/actions/auth.action";
import {Link} from "react-router-dom";

function ProfileData() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.data);
  const token = Cookies.get("refreshToken");

  useEffect(() => {
    dispatch(getUserByToken(token));
  }, [dispatch, token]);

  return (
    <>
      <div className="mt-5">
        <div className="mx-auto w-[200px]">
          <img src={auth.file} alt={auth.username} className="rounded-lg" />
        </div>
        <Card className="mt-10">
          <div className="my-5">
            <label htmlFor="">Username</label>
            <Input
              type="text"
              value={auth.username}
              readOnly
              className="py-2 text-lg"
            />
          </div>
          <div className="my-5">
            <label htmlFor="">Email</label>
            <Input
              type="text"
              value={auth.email}
              readOnly
              className="py-2 text-lg"
            />
          </div>
          <div className="my-5">
            <Link to={`/profileUpdate/${auth.id}`}>
              <Button variant="warning" className="py-2 px-5">
                Perbaharui
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}

export default ProfileData;
