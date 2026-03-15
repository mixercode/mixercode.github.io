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

export default function TechnologyIconsCard() {
  return (
    <>
      <Card className="flex flex-wrap gap-20 justify-center items-center p-6">
        <SiHtml5 size={48} />
        <FaCss3Alt size={48} />
        <SiJavascript size={48} />
        <SiReact size={48} />
        <SiTailwindcss size={48} />
        <SiTypescript size={48} />
      </Card>

      <Card className="flex flex-wrap gap-15 justify-center items-center p-6 mt-6">
        <SiNodedotjs size={48} />
        <SiNextdotjs size={48} />
        <SiNginx size={48} />
        <SiNodemon size={48} />
        <FaAws size={48} />
        <BiLogoPostgresql size={48} />
        <SiMysql size={48} />
      </Card>
      <Card className="flex flex-wrap gap-20 justify-center items-center p-6 mt-6">
        <SiGitlab size={48} />
        <SiGit size={48} />
        <SiExpo size={48} />
        <FaGooglePlay size={48} />
        <FaAppStoreIos size={48} />
      </Card>
    </>
  );
}
