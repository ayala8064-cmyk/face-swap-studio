import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    number: "01",
    title: "עיצוב מגורים",
    description: "הפכו את הבית שלכם למקלט. כל פרויקט מגורים מעוצב בקפידה כדי לשקף את אורח החיים שלכם.",
    image: sinaya1,
  },
  {
    id: "renovation",
    number: "02",
    title: "שיפוצים מלאים",
    description: "נשפו חיים חדשים לחללים קיימים. משינויים מבניים ועד גימורים סופיים.",
    image: sinaya2,
  },
  {
    id: "styling",
    number: "03",
    title: "עיצוב פנים",
    description: "שכללו את החלל שלכם עם ריהוט, אמנות ואקססוריז שנאספו בקפידה.",
    image: sinaya3,
  },
  {
    id: "custom",
    number: "04",
    title: "ריהוט בהזמנה",
    description: "הזמינו פריטים ייחודיים שמתאימים בצורה מושלמת. מארונות מובנים ועד ריהוט ייחודי.",
    image: sinaya4,
  },
  {
    id: "lighting",
    number: "05",
    title: "עיצוב תאורה",
    description: "צרו את האווירה המושלמת עם תאורה מתוכננת במקצועיות. מתאורת אווירה ועד תאורת הדגשה.",
    image: sinaya5,
  },
  {
    id: "consultations",
    number: "06",
    title: "ייעוץ",
    description: "רגע לחקור, לגלות ולהחליט. הדרכה מקצועית בכל שלב.",
    image: sinaya6,
  },
];

const BasicServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-light text-[#666] tracking-widest mb-4">שירותים</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
            סטודיו אחד,
            <br />
            שירותים רבים
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (itemsRef.current[index] = el!)}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                
                {/* Number */}
                <div className="absolute top-4 right-4 text-white/50 text-sm font-light">
                  {service.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl text-white font-light mb-3 group-hover:text-[#C8A89C] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#666] font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BasicServices;
