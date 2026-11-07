import { useEffect, useRef, useState } from 'react';

// Counts the first number in `value` up from zero the first time it scrolls into view.
function CountUp({ value }) {
  const ref = useRef(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const match = value.match(/\d+(\.\d+)?/);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!match || reduced || !('IntersectionObserver' in window)) return undefined;

    const target = Number(match[0]);
    const decimals = match[1] ? match[1].length - 1 : 0;
    let frame = 0;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / 1300, 1);
        const eased = 1 - (1 - progress) ** 3;
        setText(value.replace(match[0], (target * eased).toFixed(decimals)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{text}</span>;
}

export default CountUp;
