import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { ThemeContext } from "../context/ThemeContext";

const RootLayout = () => {
  const { isThemeMode } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <ToastContainer />
      <div className={`wrapper ${isThemeMode && "bg-dark"}`}>
        <div className="container">
          <Header />
          <div className="vh-100">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default RootLayout;
