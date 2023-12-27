/* eslint-disable @typescript-eslint/no-explicit-any */
import {Select, Skeleton} from "antd";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProv} from "../../../../store/actions/get.prov.action";
import {getNews} from "../../../../store/actions/news.action";
import {Paragraph} from "../../../atoms";

function NewsComponent() {
  const dispatch = useDispatch();
  const prov = useSelector((state: any) => state.prov.data);
  const news = useSelector((state: any) => state.news.data);
  const loading = useSelector(
    (state: any) => state.statics.status === "loading"
  );
  const [selectedDomainId, setSelectedDomainId] = useState<string | 6300>(6300);

  useEffect(() => {
    dispatch(getProv());
  }, [dispatch]);

  useEffect(() => {
    if (selectedDomainId !== null) {
      dispatch(getNews(selectedDomainId));
    }
  }, [dispatch, selectedDomainId]);

  return (
    <div className="mt-10">
      <Paragraph className="mb-3 bg-blue-400/30 backdrop-blur-lg p-5 rounded-md border border-blue-600">
        Secara default, data yang ditampilkan adalah Kalimantan Selatan,
        silahkan lakukan select data jika memerlukan sebuah data dari provinsi
        selain Kalimantan Selatan
      </Paragraph>
      <div className="my-10">
        <div className="my-5 w-full">
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
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? news.map((item: any) => (
              <Skeleton key={item.news_id} active paragraph={item.title} />
            ))
          : news.map((item: any) => (
              <div
                key={item.news_id}
                className="p-4 max-w-sm bg-white rounded-xl shadow-md"
              >
                <div className="">
                  <img
                    src={item.picture}
                    alt={item.title}
                    className="rounded-md"
                  />
                </div>
                <div className="">
                  <h3 className="font-semibold">{item.title}</h3>
                  {/* <a
                  href={`/news_details/${item.news_id}`}
                  className="btn-primary text-xs py-1 px-5"
                >
                  Lihat Lengkap
                </a> */}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default NewsComponent;
