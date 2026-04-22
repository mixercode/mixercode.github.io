import NavigationCard from "../components/NavigationCard";
import ProyectsSection from "../components/ProyectsSection";
import WindowsCard from "../components/WindowsCard";

export default function ProjectsPage() {
  return (
    <>
      <NavigationCard title={"Projects"}>
        <div className="flex flex-row gap-10">
          <p className="w-1/2 text-left">
            I'm Miguel, a passionate developer with a love for creating dynamic
            and responsive web applications. With a strong foundation in
            JavaScript and React, I enjoy bringing ideas to life through code.
          </p>
          <WindowsCard>
            <p>asdasdasdsdsdasaasdsdsdsdsaDSdasdasdd</p>
          </WindowsCard>
        </div>
      </NavigationCard>

      <div className="flex flex-row items-center gap-4 mt-10 mb-6">
        <div
          aria-hidden="true"
          className="w-5 h-5 rounded-full border-10 border-[#164ae8] shadow-[0_0_8px_rgba(22,74,232,0.5)]"
        />
        <h2 className="text-3xl font-bold text-gray-100 ">Restaurante</h2>
      </div>
      <ProyectsSection />
    </>
  );
}
