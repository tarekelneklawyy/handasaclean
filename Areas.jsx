import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { areaGroups } from "../data/misc.js";
import { waLink } from "../config/site.js";

export default function Areas() {
  return (
    <section id="areas" className="why" aria-labelledby="areas-t">
      <div className="wrap">
        <SectionTitle id="areas-t" title="نخدم جميع أنحاء الرياض وما حولها" subtitle="داخل الرياض ومدن وقرى الشمال" />
        {areaGroups.map((g) => (
          <div key={g.title} className="area-group">
            <h3>{g.title}</h3>
            <Reveal className="areas">
              {g.items.map((a, i) => <span key={a} style={{ "--i": i }}>{a}</span>)}
            </Reveal>
          </div>
        ))}
        <p className="area-note">منطقتك غير مذكورة؟ <a href={waLink("السلام عليكم، هل تخدمون منطقتي؟")} target="_blank" rel="noopener noreferrer">اسألنا على واتساب</a></p>
      </div>
    </section>
  );
}
