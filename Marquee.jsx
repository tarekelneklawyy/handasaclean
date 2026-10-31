import { marqueeItems } from "../data/misc.js";

export default function Marquee() {
  const line = [...marqueeItems, ...marqueeItems].map((t) => `✨ ${t}`).join(" ");
  return <div className="mq"><div>{line}</div></div>;
}
