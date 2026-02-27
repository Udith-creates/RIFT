import logoIconBlack from "@/assets/logo/alt_R_black.png";

const items = [
  { type: "text" as const, label: "REVA RIFT 2026" },
  { type: "icon" as const },
  { type: "text" as const, label: "4 DAYS OF INNOVATION" },
  { type: "icon" as const },
  { type: "text" as const, label: "500+ PARTICIPANTS" },
  { type: "icon" as const },
  { type: "text" as const, label: "BUILD • CREATE • DISRUPT" },
  { type: "icon" as const },
];

const MarqueeSection = () => {
  const renderItems = () =>
    items.map((item, i) =>
      item.type === "icon" ? (
        <img key={i} src={logoIconBlack} alt="REVA RIFT" className="h-11 mx-8 opacity-80" />
      ) : (
        <span key={i} className="mx-8 font-bold text-base md:text-lg tracking-widest text-foreground whitespace-nowrap">
          {item.label}
        </span>
      )
    );

  return (
    <div className="marquee-shell border-y border-foreground/30 py-6 overflow-hidden bg-background">
      <div className="marquee-content">
        <div className="flex animate-marquee">
          <div className="flex items-center shrink-0">{renderItems()}</div>
          <div className="flex items-center shrink-0">{renderItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
