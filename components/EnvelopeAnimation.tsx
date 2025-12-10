"use client";

import { useEffect, useState } from "react";

export default function EnvelopeAnimation({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 800); // flap opens
    setTimeout(onFinish, 2600); // show card
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-6">
      <div className="relative lg:w-[90vh] lg:h-[60vh] w-80 h-72">
        {/* Envelope Body */}
        <div className="absolute inset-0 bg-[#0a0a0a] border-2 border-[#c8a34b] rounded-md shadow-lg"></div>

        {/* Envelope Flap */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-[#111] border-2 border-[#c8a34b] rounded-md origin-top transition-transform duration-700 ${
            open ? "rotate-x-110" : "rotate-x-0"
          }`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 70%)",
            transformStyle: "preserve-3d",
          }}
        />

        {/* Card sliding out */}
        <img
          src="/invitation.png"
          className={`absolute border-2 border-[#c8a34b] left-1/2 transform -translate-x-1/2 w-[90%] rounded-md shadow-xl transition-all duration-[1400ms] ${
            open ? "-top-20 opacity-100" : "top-6 opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
