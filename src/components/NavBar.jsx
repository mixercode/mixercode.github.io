import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/certificates", label: "Certificates" },
];

export default function NavBar() {
  return (
    <nav className="backdrop-blur-md bg-[#151926cc] border border-[#2A2F3E] rounded-full overflow-hidden px-8 py-4 min-w-[300px] shadow-lg">
      <ul className="flex flex-row gap-8 items-center justify-center">
        {NAV_ITEMS.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              end
              className={
                ({ isActive }) =>
                  isActive
                    ? "relative group flex flex-col items-center justify-center text-sm font-bold uppercase tracking-widest text-[#3b82f6]" // ESTADO ACTIVO (Solo azul)
                    : "relative group flex flex-col items-center justify-center text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-300" // ESTADO INACTIVO (Gris y blanco al hacer hover)
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {/* Línea indicadora inferior */}
                  <span
                    className={`absolute -bottom-1 h-0.5 bg-[#3b82f6] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
