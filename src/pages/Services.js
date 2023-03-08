import React from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <>
      <Meta title="Services" />
      <Header activeTab="Services" />
      <div className="service-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row service-inner-wrapper">
            <h5 className="section-heading">Our Services</h5>
            <div className="col-9">
              <div className="row service-card-gap">
                <div className="col-6 mb-3">
                  <ServiceCard />
                </div>
                <div className="col-6 mb-3">
                  <ServiceCard />
                </div>
                <div className="col-6 mb-3">
                  <ServiceCard />
                </div>
                <div className="col-6 mb-3">
                  <ServiceCard />
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
