import React from "react";

export default function DottedBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0A0D14] overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-70
                   bg-[radial-gradient(#677398_1.5px,transparent_1.5px)] 
                   bg-size-[40px_40px] 
                   mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]
                   "
      />
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
}
