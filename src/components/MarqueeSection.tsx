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
        <img key={i} src={logoIconBlack} alt="REVA RIFT" className="h-10 mx-8 opacity-40" />
      ) : (
        <span key={i} className="mx-8 font-bold text-base md:text-lg tracking-widest text-foreground/60 whitespace-nowrap">
          {item.label}
        </span>
      )
    );

  return (
    <div className="border-y border-border py-6 overflow-hidden bg-secondary">
      <div className="flex animate-marquee">
        <div className="flex items-center shrink-0">{renderItems()}</div>
        <div className="flex items-center shrink-0">{renderItems()}</div>
      </div>
    </div>
  );
};

export default MarqueeSection;
