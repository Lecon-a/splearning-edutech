import React, { useState } from "react";
import { Link } from "react-router-dom";
import menus from "./db/sidebarTabs";

const NavBar = (props) => {
  const [tabs] = useState(menus);

  const tabElements = tabs.map((tab, index) => {
    return (
      <li key={index} id={tab}>
        <Link
          className="links d-flex gap-20 align-items-center justify-content-start"
          to={
            tab.title === "home"
              ? "/"
              : tab.title === "services"
              ? "/services"
              : "/" + tab.title.split(" ")[0]
          }
        >
          {tab.image}
          <h4>
            {tab.title[0].toUpperCase() +
              tab.title.slice(1, tab.title.length + 1)}
          </h4>
        </Link>
      </li>
    );
  });

  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h2>
              SPLearning
              <br />
              <span className="brand-sub">EduTech</span>
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end mt-5"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header mt-4 mb-0 px-4">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                {props.activeTab}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body mt-0">
              <ul className="navbar-nav justify-content-end flex-grow-1 mt-0 px-2 gap-20">
                {tabElements}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
