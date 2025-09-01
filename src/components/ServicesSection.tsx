import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Target, 
  Lightbulb, 
  Zap, 
  Users, 
  Award, 
  BookOpen, 
  Globe,
  Code,
  Lock,
  Eye,
  Brain
} from "lucide-react";

const ServicesSection = () => {
  const mission = {
    title: "Our Mission",
    description: "To empower the next generation of cybersecurity professionals through comprehensive education, hands-on training, and community collaboration. We strive to bridge the gap between academic learning and real-world cybersecurity challenges.",
    icon: Target
  };

  const vision = {
    title: "Our Vision",
    description: "To become the leading cybersecurity education hub that produces industry-ready professionals capable of defending against evolving digital threats and driving innovation in cybersecurity practices.",
    icon: Eye
  };

  const values = [
    {
      icon: Shield,
      title: "Excellence",
      description: "Maintaining the highest standards in cybersecurity education and practice"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Fostering a supportive community where knowledge sharing thrives"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative solutions to emerging security challenges"
    },
    {
      icon: Lock,
      title: "Integrity",
      description: "Upholding ethical practices and responsible disclosure"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Regional Cybersecurity Champions",
      description: "Won first place in the National Cybersecurity Competition"
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized for developing novel penetration testing methodologies"
    },
    {
      year: "2023",
      title: "Community Impact",
      description: "Trained 500+ students in cybersecurity fundamentals"
    },
    {
      year: "2022",
      title: "Research Excellence",
      description: "Published 3 papers on emerging cybersecurity threats"
    }
  ];

  const programs = [
    {
      icon: Code,
      title: "Ethical Hacking",
      description: "Comprehensive training in penetration testing and vulnerability assessment"
    },
    {
      icon: Brain,
      title: "Digital Forensics",
      description: "Hands-on experience with digital evidence collection and analysis"
    },
    {
      icon: Globe,
      title: "Network Security",
      description: "Advanced network defense and monitoring techniques"
    },
    {
      icon: BookOpen,
      title: "Security Research",
      description: "Cutting-edge research in emerging cybersecurity threats"
    }
  ];

  return (
    <section className="py-3 bg-background">
      <div className="container mx-auto px-6">
        
        

        {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm hover:shadow-card-cyber transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-cyber">
                    <mission.icon className="h-6 w-6 text-cyber-dark" />
                  </div>
                  <CardTitle className="text-2xl">{mission.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {mission.description}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm hover:shadow-card-cyber transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-cyber">
                    <vision.icon className="h-6 w-6 text-cyber-dark" />
                  </div>
                  <CardTitle className="text-2xl">{vision.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {vision.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      
      

      

      {/* Community Stats */}
      <section className="py-3">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Community Impact</h2>
            <p className="text-xl text-muted-foreground">Numbers that tell our story</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-muted-foreground">Workshops Conducted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2">
                25+
              </div>
              <p className="text-muted-foreground">Industry Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2">
                10+
              </div>
              <p className="text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      </div>
    </section>




  );
};

export default ServicesSection;