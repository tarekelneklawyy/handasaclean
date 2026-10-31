import { useState } from "react";
import logo from "../assets/logo.png";
import { site } from "../config/site.js";
import { navLinks } from "../data/misc.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav aria-label="القائمة الرئيسية">
      <div className="wrap">
        <a className="b" href="#top">
          <img src={logo} alt="شعار شركة الهندسة" width="44" height="44" />
          <span>{site.name}</span>
        </a>
        <ul id="menu" className={open ? "open" : ""}>
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
          ))}
        </ul>
        <a className="btn cta-nav" href="#contact">احجز الآن</a>
        <button className="menu-btn" aria-label="القائمة" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
