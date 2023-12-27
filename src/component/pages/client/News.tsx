import {Container, Hed1, Paragraph} from "../../atoms";
import NewsComponent from "../../molecules/client/News";
import Templates from "../../templates";

function NewsPage() {
  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">
          Berita Kantor Badan Pusat Statistik Kab. HST
        </Hed1>
        <Paragraph variant="subTitile">
          Selamat datang di bagian Berita
        </Paragraph>
        <NewsComponent />
      </Container>
    </Templates>
  );
}

export default NewsPage;
