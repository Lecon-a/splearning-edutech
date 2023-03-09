import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import courses from "./db/coursesDB";

const CourseCard = () => {
  let location = useLocation();
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    setCourseList((prevCourses) => (prevCourses = courses));
  }, []);

  const courseElements = courseList.map((course, index) => {
    // console.log(course);
    return (
      <div
        key={index}
        className={`${
          location.pathname === "/courses" ? "col-6 mb-3" : "col-3 mb-3"
        }`}
      >
        <div className="course-card">
          <div className="card-image">
            <img
              src={`images/${course.image}`}
              className="img-fluid w-100"
              alt="course"
            />
          </div>
          <div className="course-content">
            <p className="date"></p>
            <h5 className="title">{course.title}</h5>
            <p className="description">{course.description}</p>
            <Link className="button" to="/courses/:id">
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return <>{courseElements}</>;
};

export default CourseCard;
