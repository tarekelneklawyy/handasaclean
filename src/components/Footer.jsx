import { site } from "../config/site.js";

export default function Footer() {
  return <footer>© {new Date().getFullYear()} {site.fullName} بالرياض — جميع الحقوق محفوظة</footer>;
}
