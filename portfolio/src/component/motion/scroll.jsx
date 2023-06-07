const { scrollYProgress } = useViewportScroll();
const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

return (
  <motion.div style={{ scale }}>
    <motion.div
      style={{
        scaleY: scrollYProgress,
      }}
    />
  </motion.div>
);
