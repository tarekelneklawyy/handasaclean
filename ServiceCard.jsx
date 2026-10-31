import Reveal from "./Reveal.jsx";
import ServiceArt from "./ServiceArt.jsx";
import { telHref, waLink } from "../config/site.js";

export default function ServiceCard({ service, delay = 0 }) {
  const { id, title, text, steps, image } = service;
  return (
    <Reveal as="article" className="card svc" delay={delay}>
      {image ? (
        <img className="svc-art" src={image} alt={title} width="500" height="300" loading="lazy" decoding="async" />
      ) : (
        <ServiceArt id={id} label={title} />
      )}
      <div className="svc-body">
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="svc-h">نظام العمل:</div>
        <ol className="svc-steps">
          {steps.map((s) => <li key={s}>{s}</li>)}
        </ol>
        <div className="svc-cta">
          <a className="btn wa-btn" href={waLink(`السلام عليكم، أريد طلب خدمة: ${title} بالرياض`)} target="_blank" rel="noopener noreferrer">اطلب عبر واتساب</a>
          <a className="btn o" href={telHref}>اتصل</a>
        </div>
      </div>
    </Reveal>
  );
}
