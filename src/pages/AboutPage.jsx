import NavigationCard from "../components/NavigationCard";
import DeveloperSkillsCard from "../components/developerSkillsCard";
import TecnologyIconsCard from "../components/TechnologyIconsCard";
import { ABOUT_ME_DATA } from "../data/portafolioData";

export default function AboutPage() {
  return (
    <>
      <NavigationCard title="Sobre mi">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <article className="flex-[1.5] space-y-4">
            {ABOUT_ME_DATA.paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-left leading-relaxed ${index === 0 ? "text-lg text-white/95 font-medium" : "text-base  text-white/80"}`}
              >
                {index === 0 ? (
                  <>
                    Hola, soy{" "}
                    <strong className="text-white font-bold">
                      {ABOUT_ME_DATA.name}
                    </strong>
                    . {text}
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </article>

          <div className="flex-1 w-full opacity-90 hover:opacity-100 transition-opacity duration-300">
            <DeveloperSkillsCard />
          </div>
        </div>
      </NavigationCard>

      <div className="flex flex-row items-center gap-4 mt-10 mb-6">
        <div
          aria-hidden="true"
          className="w-5 h-5 rounded-full border-10 border-[#164ae8] shadow-[0_0_8px_rgba(22,74,232,0.5)]"
        />
        <h2 className="text-3xl font-bold text-gray-100 ">Stack tecnológico</h2>
      </div>

      <TecnologyIconsCard />
    </>
  );
}
