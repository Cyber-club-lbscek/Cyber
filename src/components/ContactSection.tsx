import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Github, Linkedin, Instagram, Users, Link } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Users,
      title: "WhatsApp Community",
      value: "Join our WhatsApp Community",
      description: "Connect with us on WhatsApp",
      link: "https://chat.whatsapp.com/F5sRopBfJBqLVTKvd0EFQn"
    },
    {
      icon: Link,
      title: "WhatsApp Channel",
      value: "Follow our WhatsApp Channel",
      description: "Stay updated via WhatsApp Channel",
      link: "https://whatsapp.com/channel/0029VaA9wQe9qLKvQKjQyU2v"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@cyberclub_lbscek",
      description: "Follow us on Instagram",
      link: "https://www.instagram.com/cyber_community.lbscek/?utm_source=qr&igsh=dDl1NXh3aDE5cjQz#"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Cyber-club-lbscek",
      description: "Explore our projects",
      link: "https://github.com/Cyber-club-lbscek"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Cyber Club LBSCEK",
      description: "Connect on LinkedIn",
      link: "https://linkedin.com/company/cyber-club-lbscek"
    },
    {
      icon: Mail,
      title: "Email",
      value: "cyber.club.lbscek@gmail.com",
      description: "Email us directly",
      link: "mailto:cyber.club.lbscek@gmail.com"
    }
  ];

  const socialLinks = [
    { icon: Users, name: "WhatsApp Community", href: "https://chat.whatsapp.com/F5sRopBfJBqLVTKvd0EFQn" },
    { icon: Link, name: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029VaA9wQe9qLKvQKjQyU2v" },
    { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/cyber_community.lbscek/?utm_source=qr&igsh=dDl1NXh3aDE5cjQz#" },
    { icon: Github, name: "GitHub", href: "https://github.com/Cyber-club-lbscek" },
    { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/company/cyber-club-lbscek" },
    { icon: Mail, name: "Email", href: "mailto:cyber.club.lbscek@gmail.com" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="bg-gradient-cyber bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to join our cybersecurity community? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-cyber-card/50 border-cyber-border backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-cyber">
                            <info.icon className="h-6 w-6 text-cyber-dark" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-primary font-medium mb-1">
                            <a href={info.link} target="_blank" rel="noopener noreferrer">{info.value}</a>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-cyber-border hover:bg-cyber-border/20 hover:shadow-cyber transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} aria-label={social.name}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;