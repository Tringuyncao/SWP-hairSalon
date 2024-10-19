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
import HomePage from "../pages/homepage/HomePage";
import Privacy from "../pages/privacy/Privacy";
import Dashboard from "../pages/dashboard/dashboard";
import HaircutService from "../pages/haircutservice/haircutservice";
import HairDyeService from "../pages/hairdyeservice/hairdyeservice";
import BookingSlot from "../pages/book/BookingSlot";

import ManageCategory from "../pages/admin/manage-category/ManageCategory";

import Contact from "../pages/contact/contact";
import ManageService from "../pages/admin/manage-service/manageservice";
import ManageOption from "../pages/admin/manage-option/ManageOption";
import ManageStore from "../pages/admin/manage-store/ManageStore";
import ProfilePage from "../pages/profile/ProfilePage";
import History from "../pages/profile/history/History";
import Profile from "../pages/profile/ProfilePage";
import Combo0 from "../pages/haircutservice/combo0/Combo0";
import Combo1 from "../pages/haircutservice/combo1/Combo1";
import Combo2 from "../pages/haircutservice/combo2/Combo2";
import Combo3 from "../pages/haircutservice/combo3/Combo3";
import BasicCurling from "../pages/hairdyeservice/basiccurling/basiccurling";
import PremiumPerming from "../pages/hairdyeservice/PremiumPerming/PremiumPerming";
import BasicDyeing from "../pages/hairdyeservice/basicdyeing/basicdyeing";
import PremiumDyeing from "../pages/hairdyeservice/premiumdyeing/premiumdyeing";
import Robonano from "../pages/hairdyeservice/RoboNano/robonano";

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
        path: "/book",
        element: <BookingSlot />,
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
        path: "/haircutservice/combo1",
        element: <Combo0 />,
      },
      {
        path: "/haircutservice/combo2",
        element: <Combo1 />,
      },
      {
        path: "/haircutservice/combo3",
        element: <Combo2 />,
      },
      {
        path: "/haircutservice/combo4",
        element: <Combo3 />,
      },
      {
        path: "/basiccurling",
        element: <BasicCurling />,
      },
      {
        path: "/premiumperming",
        element: <PremiumPerming />,
      },
      {
        path: "/basicdyeing",
        element: <BasicDyeing />,
      },
      {
        path: "/premiumdyeing",
        element: <PremiumDyeing />,
      },
      {
        path: "/robonano",
        element: <Robonano />,
      },
      {
        path: "/hairdyeservice",
        element: <HairDyeService />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
    children: [
      {
        path: "category",
        element: <ManageCategory />,
      },
      {
        path: "service",
        element: <ManageService />,
      },
      {
        path: "option",
        element: <ManageOption />,
      },
      {
        path: "store",
        element: <ManageStore />,
      },
    ],
  },
]);
