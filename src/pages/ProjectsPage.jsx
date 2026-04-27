import NavigationCard from "../components/NavigationCard";
import ProjectsSection from "../components/ProjectsSection";
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

      <ProjectsSection />
    </>
  );
}
