import { Cpu, Zap, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tracks = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Build intelligent systems, NLP tools, and ML-powered solutions that solve real-world problems.",
  },
  {
    icon: Zap,
    title: "IoT & Smart Systems",
    description: "Develop monitoring, automation, and analytics solutions for connected devices and smart infrastructure.",
  },
  {
    icon: Rocket,
    title: "Web3 & Emerging Tech",
    description: "Create decentralized applications, blockchain solutions, and next-generation web experiences.",
  },
];

const TracksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tracks" className="py-32 border-b border-border bg-secondary" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
            Three Challenge{" "}
            <span className="text-primary">Tracks</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your focus area and build solutions that address the most critical technology challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              className="bg-background border-2 border-border hover:border-primary rounded-2xl p-12 card-hover group transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <track.icon className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
              <h3 className="text-xl md:text-2xl font-bold mb-4">{track.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
