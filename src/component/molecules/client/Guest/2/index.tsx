import {useState} from "react";
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import {Button} from "../../../../atoms";
import {postGuestAction} from "../../../../../store/actions/guest.action";
import {Link} from "react-router-dom";

function SuggestFrom() {
  const dispatch = useDispatch();
  const token = Cookies.get("refreshToken");

  const [formData, setFormData] = useState({
    name: "",
    born: "",
    age: "",
    ktp: "",
    phone: "",
    prov: "",
    kab: "",
    kec: "",
    kel: "",
    educate: "",
    address: "",
    data: "",
    file: null,
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postGuestAction({formData, token}));
  };

  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="my-5"
    >
      <Step1 formData={formData} handleChange={handleChange} />
      <Step2 formData={formData} handleChange={handleChange} />
      <Step3
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
      />
      <Step4 formData={formData} handleFileChange={handleFileChange} />

      <Button variant="primary" className="w-full py-2 mb-5">
        Simpan Data
      </Button>
      <Link to="/guest1/guest2">
        <div className="btn-warning py-2 w-full text-center">Kembali</div>
      </Link>
    </form>
  );
}

export default SuggestFrom;
