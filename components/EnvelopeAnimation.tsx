"use client";

import { useEffect, useState } from "react";

export default function EnvelopeAnimation({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 1000);
    setTimeout(onFinish, 2500);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/envelope.png"
        className={`w-72 transition-all duration-700 ${
          open ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
      />

      {!open && <p className="mt-4 text-gray-600 animate-pulse">Opening...</p>}
    </div>
  );
}
