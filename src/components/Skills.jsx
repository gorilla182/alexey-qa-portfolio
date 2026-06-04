import { motion, useReducedMotion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { popIn, stagger, viewOnce } from '../motion/variants';

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="skills-wrap"
      initial="hidden"
      whileInView="visible"
      viewport={viewOnce}
      variants={stagger(0.03, 0.05)}
    >
      {skills.map((skill) => (
        <motion.span
          key={skill.name}
          className={`skill-tag${skill.hot ? ' hot' : ''}`}
          variants={popIn}
          whileHover={
            reduce
              ? undefined
              : {
                  scale: 1.08,
                  y: -3,
                  transition: { type: 'spring', stiffness: 500, damping: 20 },
                }
          }
          whileTap={reduce ? undefined : { scale: 0.95 }}
        >
          {skill.name}
        </motion.span>
      ))}
    </motion.div>
  );
}
