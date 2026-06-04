import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function parseStatValue(value) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return null;
  return { end: Number(match[1]), suffix: match[2] };
}

export function shouldAnimateStat(value) {
  const parsed = parseStatValue(value);
  if (!parsed) return false;
  const { suffix } = parsed;
  return suffix === '%' || suffix === 'k' || suffix === '+' || suffix === '';
}

export default function CountUp({ value, active }) {
  const reduce = useReducedMotion();
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const canAnimate = shouldAnimateStat(value);
  const finished = useRef(false);

  const [display, setDisplay] = useState(() => {
    if (!parsed) return null;
    if (!canAnimate || reduce) return parsed.end;
    return 0;
  });

  useEffect(() => {
    if (!parsed || !canAnimate) return undefined;

    if (!active) return undefined;

    if (finished.current) return undefined;

    if (reduce) {
      setDisplay(parsed.end);
      finished.current = true;
      return undefined;
    }

    finished.current = true;
    const { end } = parsed;
    const start = performance.now();
    const duration = 1100;

    let frameId = 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(end * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplay(end);
      }
    };

    setDisplay(0);
    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [active, canAnimate, parsed?.end, reduce, value]);

  if (!parsed) return value;

  if (!canAnimate) return value;

  return (
    <>
      {display}
      {parsed.suffix}
    </>
  );
}
