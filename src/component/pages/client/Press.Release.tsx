import {Container, Hed1, Paragraph} from "../../atoms";
import PressReleaseData from "../../molecules/client/Press Release";
import Templates from "../../templates";

function PressRelease() {
  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">
          Siaran Pers Kantor Badan Pusat Statistik Kab. HST
        </Hed1>
        <Paragraph variant="subTitile">Selamat datang di siaran pers</Paragraph>
        <PressReleaseData />
      </Container>
    </Templates>
  );
}

export default PressRelease;
