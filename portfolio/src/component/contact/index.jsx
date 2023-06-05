import React from "react";
import bisho from "../../images/contact.png";

function Contact() {
  return (
    <div
      className="myHeght d-flex justify-content-around align-items-center flex-wrap gap-4"
      id="contact"
    >
      <div>
        <h2 className="hello fs-1 mb-5">Contact Information</h2>
        <div className="d-flex gap-2 justify-content-between ">
          {" "}
          <a className=" text-white fs-1 " href="mailto:bkalaji@hotmail.com">
            <i className="bi bi-envelope"></i>
          </a>
          <a
            href="https://github.com/bushrakalaji"
            className="text-white fs-1 "
          >
            <i className="bi bi-github linkHover"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bushra-kalaji-343b8b206"
            className=" text-white fs-1 "
          >
            <i className="bi bi-linkedin linkHover"></i>
          </a>
          <a
            href="https://www.tiktok.com/@bushrakalaji"
            className=" text-white fs-1 "
          >
            <i className="bi bi-tiktok linkHover"></i>
          </a>
          <a
            href="https://instagram.com/bushra_kalaji?igshid=OGQ5ZDc2ODk2ZA=="
            className=" text-white fs-1 "
          >
            <i className="bi bi-instagram linkHover"></i>
          </a>
        </div>
      </div>
      <div>
        {" "}
        <img src={bisho} alt="" className="cntctShadow " />
      </div>
    </div>
  );
}

export default Contact;
