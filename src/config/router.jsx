import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
// import Test from "../component/Test";
import Zustand from "../Zustand";
import UseReactQuerry from "../pages/UseReactQuerry";
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


// const ProtectedRouteAuth = ({ children }) => {
//   const user = useSelector(selectUser);
//   if (!user) {
//     alertFail("You need to login first!!");
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

// const ProtectedRouteCreator = ({ children }) => {
//   const user = useSelector(selectUser);
//   console.log(user);
//   if (user?.role === "AUDIENCE") {
//     alertFail("You do not have permissions to access");
//     return <Navigate to="/go-pro" replace />;
//   }
//   return children;
// };

// const ProtectedADMIN = ({ children }) => {
//   const user = useSelector(selectUser);
//   console.log(user);
//   if (user?.role !== "ADMIN") {
//     if (user?.role !== "MOD") {
//       alertFail("You do not have permissions to access");
//       return <Navigate to="/" replace />;
//     }
//   }
//   return children;
// };

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Test />,
  // },
  // {
  //   path: "/zustand",
  //   element: <Zustand />,
  // },
  // {
  //   path: "/a",
  //   element: <UseReactQuerry />,
  // }, 
  {
    path: "",
    element: <Layout />,
    children: [{
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

    ]
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

]);
