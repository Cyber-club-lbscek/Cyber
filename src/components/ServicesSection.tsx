import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Calendar,
  ArrowRight,
  Code2,
  Shield,
  Network
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Training Programs",
      description: "Comprehensive courses covering ethical hacking, network security, and incident response.",
      features: ["Beginner to Advanced", "Certified Instructors", "Hands-on Labs"]
    },
    {
      icon: Users,
      title: "Workshops & Seminars",
      description: "Regular interactive sessions with industry experts and cybersecurity professionals.",
      features: ["Industry Experts", "Interactive Sessions", "Q&A Support"]
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "CTF challenges, hackathons, and security competitions to test and improve skills.",
      features: ["CTF Challenges", "Team Events", "Prize Rewards"]
    },
    {
      icon: Calendar,
      title: "Events & Meetups",
      description: "Regular community gatherings, tech talks, and networking opportunities.",
      features: ["Monthly Meetups", "Guest Speakers", "Networking"]
    }
  ];

  const technologies = [
    { icon: Code2, name: "Penetration Testing" },
    { icon: Shield, name: "Incident Response" },
    { icon: Network, name: "Network Security" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-cyber bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive cybersecurity education and community activities designed to 
            build expertise and foster professional growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-cyber-card border-cyber-border hover:shadow-card-cyber transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-cyber group-hover:animate-glow-pulse">
                      <service.icon className="h-7 w-7 text-cyber-dark" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="border-cyber-border hover:bg-cyber-border/20">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Specialization Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-cyber-card border border-cyber-border hover:shadow-cyber transition-all duration-300"
              >
                <tech.icon className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;