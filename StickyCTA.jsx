import { telHref, waLink } from "../config/site.js";

// شريط ثابت أسفل الموبايل: اتصال وواتساب دائماً في متناول اليد
export default function StickyCTA() {
  return (
    <div className="sticky-cta">
      <a className="btn o" href={telHref}>📞 اتصل الآن</a>
      <a className="btn wa-btn" href={waLink("السلام عليكم، أريد الاستفسار عن خدمات النظافة")} target="_blank" rel="noopener noreferrer">💬 واتساب</a>
    </div>
  );
}
