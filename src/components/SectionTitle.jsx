import Reveal from "./Reveal.jsx";

export default function SectionTitle({ id, title, subtitle }) {
  return (
    <Reveal className="t">
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
