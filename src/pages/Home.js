import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <>
      <Meta title="SPLearning EduTech" />
      <Header activeTab="Home" />
      <div className="home-wrapper">
        <section className="home-wrapper-1">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12 p-0">
                <div className="main-banner position-relative">
                  <img
                    src="images/main-banner-1.jpg"
                    className="img-fluid w-100 h-100"
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
        <section className="course-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our courses</h3>
              </div>
            </div>
            <div className="row home-course-grid align-items-center">
              <CourseCard />
            </div>
          </div>
        </section>
        <section className="course-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Services</h3>
              </div>
            </div>
            <div className="row home-course-grid align-items-center">
              <ServiceCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
