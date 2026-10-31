import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { reviews } from "../data/misc.js";

export default function Reviews() {
  return (
    <section>
      <div className="wrap">
        <SectionTitle title="آراء عملائنا" />
        <div className="grid">
          {reviews.map((r, i) => (
            <Reveal key={r.who} className="card rev" delay={i * 0.1}>
              "{r.text}"
              <b>⭐⭐⭐⭐⭐ {r.who}</b>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
