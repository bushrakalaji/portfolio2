import React from "react";
import bisho from "../../images/memoji.png";
import AboutMe from "../../component/aboutMe";

function HomePage() {
  return (
    <div className="text-white">
      <div className="d-flex flex-wrap   justify-content-around align-items-center  gap-2 myHeight">
        <div>
          <div className="d-flex flex-column">
            <h1 className="hello  fs-1"> My Portfolio</h1>
            <span className="fs-2">Bushra kalaji</span>
            <span className="fs-1">Front-End Developer</span>
            <a
              className="btn btn-outline-primary  fs-3 text-white"
              href="mailto:bkalaji@hotmail.com"
            >
              <i class="bi bi-envelope"></i> Contact me
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
        </div>{" "}
      </div>{" "}
      <div className="fs-2 text-center">
        <i class="bi bi-arrow-down-circle"></i>
      </div>
      <AboutMe />
      <div className="fs-2 text-center">
        <i class="bi bi-arrow-down-circle"></i>
      </div>
    </div>
  );
}

export default HomePage;
