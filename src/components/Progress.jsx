import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { progress } from '../data/portfolio';
import { stagger, viewOnce } from '../motion/variants';
import ProgressRow from './ProgressRow';

export default function Progress() {
  const ref = useRef(null);
  const inView = useInView(ref, viewOnce);
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="progress-block"
      data-testid="progress-section"
      initial="hidden"
      whileInView="visible"
      viewport={viewOnce}
      variants={stagger(0.1, 0)}
    >
      {progress.map((item) => (
        <ProgressRow key={item.label} item={item} active={inView || reduce} />
      ))}
    </motion.div>
  );
}
