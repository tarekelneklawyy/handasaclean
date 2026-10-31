import Reveal from "./Reveal.jsx";

export default function Card({ icon, title, text, delay = 0, className = "" }) {
  return (
    <Reveal className={`card ${className}`} delay={delay}>
      <i>{icon}</i>
      <h3>{title}</h3>
      <p>{text}</p>
    </Reveal>
  );
}
