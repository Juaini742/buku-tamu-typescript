import {Card, Input} from "antd";
import {Hed1} from "../../../../atoms";

function Step2(props) {
  const {formData, handleChange} = props;
  return (
    <Card className="mb-3">
      <Hed1 variant="title-card">Informasi Diri</Hed1>
      <div>
        <label htmlFor="name">Nama</label>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Masukkan Nama Anda"
          className="my-2"
        />
      </div>
      <div>
        <label htmlFor="ktp">KTP/SIM</label>
        <Input
          type="number"
          id="ktp"
          name="ktp"
          onChange={handleChange}
          value={formData.ktp}
          placeholder="Masukkan no KTP/SIM Anda"
          className="my-2"
          showCount
          maxLength="16"
        />
      </div>
      <div>
        <label htmlFor="educate">Pendidikan</label>
        <Input
          type="text"
          id="educate"
          name="educate"
          onChange={handleChange}
          value={formData.educate}
          placeholder="Masukkan Title Pendidikan Anda atau Pendidikan Terakhir"
          className="my-2"
          required
        />
      </div>
      <div>
        <label htmlFor="age">Umur</label>
        <Input
          type="number"
          id="age"
          name="age"
          onChange={handleChange}
          value={formData.age}
          placeholder="Masukkan Umur Anda"
          className="my-2"
          showCount
          maxLength="2"
        />
      </div>
      {/* <div>
        <label htmlFor="work">Pekerjaan</label>
        <Input
          type="text"
          id="work"
          name="work"
          onChange={handleChange}
          value={formData.work}
          placeholder="Masukkan Pekerjaan Anda Sekarang"
          className="my-2"
          required
        />
      </div> */}
      <div>
        <label htmlFor="phone">No. Hp</label>
        <Input
          type="number"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          placeholder="Masukkan No.Hp Anda"
          className="my-2"
          showCount
          maxLength="13"
        />
      </div>
    </Card>
  );
}

export default Step2;
