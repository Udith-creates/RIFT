import logoFullWhite from "@/assets/logo/main_full_white.png";
import { Linkedin, Twitter, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 bg-foreground text-background border-t border-background/10 dark-section-lines">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-12 mb-16">
          <img src={logoFullWhite} alt="REVA RIFT" className="h-12" />
          
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">REVA RIFT 2026</h3>
            <p className="text-background/60 text-base leading-relaxed">
              A flagship hackathon by REVA University, Bangalore. Build the future of India's technological sovereignty.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-background/60">
            <span className="inline-flex items-center gap-2">
              <span className="font-semibold text-background/80">March 8-11, 2026</span>
              <span>|</span>
              <span>REVA University, Bangalore</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-t border-background/10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#about" className="text-sm text-background/60 hover:text-primary transition-colors">About</a>
            <a href="#schedule" className="text-sm text-background/60 hover:text-primary transition-colors">Schedule</a>
            <a href="#tracks" className="text-sm text-background/60 hover:text-primary transition-colors">Tracks</a>
            <a href="mailto:revarift@reva.edu.in" className="text-sm text-background/60 hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="mailto:revarift@reva.edu.in" className="text-background/60 hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/40">
          © 2026 REVA RIFT. All rights reserved. Organized by REVA University.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
