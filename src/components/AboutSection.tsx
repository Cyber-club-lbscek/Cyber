import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
            {/* Add your hero content here */}
          </div>
        </div>
      </section>

      

      
    </div>
  );
};

export default About; 