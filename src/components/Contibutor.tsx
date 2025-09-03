
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const ContributorsSection = () => {
  const contributors = [
    {
      name: "ABIN NR",
      MailId: "abinnr12345@gmail.com",
      image: "Abin.jpg",
      github: "https://github.com/Abinnr",
    },
    {
      name: "BINIL.P",
      MailId: "binilp24@gmail.com",
      image: "Binil.jpg",
      github: "https://github.com/BINILLBS2003",
    },
    {
      name: "FATHIMA RASHA",
      MailId: "rashapaath@gmail.com",
      image: "Rasha.jpg",
      github: "https://github.com/Rashapaath",
    },
  ];

  return (
  <section className="py-8 relative overflow-hidden" style={{ backgroundColor: '#212121' }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Website{" "}
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Contributors
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Meet the team behind this project.
          </p>
        </motion.div>

        
  <div className="flex flex-wrap justify-center gap-3">
          {contributors.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-cyber-card border-cyber-border hover:shadow-cyber transition-all duration-300 w-36">
                <CardContent className="p-2 flex flex-col items-center relative">
                  {/* Glowing animated ring */}
                  <div className="relative w-12 h-12 mb-2">
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-50"></div>
                    <div className="absolute inset-0 rounded-full border border-primary/50 blur-sm"></div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyber-border shadow-md">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Contributor Name */}
                  <h3 className="text-sm font-semibold text-foreground">
                    {person.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {person.MailId}
                  </p>

                  {/* GitHub Link */}
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline text-xs"
                  >
                    <Github className="w-3 h-3" /> GitHub
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background cyber glow animation */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500"></div>
    </section>
  );
};

export default ContributorsSection;
