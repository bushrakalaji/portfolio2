import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function YourComponent() {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: 1, title: "Item 1", subtitle: "Subtitle 1" },
    { id: 2, title: "Item 2", subtitle: "Subtitle 2" },
    { id: 3, title: "Item 3", subtitle: "Subtitle 3" },
  ];

  return (
    <>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>
              {items.find((item) => item.id === selectedId).subtitle}
            </motion.h5>
            <motion.h2>
              {items.find((item) => item.id === selectedId).title}
            </motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default YourComponent;
