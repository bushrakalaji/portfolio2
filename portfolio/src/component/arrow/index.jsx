import React from "react";
import { motion } from "framer-motion";

function Arrow({ href }) {
  return (
    <motion.div className="fs-2 text-center position-absolute bottom-0 start-50 translate-middle-x">
      <motion.a
        href={href}
        className="arrow"
        whileHover={{
          scale: [1, 1.1, 1],
          textShadow: "0px 0px 8px #fff",
        }}
      >
        <i className="bi bi-arrow-down-circle"></i>
      </motion.a>
    </motion.div>
  );
}

export default Arrow;
