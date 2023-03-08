import React from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Meta title="About Us" />
      <Header activeTab="About Us" />
      <div className="about-wrapper">
        <div className="container-xxl">
          <div className="row">
            <h5 className="section-heading">About Us</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
