// عدّل بيانات الشركة من هنا
export const site = {
  name: "شركة الهندسة",
  fullName: "شركة الهندسة لخدمات النظافة المنزلية",
  whatsapp: "966564794015",         // رقم واتساب بالصيغة الدولية بدون +
  phone: "966564794015",            // رقم الاتصال بالصيغة الدولية بدون +
  phoneDisplay: "+966 56 479 4015", // الرقم الظاهر في الموقع
  address: "الرياض، المملكة العربية السعودية",
  showReviews: false, // فعّلها (true) فقط بعد وضع آراء عملاء حقيقيين في data/misc.js
  hours: "نعمل يومياً من 8 ص إلى 11 م",
};

export const telHref = `tel:+${site.phone}`;
export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
