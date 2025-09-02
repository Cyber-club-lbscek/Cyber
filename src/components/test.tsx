import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventsSection = () => {
  const navigate = useNavigate();

  const mainEvents = [
    {
      id: "Web-Security",
      title: "Web-Security",
      description: "Educational sessions on dark web monitoring and threat intelligence",
      date: "April",
      participants: "40+",
      category: "Education",
      image: "Websecurity.jpg",
    },
     {
      id: "Dark-Web",
      title: "Dark-Web",
      description: "Educational sessions on dark web monitoring and threat intelligence",
      date: "April",
      participants: "40+",
      category: "Education",
      image: "DarkWeb.jpg",
    },
     {
      id: "One-Minute Cyber",
      title: "One Minute Cyber",
      description: "Educational sessions on dark web monitoring and threat intelligence",
      date: "Daily",
      participants: "40+",
      category: "Education",
      image: "1Minute.jpg",
    },
    {
      id: "Hack-the-weeks-5",
      title: "Hack Your First Website (Legally!) Episode-5",
      description: "Weekly hacking challenges and CTF competitions for skill development",
      date: "March 29, 2025",
      participants: "Multiple",
      category: "Competition",
      image: "HacktheWeek5.jpg",
    },
        {
      id: "Hack-the-weeks-4",
      title: "Hack Your First Website (Legally!) Episode-4",
      description: "Weekly hacking challenges and CTF competitions for skill development",
      date: "March 22, 2025",
      participants: "Multiple",
      category: "Competition",
      image: "HacktheWeek4.jpg",
    },
     {
      id: "Hack-the-weeks-3",
      title: "Hack Your First Website (Legally!) Episode-3",
      description: "Weekly hacking challenges and CTF competitions for skill development",
      date: "March 15, 2025",
      participants: "Multiple",
      category: "Competition",
      image: "HacktheWeek3.jpg",
    },
    {
      id: "Hack-the-weeks-2",
      title: "Hack Your First Website (Legally!) Episode-2",
      description: "Weekly hacking challenges and CTF competitions for skill development",
      date: "March 8, 2025",
      participants: "Multiple",
      category: "Competition",
      image: "HacktheWeek2.jpg",
    },
   {
      id: "Hack-the-weeks-1",
      title: "Hack Your First Website (Legally!) Episode-1",
      description: "Weekly hacking challenges and CTF competitions for skill development",
      date: "March 1, 2025",
      participants: "Multiple",
      category: "Competition",
      image: "HacktheWeek1.jpg",
    },
    
    {
      id: "Ethical-Hacking and Bug Bounty Workshop",
      title: "Ethical-Hacking and Bug Bounty Workshop",
      description: "Quick-fire presentations and lightning talks on cybersecurity topics",
      date: "Bi-weekly",
      participants: "30+",
      category: "Presentation",
      image: "Ethical.jpg",
    },
    {
      id: "cyber-stall",
      title: "Cyber-Stall",
      description: "Showcase your innovative cybersecurity solutions and research projects",
      date: "Monthly",
      participants: "50+",
      category: "Innovation",
      image: "CyberStall.jpg",
    },
    
    
   
    
    
    
  ];

  const handleEventSelect = (eventId: string) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Previous Events
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our dynamic cybersecurity events and workshops designed to
            enhance your skills and connect with the community.
          </p>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth custom-scrollbar"
          >
            {mainEvents.map((event) => (
              <Card
                key={event.id}
                className="min-w-[280px] max-w-[300px] flex-shrink-0 relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg snap-center"
                onClick={() => handleEventSelect(event.id)}
              >
                {/* Poster Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-60 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{event.description}</p>
                  </div>

                  <div className="flex flex-col gap-2 text-gray-300 text-sm">
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
                    variant="secondary"
                    className="mt-3 bg-white text-black hover:bg-cyber-accent hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
