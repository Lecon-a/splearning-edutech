import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Main = (props) => {
  return (
    <>
      <Header activeTab={props.activeTab} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
