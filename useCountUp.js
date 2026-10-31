import { useEffect, useRef, useState } from "react";

// عدّاد يبدأ عند ظهور العنصر
export default function useCountUp(target) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let iv;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const step = Math.ceil(target / 50);
      iv = setInterval(() => {
        setN((c) => {
          const next = Math.min(target, c + step);
          if (next >= target) clearInterval(iv);
          return next;
        });
      }, 30);
    });
    io.observe(el);
    return () => { io.disconnect(); clearInterval(iv); };
  }, [target]);
  return [ref, n];
}
