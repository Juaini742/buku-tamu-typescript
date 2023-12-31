import {useState} from "react";
import {Button, Hed1, Paragraph} from "../atoms";
import {useDispatch} from "react-redux";
import {RegisterAction} from "../../store/actions/register.action";
import {Link} from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "client",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterAction(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="text-center mb-5">
          <Hed1 variant="title">Badan Pusat Statistik Kab. HST</Hed1>
          <Paragraph variant="subTitile">
            Selamat datang di bagian Registrasi
          </Paragraph>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="********"
          />
        </div>
        <Link to="/login">
          <div className="mb-3 text-xs pointer-events-auto text-blue-500">
            <u>Klik disini untuk login</u>
          </div>
        </Link>
        <div className="mb-6">
          <Button variant="primary" className="py-2 w-full">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
