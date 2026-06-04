import { useEffect, useRef, useState } from 'react';

export default function useAnimatedNumber(target, active, reduce, duration = 1100) {
  const finished = useRef(false);
  const [value, setValue] = useState(() => (reduce ? target : 0));

  useEffect(() => {
    if (!active) return undefined;

    if (finished.current) return undefined;

    if (reduce) {
      setValue(target);
      finished.current = true;
      return undefined;
    }

    finished.current = true;
    const start = performance.now();
    let frameId = 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    setValue(0);
    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [active, duration, reduce, target]);

  return value;
}
