import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProvAction} from "../../../../../store/actions/prov.action";
import {Card, Hed1} from "../../../../atoms";
import {TreeSelect} from "antd";
import {getKabAction} from "../../../../../store/actions/kab.action";
import {getKecAction} from "../../../../../store/actions/kec.action";
import {getKelAction} from "../../../../../store/actions/kel.action";

interface Step3Props {
  formData: {
    prov: string;
    kab: string;
    kec: string;
    kel: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      prov: string;
      kab: string;
      kec: string;
      kel: string;
    }>
  >;
  handleChange: (value: any) => void;
}

function New(props: Step3Props) {
  const {formData, setFormData, handleChange} = props;
  const dispatch = useDispatch();
  const prov = useSelector((state) => state.prov2.data);
  const kab = useSelector((state: any) => state.kab.data);
  const kec = useSelector((state: any) => state.kec.data);
  const kel = useSelector((state: any) => state.kel.data);

  useEffect(() => {
    dispatch(getProvAction());
  }, []);

  const handleProvChange = (value: any) => {
    const selectedProvName =
      prov.find((item: any) => item.id === value)?.name || "";
    setFormData({
      ...formData,
      prov: selectedProvName,
    });
    dispatch(getKabAction(value));
  };

  const handleKabChange = (value: any) => {
    const selectedKabName =
      kab.find((item: any) => item.id === value)?.name || "";
    setFormData({
      ...formData,
      kab: selectedKabName,
    });
    dispatch(getKecAction(value));
  };

  const handleKecChange = (value: any) => {
    const selectedKecName =
      kec.find((item: any) => item.id === value)?.name || value;
    setFormData({
      ...formData,
      kec: selectedKecName,
    });
    dispatch(getKelAction(value));
  };

  const handleKelurahanChange = (value: any) => {
    const selectedKelName =
      kel.find((item: any) => item.id === value)?.name || "";
    setFormData({
      ...formData,
      kel: selectedKelName,
    });
  };

  const convertToTreeData = (data: any[]) => {
    return data.map((item) => ({
      title: item.name,
      value: item.id,
      key: item.id,
      children: item.children,
    }));
  };
  const treeData = convertToTreeData(prov);
  const treeDataKab = convertToTreeData(kab);
  const treeDataKec = convertToTreeData(kec);
  const treeDataKel = convertToTreeData(kel);

  return (
    <Card className="mb-3">
      <Hed1 variant="title-card">Informasi Daerah</Hed1>
      <div>
        <label htmlFor="phone">Provinsi</label>
        <TreeSelect
          treeData={treeData}
          onChange={handleProvChange}
          className="w-full my-2"
        />
      </div>
      <div>
        <label htmlFor="phone">Kabupaten</label>
        <TreeSelect
          treeData={treeDataKab}
          onChange={handleKabChange}
          className="w-full my-2"
        />
      </div>
      <div>
        <label htmlFor="phone">Kecamatan</label>
        <TreeSelect
          treeData={treeDataKec}
          onChange={handleKecChange}
          className="w-full my-2"
        />
      </div>
      <div>
        <label htmlFor="phone">Kelurahan</label>
        <TreeSelect
          treeData={treeDataKel}
          onChange={handleKelurahanChange}
          className="w-full my-2"
        />
      </div>

      <div>
        <label htmlFor="address" className="block">
          Data Tambahan Alamat
        </label>
        <textarea
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          rows="10"
          className="w-full rounded-sm border"
        ></textarea>
      </div>
    </Card>
  );
}

export default New;
