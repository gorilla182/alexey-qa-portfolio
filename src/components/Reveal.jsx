import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, fadeUpReduced, viewOnce } from '../motion/variants';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant,
  as = 'div',
}) {
  const reduce = useReducedMotion();
  const base = reduce ? fadeUpReduced : fadeUp;
  const variants = variant ?? base;

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewOnce}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible.transition,
            delay: reduce ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
