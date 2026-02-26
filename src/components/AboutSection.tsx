import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "3", label: "Challenge Tracks", description: "AI, IoT, and Web3 innovation" },
  { number: "30+", label: "Mentors", description: "Industry experts and leaders" },
  { number: "10+", label: "Workshops", description: "Hands-on learning sessions" },
  { number: "500", label: "Participants", description: "Diverse community of builders" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 border-b border-border" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter">
            Stronger <span className="text-primary">India</span><br />
            starts here
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Build prototypes that strengthen India's technological sovereignty with real  
            impact and expert support.
          </p>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="border-2 border-border rounded-2xl p-10 text-center card-hover group bg-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="font-bold text-base md:text-lg text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
