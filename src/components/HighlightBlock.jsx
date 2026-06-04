import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';

export default function HighlightBlock({ icon, title, text, className = '' }) {
  const reduce = useReducedMotion();

  return (
    <Reveal className={`meme-block ${className}`.trim()}>
      <motion.div
        className="meme-icon"
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { rotate: [0, -6, 6, -4, 0], scale: [1, 1.08, 1] }
        }
        transition={{
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 4,
          ease: 'easeInOut',
        }}
      >
        {icon}
      </motion.div>
      <p className="meme-text">
        <strong>{title}</strong>
        <br />
        {text}
      </p>
    </Reveal>
  );
}
