import {Container, Hed1, Paragraph} from "../../atoms";
import SuggestFrom from "../../molecules/client/Guest/2";
import Templates from "../../templates";

function GuestPage() {
  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">Badan Pusat Statistik Kab. HST</Hed1>
        <Paragraph variant="subTitile">
          Selamat datang di bagian pengisian data tamu
        </Paragraph>
        <SuggestFrom />
      </Container>
    </Templates>
  );
}

export default GuestPage;
