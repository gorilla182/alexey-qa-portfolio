import { motion, useReducedMotion } from 'framer-motion';
import { footer } from '../data/portfolio';
import { fadeUp, viewOnce } from '../motion/variants';

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <motion.footer
      className="footer-bar"
      data-testid="footer"
      initial="hidden"
      whileInView="visible"
      viewport={viewOnce}
      variants={fadeUp}
    >
      <p>{footer.updated}</p>
      <motion.p
        className="footer-tagline"
        animate={
          reduce
            ? undefined
            : { opacity: [0.7, 1, 0.7] }
        }
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {footer.tagline}
      </motion.p>
    </motion.footer>
  );
}
