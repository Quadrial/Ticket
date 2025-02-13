import { useState, useEffect } from "react";
import Ticket from "./Ticket"; // Stage 1
import StageTwo from "./StageTwo"; // Stage 2
import StageThree from "./StageThree"; // Stage 3

export default function StageNavigator() {
  const [stage, setStage] = useState(1);
  const totalStages = 3;
  const [showIntro, setShowIntro] = useState(true);
 

  // State for storing ticket selection
  const [ticketData, setTicketData] = useState({
    name: "",
    email: "",
    ticketType: "",
    ticketFor: "",
    image: null,
  });

  const [selectedTicket, setSelectedTicket] = useState("");
  const [selectedCount, setSelectedCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const nextStage = () => {
    if (stage < totalStages) setStage(stage + 1);
  };

  const prevStage = () => {
    if (stage > 1) setStage(stage - 1);
  };

  if (showIntro) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0E464F] text-white text-2xl font-bold">
        Book Your Ticket Now !!!
      </div>
    );
  }

  return (
    <div>
      {/* Render Current Stage */}
      {stage === 1 && (
        <Ticket
          nextStage={nextStage}
          selectedTicket={selectedTicket}
          setSelectedTicket={setSelectedTicket}
          selectedCount={selectedCount}
          setSelectedCount={setSelectedCount}
        />
      )}
      {stage === 2 && (
        <StageTwo
          nextStage={nextStage}
          prevStage={prevStage}
          setTicketData={setTicketData}
        />
      )}
      {stage === 3 && (
        <StageThree
          prevStage={prevStage}
          ticketData={ticketData}
          selectedTicket={selectedTicket}
          selectedCount={selectedCount}
        />
      )}
    </div>
  );
}
