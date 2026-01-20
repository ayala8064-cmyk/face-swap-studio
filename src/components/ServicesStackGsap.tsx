import React, { useEffect, useRef, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
import sinaya1 from "@/assets/collection/sinaya-1.jpg";
import sinaya2 from "@/assets/collection/sinaya-2.jpg";
import sinaya3 from "@/assets/collection/sinaya-3.jpg";
import sinaya4 from "@/assets/collection/sinaya-4.jpg";
import sinaya5 from "@/assets/collection/sinaya-5.jpg";
import sinaya6 from "@/assets/collection/sinaya-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "residential",
    title: "Residential Design",
    description:
      "Transform your home into a sanctuary. Each residential project is thoughtfully designed to reflect your lifestyle, creating spaces that feel both elegant and authentically yours.",
    image: sinaya1,
    bgColor: "#323232",
  },
  {
    id: "renovation",
    title: "Full Renovations",
    description:
      "Breathe new life into existing spaces. From structural changes to finishing touches, every renovation is handled with care, preserving what matters while elevating the rest.",
    image: sinaya2,
    bgColor: "#414141",
  },
  {
    id: "styling",
    title: "Interior Styling",
    description:
      "Perfect your space with curated furniture, art, and accessories. Every element is selected to enhance your room's character and create a cohesive, inviting atmosphere.",
    image: sinaya3,
    bgColor: "#494949",
  },
  {
    id: "custom",
    title: "Custom Furniture",
    description:
      "Commission bespoke pieces that fit perfectly. From built-in cabinetry to statement furniture, each custom creation is crafted to your exact specifications.",
    image: sinaya4,
    bgColor: "#565656",
  },
  {
    id: "lighting",
    title: "Lighting Design",
    description:
      "Set the perfect mood with expertly planned lighting. From ambient to accent, every fixture is chosen to enhance both function and beauty throughout your home.",
    image: sinaya5,
    bgColor: "#686868",
  },
  {
    id: "consultations",
    title: "Consultations",
    description:
      "A moment to explore, discover, and decide. With expert guidance, every choice—layout, palette, or material—is made with confidence, ensuring the final result reflects the best version of your home.",
    image: sinaya6,
    bgColor: "#767575",
  },
];

const ServicesStackGsap = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const bannerHeight = 520; // fixed
  const overlap = bannerHeight / 8; // visual spacing only
  const stackHeight = useMemo(() => bannerHeight + (services.length - 1) * overlap, [bannerHeight, overlap]);

  // Avoid using window.* during render (SSR-safe)
  const [vh, setVh] = useState(0);
  useEffect(() => {
    const update = () => setVh(window.innerHeight || 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Real scroll height: enough room for each incoming card to consume a viewport
  const scrollHeight = useMemo(() => {
    const safeVh = Math.max(1, vh);
    return stackHeight + (services.length - 1) * safeVh;
  }, [stackHeight, vh]);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (!vh) return; // wait for viewport height

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      if (process.env.NODE_ENV !== "production") {
        console.assert(cards.length === services.length, "cardsRef should contain all cards");
      }

      // reset transforms
      // IMPORTANT: hide all cards except the first so they don't all appear at once
      gsap.set(cards, (i) => ({ y: i === 0 ? 0 : vh }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(services.length - 1) * vh}`,
          // Increase scrub to smooth motion tied to scroll
          scrub: 2,
          // IMPORTANT: no pin here – we rely on CSS sticky so the stack scrolls away naturally
          pin: false,
          invalidateOnRefresh: true,
        },
      });

      // Each incoming card consumes one segment and stays
      cards.forEach((card, i) => {
        if (i === 0) return;
        // Soften entry: start closer and map 1:1 to scroll
        tl.fromTo(card, { y: vh }, { y: 0, ease: "none", duration: 1 }, i - 1);
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [vh]);

  return (
    <section ref={sectionRef} className="relative bg-[#282828]">
      {/* This wrapper provides scroll length for the pinned animation */}
      <div style={{ minHeight: scrollHeight }}>
        {/* Sticky viewport for the stack */}
        <div className="sticky top-0">
          <div className="relative w-full" style={{ height: stackHeight }}>
            {services.map((s, i) => (
              <div
                key={s.id}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="absolute left-0 right-0"
                style={{
                  height: bannerHeight,
                  top: i * overlap,
                  backgroundColor: s.bgColor,
                  zIndex: i + 1,
                }}
              >
                <div className="h-full px-12 flex items-center">
                  <div className="flex gap-16 max-w-[1200px] mx-auto w-full">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-[280px] h-[350px] object-cover rounded-lg"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col gap-4">
                      <AnimatedText as="h3" style={{ fontSize: 48, color: "#C8A89C" }}>
                        {s.title}
                      </AnimatedText>
                      <AnimatedText as="p" style={{ maxWidth: 420, color: "rgba(200,168,156,.7)" }} delay={0.15}>
                        {s.description}
                      </AnimatedText>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesStackGsap;
