import ServiceCard from "./ServiceCard.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-t">
      <div className="wrap">
        <SectionTitle id="services-t" title="خدماتنا" subtitle="اختر الخدمة وشاهد خطوات التنفيذ، واطلبها بضغطة واحدة" />
        <div className="grid svc-grid">
          {services.map((s, i) => <ServiceCard key={s.id} service={s} delay={(i % 3) * 0.1} />)}
        </div>
      </div>
    </section>
  );
}
