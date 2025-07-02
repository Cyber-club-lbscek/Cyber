import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@lbscek.edu",
      description: "Get in touch with us"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "LBSCEK Campus",
      description: "Visit our cyber lab"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXX XXX XXXX",
      description: "Call us directly"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
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
          <Card className="bg-cyber-card border-cyber-border animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-cyber-dark border-cyber-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-cyber-dark border-cyber-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-cyber-dark border-cyber-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="How can we help?" 
                    className="bg-cyber-dark border-cyber-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={5}
                    className="bg-cyber-dark border-cyber-border focus:border-primary resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-cyber hover:shadow-cyber-glow transition-all duration-300">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
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
                            {info.value}
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