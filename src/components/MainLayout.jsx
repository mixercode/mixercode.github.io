import { Outlet } from "react-router-dom";
import InfoCard from "./InfoCard";
import DottedBackground from "./DottedBackground";

const USER_INFO = {
  name: "José Miguel Flores Flores",
  location: "Puebla, México",
  email: "jmiguel.flores121@gmail.com",
  cellphone: "+52 2226105309",
};

export default function MainLayout() {
  return (
    <DottedBackground>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-80 lg:sticky lg:top-12 h-fit shrink-0 z-20">
          <InfoCard
            name={USER_INFO.name}
            location={USER_INFO.location}
            email={USER_INFO.email}
            cellphone={USER_INFO.cellphone}
          />
        </aside>
        <main className="flex-1 min-w-0 z-10">
          <Outlet />
        </main>
      </div>
    </DottedBackground>
  );
}
