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
    <section className="py-3 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Upcoming events <span className="bg-gradient-cyber bg-clip-text text-transparent">of Cyber community</span>
            </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our dynamic cybersecurity events and workshops designed to enhance your skills 
            and connect with the community.
          </p>
        </div>


        {/* Event Selector */}
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Explore All Events
            </h3>
            <p className="text-muted-foreground">
              Select an event to view detailed information
            </p>
          </div>
          
          <Select onValueChange={handleEventSelect}>
            <SelectTrigger className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm">
              <SelectValue placeholder="Choose an event..." />
            </SelectTrigger>
            <SelectContent className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm">
              {allEvents.map((event) => (
                <SelectItem key={event.id} value={event.id} className="hover:bg-cyber-accent/20">
                  <div className="flex items-center gap-3">
                    <event.icon className="h-4 w-4" />
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-muted-foreground">{event.category}</div>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <br />
        <br />
        {/* Main Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {mainEvents.map((event, index) => (
            <Card 
              key={index} 
              className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm hover:shadow-card-cyber transition-all duration-300 group cursor-pointer"
              onClick={() => handleEventSelect(event.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-full bg-gradient-cyber">
                    <event.icon className="h-6 w-6 text-cyber-dark" />
                  </div>
                  <Badge variant="secondary" className="bg-gradient-cyber text-cyber-dark">
                    {event.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-cyber-accent transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 group-hover:bg-gradient-cyber group-hover:text-cyber-dark transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
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