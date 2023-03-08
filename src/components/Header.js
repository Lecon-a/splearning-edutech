import React from "react";
import NavBar from "./NavBar";

const Header = (props) => {
  return (
    <>
      <div className="header-wrapper">
        <div className="row d-flex flex-column">
          <div className="col-12 align-items-center">
            <div className="nav-hide">
              <NavBar activeTab={props.activeTab} />
            </div>
            <h1 className="text-center heading">{props.activeTab}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
