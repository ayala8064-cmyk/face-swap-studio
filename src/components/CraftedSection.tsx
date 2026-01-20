import miniPic1 from "@/assets/mini-pic-1.webp";
import miniPic2 from "@/assets/mini-pic-2.webp";
import miniPic3 from "@/assets/mini-pic-3.webp";
import arrowIcon from "@/assets/arrow-icon.svg";
import craftedLines from "@/assets/crafted-lines.svg";
import AnimatedText from "./AnimatedText";

const CraftedSection = () => {
  return (
    <section
      className="bg-[#F9F7F6] min-h-screen px-8 md:px-16 lg:px-20 flex flex-col justify-center"
    >
      {/* Main Headline with inline images */}
      <div className="max-w-[1200px] mx-auto">
        <AnimatedText
          as="h2"
          className="text-[#282828] font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.15] tracking-[-0.02em]"
        >
          <span className="inline-flex items-center flex-wrap gap-x-4">
            Crafted with care
            <img src={miniPic1} alt="Elegant bookshelf detail" className="inline-block w-[100px] h-[55px] md:w-[140px] md:h-[75px] lg:w-[160px] lg:h-[85px] object-cover rounded-full align-middle" />
            to
          </span>
          <br />
          <span className="inline-flex items-center flex-wrap gap-x-4">
            preserve
            <img src={miniPic2} alt="Textured wall finish" className="inline-block w-[100px] h-[55px] md:w-[140px] md:h-[75px] lg:w-[160px] lg:h-[85px] object-cover rounded-full align-middle" />
            light, space,
          </span>
          <br />
          <span className="inline-flex items-center flex-wrap gap-x-4">
            and natural harmony.
            <img src={miniPic3} alt="Elegant lamp detail" className="inline-block w-[100px] h-[55px] md:w-[140px] md:h-[75px] lg:w-[160px] lg:h-[85px] object-cover rounded-full align-middle" />
          </span>
        </AnimatedText>
      </div>

      {/* Bottom Section with divider */}
      <div className="max-w-[1200px] mx-auto mt-48 w-full relative">
        {/* SVG Lines */}
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <img src={craftedLines} alt="" className="w-[1474px] max-w-none" />
        </div>

        <div className="flex min-h-[180px]">
          {/* Left side - Arrow Icon */}
          <div className="w-1/2 pt-16 flex items-start justify-start pl-16">
            <img src={arrowIcon} alt="Arrow" className="w-[61px] h-[61px]" />
          </div>

          {/* Right side - Text */}
          <div className="w-1/2 pt-12 pl-8 flex items-start">
            <AnimatedText
              as="p"
              className="text-[#282828] leading-[1.8] font-light text-base max-w-[680px] ml-[-150px]"
            >
              Our studio is dedicated to creating exceptionally refined, high-quality interiors, paired with exceptional, personal service. From the moment you reach out, every detail is thoughtfully considered: from selecting the finest materials to crafting a space tailored perfectly to your lifestyle, taste, and personality. Expert guidance is provided at every step, ensuring a calm, refined, and truly bespoke experience that leaves you feeling confident, comfortable, and at home.
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftedSection;
