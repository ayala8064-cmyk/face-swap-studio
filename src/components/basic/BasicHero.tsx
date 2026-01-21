import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroBackground from "@/assets/hero-background.webp";
import miniPic from "@/assets/mini-pic.webp";

const BasicHero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const miniRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(headingRef.current, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2 }
    )
    .fromTo(subRef.current, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      "-=0.6"
    )
    .fromTo(imageRef.current, 
      { scale: 1.1, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1.4 }, 
      "-=1"
    )
    .fromTo(miniRef.current, 
      { x: 40, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8 }, 
      "-=0.4"
    );
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[calc(100vh-80px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1
              ref={headingRef}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-[#1a1a1a] leading-[1.1] tracking-tight"
            >
              Style,
              <br />
              Art,
              <br />
              <span className="text-[#999]">Elegance</span>
            </h1>
            
            <p
              ref={subRef}
              className="mt-8 text-lg md:text-xl text-[#666] font-light leading-relaxed max-w-md"
            >
              Transform your living spaces into extraordinary havens of beauty and comfort
            </p>

            <div className="mt-12 flex items-center gap-6">
              <a
                href="#portfolio"
                className="px-8 py-4 bg-[#1a1a1a] text-white text-sm font-light tracking-wider hover:bg-[#333] transition-colors"
              >
                View Portfolio
              </a>
              <a
                href="#about"
                className="text-sm font-light text-[#1a1a1a] tracking-wider underline underline-offset-4 hover:text-[#666] transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            <div
              ref={imageRef}
              className="relative w-full aspect-[3/4] max-w-lg"
            >
              <img
                src={heroBackground}
                alt="Luxurious interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Mini Image */}
            <div
              ref={miniRef}
              className="absolute -bottom-8 -left-8 lg:-left-16 w-40 h-48 lg:w-48 lg:h-56 shadow-2xl"
            >
              <img
                src={miniPic}
                alt="Interior detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-light text-[#999] tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#999] to-transparent" />
      </div>
    </section>
  );
};

export default BasicHero;
