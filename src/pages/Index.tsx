import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Upcoming from "@/components/Upcoming";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Upcoming />
      <EventsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
