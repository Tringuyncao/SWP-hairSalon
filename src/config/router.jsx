import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
// import Test from "../component/Test";

import Test from "../Test";
import Footer from "../pages/footer/Footer";
import RegisterPage from "../pages/register/RegisterPage";
import Header from "../pages/header/Header";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import BookingForm from "../pages/booking/BookingForm";
import Layout from "../outlet";
import HomePage from "../pages/homepage/Homepage";
import Privacy from "../pages/privacy/Privacy";
import Dashboard from "../pages/dashboard/dashboard";
import HaircutService from "../pages/haircutservice/haircutservice";
import HairDyeService from "../pages/hairdyeservice/hairdyeservice";
import ManageService from "../pages/admin/manage-service/manage-service";
export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/booking",
        element: <BookingForm />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/homepage",
        element: <HomePage />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/haircutservice",
        element: <HaircutService />,
      },
      {
        path: "/hairdyeservice",
        element: <HairDyeService />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/booking",
    element: <BookingForm />,
  },
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path:"service",
        element:<ManageService/>
      },
    ],
  },
]);
