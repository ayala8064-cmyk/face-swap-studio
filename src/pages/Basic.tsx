import BasicHero from "@/components/basic/BasicHero";
import BasicFeatures from "@/components/basic/BasicFeatures";
import BasicPortfolio from "@/components/basic/BasicPortfolio";
import BasicAbout from "@/components/basic/BasicAbout";
import BasicServices from "@/components/basic/BasicServices";
import BasicTestimonials from "@/components/basic/BasicTestimonials";
import BasicContact from "@/components/basic/BasicContact";
import BasicNav from "@/components/basic/BasicNav";

const Basic = () => {
  return (
    <main dir="rtl" className="min-h-screen bg-[#FAFAFA]" style={{ fontFamily: "'Noto Sans Hebrew', sans-serif" }}>
      <BasicNav />
      <BasicHero />
      <BasicFeatures />
      <BasicPortfolio />
      <BasicAbout />
      <BasicServices />
      <BasicTestimonials />
      <BasicContact />
    </main>
  );
};

export default Basic;
