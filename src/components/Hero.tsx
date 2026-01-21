import heroBackground from "@/assets/hero-background.webp";
import miniPic from "@/assets/mini-pic.webp";
import logo from "@/assets/logo.png";
import { ChevronDown } from "lucide-react";
import AnimatedText from "./AnimatedText";
const Hero = () => {
  return <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBackground} alt="Luxurious interior design" className="h-full w-full object-cover object-center" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16 lg:px-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-8">
          <button className="btn-contact">Contact</button>
          <button className="hamburger-menu">
            <span className="text-9xl text-center"></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex h-[calc(100vh-120px)] items-center justify-center">
        {/* Headline - Centered */}
        <div className="text-center">
          <AnimatedText as="h1" className="hero-headline text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light my-0 text-9xl leading-[0.91]" trigger="immediate">
            Style, Art,
            <br />
            Elegance
            <br />Your Dream Space
          </AnimatedText>
        </div>

        {/* Floating Mini Image - overlapping bottom right of text */}
        <div className="absolute bottom-[15%] right-[8%] floating-image">
          <img src={miniPic} alt="Beautiful interior design detail" className="w-[380px] h-auto rounded-2xl shadow-lg" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-8 md:left-16 lg:left-20">
          <button className="scroll-indicator">
            <ChevronDown className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;