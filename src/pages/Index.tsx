import Hero from "@/components/Hero";
import FeatureSectionsScroll from "@/components/FeatureSectionsScroll";
import CollectionAccordion from "@/components/CollectionAccordion";
import CraftedSection from "@/components/CraftedSection";
import SinayaSection from "@/components/SinayaSection";
import ServicesStackGsap from "@/components/ServicesStackGsap";
import RadialTestimonialsCarousel from "@/components/RadialTestimonialsCarousel";
import ContactSection from "@/components/ContactSection";

const Index = () => {
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
