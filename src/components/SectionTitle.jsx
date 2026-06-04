import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, fadeUpReduced, lineGrow, viewOnce } from '../motion/variants';

export default function SectionTitle({ children, className = '' }) {
  const reduce = useReducedMotion();
  const textVariant = reduce ? fadeUpReduced : fadeUp;

  return (
    <motion.h2
      className={`section-title ${className}`.trim()}
      initial="hidden"
      whileInView="visible"
      viewport={viewOnce}
    >
      <motion.span variants={textVariant}>{children}</motion.span>
      <motion.span
        className="section-line"
        variants={reduce ? fadeUpReduced : lineGrow}
        style={{ transformOrigin: 'left center' }}
      />
    </motion.h2>
  );
}
