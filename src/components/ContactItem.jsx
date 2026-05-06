import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

export default function ContactItem({ icon: Icon, label, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (label === "Ubicación") return;
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className="group flex items-center gap-4 rounded-2xl p-2 hover:bg-white/5 transition-all duration-300 ring-1 ring-transparent hover:ring-white/5 cursor-pointer relative"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
        <Icon size={20} className="text-blue-400" />
      </div>

      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-0.5">
          {label}
        </span>
        <span className="text-sm text-white/90 font-medium truncate group-hover:text-white transition-colors duration-300">
          {value}
        </span>
      </div>
      {label !== "Ubicación" && (
        <div className="mr-2 transition-opacity">
          {copied ? (
            <FiCheck className="text-green-400" size={16} />
          ) : (
            <FiCopy className="text-white/20" size={16} />
          )}
        </div>
      )}
    </div>
  );
}
