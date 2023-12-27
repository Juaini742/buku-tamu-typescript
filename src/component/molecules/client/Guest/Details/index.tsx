import {Link, useParams} from "react-router-dom";
import {Input, Skeleton} from "antd";
import Cookies from "js-cookie";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getGuestAction} from "../../../../../store/actions/guest.action";
import {Button, Card, Container} from "../../../../atoms";
import Navbar from "../../../../templates/client/navbar";

function DetailsGuest() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const guests = useSelector((state) => state.guest.data);
  const [selectedItem, setSelectedItem] = useState(null);
  const token = Cookies.get("refreshToken");
  const user_id = user.id;
  const {id} = useParams();

  useEffect(() => {
    dispatch(getGuestAction({token, user_id}));
  }, [dispatch, token, user_id]);

  useEffect(() => {
    const selected = guests.find((guest) => guest.id === id);
    setSelectedItem(selected);
  }, [id, guests]);

  if (!selectedItem) {
    return (
      <Container>
        <Skeleton active paragraph={{rows: 20}} />
      </Container>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        <Card className="my-5 mt-20">
          <div>
            <label>Tanggal</label>
            <Input value={selectedItem.born} className="my-2" readOnly />
          </div>
          <div>
            <label>Nama</label>
            <Input
              type="text"
              value={selectedItem.name}
              className="my-2"
              readOnly
            />
          </div>
          <div>
            <label>KTP/SIM</label>
            <Input value={selectedItem.ktp} className="my-2" readOnly />
          </div>
          <div>
            <label>Pendidikan</label>
            <Input value={selectedItem.educate} className="my-2" readOnly />
          </div>
          <div>
            <label>Umur</label>
            <Input className="my-2" value={selectedItem.age} readOnly />
          </div>
          <div>
            <label>Pekerjaan</label>
            <Input className="my-2" value={selectedItem.work} readOnly />
          </div>
          <div>
            <label>No. Hp</label>
            <Input className="my-2" value={selectedItem.phone} readOnly />
          </div>
          <div>
            <label className="block">Provinsi</label>
            <Input className="my-2" value={selectedItem.prov} readOnly />
          </div>
          <div>
            <label className="block">Kabupaten</label>
            <Input className="my-2" value={selectedItem.kab} readOnly />
          </div>
          <div>
            <label className="block">Kecamatan </label>
            <Input className="my-2" value={selectedItem.kec} readOnly />
          </div>
          <div>
            <label className="block">Kelurahan</label>
            <Input className="my-2" value={selectedItem.kel} readOnly />
          </div>
          <div>
            <label className="block">Data Tambahan Alamat</label>
            <Input className="my-2" value={selectedItem.address} readOnly />
          </div>
          <div>
            <label>Data Yang Diperlukan</label>
            <Input className="my-2" value={selectedItem.data} readOnly />
          </div>
          <Link to="#">
            <Button variant="warning" className="py-2 px-5 mr-4">
              Perbaharui data
            </Button>
          </Link>
          <Link to="/guest1/guest2">
            <Button variant="outline" className="py-1 px-5 mt-3">
              Kembali
            </Button>
          </Link>
        </Card>
        <div className="my-5">
          <div className="my-3">
            <img src={selectedItem.file} alt="office" className="rounded-lg" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <img
              src="../image/hero 1.jpg"
              alt="office"
              className="max-w-md md:max-w-sm rounded-md"
            />
            <img
              src="../image/hero 2.jpg"
              alt="office"
              className="max-w-md md:max-w-sm rounded-md"
            />
            <img
              src="../image/hero3.jpg"
              alt="office"
              className="max-w-md md:max-w-sm rounded-md"
            />
            <img
              src="../image/hero4.jpg"
              alt="office"
              className="max-w-md md:max-w-sm rounded-md"
            />
            <img
              src="../image/hero5.jpg"
              alt="office"
              className="max-w-md md:max-w-sm rounded-md"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default DetailsGuest;
