import React from "react";
import Header from "./header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
