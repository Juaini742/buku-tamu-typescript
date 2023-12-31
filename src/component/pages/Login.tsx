/* eslint-disable @typescript-eslint/no-explicit-any */
import {Link, useNavigate} from "react-router-dom";
import {Button, Hed1, Paragraph} from "../atoms";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {LoginAction} from "../../store/actions/auth.action";
import {unwrapResult} from "@reduxjs/toolkit";
import Loaders from "../molecules/Loaders";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    role: "client",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resultAction: any = await dispatch(
        LoginAction({formData, navigate})
      );
      unwrapResult(resultAction);
    } catch (error) {
      setError(error.message);
    }
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
            Selamat datang di bagian Login
          </Paragraph>
        </div>
        {error && (
          <div className="text-center mb-2 bg-dangerH/50 p-3 border-2 border-dangerH rounded-md">
            <Paragraph variant="subTitile">{error}</Paragraph>
          </div>
        )}
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
        <Link to="/register">
          <div className="mb-3 text-xs pointer-events-auto text-blue-500">
            <u>Klik disini untuk register</u>
          </div>
        </Link>
        <div className="mb-6">
          <Button variant="primary" className="py-2 w-full">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
