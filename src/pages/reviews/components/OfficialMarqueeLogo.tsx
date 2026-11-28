import { officialMarqueeLogos } from "./official-marquee-logos";

export default function OfficialMarqueeLogo({ company, size }: { company: string; size?: number }) {
  const logo = officialMarqueeLogos[company];
  if (!logo) return null;

  return (
    <img
      src={logo.localSrc}
      alt={`${company === "HCL" ? "HCLTech" : company} logo`}
      width={size ?? logo.width}
      height={size ?? logo.height}
      loading="eager"
      decoding="async"
      draggable={false}
      referrerPolicy="no-referrer"
      data-official-company-logo={company}
      className="shrink-0 object-contain"
      style={{ width: size ?? logo.width, height: size ?? logo.height, objectFit: "contain" }}
    />
  );
}
