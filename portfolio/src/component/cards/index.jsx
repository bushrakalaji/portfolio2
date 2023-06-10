import React, { useEffect, useState, useRef } from "react";
import { LayoutGroup, motion, useScroll, useTransform } from "framer-motion";
import Card from "../card";

const url =
  "http://api.bushrakalaji.com/wp-json/wp/v2/card?acf_format=standard&_fields=title,acf";

function Cards() {
  const [cards, setCard] = useState([]);

  // The useEffect will run once when the component first mounts
  useEffect(() => {
    // Function that gets our posts
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      // Setting our `posts` state to the API data we received
      setCard(json);
    }
    getData();
  }, []);

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
