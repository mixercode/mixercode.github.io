import React from "react";

export default function DottedBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0d111a] overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-30
                   bg-[radial-gradient(#677398_1px,transparent_1px)] 
                   bg-[size:32px_32px] 
                   [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]
                   "
      />
      
      {/* Dynamic Glow Orbs for more elegance */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
