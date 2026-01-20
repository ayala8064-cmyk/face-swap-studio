import React from "react";
import contactBackground from "@/assets/contact-background.webp";
import AnimatedText from "./AnimatedText";

const ContactSection = () => {
  return (
    <section
      className="relative w-full h-[1787px] bg-[#e8e4e0] overflow-hidden"
    >
      {/* Large Heading */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10">
        <AnimatedText
          as="h2"
          className="font-display text-[280px] leading-[0.77] text-white/90 font-light tracking-tight"
        >
          Join us
        </AnimatedText>
        <AnimatedText
          as="h2"
          className="font-display text-[280px] leading-[0.77] text-white/90 font-light tracking-tight"
          delay={0.15}
        >
          Welcome
        </AnimatedText>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center z-[15]">
        <img
          src={contactBackground}
          alt="Contact background"
          className="w-[1511px] h-[1185px] object-cover object-top"
        />
      </div>

      {/* Cards Container */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end z-20 w-[1511px] h-[365px]">
        {/* White Card - Contact Info */}
        <div className="bg-white rounded-[35px] w-[984px] h-[365px] relative z-10 flex items-center">
          <div className="space-y-6 px-16 w-full max-w-[600px]">
            <div className="border-b border-[#d4d0cc] pb-5">
              <p className="text-[#3a3a3a] text-[15px] font-light tracking-wide">
                Design Studio, Tel Aviv
              </p>
            </div>
            <div className="border-b border-[#d4d0cc] pb-5">
              <p className="text-[#3a3a3a] text-[15px] font-light tracking-wide">
                Phone 054.123.4567
              </p>
            </div>
            <div className="pb-2">
              <p className="text-[#3a3a3a] text-[15px] font-light tracking-wide">
                Email hello@mayainteriors.com
              </p>
            </div>
          </div>
        </div>

        {/* Rose Card - Call Button */}
        <div className="bg-[#C8A89C] rounded-[35px] w-[527px] h-[365px] flex items-center justify-center absolute right-0 bottom-0">
          <button className="w-[221px] h-[86px] border border-white text-white text-[15px] font-light hover:bg-white/10 transition-colors tracking-wide flex items-center justify-center" style={{ borderRadius: '50%' }}>
            Book a consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
