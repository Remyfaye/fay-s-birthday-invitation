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
        <div className="absolute inset-0 bg-[#0a0a0a] border-2 border-[#c8a34b] rounded-md shadow-lg">
          {/* ⭐ GOLDEN SEAL (NEW) */}
          <div
            className="
              absolute 
              left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-1/2 
              w-16 h-16 
              bg-[#c8a34b]
              rounded-full 
              flex items-center justify-center 
              text-black 
              font-semibold 
              text-lg
              shadow-[0_0_20px_rgba(200,163,75,0.6)]
              border-2 border-[#f1d28a]
            "
          >
            fay
          </div>
        </div>

        {/* Envelope Flap */}
        <div
          className={`absolute top-0 left-0 w-full h-full border-2 border-[#c8a34b] rounded-md origin-top transition-transform duration-700 ${
            open ? "rotate-x-110" : "rotate-x-0"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #d4b46f 0%, #c8a34b 40%, #a8832a 100%)",
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
