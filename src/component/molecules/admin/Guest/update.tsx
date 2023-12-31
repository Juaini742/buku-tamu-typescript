import {Link, useParams} from "react-router-dom";
import {Input, Skeleton} from "antd";
import Cookies from "js-cookie";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {Button, Card, Container} from "../../../atoms";
import {getAllGuestAction} from "../../../../store/actions/guest.action";

function UpdateGuestData() {
  const dispatch = useDispatch();
  const guest = useSelector((state) => state.guests.data);
  const [selectedItem, setSelectedItem] = useState(null);
  const token = Cookies.get("refreshToken");
  const {id} = useParams();

  useEffect(() => {
    dispatch(getAllGuestAction(token));
  }, [dispatch, token]);

  useEffect(() => {
    const newSelect = guest.find((item) => item.id === id);
    setSelectedItem(newSelect);
  }, [guest, id]);

  if (!selectedItem) {
    return (
      <Container>
        <Skeleton active paragraph={{rows: 20}} />
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Card className="my-5 mt-20">
          <div>
            <label>Tanggal</label>
            <Input type="date" className="my-2" />
          </div>
          <div>
            <label>Nama</label>
            <Input type="text" value={selectedItem.name} className="my-2" />
          </div>
          <div>
            <label>KTP/SIM</label>
            <Input className="my-2" value={selectedItem.ktp} />
          </div>
          <div>
            <label>Pendidikan</label>
            <Input className="my-2" value={selectedItem.educate} />
          </div>
          <div>
            <label>Umur</label>
            <Input className="my-2" value={selectedItem.age} />
          </div>
          <div>
            <label>Pekerjaan</label>
            <Input className="my-2" />
          </div>
          <div>
            <label>No. Hp</label>
            <Input className="my-2" value={selectedItem.phone} />
          </div>
          <div>
            <label className="block">Provinsi</label>
            <Input className="my-2" value={selectedItem.prov} />
          </div>
          <div>
            <label className="block">Kabupaten</label>
            <Input className="my-2" value={selectedItem.kab} />
          </div>
          <div>
            <label className="block">Kecamatan </label>
            <Input className="my-2" value={selectedItem.kec} />
          </div>
          <div>
            <label className="block">Kelurahan</label>
            <Input className="my-2" value={selectedItem.kel} />
          </div>
          <div>
            <label className="block">Data Tambahan Alamat</label>
            <Input className="my-2" value={selectedItem.address} />
          </div>
          <div>
            <label>Data Yang Diperlukan</label>
            <Input className="my-2" value={selectedItem.data} />
          </div>
          <Link to="#">
            <Button variant="warning" className="py-2 px-5 mr-4">
              Simpan Pembaharuan
            </Button>
          </Link>
          <Link to="/report">
            <Button variant="outline" className="py-1 px-5 mt-3">
              Kembali
            </Button>
          </Link>
        </Card>
        <div className="my-5">
          <div className="my-3">
            <img src={selectedItem.file} alt="office" className="rounded-lg" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default UpdateGuestData;
