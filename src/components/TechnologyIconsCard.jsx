import Card from "./Card";
import {
  SiHtml5,
  SiCsswizardry,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiNginx,
  SiNodemon,
  SiExpo,
  SiTypescript,
  SiGit,
  SiMysql,
  SiGitlab,
} from "react-icons/si";

import { FaAws, FaCss3Alt, FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

import { BiLogoPostgresql } from "react-icons/bi";

const TECH_STACK = [
  { icon: SiHtml5, color: "#E34F26", label: "HTML5" },
  { icon: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  { icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { icon: SiReact, color: "#61DAFB", label: "React" },
  { icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
  { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind" },
  { icon: SiNodedotjs, color: "#339933", label: "Node.js" },
  { icon: BiLogoPostgresql, color: "#4169E1", label: "PostgreSQL" },
  { icon: SiMysql, color: "#4479A1", label: "MySQL" },
  { icon: SiGit, color: "#F05032", label: "Git" },
  { icon: SiGitlab, color: "#FC6D26", label: "GitLab" },
  { icon: FaAws, color: "#FF9900", label: "AWS" },
  { icon: SiNginx, color: "#009639", label: "Nginx" },
  { icon: SiExpo, color: "#ffffff", label: "Expo" },
  { icon: FaGooglePlay, color: "#3DDC84", label: "Play Store" },
  { icon: FaAppStoreIos, color: "#007AFF", label: "App Store" },
];

export default function TechnologyIconsCard() {
  return (
    <Card className="p-6 md:p-10">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-9 gap-6 md:gap-8 lg:gap-10">
        {TECH_STACK.map(({ icon: Icon, color, label }) => (
          <div
            key={label}
            className="group relative flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shadow-lg">
              <Icon
                size={32}
                style={{ color: "white", "--hover-color": color }}
                className="transition-colors duration-500 group-hover:text-(--hover-color)!"
              />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: color }}
              />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
