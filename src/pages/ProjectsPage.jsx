import NavigationCard from "../components/NavigationCard";
import ProjectsSection from "../components/ProjectsSection";
import WindowsCard from "../components/WindowsCard";
import { PROJECTS_DATA, PROJECTS_TEXT } from "../data/portafolioData";

export default function ProjectsPage() {
  return (
    <>
      <NavigationCard title={"Proyectos Destacados"}>
        <section className="flex flex-col gap-8">
          <div className="space-y-4">
            {PROJECTS_TEXT.paragraphs.map((text, index) => (
              <p
                key={index}
                className="w-full text-left text-base leading-relaxed text-white/80"
              >
                {text}
              </p>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Retos Técnicos y Soluciones
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROJECTS_DATA.map((project) => (
                <li
                  key={project.id}
                  className="flex flex-col justify-between bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <h4 className="text-white font-medium text-base mb-2">
                      {project.title}
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </NavigationCard>

      <ProjectsSection />
    </>
  );
}
