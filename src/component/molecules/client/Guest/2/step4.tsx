import {Input} from "antd";
import {Card, Hed1} from "../../../../atoms";
// import {FaMinus, FaPlus} from "react-icons/fa";
// import {Button, Card, Hed1} from "../../../../atoms";

function Step4(props) {
  const {handleFileChange} = props;
  // const [imageInputs, setImageInputs] = useState([]);

  // const addImageInput = () => {
  //   setImageInputs([...imageInputs, {}]);
  // };

  // const removeImageInput = (index) => {
  //   const newImageInputs = [...imageInputs];
  //   newImageInputs.splice(index, 1);
  //   setImageInputs(newImageInputs);
  // };

  return (
    <Card className="mb-3">
      <Hed1 variant="title-card">Dokumentasi</Hed1>
      {/* <div className="flex justify-end">
        <Button onClick={addImageInput} variant="primary" className="py-2 px-5">
          <FaPlus />
        </Button>
        <Button
          onClick={removeImageInput}
          variant="danger"
          className="py-2 px-5 ml-3"
        >
          <FaMinus />
        </Button>
      </div> */}
      <div>
        <label>Tambahkan Foto Dokumentasi</label>
        {/* {imageInputs.map((_, index) => (
          <Input
            key={index}
            type="file"
            id="photo"
            value={FormData.photo}
            onChange={handleChange}
            className="my-2"
          />
        ))} */}
        <Input
          type="file"
          id="file"
          name="file"
          accept="image/*"
          onChange={handleFileChange}
          className="my-2"
        />
      </div>
    </Card>
  );
}

export default Step4;
