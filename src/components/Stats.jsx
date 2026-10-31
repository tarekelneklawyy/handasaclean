import useCountUp from "../hooks/useCountUp.js";
import { services } from "../data/services.js";
import { areaGroups } from "../data/misc.js";

// أرقام حقيقية محسوبة من بيانات الموقع نفسها
const stats = [
  { value: services.length, label: "خدمات متخصصة" },
  { value: areaGroups.reduce((n, g) => n + g.items.length, 0), label: "حيًا ومدينة نخدمها" },
  { value: 7, label: "أيام عمل أسبوعيًا" },
];

function Stat({ value, label }) {
  const [ref, n] = useCountUp(value);
  return (
    <div>
      <b ref={ref}>{n.toLocaleString("en")}</b>
      {label}
    </div>
  );
}

export default function Stats() {
  return (
    <div className="stats">
      <div className="wrap">
        {stats.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </div>
  );
}
