import React from "react";
import AuthLayout from "../components/auth/auth-layout";
import RegisterForm from "../components/auth/register";

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
