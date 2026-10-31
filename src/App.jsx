import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Stats from "./components/Stats.jsx";
import Services from "./components/Services.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import StickyCTA from "./components/StickyCTA.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import { trackContactClicks } from "./lib/track.js";
import { site } from "./config/site.js";

// الأقسام أسفل الشاشة تُحمَّل منفصلة لتسريع أول عرض، ثم تُحمَّل مسبقاً وقت الخمول
const loaders = {
  Steps: () => import("./components/Steps.jsx"),
  WhyUs: () => import("./components/WhyUs.jsx"),
  Areas: () => import("./components/Areas.jsx"),
  Reviews: () => import("./components/Reviews.jsx"),
  FAQ: () => import("./components/FAQ.jsx"),
  Contact: () => import("./components/Contact.jsx"),
  Footer: () => import("./components/Footer.jsx"),
};
const Steps = lazy(loaders.Steps), WhyUs = lazy(loaders.WhyUs), Areas = lazy(loaders.Areas);
const Reviews = lazy(loaders.Reviews), FAQ = lazy(loaders.FAQ), Contact = lazy(loaders.Contact), Footer = lazy(loaders.Footer);

export default function App() {
  useEffect(() => trackContactClicks(), []);
  useEffect(() => {
    const run = () => Object.values(loaders).forEach((l) => l());
    const id = "requestIdleCallback" in window ? requestIdleCallback(run) : setTimeout(run, 500);
    return () => ("cancelIdleCallback" in window ? cancelIdleCallback(id) : clearTimeout(id));
  }, []);
  return (
    <>
      <a className="skip" href="#services">تخطي إلى المحتوى</a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Suspense fallback={null}>
          <Steps /><WhyUs /><Areas />{site.showReviews && <Reviews />}<FAQ /><Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
      <WhatsAppButton />
      <StickyCTA />
    </>
  );
}
