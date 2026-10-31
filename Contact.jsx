import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { site, telHref, waLink } from "../config/site.js";
import { contactServices } from "../data/misc.js";
import { clean, isSaudiMobile, normalizePhone } from "../lib/contact.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: contactServices[0], notes: "", website: "" });
  const [errors, setErrors] = useState({});
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (form.website) return; // حقل مخفي للروبوتات
    const name = clean(form.name, 60);
    const phone = normalizePhone(form.phone);
    const errs = {};
    if (name.length < 2) errs.name = "اكتب اسمك من فضلك";
    if (!isSaudiMobile(phone)) errs.phone = "اكتب رقم جوال سعودي صحيح، مثال: 05xxxxxxxx";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const msg = `طلب خدمة من الموقع\nالاسم: ${name}\nالجوال: ${phone}\nالخدمة: ${form.service}\nتفاصيل: ${clean(form.notes, 300)}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="why" aria-labelledby="contact-t">
      <div className="wrap ct">
        <Reveal>
          <div className="t" style={{ textAlign: "right" }}><h2 id="contact-t" style={{ display: "inline-block" }}>احجز خدمتك الآن</h2></div>
          <p style={{ color: "var(--mu)", marginBottom: 16 }}>املأ النموذج وسيتواصل معك فريقنا خلال دقائق عبر واتساب.</p>
          <p>📍 {site.address}</p>
          <p>📞 <a href={telHref}><b dir="ltr">{site.phoneDisplay}</b></a></p>
          <p>🕘 {site.hours}</p>
        </Reveal>
        <Reveal as="form" onSubmit={submit} noValidate>
          <label className="hp" aria-hidden="true">لا تملأ هذا الحقل<input tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} /></label>
          <input aria-label="الاسم" placeholder="الاسم" autoComplete="name" maxLength={60} value={form.name} onChange={set("name")} aria-invalid={!!errors.name} />
          {errors.name && <div className="err" role="alert">{errors.name}</div>}
          <input aria-label="رقم الجوال" placeholder="رقم الجوال" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} value={form.phone} onChange={set("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <div className="err" role="alert">{errors.phone}</div>}
          <select aria-label="الخدمة" value={form.service} onChange={set("service")}>
            {contactServices.map((s) => <option key={s}>{s}</option>)}
          </select>
          <textarea aria-label="تفاصيل إضافية" rows="3" maxLength={300} placeholder="تفاصيل إضافية (الحي، المساحة...)" value={form.notes} onChange={set("notes")} />
          <button className="btn wa-btn" style={{ border: 0, font: "inherit", cursor: "pointer" }}>💬 أرسل الطلب عبر واتساب</button>
        </Reveal>
      </div>
    </section>
  );
}
