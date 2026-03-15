import NavigationCard from "../components/NavigationCard";
import DeveloperSkillsCard from "../components/developerSkillsCard";
import TecnologyIconsCard from "../components/TechnologyIconsCard";

export default function AboutPage() {
  return (
    <>
      <NavigationCard title="Sobre mi">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <article className="flex-[1.5] space-y-4">
            <p className="text-lg leading-relaxed text-white/90 text-left">
              Mi nombre es{" "}
              <span className="text-white font-semibold">Miguel</span>, tengo 27
              años y soy graduado en Sistemas Computacionales. Apasionado por la
              tecnología y con un firme compromiso con el aprendizaje continuo.
            </p>
            <p className="text-base leading-relaxed text-white/80 text-left">
              Poseo una sólida base en sistemas, respaldada por mi formación
              académica. Mi entusiasmo por las últimas tendencias tecnológicas y
              mi habilidad para adaptarme rápidamente a nuevas herramientas me
              permiten mantenerme actualizado en un entorno de constante
              evolución.
            </p>
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
        <h2 className="text-3xl font-bold text-gray-100 ">
          Tecnologías que manejo
        </h2>
      </div>

      <TecnologyIconsCard />
    </>
  );
}
