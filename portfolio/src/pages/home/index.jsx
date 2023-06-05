import React from "react";
import bisho from "../../images/memoji.png";
import AboutMe from "../../component/aboutMe";
import Contact from "../../component/contact";

function HomePage() {
  return (
    <div className="text-white">
      <div className="d-flex flex-wrap  justify-content-around align-items-center gap-2 myHeight">
        <div>
          <div className="d-flex flex-column">
            <h1 className="hello  fs-1"> My Portfolio</h1>
            <span className="fs-2">Bushra kalaji</span>
            <span className="fs-1">Front-End Developer</span>
            <a
              className="btn btn-outline-secondary  fs-3 text-white mt-3"
              href="mailto:bkalaji@hotmail.com"
            >
              <i className="bi bi-envelope"></i> Contact me
            </a>
          </div>
        </div>
        <div className="">
          {" "}
          <img
            src={bisho}
            alt=""
            className="w-100 h-100 myshadow 
        "
            style={{ maxWidth: "300px" }}
          />
        </div>
      </div>{" "}
      <div className="fs-2 text-center">
        <a href="#about" className="arrow">
          {" "}
          <i className="bi bi-arrow-down-circle"></i>
        </a>
      </div>
      <AboutMe />
      <Contact />
      <div className="fs-2 text-center">
        <a href="#contact" className="arrow">
          {" "}
          <i class="bi bi-arrow-down-circle"></i>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
