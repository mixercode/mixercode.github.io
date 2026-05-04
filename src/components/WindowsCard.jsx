import { RxDotFilled } from "react-icons/rx";

const WINDOW_CONTROLS = [
  { id: "close", color: "#7e2b2f" },
  { id: "minimize", color: "#7b6311" },
  { id: "maximize", color: "#176c3c" },
];

export default function WindowCard({ children }) {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-[#1e1e1e]/80 backdrop-blur-md shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold select-none">
            soft-skills.js
          </span>
        </div>
        <div className="w-12" /> {/* Spacer to center title */}
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
