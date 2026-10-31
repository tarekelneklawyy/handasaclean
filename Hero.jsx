import { useMemo } from "react";
import logo from "../assets/logo.png";
import { telHref, waLink } from "../config/site.js";

// فقاعات ونجوم متحركة بمواضع عشوائية
function Effects() {
  const items = useMemo(() => {
    const bubbles = Array.from({ length: 14 }, () => {
      const size = 10 + Math.random() * 40;
      return { left: `${Math.random() * 100}%`, width: size, height: size, animationDuration: `${8 + Math.random() * 10}s`, animationDelay: `-${Math.random() * 12}s` };
    });
    const sparks = Array.from({ length: 10 }, () => ({ left: `${Math.random() * 100}%`, top: `${Math.random() * 80}%`, fontSize: 14 + Math.random() * 20, animationDelay: `${Math.random() * 3}s` }));
    return { bubbles, sparks };
  }, []);
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
      {items.bubbles.map((s, i) => <span key={i} className="bub" style={s} />)}
      {items.sparks.map((s, i) => <span key={i} className="sp" style={s}>✦</span>)}
    </div>
  );
}

export default function Hero() {
  // ميلان ثلاثي الأبعاد للوجو مع حركة الماوس (بدون إعادة رسم React)
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 14}deg`);
    e.currentTarget.style.setProperty("--rx", `${-((e.clientY - r.top) / r.height - 0.5) * 12}deg`);
  };
  const leave = (e) => { e.currentTarget.style.setProperty("--rx", "0deg"); e.currentTarget.style.setProperty("--ry", "0deg"); };
  return (
    <header className="hero" id="top">
      <Effects />
      <div className="wrap">
        <div>
          <h1 className="in" style={{ "--d": 1 }}>نظافة تليق ببيتك<br />مع <span>شركة الهندسة</span> بالرياض</h1>
          <p className="in" style={{ "--d": 2 }}>تنظيف الفلل والمجالس والكنب والسجاد والمكيفات بفريق محترف ومعدات حديثة ومواد آمنة على أسرتك.</p>
          <div className="cta in" style={{ "--d": 3 }}>
            <a className="btn wa-btn" href={waLink("السلام عليكم، أريد عرض سعر لخدمة نظافة بالرياض")} target="_blank" rel="noopener noreferrer">💬 اطلب عبر واتساب</a>
            <a className="btn o" href={telHref}>📞 اتصل الآن</a>
          </div>
          <ul className="trust in" style={{ "--d": 4 }}>
            <li>ضمان على الشغل</li><li>فنيون مدربون</li><li>مواد آمنة</li><li>رد سريع</li>
          </ul>
        </div>
        <div className="logo-box" onMouseMove={move} onMouseLeave={leave}>
          <div className="ring" /><div className="ring" />
          <div className="tilt">
            <img src={logo} alt="شركة الهندسة لخدمات النظافة المنزلية" width="380" height="380" fetchPriority="high" />
          </div>
        </div>
      </div>
      <svg className="wave" viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path fill="#f5f9fd" d="M0 45c120 40 240 40 360 0s240-40 360 0 240 40 360 0 240-40 360 0v45H0z" />
      </svg>
    </header>
  );
}
