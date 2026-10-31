// يرسل حدث عند الضغط على اتصال أو واتساب (يعمل لو أضفت Google Analytics/GTM لاحقاً)
export function trackContactClicks() {
  const onClick = (e) => {
    const a = e.target.closest?.("a[href]");
    if (!a) return;
    const href = a.getAttribute("href");
    const method = href.startsWith("tel:") ? "call" : href.includes("wa.me") ? "whatsapp" : null;
    if (!method) return;
    window.dataLayer?.push({ event: "contact_click", method });
    window.gtag?.("event", "contact_click", { method });
  };
  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
