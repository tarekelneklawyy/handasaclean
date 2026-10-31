import Card from "./Card.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { why } from "../data/why.js";

export default function WhyUs() {
  return (
    <section id="why">
      <div className="wrap">
        <SectionTitle title="لماذا شركة الهندسة؟" />
        <div className="grid">
          {why.map((s, i) => <Card key={s.title} {...s} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  );
}
