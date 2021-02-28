import React from "react";
import Footer from "./reusables/Footer";
import Header from "./reusables/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
