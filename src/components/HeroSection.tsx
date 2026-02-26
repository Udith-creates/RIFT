import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-28 border-b border-border overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative z-10 container text-center flex flex-col items-center gap-12 px-4">
        {/* Date & Location pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-foreground/15 text-sm font-medium text-muted-foreground hover:border-primary/40 transition-all cursor-default">
            <Calendar size={16} strokeWidth={2} />
            <span className="font-semibold">MARCH 08–11, 2026</span>
          </span>
          <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-foreground/15 text-sm font-medium text-muted-foreground hover:border-primary/40 transition-all cursor-default">
            <MapPin size={16} strokeWidth={2} />
            <span className="font-semibold">REVA UNIVERSITY, BANGALORE</span>
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Build <span className="text-primary">India's</span><br />
          Tech Sovereignty
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Join hundreds of engineers, designers, and researchers in Bangalore to prototype 
          solutions that strengthen India's technological independence and critical infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="#tracks"
            className="btn-shine inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity"
          >
            Explore Tracks
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground px-8 py-4 rounded-full font-bold text-base hover:border-primary hover:text-primary transition-colors"
          >
            View Schedule
          </a>
        </motion.div>

        {/* Organizers */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex items-center gap-2">
            <span>Organized by:</span>
            <span className="font-bold text-foreground">REVA University</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
