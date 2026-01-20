import { useRef, useEffect } from "react";
import gsap from "gsap";
import AnimatedText from "./AnimatedText";

// Import images
import sinaya1 from "@/assets/collection/sinaya-1.jpg";
import sinaya2 from "@/assets/collection/sinaya-2.jpg";
import sinaya3 from "@/assets/collection/sinaya-3.jpg";
import sinaya4 from "@/assets/collection/sinaya-4.jpg";
import sinaya5 from "@/assets/collection/sinaya-5.jpg";
import sinaya6 from "@/assets/collection/sinaya-6.jpg";
import sinaya7 from "@/assets/collection/sinaya-7.jpg";
import sinaya8 from "@/assets/collection/sinaya-8.jpg";

const collectionItems = [
  { id: 1, name: "Living", image: sinaya1 },
  { id: 2, name: "Master", image: sinaya2 },
  { id: 3, name: "Dining", image: sinaya3 },
  { id: 4, name: "Kitchen", image: sinaya4 },
  { id: 5, name: "Bath", image: sinaya5 },
  { id: 6, name: "Study", image: sinaya6 },
  { id: 7, name: "Nook", image: sinaya7 },
  { id: 8, name: "Entry", image: sinaya8 },
];

const OPEN_WIDTH_PERCENT = 48;
const ANIMATION_DURATION = 0.4;

const CollectionAccordion = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAutoOpenedRef = useRef(false);
  const currentOpenIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tweensRef = useRef<gsap.core.Tween[]>([]);

  const handleMouseEnter = (index: number) => {
    currentOpenIndexRef.current = index;
    tweensRef.current.forEach(tween => tween?.kill());
    tweensRef.current = [];

    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const openWidth = containerWidth * OPEN_WIDTH_PERCENT / 100;
    const remainingWidth = containerWidth - openWidth;
    const closedWidth = remainingWidth / (collectionItems.length - 1);

    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      const targetWidth = i === index ? openWidth : closedWidth;
      const tween = gsap.to(item, {
        width: targetWidth,
        duration: ANIMATION_DURATION,
        ease: "power2.out"
      });
      tweensRef.current.push(tween);
    });

    imageRefs.current.forEach((imageContainer, i) => {
      if (!imageContainer) return;
      const targetWidth = i === index ? openWidth : 0;
      const tween = gsap.to(imageContainer, {
        width: targetWidth,
        duration: ANIMATION_DURATION,
        ease: "power2.out"
      });
      tweensRef.current.push(tween);
    });
  };

  const handleMouseLeave = () => {
    tweensRef.current.forEach(tween => tween?.kill());
    tweensRef.current = [];

    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const equalWidth = containerWidth / collectionItems.length;

    itemRefs.current.forEach(item => {
      if (!item) return;
      const tween = gsap.to(item, {
        width: equalWidth,
        duration: ANIMATION_DURATION,
        ease: "power2.out"
      });
      tweensRef.current.push(tween);
    });

    imageRefs.current.forEach(imageContainer => {
      if (!imageContainer) return;
      const tween = gsap.to(imageContainer, {
        width: 0,
        duration: ANIMATION_DURATION,
        ease: "power2.out"
      });
      tweensRef.current.push(tween);
    });
  };

  useEffect(() => {
    const setInitialWidths = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const openWidth = (containerWidth * OPEN_WIDTH_PERCENT) / 100;
      const remainingWidth = containerWidth - openWidth;
      const closedWidth = remainingWidth / (collectionItems.length - 1);

      itemRefs.current.forEach((item, i) => {
        if (item) {
          gsap.set(item, {
            width: i === 0 ? openWidth : closedWidth
          });
        }
      });

      imageRefs.current.forEach((imageContainer, i) => {
        if (imageContainer) {
          gsap.set(imageContainer, {
            width: i === 0 ? openWidth : 0
          });
        }
      });
    };

    setInitialWidths();
    window.addEventListener("resize", setInitialWidths);

    return () => {
      tweensRef.current.forEach(tween => tween?.kill());
      window.removeEventListener("resize", setInitialWidths);
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasAutoOpenedRef.current) {
          hasAutoOpenedRef.current = true;
          handleMouseEnter(0);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-screen h-screen overflow-hidden" style={{ backgroundColor: "#0b0b0b" }}>
      {/* Title */}
      <div className="pt-12 pb-8 text-center">
        <AnimatedText
          as="h2"
          style={{ color: "#e5e5e5", fontFamily: "inherit" }}
          className="text-3xl font-light tracking-widest my-0 md:text-5xl py-0"
        >
          Portfolio
        </AnimatedText>
      </div>

      {/* Accordion Container */}
      <div ref={containerRef} className="flex h-[calc(100vh-120px)] w-full">
        {collectionItems.map((item, index) => (
          <div
            key={item.id}
            ref={el => itemRefs.current[index] = el}
            className="relative h-full flex-shrink-0 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {/* Vertical Divider */}
            {index > 0 && (
              <div className="absolute left-0 top-0 h-full w-px" style={{ backgroundColor: "#3a3a3a" }} />
            )}

            {/* Image Container */}
            <div
              ref={el => imageRefs.current[index] = el}
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: 0 }}
            >
              <div className="absolute top-0 left-0 h-full" style={{ width: "48vw" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                  style={{
                    imageRendering: "auto",
                    backfaceVisibility: "hidden",
                    filter: "none"
                  }}
                />
              </div>
            </div>

            {/* Vertical Text Label */}
            <div
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
              style={{
                writingMode: "vertical-rl",
                transform: "translateX(-50%) rotate(180deg)"
              }}
            >
              <span style={{ color: "#e5e5e5" }} className="font-light tracking-[0.2em] uppercase text-2xl">
                {item.name}
              </span>
            </div>
          </div>
        ))}

        {/* Right border */}
        <div className="absolute right-0 top-0 h-full w-px" style={{ backgroundColor: "#3a3a3a" }} />
      </div>
    </section>
  );
};

export default CollectionAccordion;
