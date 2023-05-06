import React, { useState } from "react";
import AuthLayout from "./auth-layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        payload
      );
      localStorage.setItem("token", res?.data?.token);

      handleClear();
      navigation("/");
    } catch (error) {
      return error;
    }
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <AuthLayout>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex px-16 py-12 flex-col gap-3 max-w-xl shadow-2xl border border-gray-300 rounded-2xl"
      >
        <div>
          Üye değil misiniz? <Link to="/register">Üye Ol</Link>
        </div>

        <label className="flex flex-col gap-1">
          E-posta
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="p-3 border border-gray-500 shadow-sm bg-gray-200"
          />
        </label>
        <label className="flex flex-col gap-1">
          Şifre
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="p-3 border border-gray-500 shadow-sm bg-gray-200"
          />
        </label>

        <button className="bg-green-500 rounded shadow-sm text-white text-lg p-3">
          Giriş Yap
        </button>
      </form>
    </AuthLayout>
  );
};

export default LoginForm;
