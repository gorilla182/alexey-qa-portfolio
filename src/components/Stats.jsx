import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '../data/portfolio';
import { scaleIn, stagger, viewOnce } from '../motion/variants';
import CountUp from './CountUp';

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, viewOnce);
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="stats-grid"
      data-testid="stats-section"
      initial="hidden"
      whileInView="visible"
      viewport={viewOnce}
      variants={stagger(0.07, 0.05)}
    >
      {stats.map((stat) => (
        <motion.article
          key={stat.label}
          className="stat-card"
          variants={scaleIn}
          whileHover={
            reduce
              ? undefined
              : {
                  y: -6,
                  scale: 1.03,
                  boxShadow: '0 12px 28px rgba(29, 158, 117, 0.12)',
                  transition: { type: 'spring', stiffness: 400, damping: 22 },
                }
          }
        >
          <div className="stat-num">
            <CountUp value={stat.value} active={inView} />
          </div>
          <p className="stat-label">{stat.label}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
