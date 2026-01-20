import { useEffect, useRef, useState } from "react";
import AnimatedText from "./AnimatedText";

import naturalImage from "@/assets/natural-section-image.webp";
import naturalIcon from "@/assets/natural-icon.webp";
import movementImage from "@/assets/movement-section-image.webp";
import movementIcon from "@/assets/movement-icon.webp";
import qualityImage from "@/assets/quality-section-image.webp";
import qualityIcon from "@/assets/quality-icon.webp";

const sections = [
  {
    id: "natural",
    icon: naturalIcon,
    iconAlt: "Diamond icon",
    headline: ["Exceptionally", "natural-looking spaces"],
    image: naturalImage,
    imageAlt: "Beautiful bedroom interior",
    cardText: "Natural",
    description: "Whether modern or classic, every room is crafted to blend seamlessly with your lifestyle. Each detail is customized to suit your taste, personality, and daily rhythm—so it never looks staged, only natural.",
  },
  {
    id: "movement",
    icon: movementIcon,
    iconAlt: "Movement icon",
    headline: ["Natural flow that", "moves like life itself"],
    image: movementImage,
    imageAlt: "Flowing curtains in living space",
    cardText: "Movement",
    description: "Open or intimate, grand or cozy, every space is designed with balance and flow in mind. The result is a home that responds naturally to light, seasons, and daily living.",
  },
  {
    id: "quality",
    icon: qualityIcon,
    iconAlt: "Quality icon",
    headline: ["Exceptional materials,", "timeless and enduring"],
    image: qualityImage,
    imageAlt: "Premium marble finishes",
    cardText: "Quality",
    description: "We source only the finest materials, selected for their beauty, durability, and character. Known for aging beautifully over time, each element is chosen to be lived with and loved for years.",
  },
];

const FeatureSectionsScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollableDistance = containerHeight - viewportHeight;
      const scrolled = -containerTop;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalSections = sections.length;
  const sectionProgress = scrollProgress * (totalSections - 1);
  const currentSectionIndex = Math.min(
    Math.floor(sectionProgress),
    totalSections - 2
  );

  const getTextOpacity = (index: number) => {
    const transitionSpeed = 0.4;

    if (index === 0) {
      if (sectionProgress <= 0) return 1;
      if (sectionProgress <= transitionSpeed) return 1 - sectionProgress / transitionSpeed;
      return 0;
    } else if (index === totalSections - 1) {
      const fadeStart = totalSections - 2 + (1 - transitionSpeed);
      if (sectionProgress >= totalSections - 1) return 1;
      if (sectionProgress >= fadeStart)
        return (sectionProgress - fadeStart) / transitionSpeed;
      return 0;
    } else {
      const fadeInStart = index - transitionSpeed;
      const fadeInEnd = index;
      const fadeOutStart = index;
      const fadeOutEnd = index + transitionSpeed;

      if (sectionProgress < fadeInStart) return 0;
      if (sectionProgress < fadeInEnd)
        return (sectionProgress - fadeInStart) / transitionSpeed;
      if (sectionProgress < fadeOutStart) return 1;
      if (sectionProgress < fadeOutEnd)
        return 1 - (sectionProgress - fadeOutStart) / transitionSpeed;
      return 0;
    }
  };

  const getTextOffset = (index: number) => {
    const opacity = getTextOpacity(index);
    if (opacity === 0) return 20;
    if (opacity === 1) return 0;
    const isEntering = sectionProgress < index;
    if (isEntering) {
      return 20 * (1 - opacity);
    }
    return -20 * (1 - opacity);
  };

  const getImageClip = (index: number) => {
    if (index === 0) {
      if (sectionProgress <= 0) return 0;
      if (sectionProgress <= 1) return sectionProgress * 100;
      return 100;
    } else if (index === totalSections - 1) {
      return 0;
    } else {
      const clipStart = index;
      const clipEnd = index + 1;

      if (sectionProgress < clipStart) return 0;
      if (sectionProgress < clipEnd)
        return (sectionProgress - clipStart) * 100;
      return 100;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${totalSections * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">
        {/* Left Side - Text Content */}
        <div className="w-1/2 bg-white flex flex-col items-center px-16 pt-[8%] relative">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="absolute inset-0 flex flex-col items-center px-16 pt-[8%] transition-none"
              style={{
                opacity: getTextOpacity(index),
                transform: `translateY(${getTextOffset(index)}px)`,
                pointerEvents: getTextOpacity(index) > 0.5 ? "auto" : "none",
              }}
            >
              {/* Icon */}
              <div className="mb-10">
                <img
                  src={section.icon}
                  alt={section.iconAlt}
                  className="w-12 h-10 object-contain"
                />
              </div>

              {/* Thin Horizontal Line */}
              <div className="w-full max-w-[420px] h-px bg-[#d4d4d4] mb-[72px]"></div>

              {/* Two-line Headline */}
              <AnimatedText
                as="h2"
                className="text-[42px] font-display font-light text-center leading-[1.3] tracking-wide"
                style={{ color: "#282828" }}
              >
                {section.headline[0]}
                <br />
                {section.headline[1]}
              </AnimatedText>

              {/* Description text */}
              <AnimatedText
                as="p"
                className="absolute bottom-[130px] left-16 right-16 text-[#282828] text-[16px] font-light leading-[1.5] tracking-[0] text-center max-w-[420px] mx-auto"
                delay={0.3}
              >
                {section.description}
              </AnimatedText>
            </div>
          ))}
        </div>

        {/* Right Side - Images */}
        <div className="w-1/2 relative">
          {[...sections].reverse().map((section, reverseIndex) => {
            const index = totalSections - 1 - reverseIndex;
            const clipPercent = getImageClip(index);

            return (
              <div
                key={section.id}
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 0 ${clipPercent}% 0)`,
                }}
              >
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* Floating Cards */}
          {[...sections].reverse().map((section, reverseIndex) => {
            const index = totalSections - 1 - reverseIndex;
            const clipPercent = getImageClip(index);

            return (
              <div
                key={`card-${section.id}`}
                className="absolute top-[48%] -translate-y-1/2 left-0 -translate-x-1/2 z-50"
                style={{
                  width: "280px",
                  height: "260px",
                  clipPath: `inset(0 0 ${clipPercent}% 0)`,
                }}
              >
                <div
                  className="w-full h-full bg-[#F3F4F6] rounded-2xl flex items-center justify-center"
                >
                  <span
                    className="text-[52px] font-display font-light"
                    style={{ color: "#282828" }}
                  >
                    {section.cardText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionsScroll;
