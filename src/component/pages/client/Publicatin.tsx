import {Container, Hed1, Paragraph} from "../../atoms";
import PublicationData from "../../molecules/client/Publication";
import Templates from "../../templates";

function Publication() {
  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">
          Publikasi Kantor Badan Pusat Statistik Kab. HST
        </Hed1>
        <Paragraph variant="subTitile">Selamat datang di publikasi</Paragraph>
        <PublicationData />
      </Container>
    </Templates>
  );
}

export default Publication;
