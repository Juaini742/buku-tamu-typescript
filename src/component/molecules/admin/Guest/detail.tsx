import {Link, useParams} from "react-router-dom";
import {Input, Skeleton} from "antd";
import Cookies from "js-cookie";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {Button, Card, Container} from "../../../atoms";
import {getAllGuestAction} from "../../../../store/actions/guest.action";
import {format} from "date-fns";

function DetailsGuestData() {
  const dispatch = useDispatch();
  const guest = useSelector((state: any) => state.guests.data);
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "yyyy-MM-dd");
  };

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
            <label>Tanggal Kunjungan</label>
            <Input
              value={formatDate(selectedItem.createdAt)}
              className="my-2"
              readOnly
            />
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
            <label>Tanggal Lahir</label>
            <Input
              value={formatDate(selectedItem.born)}
              className="my-2"
              readOnly
            />
          </div>
          <div>
            <label>KTP/SIM</label>
            <Input className="my-2" value={selectedItem.ktp} readOnly />
          </div>
          <div>
            <label>Pendidikan</label>
            <Input className="my-2" value={selectedItem.educate} readOnly />
          </div>
          <div>
            <label>Umur</label>
            <Input className="my-2" value={selectedItem.age} readOnly />
          </div>
          <div>
            <label>Pekerjaan</label>
            <Input className="my-2" readOnly />
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

export default DetailsGuestData;
