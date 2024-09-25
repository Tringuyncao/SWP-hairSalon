import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/header/Header"; // Adjust the path according to your structure
import Footer from "../pages/footer/Footer";

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />  {/* This is where the nested components will be rendered */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
