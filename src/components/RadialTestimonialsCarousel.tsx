import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import sinaya1 from "@/assets/collection/sinaya-1.jpg";
import sinaya2 from "@/assets/collection/sinaya-2.jpg";
import sinaya3 from "@/assets/collection/sinaya-3.jpg";
import sinaya4 from "@/assets/collection/sinaya-4.jpg";
import arrowLeft from "@/assets/arrow-left.svg";
import arrowRight from "@/assets/arrow-right.svg";

type Item = { id: string; src: string };

type Testimonial = {
  title: string;
  body: string;
  author: string;
};

const items: Item[] = [
  { id: "img1", src: sinaya1 },
  { id: "img2", src: sinaya2 },
  { id: "img3", src: sinaya3 },
  { id: "img4", src: sinaya4 },
];

const testimonials: Testimonial[] = [
  {
    title: "Beyond Expectations",
    body: "From the initial consultation to the final reveal, the experience felt thoughtful and refined. Every detail was considered.",
    author: "— Rachel & David Cohen",
  },
  {
    title: "Seamless Process",
    body: "Everything was clear and easy from start to finish. Communication was excellent and the result was exactly what we envisioned.",
    author: "— The Levi Family",
  },
  {
    title: "Beautiful Craftsmanship",
    body: "The quality is outstanding. Every room feels premium, looks perfect, and the finishing touches are on another level.",
    author: "— Sarah & Michael Adler",
  },
  {
    title: "Highly Recommended",
    body: "A calm, professional experience with stunning results. We would absolutely work together again.",
    author: "— Jonathan & Emma Stein",
  },
];

const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function RadialTestimonialsCarousel() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const shiftRef = useRef(0);

  const [centerIndex, setCenterIndex] = useState(0);
  const [stageSize, setStageSize] = useState({ w: 0, h: 0 });
  const textRef = useRef<HTMLDivElement | null>(null);

  const geomRef = useRef({ RX: 0, RY: 0, centerY: 0, off: 0 });

  // ---------- Geometry & poses ----------

  const getPose = (slot: number) => {
    const { RX, RY, centerY, off } = geomRef.current;

    // slots: 0=LEFT, 1=CENTER, 2=RIGHT, 3=HIDDEN(recycler)
    if (slot === 0) return { x: -RX, y: centerY, scale: 0.7, rotate: 10, zIndex: 2 };
    if (slot === 1) return { x: 0, y: centerY + RY, scale: 1, rotate: -10, zIndex: 10 };
    if (slot === 2) return { x: RX, y: centerY, scale: 0.7, rotate: -10, zIndex: 2 };
    return { x: RX + off, y: centerY, scale: 0.7, rotate: -10, zIndex: 0 };
  };

  const setPositions = () => {
    cardsRef.current.forEach((el, i) => {
      const slot = mod(i + shiftRef.current, items.length);
      gsap.set(el, getPose(slot));
    });
  };

  // ---------- Animation step ----------

  const step = (dir: 1 | -1) => {
    const prev = shiftRef.current;
    const next = prev + dir;

    gsap.killTweensOf(cardsRef.current);

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.inOut" } });

    cardsRef.current.forEach((el, i) => {
      const fromSlot = mod(i + prev, items.length);
      const toSlot = mod(i + next, items.length);

      const { RX, centerY, off } = geomRef.current;

      // forward: RIGHT -> hidden
      if (dir === 1 && fromSlot === 2 && toSlot === 3) {
        tl.to(el, { x: RX + off, y: centerY, scale: 0.7, rotate: -10, zIndex: 0 }, 0);
        return;
      }

      // forward: hidden -> LEFT (teleport offscreen then animate to left pose)
      if (dir === 1 && fromSlot === 3 && toSlot === 0) {
        tl.set(el, { x: -RX - off, y: centerY, scale: 0.7, rotate: 10, zIndex: 0 }, 0);
        tl.to(el, getPose(0), 0);
        return;
      }

      // backward: LEFT -> hidden
      if (dir === -1 && fromSlot === 0 && toSlot === 3) {
        tl.to(el, { x: -RX - off, y: centerY, scale: 0.7, rotate: 10, zIndex: 0 }, 0);
        return;
      }

      // backward: hidden -> RIGHT
      if (dir === -1 && fromSlot === 3 && toSlot === 2) {
        tl.set(el, { x: RX + off, y: centerY, scale: 0.7, rotate: -10, zIndex: 0 }, 0);
        tl.to(el, getPose(2), 0);
        return;
      }

      // normal movement
      tl.to(el, getPose(toSlot), 0);
    });

    shiftRef.current = next;
    setCenterIndex(mod(1 - next, items.length));
  };

  // ---------- Text fade ----------

  useLayoutEffect(() => {
    if (!textRef.current) return;

    // Kill any in-flight text tween for clean fades
    gsap.killTweensOf(textRef.current);

    gsap.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
  }, [centerIndex]);

  // ---------- Init & resize ----------

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const compute = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      setStageSize({ w, h });

      // RX spans most of the stage width; RY is ~1:5 of RX
      const RX = Math.round(w / 2);
      const RY = Math.round(RX / 5);

      geomRef.current = {
        RX,
        RY,
        centerY: Math.round(h * 0.05),
        off: Math.round(w * 1.1),
      };

      setPositions();
      setCenterIndex(mod(1 - shiftRef.current, items.length));
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = testimonials[centerIndex] ?? testimonials[0];

  // Ellipse path (pure render-time calc)
  const showAxis = stageSize.w > 0 && stageSize.h > 0;
  const { RX, RY, centerY } = geomRef.current;
  const cx = stageSize.w / 2;
  const cy = stageSize.h / 2 + centerY;
  const x1 = cx - RX;
  const x2 = cx + RX;
  const ySide = cy;
  const yCenter = cy + RY;
  const d = `M ${x1} ${ySide} Q ${cx} ${yCenter} ${x2} ${ySide}`;

  return (
    <section className="w-screen h-screen relative overflow-hidden bg-[#F2EEEA]">
      <div ref={stageRef} className="absolute inset-0">
        {/* Big section title */}
        <h2
          className="absolute left-6 md:left-16 top-[18%] md:top-[20%] font-display text-[#282828] pointer-events-none"
          style={{ fontSize: "64px", lineHeight: 1 }}
        >
          <span className="hidden md:inline" style={{ fontSize: "170px" }}>
            Reviews
          </span>
          <span className="md:hidden">Reviews</span>
        </h2>

        {/* Ellipse axis (behind images) */}
        {showAxis && (
          <svg
            className="absolute inset-0 pointer-events-none"
            viewBox={`0 0 ${stageSize.w} ${stageSize.h}`}
            preserveAspectRatio="none"
          >
            <path d={d} fill="none" stroke="#C9C9C9" strokeWidth={2} opacity={0.55} />
            <path d={d} fill="none" stroke="#C9C9C9" strokeWidth={6} opacity={0.08} />
          </svg>
        )}

        {/* Images */}
        <div className="absolute inset-0 flex items-center justify-center">
          {items.map((item, i) => (
            <div key={item.id} ref={(el) => (cardsRef.current[i] = el!)} className="absolute">
              <div className="w-[72vw] h-[48vh] md:w-[20vw] md:h-[50vh] rounded-2xl overflow-hidden bg-gradient-to-br from-[#f2f2f2] to-[#d9d9d9] flex items-center justify-center">
                <img src={item.src} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial text – one element, responsive positioning */}
        <div
          ref={textRef}
          className="absolute left-1/2 -translate-x-1/2 w-[90vw] md:w-auto md:max-w-[420px] text-center md:text-left
                     bottom-[6%] md:bottom-auto md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:ml-[12vw]"
        >
          <h3 className="text-[18px] md:text-[22px] text-[#282828] font-display font-normal">{t.title}</h3>
          <p className="mt-3 text-[13px] md:text-[14px] leading-[1.8] text-[#5a5a5a]">{t.body}</p>
          <p className="mt-4 text-[14px] md:text-[16px] text-[#282828]">{t.author}</p>
        </div>

        {/* Arrows – aligned with title (desktop + mobile) */}
        <div className="absolute left-6 md:left-16 top-[32%] md:top-[38%] flex items-center gap-3 md:gap-4 z-50">
          <button
            onClick={() => step(-1)}
            aria-label="Previous review"
            className="w-[48px] h-[48px] md:w-[67px] md:h-[67px] flex items-center justify-center rounded-full border border-[#C9C9C9] hover:opacity-70 transition-opacity"
          >
            <img src={arrowLeft} alt="" className="w-[67px] h-[67px]" />
          </button>

          <button
            onClick={() => step(1)}
            aria-label="Next review"
            className="w-[48px] h-[48px] md:w-[67px] md:h-[67px] flex items-center justify-center rounded-full border border-[#C9C9C9] hover:opacity-70 transition-opacity"
          >
            <img src={arrowRight} alt="" className="w-[67px] h-[67px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
