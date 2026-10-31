import { useEffect, useRef } from "react";

// شريط تقدم التمرير: يحدّث الـ DOM مباشرة بدون state لتجنب إعادة الرسم
export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let busy = false;
    const update = () => {
      busy = false;
      const h = document.documentElement;
      ref.current.style.transform = `scaleX(${h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1)})`;
    };
    const onScroll = () => { if (!busy) { busy = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="progress" ref={ref} aria-hidden="true" />;
}
