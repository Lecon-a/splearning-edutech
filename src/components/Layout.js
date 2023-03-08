import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";

const Layout = () => {
  return (
    <>
      <div className="layout-wrapper">
        <div className="row">
          <div className="col-3 px-0 sidebar-wrapper">
            <div className="sidebar">
              <SideBar />
            </div>
          </div>
          <div className="col-9 px-0 main">
            <div className="main-wrapper">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
