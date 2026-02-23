import Card from "./Card";
import NavBar from "./NavBar";

export default function NavigationCard({ title, children }) {
  return (
    <Card className="relative w-full max-w-5xl mx-auto min-h-87.5 p-10 overflow-visible ">
      <div className="absolute -top-5 left-6 z-10">
        <NavBar />
      </div>

      <div className="flex flex-col gap-8 h-full w-full">
        <div className="relative">
          <h2 className="text-4xl font-bold text-gray-100 mb-2">{title}</h2>

          <div className="h-0.5 w-full bg-linear-to-r from-[#164AE8] from-0% to-[#164AE800] to-100% opacity-20 " />
        </div>

        <div className="text-gray-300 leading-relaxed h-full">{children}</div>
      </div>
    </Card>
  );
}
