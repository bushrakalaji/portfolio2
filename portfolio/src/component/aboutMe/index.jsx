import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import bootstrap from "../../images/bootstrap.png";
import react from "../../images/physics.png";
import git from "../../images/git.png";
import github from "../../images/github.png";
import sass from "../../images/sass.png";
import xd from "../../images/xd.png";

function AboutMe() {
  return (
    <div className="min-vh-100  d-flex justify-content-center align-items-center  flex-column">
      <div className=" m-auto" id="about">
        <Row className="my-5 gap-5">
          {" "}
          <Col lg xl={7}>
            <h2 className="hello fs-1 text-center">About Me</h2>
            <div className="d-flex flex-column gap-3 fs-5">
              <p>
                I'm a passionate front-end developer originally from Syria, now
                living near Oslo, Norway. At 27 years old, I've dedicated myself
                to the art of web development. I studied front-end development
                at Noroff Technology and Digital Media School for two years,
                where I gained the skills to turn your dream website into
                reality.
              </p>

              <p>
                I thrive on collaborating with clients to bring their visions to
                life. With a meticulous eye for detail and a commitment to
                excellence, I aim to exceed expectations by creating exceptional
                websites. I believe in crafting designs that not only look great
                but also provide seamless user experiences.{" "}
              </p>

              <p>
                {" "}
                Let's work together to create websites that leave a lasting
                impression. I'm excited to contribute my expertise and help your
                digital projects succeed in this ever-changing landscape.
              </p>
            </div>
          </Col>{" "}
          <Col md>
            {" "}
            <h2 className="hello fs-1 text-center">Technologies and Tools</h2>
            <div className="d-flex gap-3 justify-content-center p-3 about rounded flex-wrap">
              <img src={html} alt="" style={{ maxWidth: "80px" }} />
              <img src={css} alt="" style={{ maxWidth: "80px" }} />
              <img src={js} alt="" style={{ maxWidth: "80px" }} />{" "}
              <img src={bootstrap} alt="" style={{ maxWidth: "80px" }} />{" "}
              <img src={sass} alt="" style={{ maxWidth: "80px" }} />{" "}
              <img src={react} alt="" style={{ maxWidth: "80px" }} />{" "}
              <img src={xd} alt="" style={{ maxWidth: "80px" }} />
              <img src={git} alt="" style={{ maxWidth: "80px" }} />
              <img src={github} alt="" style={{ maxWidth: "80px" }} />
            </div>
          </Col>
        </Row>
      </div>
      <div className="fs-2 text-center mt-auto">
        <a href="#contact" className="arrow">
          {" "}
          <i class="bi bi-arrow-down-circle"></i>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
