import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
