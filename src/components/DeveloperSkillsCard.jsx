import WindowsCard from "./WindowsCard";

const softSkillsData = {
  collaboration: ["Trabajo en Equipo", "Git Workflow", "Comunicación Asertiva"],
  problemSolving: ["Análisis Crítico", "Lógica Estructural", "Autogestión"],
  adaptability: ["Aprendizaje Continuo", "Resiliencia", "Flexibilidad"],
};

export default function SoftSkillsCard() {
  const skillsEntries = Object.entries(softSkillsData);

  return (
    <WindowsCard>
      <div className="font-mono text-[10px] sm:text-xs md:text-sm text-[#d4d4d4] p-3 md:p-4 bg-[#1e1e1e]/50 backdrop-blur-sm rounded-b-xl overflow-x-auto custom-scrollbar">
        <div className="flex">
          <span className="w-6 md:w-8 select-none text-gray-600 text-right pr-2 md:pr-4">1</span>
          <p>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#4fc1ff]">softSkills</span>{" "}
            <span className="text-[#d4d4d4]">=</span> {"{"}
          </p>
        </div>

        {skillsEntries.map(([category, skills], index) => {
          const lineNumber = index + 2;

          return (
            <div className="flex group hover:bg-white/5 transition-colors duration-200" key={category}>
              <span className="w-6 md:w-8 select-none text-gray-600 text-right pr-2 md:pr-4">
                {lineNumber}
              </span>
              <p className="pl-4">
                <span className="text-[#9cdcfe]">{category}:</span> {"["}
                <span className="flex flex-wrap gap-x-2 gap-y-1 inline-flex ml-2">
                  {skills.map((skill, i) => (
                    <span key={skill}>
                      <span className="text-[#ce9178]">"{skill}"</span>
                      {i < skills.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </span>
                {"],"}
              </p>
            </div>
          );
        })}

        <div className="flex">
          <span className="w-6 md:w-8 select-none text-gray-600 text-right pr-2 md:pr-4">
            {skillsEntries.length + 2}
          </span>
          <p>{"};"}</p>
        </div>
      </div>
    </WindowsCard>
  );
}
