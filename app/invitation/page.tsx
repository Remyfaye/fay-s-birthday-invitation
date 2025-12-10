"use client";

import { useState } from "react";
import EnvelopeAnimation from "@/components/EnvelopeAnimation";
import InvitationCard from "@/components/InvitationCard";

export default function InvitationPage() {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!showCard ? (
        <EnvelopeAnimation onFinish={() => setShowCard(true)} />
      ) : (
        <InvitationCard />
      )}
    </div>
  );
}
