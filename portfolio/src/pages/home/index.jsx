import React from "react";
import bisho from "../../images/memoji.png";
import AboutMe from "../../component/aboutMe";
import Contact from "../../component/contact";
import Section from "../../component/motion/useInView";

function HomePage() {
  return (
    <div className="text-white">
      <Section>
        <div className="d-flex flex-wrap  justify-content-around align-items-center gap-2 min-vh-100">
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
          <div className="hi">
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
      </Section>
      <div className="fs-2 text-center">
        <a href="#about" className="arrow">
          {" "}
          <i className="bi bi-arrow-down-circle"></i>
        </a>
      </div>

      <Section>
        <AboutMe />
      </Section>
      <Section>
        <Contact />
      </Section>
    </div>
  );
}

export default HomePage;
