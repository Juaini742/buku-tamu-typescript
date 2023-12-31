import {Card, Input} from "antd";
import {Hed1} from "../../../../atoms";

function Step1(props) {
  const {formData, handleChange} = props;

  return (
    <Card className="mb-3">
      <Hed1 variant="title-card">Informasi</Hed1>

      <div>
        <label htmlFor="data">Data Yang Diperlukan</label>
        <Input
          type="text"
          id="data"
          name="data"
          onChange={handleChange}
          value={formData.data}
          placeholder="Masukkan Data yang Anda Perlukan"
          className="my-2"
        />
      </div>
    </Card>
  );
}

export default Step1;
