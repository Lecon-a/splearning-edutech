import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import services from "./db/servicesDB";

const ServiceCard = () => {
  let location = useLocation();
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    setServiceList((prevServices) => (prevServices = services));
  }, []);

  const serviceElements = serviceList.map((service, index) => {
    // console.log(Service);
    return (
      <div
        key={index}
        className={`${
          location.pathname === "/services" ? "col-6 mb-3" : "col-3 mb-3"
        }`}
      >
        <div className="service-card">
          <div className="card-image">
            <img
              src={`images/${service.image}`}
              className="img-fluid w-100"
              alt="service"
            />
          </div>
          <div className="service-content">
            <p className="date"></p>
            <h5 className="title">{service.title}</h5>
            <p className="description">{service.description}</p>
            <Link className="button" to="/services/:id">
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return <>{serviceElements}</>;
};

export default ServiceCard;
