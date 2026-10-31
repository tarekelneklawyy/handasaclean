// رسومات خدمات خفيفة (SVG). يمكن استبدالها بصور حقيقية عبر الحقل image في data/services.js
const N = "#0a2f5c", B = "#3db4f2", G = "#2e9a45";
const Spark = ({ x, y, s = 1 }) => (
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0-14C2-5 5-2 14 0 5 2 2 5 0 14-2 5-5 2-14 0-5-2-2-5 0-14z" fill="#fff" />
);
const scenes = {
  villa: (<><rect y="170" width="400" height="70" fill="#8fd18f" /><circle cx="340" cy="150" r="30" fill={G} /><rect x="334" y="170" width="12" height="30" fill="#7a5a3a" /><polygon points="200,45 310,115 90,115" fill={N} /><rect x="105" y="115" width="190" height="85" fill="#fff" /><rect x="185" y="145" width="30" height="55" fill={B} /><rect x="125" y="135" width="38" height="30" fill={B} /><rect x="237" y="135" width="38" height="30" fill={B} /><Spark x={70} y={70} /><Spark x={335} y={60} s={.7} /></>),
  sofa: (<><rect y="175" width="400" height="65" fill="#e9dcc8" /><rect x="95" y="85" width="210" height="60" rx="22" fill={N} /><rect x="75" y="115" width="250" height="60" rx="18" fill={B} /><rect x="65" y="105" width="38" height="80" rx="16" fill={N} /><rect x="297" y="105" width="38" height="80" rx="16" fill={N} /><rect x="115" y="120" width="80" height="35" rx="10" fill="#fff" opacity=".35" /><rect x="205" y="120" width="80" height="35" rx="10" fill="#fff" opacity=".35" /><circle cx="340" cy="70" r="9" fill="#fff" opacity=".7" /><circle cx="60" cy="60" r="6" fill="#fff" opacity=".7" /><Spark x={90} y={60} /><Spark x={320} y={110} s={.7} /></>),
  carpet: (<><rect y="150" width="400" height="90" fill="#e9dcc8" /><polygon points="80,205 320,205 360,145 120,145" fill={N} /><polygon points="110,195 300,195 330,155 135,155" fill={B} /><polygon points="150,185 275,185 295,165 165,165" fill="#fff" opacity=".6" />{[0,1,2,3,4,5,6,7].map(i=><line key={i} x1={88+i*33} y1="205" x2={84+i*33} y2="218" stroke={N} strokeWidth="3" />)}<Spark x={90} y={90} /><Spark x={310} y={80} s={.8} /><Spark x={200} y={60} s={.6} /></>),
  ac: (<><rect y="170" width="400" height="70" fill="#eef4fa" /><rect x="70" y="40" width="260" height="75" rx="16" fill="#fff" /><rect x="85" y="95" width="230" height="8" rx="4" fill={B} /><circle cx="105" cy="65" r="5" fill={G} />{[0,1,2].map(i=><path key={i} d={`M110 ${130+i*22} q45 -14 90 0 t90 0`} stroke={B} strokeWidth="5" fill="none" strokeLinecap="round" />)}<Spark x={50} y={90} s={.8} /><Spark x={350} y={150} s={.9} /></>),
  kitchen: (<><rect y="165" width="400" height="75" fill="#d9e4ee" /><rect x="110" y="110" width="180" height="60" rx="10" fill={N} /><rect x="85" y="125" width="30" height="10" rx="5" fill={N} /><rect x="285" y="125" width="30" height="10" rx="5" fill={N} /><rect x="105" y="100" width="190" height="14" rx="7" fill={B} />{[0,1,2].map(i=><path key={i} d={`M${160+i*40} 90 q-12 -18 0 -34 q12 -16 0 -30`} stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".8" />)}<circle cx="60" cy="130" r="12" fill="#fff" opacity=".7" /><circle cx="345" cy="110" r="8" fill="#fff" opacity=".7" /><Spark x={335} y={60} /></>),
  tank: (<><rect y="185" width="400" height="55" fill="#cfe8fb" /><ellipse cx="200" cy="65" rx="70" ry="16" fill="#9fb4c9" /><rect x="130" y="65" width="140" height="120" fill="#c4d3e2" /><ellipse cx="200" cy="185" rx="70" ry="16" fill="#c4d3e2" /><rect x="130" y="120" width="140" height="65" fill={B} opacity=".85" /><ellipse cx="200" cy="120" rx="70" ry="14" fill="#7cc9f5" /><path d="M330 90q-10 18 0 28 10-10 0-28z" fill={B} /><path d="M70 120q-8 14 0 22 8-8 0-22z" fill={B} /><Spark x={85} y={60} /><Spark x={320} y={160} s={.7} /></>),
};
const bg = { villa: "#cfeaff", sofa: "#e7f3ff", carpet: "#dcefff", ac: "#d4ecfb", kitchen: "#e2f0fb", tank: "#d9f0ff" };

export default function ServiceArt({ id, label }) {
  return (
    <svg className="svc-art" viewBox="0 0 400 240" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" fill={bg[id]} />
      {scenes[id]}
    </svg>
  );
}
