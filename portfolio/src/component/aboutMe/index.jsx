import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [1, 0], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      id="about"
      style={{ scale, opacity }}
      ref={targetRef}
    >
      <Row className="my-5 gap-5">
        {" "}
        <Col lg xl={7}>
          <h2 className="hello fs-1 text-center mb-5">About Me</h2>
          <div className="d-flex flex-column gap-3 fs-5 glass p-5 ">
            <p>
              I'm a passionate front-end developer originally from Syria, now
              living near Oslo, Norway. At 27 years old, I've dedicated myself
              to the art of web development. I studied front-end development at
              Noroff Technology and Digital Media School for two years, where I
              gained the skills to turn your dream website into reality.
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
          <h2 className="hello fs-1  my-5 text-center">
            Technologies and Tools
          </h2>
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
    </motion.div>
  );
}

export default AboutMe;
