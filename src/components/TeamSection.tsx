import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

const team = [
  {
    name: "DR ANVER SR",
    role: "Faculty Enabler",
    image: "/team/abin.jpg",
    linkedin: "#",
  },
  {
    name: "ABIN NR",
    role: "Campus-Lead",
    image: "Abin.jpg",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
  },
  {
    name: "MARIYAM",
    role: "Campus-CoLead",
    image: "Mariyam.jpg",
    github: "#",
    linkedin: "https://www.linkedin.com/in/mariyam-a-86a083320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "FATHIMA ALEESHA SHERULE",
    role: "Technical-Lead",
    image: "aleesha.jpg",
    github: "https://github.com/aleesha2812",
    linkedin: "http://linkedin.com/in/fathimaaleeshasherule",
  },
  {
    name: "JASIL",
    role: "Technical-CoLead",
    image: "/team/vishnu.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "SHAMIL",
    role: "Technical-CoLead",
    image: "/team/devika.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "ANUSREE",
    role: "Creative-Lead",
    image: "/team/farhan.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "FATHIMA RASHA",
    role: "Creative-CoLead",
    image: "Rasha.jpg",
    github: "https://github.com/Rashapaath",
    linkedin: "https://www.linkedin.com/in/fathima-rasha-2a35b5319",
  },
  {
    name: "ROSHAN",
    role: "Creative-CoLead",
    image: "/.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "ZAYAN",
    role: "Design-Lead",
    image: "/team/nivya.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "TAMANNA",
    role: "Design-CoLead",
    image: "/team/arun.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "BINIL P",
    role: "SocialMedia-Lead",
    image: "Binil.jpg",
    github: "#",
    linkedin: "https://www.linkedin.com/in/binil-p/",
  },
  {
    name: "ROHITH T",
    role: "SocialMedia-CoLead",
    image: "/team/suraj.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "AADHITHYAN KM",
    role: "Finance-Lead",
    image: "Aadithyan.jpg",
    github: "#",
    linkedin: "https://www.linkedin.com/in/aadhithyan-km-86613a345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
  {
    name: "MUHAMMED MINHAJ VS",
    role: "Finance-CoLead",
    image: "Minhaj.jpg",
    github: "#",
    linkedin: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const TeamSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-white">Meet </span>
            <span className="text-[#2CA7F8]">Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            15 minds, one mission — building innovation with passion.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.08, rotateY: 5, rotateX: 5 }}
              className="group"
            >
              <Card className="relative overflow-hidden bg-gradient-to-b from-background/50 to-background/20 border border-primary/30 hover:border-primary/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  {/* Profile Image */}
                  <div className="relative">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full border-4 border-primary/50 object-cover shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 blur-md opacity-60 group-hover:opacity-90 transition duration-300"></div>
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-2">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-white transition-transform transform hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#0077b5] transition-transform transform hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default TeamSection;
