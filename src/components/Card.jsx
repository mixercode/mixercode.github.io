import { ParticleCard } from "./ReactBits/MagicBento";
import "./ReactBits/MagicBento.css";

export default function Card({
  children,
  className = "",
  allowOverflow = false,
  isRounded = true,
}) {
  const roundedClasses = isRounded ? "rounded-[48px]" : "rounded-[16px]";

  return (
    <ParticleCard
      className={`spotlight-card backdrop-blur-md bg-[#151926]/80 border border-[#2A2F3E] hover:border-indigo-500/30 transition-colors duration-300 ${roundedClasses} shadow-2xl shadow-black/50 ${className}`}
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
