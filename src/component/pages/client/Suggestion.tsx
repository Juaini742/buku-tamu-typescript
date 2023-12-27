import {Container, Hed1, Paragraph} from "../../atoms";
import CriticsForm from "../../molecules/client/Suggestion";
import Templates from "../../templates";

function Suggestion() {
  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
        <Paragraph variant="subTitile">
          Selamat datang di form pengisian masukkan, kritik atau saran
        </Paragraph>

        <CriticsForm />
      </Container>
    </Templates>
  );
}

export default Suggestion;
