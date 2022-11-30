import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

function MainLayout() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
export default MainLayout;
