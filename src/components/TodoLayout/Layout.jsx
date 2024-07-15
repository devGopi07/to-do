import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-[90vh]">
      <Navbar />
      <div className=" mx-[155px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
