/* eslint-disable @typescript-eslint/no-explicit-any */
import {Button, Card, Container} from "../../../atoms";
import HomeSection1Admin from "../Section1/Index";
import {FaRegTrashCan} from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Cookies from "js-cookie";
import {
  deleteGuestsById,
  getAllGuestAction,
} from "../../../../store/actions/guest.action";
import {getUserByToken} from "../../../../store/actions/auth.action";
import {format} from "date-fns";
import {FaEye} from "react-icons/fa";
// import {getReportAction} from "../../../../store/actions/report.action";
import {Link} from "react-router-dom";
import {id} from "date-fns/locale";

function ReportData() {
  const dispatch = useDispatch();
  const guests = useSelector((state: any) => state.guests.data);
  const token = Cookies.get("refreshToken");

  useEffect(() => {
    dispatch(getUserByToken(token));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getAllGuestAction(token));
  }, [dispatch, token]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "yyyy-MM-dd");
  };

  const handleDeleteGuest = (id) => {
    const confirm = window.confirm(
      "Apakah anda yakin ingin menghapus data ini?"
    );
    if (confirm) {
      dispatch(deleteGuestsById({token, dispatch, id}));
    }
  };

  // const hanldePDF = () => {
  //   dispatch(getReportAction(token));
  // };

  return (
    <Container className="mt-8">
      <HomeSection1Admin bigTitle="Laporan" />
      <Card>
        <Link to="http://localhost:8080/api/invoise">
          <Button
            // onClick={hanldePDF}
            variant="primary"
            className="py-3 px-10 mb-3"
          >
            Download PDF
          </Button>
        </Link>
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
          <thead>
            <tr className="text-black">
              <th className="py-2 px-4 bg-gray-100 border-b">ID</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Tanggal</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Name</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Umur</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Data</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((item: any, index: number) => (
              <tr key={item.id} className="text-center">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">
                  {formatDate(item.createdAt)}
                </td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.age}</td>
                <td className="py-2 px-4 border-b">{item.data}</td>
                <td className=" flex gap-2 justify-center py-2 px-4 border-b">
                  <a
                    href={`guestDetail/${item.id}`}
                    className="btn-primary px-3 py-2"
                  >
                    <FaEye />
                  </a>
                  <Button
                    onClick={() => handleDeleteGuest(item.id)}
                    variant="danger"
                    className="px-3 py-2"
                  >
                    <FaRegTrashCan />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Container>
  );
}

export default ReportData;
