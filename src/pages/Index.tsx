import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import FeatureSectionsScroll from "@/components/FeatureSectionsScroll";
import CollectionAccordion from "@/components/CollectionAccordion";
import CraftedSection from "@/components/CraftedSection";
import SinayaSection from "@/components/SinayaSection";
import ServicesStackGsap from "@/components/ServicesStackGsap";
import RadialTestimonialsCarousel from "@/components/RadialTestimonialsCarousel";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <FeatureSectionsScroll />
      <CollectionAccordion />
      <CraftedSection />
      <SinayaSection />
      <ServicesStackGsap />
      <RadialTestimonialsCarousel />
      <ContactSection />
    </main>
  );
};

export default Index;
