import {Container, Hed1, Paragraph} from "../../atoms";
import StaticTableData from "../../molecules/client/Static Table";
import Templates from "../../templates";

function StaticTable() {
  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">
          Statik Tabel Kantor Badan Pusat Statistik Kab. HST
        </Hed1>
        <Paragraph variant="subTitile">
          Selamat datang di Statik Tabel
        </Paragraph>
        <StaticTableData />
      </Container>
    </Templates>
  );
}

export default StaticTable;
