import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  return (
    <>
      <div className="service-card">
        <div className="card-image">
          <img
            src="images/blog-1.jpg"
            className="img-fluid w-100"
            alt="service"
          />
        </div>
        <div className="service-content">
          <p className="date"></p>
          <h5 className="title">WEB DEVELOPMENT</h5>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Atque
            quaerat accusamus officia
          </p>
          <Link className="button" to="/service/:id">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
