import React from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  return (
    <>
      <Meta title="courses" />
      <Header activeTab="Courses" />
      <div className="course-wrapper home-wrapper-2 py-5">
        <div className="container-xxl py-5">
          <div className="row course-inner-wrapper py-5">
            <h5 className="section-heading py-3">Our courses</h5>
            <div className="col-9">
              <div className="row course-card-gap align-items-center">
                <CourseCard />
              </div>
            </div>

            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Programming</li>
                    <li>Web Development</li>
                    <li>Machine Learning</li>
                    <li>Graphic Designing</li>
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

export default Courses;
