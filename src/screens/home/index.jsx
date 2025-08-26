import HeroSection from "@/components/HeroSection";
import AboutVibroxaSection from "@/components/homePageSections/AboutVibroxaSection";
import OurServicesSection from "@/components/homePageSections/OurServicesSection";
import OurPortfolioSection from "@/components/homePageSections/OurPortfolioSection";
import ClientSection from "@/components/homePageSections/ClientSection";
import GetInTouchSection from "@/components/homePageSections/GetInTouchSection";
import heroSectionImage from "@/assets/home_hero_image.avif";

const Home = () => {
  return (
    <>
      <HeroSection
        heroImage={heroSectionImage}
        title="Transform Your Digital Presence"
        dec="Vibroxa Studio delivers cutting-edge digital solutions to help
            businesses thrive in the modern world. From development to
            marketing, we've got you covered."
        workButton="true"
      />
      <AboutVibroxaSection />
      <OurServicesSection />
      <OurPortfolioSection />
      <ClientSection />
      <GetInTouchSection />
    </>
  );
};

export default Home;
