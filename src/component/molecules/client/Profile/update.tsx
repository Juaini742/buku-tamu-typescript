/* eslint-disable @typescript-eslint/no-explicit-any */
import {Input} from "antd";
import Cookies from "js-cookie";
import {Button, Card} from "../../../atoms";
import {useDispatch, useSelector} from "react-redux";
import {
  getUserByToken,
  updateUserAction,
} from "../../../../store/actions/auth.action";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function ProfileUpdateData() {
  const dispatch = useDispatch();
  const user = useParams();
  const auth = useSelector((state: any) => state.user.data);
  const token = Cookies.get("refreshToken");
  const id = user.id;
  const [formData, setFormData] = useState({
    file: null,
    username: auth.username,
    email: auth.email,
  });

  useEffect(() => {
    dispatch(getUserByToken(token));
  }, [dispatch, token]);

  const hanldChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.files[0],
    }));
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction({formData, id, token}));
  };

  return (
    <>
      <div className="mt-5">
        <div className="mx-auto w-[200px]">
          <img src={auth.file} alt={auth.username} className="rounded-lg" />
        </div>
        <Card className="mt-10">
          <form encType="multipart/form-data" onSubmit={hanldeSubmit}>
            <div className="my-5">
              <label htmlFor="">Avatar</label>
              <Input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                onChange={handleFileChange}
                className="my-2"
              />
            </div>
            <div className="my-5">
              <label htmlFor="">Username</label>
              <Input
                type="text"
                name="username"
                value={formData.username || auth.username}
                onChange={hanldChange}
                className="py-2 text-lg"
              />
            </div>
            <div className="my-5">
              <label htmlFor="">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email || auth.email}
                onChange={hanldChange}
                className="py-2 text-lg"
              />
            </div>
            <div className="my-5">
              <Button variant="primary" className="py-2 px-5 mr-3">
                Simpan
              </Button>
              <Link to="/profile">
                <span className="btn-warning py-2 px-5">Kembali</span>
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default ProfileUpdateData;
