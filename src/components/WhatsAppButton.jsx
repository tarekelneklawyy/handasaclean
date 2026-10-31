import { waLink } from "../config/site.js";

export default function WhatsAppButton() {
  return <a className="wa" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب">💬</a>;
}
