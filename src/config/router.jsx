import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
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

import ManageBooking from "../pages/admin/manage-booking/ManageBooking";

import MassageService from "../pages/sparelax/Massage/MassageService"; // Import lại chính xác
import RelaxCombo2 from "../pages/sparelax/massage/relaxcombo2/RelaxCombo2";
import RelaxCombo4 from "../pages/sparelax/massage/relaxcombo4/RelaxCombo4";
import RelaxCombo3 from "../pages/sparelax/massage/relaxcombo3/RelaxCombo3";
import RelaxCombo5 from "../pages/sparelax/massage/relaxcombo5/RelaxCombo5";
import EarPick from "../pages/sparelax/earpick/Earpick";
import RelaxCombo6 from "../pages/sparelax/earpick/relaxcombo6/RelaxCombo6";

import Appointment from "../pages/profile/appointment/Appointment";
import Feedback from "../pages/profile/feedback/Feedback";
import ManageSlot from "../pages/admin/manage-slot/ManageSlot";
import Stylish from "../pages/stylish/Stylish";
import BookingStylish from "../pages/stylish/bookingstylish/bookingstylish";
import ProfileStylish from "../pages/stylish/profile/profile";
import RegisterSchedule from "../pages/stylish/register-schedule/RegisterSchedule";
import Info from "../pages/profile/info/info";

import Manager from "../pages/manager/Manager";
import InfoManager from "../pages/manager/info/Info";
import BookingManager from "../pages/manager/booking/BookingManager";
import ManageStylish from "../pages/manager/manage-stylish/ManageStylish";
import ManageStylishAdmin from "../pages/admin/manage-stylish/ManageStylish";
import ManageManagerAdmin from "../pages/admin/manage-manager/ManageManagerAdmin";




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
        path: "/haircutservice/combo0",
        element: <Combo0 />,
      },
      {
        path: "/haircutservice/combo1",
        element: <Combo1 />,
      },
      {
        path: "/haircutservice/combo2",
        element: <Combo2 />,
      },
      {
        path: "/haircutservice/combo3",
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
        path: "/profile",
        element: <Profile />,

        children: [
          {
            path: "appointment",
            element: <Appointment />,
          },
          {
            path: "history",
            element: <History />,
          },
          {
            path: "feedback",
            element: <Feedback />,
          },
          {
            path: "info",
            element: <Info />,
          },
        ]

      },
      {
        path: "/sparelax/massage",
        element: <MassageService />,
      },
      {
        path: "/sparelax/massage/relaxcombo2",
        element: <RelaxCombo2 />,
      },
      {
        path: "/sparelax/massage/relaxcombo3",
        element: <RelaxCombo3 />,
      },
      {
        path: "/sparelax/massage/relaxcombo4",
        element: <RelaxCombo4 />,
      },
      {
        path: "/sparelax/massage/relaxcombo5",
        element: <RelaxCombo5 />,
      },
      {
        path: "/sparelax/earpick",
        element: <EarPick />,
      },
      {
        path: "/sparelax/earpick/relaxcombo6",
        element: <RelaxCombo6 />,
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
    path: "/",
    element: <Test />,
  },
  {

    path: "/stylish",
    element: <Stylish />,
    children: [
      {
        path: "booking",
        element: <BookingStylish />,
      },
      {
        path: "profile",
        element: <ProfileStylish />,
      },
      {
        path: "register-schedule",
        element: <RegisterSchedule />,
      },
    ]
  },
  {


    path: "/manager",
    element: <Manager />,
    children: [
      {
        path: "info",
        element: <InfoManager />,
      },
      {
        path: "booking",
        element: <BookingManager />,
      },
      {
        path: "managestylish",
        element: <ManageStylish />,
      },
    ]
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
      {
        path: "booking",
        element: <ManageBooking />,
      },
      {
        path: "stylish",
        element: <ManageStylishAdmin />,
      },
      {
        path: "manager",
        element: <ManageManagerAdmin />,
      },
      {
        path: "slot",
        element: <ManageSlot />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/homepage" />, // Thêm điều hướng về trang chủ nếu không có route phù hợp
  },
]);
