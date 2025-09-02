import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, ArrowRight, Code, Shield, Lightbulb, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Upcoming = () => {
  const navigate = useNavigate();

  const mainEvents = [
    {
      id: "one-minute",
      title: "One Minute Cyber",
      description: "Quick-fire presentations and lightning talks on cybersecurity topics",
      icon: Clock,
      date: "Bi-weekly",
      participants: "30+",
      category: "Presentation"
    },
    {
      id: "innovation-corner",
      title: "Innovation Corner",
      description: "Showcase your innovative cybersecurity solutions and research projects",
      icon: Lightbulb,
      date: "Monthly",
      participants: "50+",
      category: "Innovation"
    },
    
    
  ];

  const allEvents = [
    ...mainEvents,
    {
      id: "6g-workshop",
      title: "6G Workshop",
      description: "Advanced workshop on 6G network security and emerging technologies",
      icon: Shield,
      date: "Quarterly",
      participants: "25+",
      category: "Workshop"
    },
    {
      id: "bug-bounty",
      title: "ETHICAL HACKING AND BUG BOUNTY",
      description: "Responsible disclosure program and vulnerability hunting sessions",
      icon: Shield,
      date: "JAN 30, 2025",
      participants: "21",
      category: "Security"
    }
  ];

  const handleEventSelect = (eventId: string) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <section id="upcoming" className="py-3 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-6 py-2 rounded-full bg-cyber-green text-cyber-light font-bold text-lg mb-4 shadow-lg animate-pulse">Featured</div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-cyber-light mb-8 drop-shadow-lg">
            Upcoming Events <span className="bg-gradient-cyber bg-clip-text text-transparent">of Cyber Community</span>
          </h1>
          <p className="text-2xl text-cyber-lightgreen max-w-3xl mx-auto leading-relaxed mb-2">
            Don't miss our most anticipated cybersecurity events and workshops, designed to boost your skills and connect you with top experts.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay tuned for exclusive sessions, hands-on activities, and networking opportunities.
          </p>
        </div>


        
        {/* Main Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {mainEvents.map((event, index) => (
            <Card 
              key={index} 
              className="bg-cyber-card border-4 border-cyber-green shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer relative"
              onClick={() => handleEventSelect(event.id)}
            >
              <div className="absolute -top-4 -right-4 px-4 py-1 rounded-full bg-cyber-green text-cyber-light font-bold text-xs shadow-md animate-pulse">Featured</div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-full bg-gradient-cyber">
                    <event.icon className="h-6 w-6 text-cyber-green" />
                  </div>
                  <Badge variant="secondary" className="bg-cyber-lightgreen text-cyber-dark font-bold">
                    {event.category}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-extrabold text-cyber-green group-hover:text-cyber-lightgreen transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-lg text-cyber-light mb-4 leading-relaxed font-semibold">
                  {event.description}
                </p>
                <div className="flex items-center justify-between text-base text-cyber-lightgreen font-bold">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                <Button 
                  variant="default"
                  className="w-full mt-6 bg-cyber-green text-white font-bold text-lg shadow-[0_0_16px_4px_rgba(238,238,238,0.5)] hover:bg-cyber-lightgreen hover:text-cyber-dark transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Upcoming; 