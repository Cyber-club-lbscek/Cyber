import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Upcoming from "@/components/Upcoming";
import Contributer from "@/components/Contibutor";
import TeamSection from "@/components/TeamSection";
import Test from "@/components/test";
import AboutSection from "@/components/AboutSection";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Upcoming />
      {/* <div id="events">
        <EventsSection />
      </div> */}
      <TeamSection />
      <Test />
      {/* <ServicesSection /> */}
      <ContactSection />
      <Contributer />
    </div>
  );
};

export default Index;
