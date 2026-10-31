import Card from "./Card.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { steps } from "../data/steps.js";

export default function Steps() {
  return (
    <section id="how" className="why">
      <div className="wrap">
        <SectionTitle title="كيف نعمل؟" subtitle="أربع خطوات بسيطة وبيتك يلمع" />
        <div className="grid steps">
          {steps.map((s, i) => <Card key={s.title} {...s} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  );
}
