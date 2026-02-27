import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Placeholder partner data - replace with actual logos and links
const partners = {
  organized: [
    { name: "REVA University", role: "Organizer" },
  ],
  coOrganized: [
    { name: "Industry Partner 1", role: "Co-organizer" },
    { name: "Industry Partner 2", role: "Co-organizer" },
  ],
  partners: [
    { name: "Tech Partner 1" },
    { name: "Tech Partner 2" },
    { name: "Tech Partner 3" },
    { name: "Tech Partner 4" },
    { name: "Tech Partner 5" },
    { name: "Tech Partner 6" },
  ],
};

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 border-b border-border bg-secondary" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title mb-6">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Supported by leading organizations in technology and innovation
          </p>
        </motion.div>

        {/* Organized by */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-8">
              Organized by
            </h3>
          </div>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {partners.organized.map((partner, i) => (
              <div
                key={i}
                className="bg-background border-2 border-border rounded-2xl px-12 py-8 hover:border-primary transition-all card-hover"
              >
                <div className="text-xl font-bold text-center">{partner.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Co-organized by */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-8">
              Co-organized by
            </h3>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {partners.coOrganized.map((partner, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-xl px-10 py-6 hover:border-primary transition-all card-hover"
              >
                <div className="text-lg font-semibold text-center">{partner.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-8">
              In Partnership with
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {partners.partners.map((partner, i) => (
              <motion.div
                key={i}
                className="bg-background border border-border rounded-lg px-6 py-8 flex items-center justify-center hover:border-primary transition-all card-hover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              >
                <div className="text-sm font-medium text-center text-muted-foreground">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sponsorship CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in sponsoring or partnering with REVA RIFT?
          </p>
          <a
            href="mailto:revarift@reva.edu.in"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-bold text-base hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
