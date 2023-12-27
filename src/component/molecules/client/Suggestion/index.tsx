import {Input} from "antd";
import {useEffect, useState} from "react";
import {Button, Card, Paragraph} from "../../../atoms";
import {useDispatch, useSelector} from "react-redux";
import {
  getSuggestAction,
  postSuggestAction,
} from "../../../../store/actions/suggest.action";
import Cookies from "js-cookie";
import {getUserByToken} from "../../../../store/actions/auth.action";
import TextArea from "antd/es/input/TextArea";

function CriticsForm() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.data);
  const suggest = useSelector((state) => state.suggest.data);
  const token = Cookies.get("refreshToken");
  const id = auth.id;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    dispatch(getUserByToken(token));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getSuggestAction({id, token}));
  }, [dispatch, id, token]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postSuggestAction({formData, token, dispatch}));
  };

  return (
    <>
      <Card className="mt-10">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nama</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan Nama Anda"
              className="my-2"
              required
            />
          </div>
          <div>
            <label>Pesan</label>
            <div className="h-36 mb-20 md:mb-14">
              <TextArea
                rows={8}
                id="name"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Masukkan Kritikan atau saran"
              />
              {/* <Input
                type="text"
                id="name"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Masukkan Nama Anda"
                className="my-2"
                required
              /> */}
            </div>
          </div>
          <div>
            <Button variant="primary" className="py-2 px-5">
              Kirim
            </Button>
            <Button variant="danger" className="py-2 px-5 ml-3">
              Batal
            </Button>
          </div>
        </form>
      </Card>

      <Card className="p-5 mt-10">
        {suggest.map((item) => (
          <div key={item.id} className="">
            <Paragraph>Name: {item.name}</Paragraph>
            <Paragraph>Descripsi: {item.description}</Paragraph>
          </div>
        ))}
      </Card>
    </>
  );
}

export default CriticsForm;
