import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sinayaPortrait from "@/assets/sinaya-portrait.webp";
import miniPic1 from "@/assets/mini-pic-1.webp";
import miniPic2 from "@/assets/mini-pic-2.webp";
import miniPic3 from "@/assets/mini-pic-3.webp";

gsap.registerPlugin(ScrollTrigger);

const BasicAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-sm font-light text-[#999] tracking-widest mb-4">אודות</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-tight max-w-3xl">
            מעוצב בקפידה לשמירה על אור, מרחב והרמוניה טבעית.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Right - Text Content (in RTL) */}
          <div ref={textRef} className="space-y-12">
            <p className="text-lg text-[#666] font-light leading-relaxed">
              הסטודיו שלנו מוקדש ליצירת חללים פנימיים מעודנים ואיכותיים במיוחד, בשילוב עם שירות אישי ויוצא דופן. מהרגע שאתם פונים אלינו, כל פרט נבחן בקפידה: מבחירת החומרים המשובחים ביותר ועד ליצירת חלל המותאם בצורה מושלמת לאורח החיים, לטעם ולאישיות שלכם.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-4xl md:text-5xl font-light text-[#1a1a1a]">+15</p>
                <p className="text-sm text-[#999] mt-2 tracking-wider">שנות ניסיון</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light text-[#1a1a1a]">+200</p>
                <p className="text-sm text-[#999] mt-2 tracking-wider">פרויקטים</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light text-[#1a1a1a]">+50</p>
                <p className="text-sm text-[#999] mt-2 tracking-wider">לקוחות מרוצים</p>
              </div>
            </div>

            {/* Mini Images */}
            <div className="flex gap-4 pt-8">
              <div className="w-24 h-16 overflow-hidden">
                <img src={miniPic1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-24 h-16 overflow-hidden">
                <img src={miniPic2} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-24 h-16 overflow-hidden">
                <img src={miniPic3} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Left - Portrait (in RTL) */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={sinayaPortrait}
                alt="מאיה - מייסדת"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Info Card */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-[#1a1a1a] text-white p-8 max-w-xs">
              <h3 className="text-2xl font-light mb-4">מאיה</h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                עם למעלה מחמש עשרה שנות ניסיון בהפיכת בתים למקלטים, מאיה מביאה עין חסרת תחרות לפרטים והבנה עמוקה כיצד חללים מעצבים את חיינו.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicAbout;
