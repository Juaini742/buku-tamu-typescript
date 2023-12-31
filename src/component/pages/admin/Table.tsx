import {Container} from "../../atoms";
import TableData from "../../molecules/admin/Table";
import AdminTemplate from "../../templates/admin";

function Table() {
  return (
    <AdminTemplate>
      Dashboard
      <div className=""></div>
      <Container>
        <TableData />
      </Container>
    </AdminTemplate>
  );
}

export default Table;
