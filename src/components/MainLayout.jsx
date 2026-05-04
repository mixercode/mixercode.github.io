import { Outlet } from "react-router-dom";
import { useRef } from "react";
import InfoCard from "./InfoCard";
import DottedBackground from "./DottedBackground";
import { GlobalSpotlight } from "./ReactBits/MagicBento";

const USER_INFO = {
  name: "José Miguel Flores Flores",
  location: "Puebla, México",
  email: "jmiguel.flores121@gmail.com",
  cellphone: "+52 2226105309",
};

export default function MainLayout() {
  const layoutRef = useRef(null);

  return (
    <DottedBackground>
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-12 flex flex-col lg:flex-row gap-12 md:gap-8 lg:gap-12"
        ref={layoutRef}
      >
        <GlobalSpotlight
          gridRef={layoutRef}
          spotlightRadius={300}
          glowColor="22, 74, 232"
          cardSelector=".spotlight-card"
        />
        
        <aside className="w-full lg:w-80 lg:sticky lg:top-12 h-fit shrink-0">
          <InfoCard
            name={USER_INFO.name}
            location={USER_INFO.location}
            email={USER_INFO.email}
            cellphone={USER_INFO.cellphone}
          />
        </aside>

        <main className="flex-1 min-w-0 space-y-8">
          <Outlet />
        </main>
      </div>
    </DottedBackground>
  );
}
