import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    id: 1,
    title: "Beyond Expectations",
    body: "From the initial consultation to the final reveal, the experience felt thoughtful and refined. Every detail was considered.",
    author: "Rachel & David Cohen",
  },
  {
    id: 2,
    title: "Seamless Process",
    body: "Everything was clear and easy from start to finish. Communication was excellent and the result was exactly what we envisioned.",
    author: "The Levi Family",
  },
  {
    id: 3,
    title: "Beautiful Craftsmanship",
    body: "The quality is outstanding. Every room feels premium, looks perfect, and the finishing touches are on another level.",
    author: "Sarah & Michael Adler",
  },
  {
    id: 4,
    title: "Highly Recommended",
    body: "A calm, professional experience with stunning results. We would absolutely work together again.",
    author: "Jonathan & Emma Stein",
  },
];

const BasicTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-32 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <p className="text-sm font-light text-[#999] tracking-widest mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a]">
              Client Reviews
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-8 md:mt-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border border-[#ddd] flex items-center justify-center hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 border border-[#ddd] flex items-center justify-center hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Quote */}
          <div ref={contentRef} className="lg:col-span-8">
            <svg className="w-16 h-16 text-[#ddd] mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              {current.title}
            </h3>

            <p className="text-xl md:text-2xl text-[#666] font-light leading-relaxed mb-8">
              "{current.body}"
            </p>

            <p className="text-lg text-[#1a1a1a]">— {current.author}</p>
          </div>

          {/* Indicators */}
          <div className="lg:col-span-4 flex lg:flex-col gap-4 justify-center lg:justify-start">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#1a1a1a]" : "bg-[#ddd] hover:bg-[#bbb]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicTestimonials;
