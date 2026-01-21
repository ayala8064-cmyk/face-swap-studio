import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sinaya1 from "@/assets/collection/sinaya-1.jpg";
import sinaya2 from "@/assets/collection/sinaya-2.jpg";
import sinaya3 from "@/assets/collection/sinaya-3.jpg";
import sinaya4 from "@/assets/collection/sinaya-4.jpg";
import sinaya5 from "@/assets/collection/sinaya-5.jpg";
import sinaya6 from "@/assets/collection/sinaya-6.jpg";
import sinaya7 from "@/assets/collection/sinaya-7.jpg";
import sinaya8 from "@/assets/collection/sinaya-8.jpg";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  { id: 1, name: "סלון", category: "מגורים", image: sinaya1 },
  { id: 2, name: "חדר שינה ראשי", category: "מגורים", image: sinaya2 },
  { id: 3, name: "פינת אוכל", category: "מסחרי", image: sinaya3 },
  { id: 4, name: "מטבח מודרני", category: "מגורים", image: sinaya4 },
  { id: 5, name: "חדר רחצה", category: "מגורים", image: sinaya5 },
  { id: 6, name: "משרד ביתי", category: "מסחרי", image: sinaya6 },
  { id: 7, name: "פינת קריאה", category: "מגורים", image: sinaya7 },
  { id: 8, name: "כניסה מרשימה", category: "מסחרי", image: sinaya8 },
];

const BasicPortfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("הכל");

  const filters = ["הכל", "מגורים", "מסחרי"];

  const filteredItems = activeFilter === "הכל" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll(".portfolio-item");
    
    gsap.fromTo(
      items,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [filteredItems]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-sm font-light text-[#999] tracking-widest mb-4">העבודות שלנו</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a]">
              פורטפוליו
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-6 mt-8 md:mt-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm font-light tracking-wider transition-colors ${
                  activeFilter === filter
                    ? "text-[#1a1a1a] underline underline-offset-4"
                    : "text-[#999] hover:text-[#666]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end p-6">
                  <div className="translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white/70 text-xs tracking-widest mb-1">{item.category}</p>
                    <h3 className="text-white text-xl font-light">{item.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm font-light text-[#1a1a1a] tracking-wider group"
          >
            <span className="underline underline-offset-4">צפו בכל הפרויקטים</span>
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BasicPortfolio;
