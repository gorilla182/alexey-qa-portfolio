import { motion, useReducedMotion } from 'framer-motion';
import useAnimatedNumber from '../hooks/useAnimatedNumber';
import { fadeUp } from '../motion/variants';

export default function ProgressRow({ item, active }) {
  const reduce = useReducedMotion();
  const value = useAnimatedNumber(item.pct, active, reduce);
  const suffix = item.suffix ?? '%';

  return (
    <motion.div
      className="progress-item"
      data-testid={`progress-item-${item.id}`}
      variants={fadeUp}
    >
      <div className="progress-row">
        <span className="progress-label">{item.label}</span>
        <span className="progress-pct">
          {value}
          {suffix}
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${value}%`,
            background: item.color ?? '#1d9e75',
          }}
        />
      </div>
    </motion.div>
  );
}
