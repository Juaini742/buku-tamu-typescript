import {Link} from "react-router-dom";
import {Button, Card, Container, Hed1, Paragraph} from "../../atoms";
import Templates from "../../templates";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Cookies from "js-cookie";
import {getGuestAction} from "../../../store/actions/guest.action";
import {getUserByToken} from "../../../store/actions/auth.action";
import {Skeleton} from "antd";

function GuestForm2() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const guest = useSelector((state) => state.guest.data);
  const loading = useSelector((state) => state.guest.status === "loading");
  const token = Cookies.get("refreshToken");
  const user_id = user.id;

  useEffect(() => {
    dispatch(getUserByToken(token));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getGuestAction({token, user_id}));
  }, [dispatch, token, user_id]);

  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">Badan Pusat Statistik Kab. HST</Hed1>
        <Paragraph variant="subTitile">
          Selamat datang di bagian pengisian data tamu
        </Paragraph>
        <div>
          <Link to="/guest1/guest2/guest3">
            <Button variant="primary" className="py-4 px-10 mt-5">
              Masukkan Data
            </Button>
          </Link>
          <Link to="/guest1">
            <Button variant="warning" className="ml-5 py-4 px-10 mt-5">
              Kembali
            </Button>
          </Link>
          {/* <Link to="/guest1/guest2">
            <Button variant="danger" className="py-2 px-10 mx-3">
              Umum
            </Button>
          </Link> */}

          {loading ? (
            <Skeleton active />
          ) : (
            guest.map((item) => (
              <Card key={item.id} className="flex-between-center mt-10">
                <figure>
                  <Paragraph variant="subTitile">Name: {item.name}</Paragraph>
                  <Paragraph variant="subTitile">Nik/Sim: {item.ktp}</Paragraph>
                  <Paragraph variant="subTitile">
                    Pendidikan: {item.educate}
                  </Paragraph>
                  <Paragraph variant="subTitile">No.Hp: {item.phone}</Paragraph>
                </figure>
                <div className="flex gap-2">
                  <Link to={`/guestDetails/${item.id}`}>
                    <Button variant="primary" className="h-20 px-4">
                      Lihat Lengkap
                    </Button>
                  </Link>
                  {/* <Button variant="warning" className="h-20 px-4">
                    Edit
                  </Button> */}
                </div>
              </Card>
            ))
          )}
        </div>
      </Container>
    </Templates>
  );
}

export default GuestForm2;
