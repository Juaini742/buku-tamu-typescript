import {Link} from "react-router-dom";
import {Button, Container, Hed1, Paragraph} from "../../atoms";
import Templates from "../../templates";

function GuestForm1() {
  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">Badan Pusat Statistik Kab. HST</Hed1>
        <Paragraph variant="subTitile">
          Selamat datang di bagian pengisian data tamu
        </Paragraph>
        <Link to="/guest1/guest2">
          <Button variant="primary" className="py-3 px-10 mt-5">
            Sceen Disini
          </Button>
        </Link>
        <div className="flex-center h-52 text-slate-400 font-bold">
          Sebelum Anda dapat melakukan tambah data baru, silahkan scan QR
          terlebuh dahulu
        </div>
      </Container>
    </Templates>
  );
}

export default GuestForm1;
