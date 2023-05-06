import jwtDecode from "jwt-decode";
import React from "react";

const HomePage = () => {
  const userToken = localStorage.getItem("token");
  const data = jwtDecode(userToken);
  const fullName = data.user.fullName;
  const email = data.user.email;
  return (
    <>
      <h1>Merhaba {fullName}</h1>
      <h2>Email {email} </h2>
    </>
  );
};

export default HomePage;
