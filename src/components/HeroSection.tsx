import { Button } from "@/components/ui/button";
import { Shield, Users, Code, ChevronDown } from "lucide-react";
import heroImage from "@/assets/cyber-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Logo/Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-border bg-cyber-card/50 backdrop-blur-sm mb-8">
            <Shield className="h-5 w-5 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Cyber Security Community</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Cyber Community
            </span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl font-normal">
              LBSCEK
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Empowering the next generation of cybersecurity professionals through 
            knowledge sharing, hands-on training, and collaborative innovation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-cyber hover:shadow-cyber-glow transition-all duration-300">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
            <Button variant="outline" size="lg" className="border-cyber-border hover:bg-cyber-card/50 backdrop-blur-sm">
              <Code className="mr-2 h-5 w-5" />
              Explore Projects
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="h-6 w-6 text-primary animate-glow-pulse" />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-primary/40 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;