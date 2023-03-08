import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <>
      <Meta title="SPLearning EduTech" />
      <Header activeTab="Home" />
      <section className="home-wrapper-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 px-0 py-0">
              <div className="main-banner position-relative">
                <img
                  src="images/banner_01.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>WEB DEVELOPMENT</h4>
                  <h5>With Javascript & Python</h5>
                  <p>$60/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our services</h3>
            </div>
          </div>
          <div className="row home-service-grid">
            <div className="col-3">
              <ServiceCard />
            </div>
            <div className="col-3">
              <ServiceCard />
            </div>
            <div className="col-3">
              <ServiceCard />
            </div>
            <div className="col-3">
              <ServiceCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
