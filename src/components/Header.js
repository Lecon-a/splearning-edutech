import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="header-wrapper">
        <div className="row d-flex flex-column">
                  <div className="col-12">
                      <h1 className="text-center">{ props.activeTab }</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
