import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import naturalImage from "@/assets/natural-section-image.webp";
import movementImage from "@/assets/movement-section-image.webp";
import qualityImage from "@/assets/quality-section-image.webp";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "natural",
    number: "01",
    title: "Natural",
    subtitle: "Exceptionally natural-looking spaces",
    description: "Whether modern or classic, every room is crafted to blend seamlessly with your lifestyle. Each detail is customized to suit your taste, personality, and daily rhythm—so it never looks staged, only natural.",
    image: naturalImage,
  },
  {
    id: "movement",
    number: "02",
    title: "Movement",
    subtitle: "Natural flow that moves like life itself",
    description: "Open or intimate, grand or cozy, every space is designed with balance and flow in mind. The result is a home that responds naturally to light, seasons, and daily living.",
    image: movementImage,
  },
  {
    id: "quality",
    number: "03",
    title: "Quality",
    subtitle: "Exceptional materials, timeless and enduring",
    description: "We source only the finest materials, selected for their beauty, durability, and character. Known for aging beautifully over time, each element is chosen to be lived with and loved for years.",
    image: qualityImage,
  },
];

const BasicFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((item) => {
      if (!item) return;

      gsap.fromTo(
        item,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-24">
          <p className="text-sm font-light text-[#999] tracking-widest mb-4">WHAT WE DO</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight">
            Creating spaces that
            <br />
            feel like home
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => (itemsRef.current[index] = el!)}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Number Badge */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white flex items-center justify-center">
                    <span className="text-2xl font-light text-[#1a1a1a]">{feature.number}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#f0f0f0] mb-4">
                  {feature.title}
                </h3>
                <h4 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-6">
                  {feature.subtitle}
                </h4>
                <p className="text-[#666] font-light leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BasicFeatures;
