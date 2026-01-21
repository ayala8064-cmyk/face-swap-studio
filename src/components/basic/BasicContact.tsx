import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contactBackground from "@/assets/contact-background.webp";

gsap.registerPlugin(ScrollTrigger);

const BasicContact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
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
    <section id="contact" ref={sectionRef} className="relative min-h-screen bg-[#1a1a1a]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={contactBackground}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a]/50" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-light text-[#666] tracking-widest mb-4">GET IN TOUCH</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8">
              Let's create
              <br />
              something
              <br />
              beautiful
            </h2>

            <p className="text-lg text-white/60 font-light leading-relaxed max-w-md mb-12">
              Ready to transform your space? We'd love to hear from you. Reach out to start your design journey.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-light">Design Studio, Tel Aviv</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-light">054.123.4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-light">hello@mayainteriors.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex items-center">
            <div className="w-full bg-white p-8 lg:p-12">
              <h3 className="text-2xl font-light text-[#1a1a1a] mb-8">Book a Consultation</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#666] mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 py-3 text-[#1a1a1a] font-light focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#666] mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 py-3 text-[#1a1a1a] font-light focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#666] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 py-3 text-[#1a1a1a] font-light focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#666] mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-gray-300 py-3 text-[#1a1a1a] font-light focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1a1a1a] text-white text-sm font-light tracking-wider hover:bg-[#333] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-white/40 font-light">
            © 2024 Maya Interiors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/40 font-light hover:text-white/60 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-white/40 font-light hover:text-white/60 transition-colors">
              Pinterest
            </a>
            <a href="#" className="text-sm text-white/40 font-light hover:text-white/60 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicContact;
