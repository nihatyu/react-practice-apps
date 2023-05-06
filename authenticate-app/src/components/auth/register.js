import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      fullName: fullname,
      email: email,
      password: password,
      memberAgreementVersion: "v1",
    };
    try {
      await axios.post("http://localhost:3000/api/auth/register", payload);
      handleClear();
      navigation("/login");
    } catch (error) {
      return error;
    }
  };

  const handleClear = () => {
    setFullname("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex px-16 py-12 flex-col gap-3 max-w-xl shadow-2xl border border-gray-300 rounded-2xl"
    >
      <div>
        Zaten üye misiniz? <Link to="/login">Giriş Yap</Link>{" "}
      </div>
      <label className="flex flex-col gap-1">
        Tam Ad
        <input
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          type="text"
          className="p-3 border border-gray-500 shadow-sm bg-gray-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        E-posta
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
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
      <button className="bg-blue-400 rounded shadow-sm text-white text-lg p-3">
        Kaydol
      </button>
    </form>
  );
};

export default RegisterForm;
