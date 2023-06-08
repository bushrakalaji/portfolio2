import React from "react";
import bisho from "../../images/memoji.png";
import AboutMe from "../../component/aboutMe";
import Contact from "../../component/contact";
import Section from "../../component/motion/useInView";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function HomePage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [1, 0], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="text-white">
      <Section>
        <motion.div
          className="d-flex flex-wrap justify-content-around align-items-center gap-2 min-vh-100"
          style={{ scale, opacity }}
          ref={targetRef}
        >
          <motion.div>
            <div className="d-flex flex-column">
              <h1 className="hello fs-1">My Portfolio</h1>
              <span className="fs-2">Bushra kalaji</span>
              <span className="fs-1">Front-End Developer</span>
              <a
                className="btn btn-outline-secondary fs-3 text-white mt-3"
                href="mailto:bkalaji@hotmail.com"
              >
                <i className="bi bi-envelope"></i> Contact me
              </a>
            </div>
          </motion.div>
          <div className="hi">
            <img
              src={bisho}
              alt=""
              className="w-100 h-100 myshadow"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </motion.div>
      </Section>
      <div className="fs-2 text-center">
        <a href="#about" className="arrow">
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
