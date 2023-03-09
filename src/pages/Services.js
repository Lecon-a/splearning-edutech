import React from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <>
      <Meta title="services" />
      <Header activeTab="Services" />
      <div className="service-wrapper home-wrapper-2 py-5">
        <div className="container-xxl py-5">
          <div className="row service-inner-wrapper py-5">
            <h5 className="section-heading py-3">Our services</h5>
            <div className="col-9">
              <div className="row service-card-gap align-items-center">
                <ServiceCard />
              </div>
            </div>

            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>ICT Solutions</li>
                    <li>Repairs</li>
                    <li>Teaching</li>
                    <li>Web Optimization</li>
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
