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
    title: "טבעיות",
    subtitle: "חללים שנראים טבעיים באופן יוצא דופן",
    description: "בין אם מודרני או קלאסי, כל חדר מעוצב להשתלב בצורה חלקה עם אורח החיים שלכם. כל פרט מותאם אישית לטעם, לאישיות ולקצב היומיומי שלכם - כך שזה אף פעם לא נראה מבוים, רק טבעי.",
    image: naturalImage,
  },
  {
    id: "movement",
    number: "02",
    title: "תנועה",
    subtitle: "זרימה טבעית שנעה כמו החיים עצמם",
    description: "פתוח או אינטימי, מרשים או נעים, כל חלל מעוצב עם איזון וזרימה בראש. התוצאה היא בית שמגיב באופן טבעי לאור, לעונות ולחיי היום-יום.",
    image: movementImage,
  },
  {
    id: "quality",
    number: "03",
    title: "איכות",
    subtitle: "חומרים יוצאי דופן, נצחיים ועמידים",
    description: "אנו משיגים רק את החומרים המשובחים ביותר, שנבחרו בזכות יופים, עמידותם ואופיים. ידועים כמתיישנים יפה לאורך זמן, כל אלמנט נבחר כדי לחיות איתו ולאהוב אותו לאורך שנים.",
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
          <p className="text-sm font-light text-[#999] tracking-widest mb-4">מה אנחנו עושים</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight">
            יוצרים חללים שמרגישים
            <br />
            כמו בית
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
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white flex items-center justify-center">
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
