// تنظيف وفحص مدخلات النموذج قبل إرسالها
const AR = "٠١٢٣٤٥٦٧٨٩";
export const normalizePhone = (raw) =>
  raw.replace(/[٠-٩]/g, (d) => AR.indexOf(d)).replace(/[\s\-()]/g, "");
export const isSaudiMobile = (v) => /^(?:\+?966|00966|0)?5\d{8}$/.test(v);
export const clean = (s, max) => s.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
