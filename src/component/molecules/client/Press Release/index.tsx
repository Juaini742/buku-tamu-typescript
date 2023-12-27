/* eslint-disable @typescript-eslint/no-explicit-any */
import {Select, Skeleton} from "antd";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProv} from "../../../../store/actions/get.prov.action";
import {Paragraph} from "../../../atoms";
import {BsFiletypePdf} from "react-icons/bs";
import {getPress} from "../../../../store/actions/get.press";

function PressReleaseData() {
  const dispatch = useDispatch();
  const prov = useSelector((state: any) => state.prov.data);
  const press = useSelector((state: any) => state.press.data);
  const loading = useSelector(
    (state: any) => state.publication.status === "loading"
  );
  const [selectedDomainId, setSelectedDomainId] = useState<string | 6300>(6300);

  useEffect(() => {
    dispatch(getProv());
  }, [dispatch]);

  useEffect(() => {
    if (selectedDomainId !== null) {
      dispatch(getPress(selectedDomainId));
    }
  }, [dispatch, selectedDomainId]);

  return (
    <>
      <div className="mt-10">
        <Paragraph className="mb-3 bg-blue-400/30 backdrop-blur-lg p-5 rounded-md border border-blue-600">
          Secara default, data yang ditampilkan adalah Kalimantan Selatan,
          silahkan lakukan select data jika memerlukan sebuah data dari provinsi
          selain Kalimantan Selatan
        </Paragraph>
        <Select
          onChange={(value) => setSelectedDomainId(value)}
          className="w-full mb-3 h-12"
          defaultValue="Kalimantan Selatan"
        >
          {prov.map((item: any) => (
            <Select.Option key={item.domain_id} value={item.domain_id}>
              {item.domain_name}
            </Select.Option>
          ))}
        </Select>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {loading
            ? press.map((item: any) => (
                <Skeleton key={item.pub_id} active paragraph={item.title} />
              ))
            : press.map((item: any) => (
                <div
                  key={item.pub_id}
                  className=" p-5 shadow-sm rounded-lg hover:shadow-lg"
                >
                  <div className="">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="rounded-md"
                    />
                  </div>
                  <figure className="flex flex-col gap-3">
                    <span className=" mt-4">
                      Subjek: <strong> {item.subj}</strong>
                    </span>
                    <span className="font-bold mt-4">{item.title}</span>
                    <Paragraph>{item.abstract}</Paragraph>
                    <a
                      href={item.pdf}
                      className="btn-primary py-2 px-5 flex items-center gap-3"
                    >
                      <BsFiletypePdf />
                      Download PDF
                    </a>
                  </figure>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default PressReleaseData;
