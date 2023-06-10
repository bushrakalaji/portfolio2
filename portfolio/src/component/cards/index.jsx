import React, { useEffect, useState, useRef } from "react";
import { LayoutGroup, motion, useScroll, useTransform } from "framer-motion";
import Card from "../card";
import Spinner from "react-bootstrap/Spinner";

const url =
  "https://api.bushrakalaji.com/wp-json/wp/v2/card?acf_format=standard&_fields=title,acf";

function Cards() {
  const [cards, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // The useEffect will run once when the component first mounts
  useEffect(() => {
    setHasError(false);
    setIsLoading(true);

    async function getData() {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setCard(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>;
  }

  if (hasError) {
    <dir>Oops! Something went wrong.</dir>;
  }

  console.log(cards);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [1, 0], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      className="min-vh-100 d-flex flex-column align-items-center align-content-center"
      style={{ scale, opacity }}
      ref={targetRef}
      transition={{ delay: 2, duration: 3 }}
    >
      {" "}
      <h2 className="hello mt-5">My Projects</h2>
      <LayoutGroup>
        <motion.div className="d-flex justify-content-center align-items-start gap-3 flex-wrap flex-30">
          {cards.map((card) => (
            <div>
              <Card card={card} />
            </div>
          ))}
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
}

export default Cards;
