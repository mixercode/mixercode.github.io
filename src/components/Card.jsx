import { ParticleCard } from "./ReactBits/MagicBento";
import "./ReactBits/MagicBento.css";

export default function Card({
  children,
  className = "",
  allowOverflow = false,
  isRounded = true,
}) {
  const roundedClasses = isRounded ? "rounded-[48px]" : "rounded-[15px]";

  return (
    <ParticleCard
      className={`spotlight-card backdrop-blur-md bg-[#151926cc] border border-[#2A2F3E] ${roundedClasses} drop-shadow-2xl ${className}`}
      enableTilt={true}
      clickEffect={true}
      glowColor="22, 74, 232"
      particleCount={12}
      allowOverflow={allowOverflow}
      style={{
        "--glow-radius": "400px",
      }}
    >
      {children}
    </ParticleCard>
  );
}
