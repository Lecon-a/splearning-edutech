import React, { useState } from "react";
import menus from "./db/sidebarTabs";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [tabs] = useState(menus);

  const handleClick = (e) => {
    document.querySelectorAll(".links").forEach((link) => {
      link.classList.remove("active");
    });
    e.target.parentElement.classList.add("active");
  };

  const tabElements = tabs.map((tab, index) => {
    return (
      <li key={index} id={tab}>
        <Link
          className="links d-flex gap-20 align-items-center justify-content-start"
          to={tab.title}
          onClick={handleClick}
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
      <div className="row">
        <div className="col-12">
          <div className="logo-wrapper">
            <h1 className="sidebar-text-logo-1">SPLearning</h1>
            <h3 className="sidebar-text-logo-2">EduTech</h3>
          </div>
          <div className="tabs-wrapper">
            <ul className="tabs">{tabElements}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
