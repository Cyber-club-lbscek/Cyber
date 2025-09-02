
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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Contributors
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the amazing team of developers and designers behind this
            project.
          </p>
        </motion.div>

        
        <div className="flex flex-wrap justify-center gap-8">
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
              <Card className="bg-cyber-card border-cyber-border hover:shadow-cyber transition-all duration-300 w-64">
                <CardContent className="p-6 flex flex-col items-center relative">
                  {/* Glowing animated ring */}
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-50"></div>
                    <div className="absolute inset-0 rounded-full border border-primary/50 blur-sm"></div>
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyber-border shadow-md">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Contributor Name */}
                  <h3 className="text-lg font-semibold text-foreground">
                    {person.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {person.MailId}
                  </p>

                  {/* GitHub Link */}
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline text-sm"
                  >
                    <Github className="w-4 h-4" /> GitHub
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
