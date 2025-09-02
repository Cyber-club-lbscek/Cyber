import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Contributer from "@/components/Contibutor"
import TeamSection from "@/components/TeamSection";
import Test from "@/components/test"
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <TeamSection/>
      <Test/>
      <ServicesSection />
      <ContactSection />
      <Contributer/>
    </div>
  );
};

export default Index;
