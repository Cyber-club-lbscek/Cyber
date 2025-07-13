import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const About = () => {
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-cyber bg-clip-text text-transparent">LBSCEK</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering the future of cybersecurity through education, innovation, and community collaboration.
            </p>
          </div>
        </div>
      </section>

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

      {/* Core Values */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm hover:shadow-card-cyber transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-cyber mb-6 group-hover:animate-glow-pulse">
                    <value.icon className="h-8 w-8 text-cyber-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground">Comprehensive cybersecurity education and training</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm hover:shadow-card-cyber transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-cyber flex-shrink-0">
                      <program.icon className="h-6 w-6 text-cyber-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">Milestones that define our journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm hover:shadow-card-cyber transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="bg-gradient-cyber text-cyber-dark">
                      {achievement.year}
                    </Badge>
                    <Award className="h-6 w-6 text-cyber-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16">
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
  );
};

export default About; 