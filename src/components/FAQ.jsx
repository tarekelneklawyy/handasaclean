import SectionTitle from "./SectionTitle.jsx";
import { faq } from "../data/faq.js";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-t">
      <div className="wrap">
        <SectionTitle id="faq-t" title="أسئلة شائعة" />
        <div className="faq">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </section>
  );
}
