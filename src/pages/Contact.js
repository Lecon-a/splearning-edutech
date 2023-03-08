import React from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <Header activeTab="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row mt-5">
            <h5 className="section-heading">Contact Us</h5>
            <div className="col-12">

            </div>
            <div className="col-12">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h4 className="my-3 section-heading">Contact</h4>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        rows="4"
                        cols="30"
                        className="w-100 form-control"
                        placeholder="Comment"
                      />
                    </div>
                    <div className="control-button">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Behind Police Training School (PTS), Zaria Road, Jos
                          Nigeria.
                        </address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <BiPhoneCall className="fs-5" />
                        <a className="mb-0" href="tel:+2348165115527">
                          (234) 8165 1155 27
                        </a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlineMail className="fs-5" />
                        <a
                          className="mb-0"
                          href="emailto:splearning.edutech@gmail.com"
                        >
                          splearning.edutech@gmail.com
                        </a>
                      </li>
                      {/* <li className="mb-3 d-flex align-items-center gap-15"> 
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                      </li>*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
