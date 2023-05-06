import React from "react";
import AuthLayout from "../components/auth/auth-layout";
import LoginForm from "../components/auth/login-form";

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
