import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Lightbulb, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Cybersecurity Focus",
      description: "Comprehensive training in ethical hacking, penetration testing, and digital forensics."
    },
    {
      icon: Target,
      title: "Practical Skills",
      description: "Hands-on workshops and real-world scenarios to build industry-ready expertise."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Collaborative environment fostering new ideas in cybersecurity research and development."
    },
    {
      icon: Zap,
      title: "Community Driven",
      description: "Peer-to-peer learning and mentorship programs connecting students and professionals."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-cyber bg-clip-text text-transparent">LBSCEK</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The LBSCEK Cyber Community is a dynamic platform dedicated to advancing 
            cybersecurity education and fostering innovation in digital security practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm hover:shadow-card-cyber transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-cyber mb-6 group-hover:animate-glow-pulse">
                  <feature.icon className="h-8 w-8 text-cyber-dark" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;