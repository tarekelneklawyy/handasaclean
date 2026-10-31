import useReveal from "../hooks/useReveal.js";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, style, children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}s`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
