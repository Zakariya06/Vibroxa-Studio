import HeroSection from "@/components/HeroSection";
import AboutVibroxaSection from "@/components/homePageSections/AboutVibroxaSection";
import OurServicesSection from "@/components/homePageSections/OurServicesSection";
import OurPortfolioSection from "@/components/homePageSections/OurPortfolioSection";
import ClientSection from "@/components/homePageSections/ClientSection";
import GetInTouchSection from "@/components/homePageSections/GetInTouchSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutVibroxaSection />
      <OurServicesSection />
      <OurPortfolioSection />
      <ClientSection />
      <GetInTouchSection />
    </>
  );
};

export default Home;
