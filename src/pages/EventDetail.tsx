import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  ArrowLeft, 
  Code, 
  Shield, 
  Lightbulb, 
  Eye,
  BookOpen,
  Target,
  Award,
  Zap
} from "lucide-react";

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const events = {
    "innovation-corner": {
      title: "Innovation Corner",
      description: "Showcase your innovative cybersecurity solutions and research projects",
      longDescription: "Innovation Corner is our premier platform for showcasing cutting-edge cybersecurity innovations. Participants present their research projects, novel security solutions, and breakthrough technologies to the community. This event fosters collaboration between researchers, students, and industry professionals.",
      icon: Lightbulb,
      date: "Monthly",
      time: "2:00 PM - 5:00 PM",
      location: "LBSCEK Lab",
      participants: "50+",
      category: "Innovation",
      requirements: ["Cybersecurity background", "Project proposal", "5-minute presentation"],
      benefits: ["Network with professionals", "Get feedback on projects", "Potential collaboration opportunities"],
      schedule: [
        { time: "2:00 PM", activity: "Opening & Introductions" },
        { time: "2:15 PM", activity: "Project Presentations" },
        { time: "3:30 PM", activity: "Networking Break" },
        { time: "4:00 PM", activity: "Q&A & Discussion" },
        { time: "4:45 PM", activity: "Closing & Next Steps" }
      ]
    },
    "hack-the-weeks": {
      title: "Hack Your First Website (Legally!)",
      description: "Weekly hacking challenges and CTF competitions for skill development",
      longDescription: "The session aimed to introduce participants to ethical hacking, website security vulnerabilities, and career opportunities in cybersecurity. The event provided valuable knowledge and practical insights into ethical hacking and cybersecurity.",
      icon: Code,
      date: "March 1, 2025",
      time: "7:00 PM - 8:00 PM",
      location: "Google Meet",
      participants: "Multiple",
      category: "Competition",
      image: "/cyberpic/cyberpics/hackmain.png",
      gallery: [
        "/cyberpic/cyberpics/hack5.jpg",
        "/cyberpic/cyberpics/hack4.jpg",
        "/cyberpic/cyberpics/hack3.jpg",
        "/cyberpic/cyberpics/hack2.jpg"
      ],
      requirements: ["Basic programming knowledge", "Cybersecurity interest", "Team registration"],
      benefits: ["Understanding ethical hacking and website security", "Exposure to real-world cybersecurity threats and defenses", "Certification and career guidance for participants"],
      schedule: [
        { time: "7:00 PM", activity: "Introduction to ethical hacking" },
        { time: "7:15 PM", activity: "Hands-on website hacking (legally & safely)" },
        { time: "7:30 PM", activity: "Defensive security insights" },
        { time: "7:45 PM", activity: "Guidance on cybersecurity careers" },
        { time: "8:00 PM", activity: "Q&A and career guidance" }
      ],
      highlights: [
        "Hands-on website hacking (legally & safely)",
        "Defensive security insights, including Threat Intelligence, SOC, DFIR, Malware Analysis, and SIEM",
        "Guidance on cybersecurity careers and how to get started"
      ],
      engagement: "Participants engaged actively in discussions and demonstrations",
      summary: "The event provided valuable knowledge and practical insights into ethical hacking and cybersecurity. Participants engaged actively in discussions and demonstrations.",
      organizers: "Cyber Community, LBSCEK"
    },
    "one-minute": {
      title: "One Minute Cyber",
      description: "Quick-fire presentations and lightning talks on cybersecurity topics",
      longDescription: "One Minute Cyber is our fast-paced lightning talk series where speakers have exactly one minute to present a cybersecurity concept, tool, or technique. This format encourages concise communication and exposes participants to a wide variety of topics.",
      icon: Clock,
      date: "Bi-weekly",
      time: "7:00 PM - 8:00 PM",
      location: "LBSCEK Auditorium",
      participants: "30+",
      category: "Presentation",
      image: "/cyberpic/cyberpics/onemin.jpg",
      requirements: ["Topic proposal", "1-minute presentation", "Visual aids optional"],
      benefits: ["Public speaking practice", "Knowledge sharing", "Quick learning"],
      schedule: [
        { time: "7:00 PM", activity: "Event Introduction" },
        { time: "7:05 PM", activity: "Lightning Talks (10 speakers)" },
        { time: "7:45 PM", activity: "Q&A Session" },
        { time: "7:55 PM", activity: "Voting & Awards" },
        { time: "8:00 PM", activity: "Networking" }
      ]
    },
    "dark-web": {
      title: "Dark Web",
      description: "Educational sessions on dark web monitoring and threat intelligence",
      longDescription: "Dark Web sessions provide educational content about dark web monitoring, threat intelligence gathering, and understanding the underground cyber economy. These sessions are designed for educational purposes and responsible disclosure practices.",
      icon: Eye,
      date: "Monthly",
      time: "3:00 PM - 5:00 PM",
      location: "LBSCEK Security Lab",
      participants: "40+",
      category: "Education",
      image: "/cyberpic/cyberpics/darkweb.jpg",
      requirements: ["Security clearance", "Educational purpose only", "Ethical guidelines"],
      benefits: ["Threat intelligence skills", "Understanding of dark web", "Security awareness"],
      schedule: [
        { time: "3:00 PM", activity: "Introduction & Safety Guidelines" },
        { time: "3:15 PM", activity: "Dark Web Overview" },
        { time: "3:45 PM", activity: "Monitoring Techniques" },
        { time: "4:15 PM", activity: "Threat Intelligence" },
        { time: "4:45 PM", activity: "Q&A & Discussion" }
      ]
    },
    "6g-workshop": {
      title: "6G Workshop",
      description: "Advanced workshop on 6G network security and emerging technologies",
      longDescription: "The session aimed to provide an in-depth understanding of upcoming 6G technology, its applications, and its impact on the future of wireless communication. Participants gained exposure to industry perspectives and future trends in wireless technology.",
      icon: Shield,
      date: "Quarterly",
      time: "9:00 AM - 4:00 PM",
      location: "Advanced Networking Lab",
      participants: "36",
      category: "Workshop",
      requirements: ["Networking background", "Advanced registration", "Laptop required"],
      benefits: ["Understanding the fundamentals of 6G", "Exposure to industry perspectives and future trends", "Certification and activity points for participants"],
      schedule: [
        { time: "9:00 AM", activity: "Introduction to 6G technology" },
        { time: "10:30 AM", activity: "Discussion on expected advancements and challenges" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Real-world applications and industry trends" },
        { time: "3:00 PM", activity: "Interactive Q&A session" },
        { time: "4:00 PM", activity: "Discussions on future developments in wireless technology" }
      ],
      highlights: [
        "Introduction to 6G technology",
        "Discussion on expected advancements and challenges", 
        "Real-world applications and industry trends"
      ],
      engagement: "Interactive Q&A session, discussions on future developments in wireless technology",
      summary: "The event was well-received, providing participants with valuable insights into 6G technology. The session was interactive, and attendees actively participated in discussions."
    },
    "bug-bounty": {
      title: "ETHICAL HACKING AND BUG BOUNTY",
      description: "Responsible disclosure program and vulnerability hunting sessions",
      longDescription: "The workshop aimed to introduce participants to ethical hacking techniques and bug bounty practices, equipping them with skills to identify security vulnerabilities. The session included hands-on activities, live hacking demonstrations, and interactive Q&A sessions.",
      icon: Shield,
      date: "JAN 30, 2025",
      time: "1:30 PM - 4:30 PM",
      location: "SDPK LAB, LBSCEK",
      participants: "21",
      category: "Security",
      requirements: ["Ethical hacking skills", "Responsible disclosure", "Code of conduct"],
      benefits: ["Understanding of ethical hacking methodologies", "Hands-on experience with bug bounty programs", "Recognition for top performers"],
      schedule: [
        { time: "1:30 PM", activity: "Introduction to ethical hacking and cybersecurity" },
        { time: "2:30 PM", activity: "Hands-on bug bounty session" },
        { time: "3:30 PM", activity: "Live demonstrations of security vulnerabilities" },
        { time: "4:00 PM", activity: "Interactive Q&A session" },
        { time: "4:30 PM", activity: "Recognition for top performers" }
      ],
      highlights: [
        "Introduction to ethical hacking and cybersecurity",
        "Hands-on bug bounty session",
        "Live demonstrations of security vulnerabilities"
      ],
      engagement: "Hands-on activities, live hacking demonstrations, interactive Q&A session",
      summary: "The workshop successfully engaged participants with practical exercises and real-world cybersecurity applications.",
      organizers: "Cyber Community, LBSCEK",
      coordinators: "ABIN NR",
      speakers: "ATHUL NAGARAJ NAMBIAR & DEVADATH A"
    }
  };

  const event = events[eventId as keyof typeof events];

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested event could not be found.</p>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-cyber-accent/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
          
          {/* Event Image */}
          {(event as any).image && (
            <div className="mb-8">
              <img 
                src={(event as any).image} 
                alt={event.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
          {/* Event Gallery for hack-the-weeks */}
          {eventId === "hack-the-weeks" && (event as any).gallery && (
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {(event as any).gallery.map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Hack the Weeks Gallery ${idx + 1}`}
                  className="w-full h-56 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          )}
          
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 rounded-full bg-gradient-cyber">
              <event.icon className="h-12 w-12 text-cyber-dark" />
            </div>
            <div>
              <Badge variant="secondary" className="bg-gradient-cyber text-cyber-dark mb-2">
                {event.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {event.title}
              </h1>
              <p className="text-xl text-muted-foreground mt-2">
                {event.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-cyber-accent" />
              <div>
                <div className="font-semibold">Frequency</div>
                <div className="text-muted-foreground">{event.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-cyber-accent" />
              <div>
                <div className="font-semibold">Duration</div>
                <div className="text-muted-foreground">{event.time}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cyber-accent" />
              <div>
                <div className="font-semibold">Location</div>
                <div className="text-muted-foreground">{event.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-cyber-accent" />
              <div>
                <div className="font-semibold">Participants</div>
                <div className="text-muted-foreground">{event.participants}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">About This Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {event.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Event Highlights */}
              {(event as any).highlights && (
                <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">Event Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {(event as any).highlights.map((highlight: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Participation & Engagement */}
              {(event as any).engagement && (
                <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">Participation & Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-cyber-accent" />
                        <div>
                          <div className="font-semibold">Total Attendees</div>
                          <div className="text-muted-foreground">{event.participants}</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold mb-2">Engagement</div>
                        <p className="text-muted-foreground">{(event as any).engagement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Event Summary */}
              {(event as any).summary && (
                <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">Summary of Event's Success</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {(event as any).summary}
                    </p>
                  </CardContent>
                </Card>
              )}

              <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Event Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {event.schedule.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-cyber-card/30">
                        <div className="font-semibold text-cyber-accent min-w-[80px]">
                          {item.time}
                        </div>
                        <div className="text-muted-foreground">
                          {item.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Target className="h-4 w-4 text-cyber-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-cyber-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Organizing Team */}
              {((event as any).organizers || (event as any).coordinators || (event as any).speakers) && (
                <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">Organizing Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(event as any).organizers && (
                        <div>
                          <div className="font-semibold text-sm">Organizers</div>
                          <div className="text-muted-foreground text-sm">{(event as any).organizers}</div>
                        </div>
                      )}
                      {(event as any).coordinators && (
                        <div>
                          <div className="font-semibold text-sm">Coordinators</div>
                          <div className="text-muted-foreground text-sm">{(event as any).coordinators}</div>
                        </div>
                      )}
                      {(event as any).speakers && (
                        <div>
                          <div className="font-semibold text-sm">Speakers</div>
                          <div className="text-muted-foreground text-sm">{(event as any).speakers}</div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Register Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-cyber text-cyber-dark hover:shadow-card-cyber">
                    <Zap className="mr-2 h-4 w-4" />
                    Join This Event
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Registration is free for LBSCEK members
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail; 