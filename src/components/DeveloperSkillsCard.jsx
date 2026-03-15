import WindowsCard from "./WindowsCard";
export default function DeveloperSkillsCard() {
  return (
    <WindowsCard>
      <div className="font-mono text-xs sm:text-sm lg:text-base text-[#d4d4d4] p-2">
        <div className="flex">
          <span className="w-8 select-none text-gray-500">1</span>
          <p>
            <span className="text-[#c586c0]">const</span>{" "}
            <span className="text-[#4fc1ff]">developerSkills</span>{" "}
            <span className="text-[#d4d4d4]">=</span> {"{"}
          </p>
        </div>

        <div className="flex">
          <span className="w-8 select-none text-gray-500">2</span>
          <p className="pl-4">
            <span className="text-[#9cdcfe]">backend:</span> {"["}
            <span className="text-[#ce9178]">'Node.js'</span>,{" "}
            <span className="text-[#ce9178]">'Next.js'</span>,{" "}
            <span className="text-[#ce9178]">'AWS'</span>, {"],"}
          </p>
        </div>

        <div className="flex">
          <span className="w-8 select-none text-gray-500">3</span>
          <p className="pl-4">
            <span className="text-[#9cdcfe]">frontend:</span> {"["}
            <span className="text-[#ce9178]">'React'</span>,{" "}
            <span className="text-[#ce9178]">'Next.js'</span>,{" "}
            <span className="text-[#ce9178]">'Tailwind'</span>
            {"],"}
          </p>
        </div>

        <div className="flex">
          <span className="w-8 select-none text-gray-500">4</span>
          <p className="pl-4">
            <span className="text-[#9cdcfe]">mobile:</span> {"["}
            <span className="text-[#ce9178]">'React Native'</span>
            {"]"}
          </p>
        </div>

        <div className="flex">
          <span className="w-8 select-none text-gray-500">5</span>
          <p>{"};"}</p>
        </div>
      </div>
    </WindowsCard>
  );
}
