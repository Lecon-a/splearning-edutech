import React from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SingleService = () => {
  return (
    <>
      <Meta title="Dynamic Service Name" />
      <Header title="Dynamic Service Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  You're such as good as your last collection, which is an
                  enormous pressure. I think there is some about luxury...
                </p>
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" /> Back To Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleService;
