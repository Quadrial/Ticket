import { useState, useEffect } from "react";
import Ticket from "../Tickets/Ticket";

export default function StagedForm() {
  const [stage, setStage] = useState(1);
  const [showIntro, setShowIntro] = useState(true);
  const totalStages = 4;

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
      <div className="flex items-center justify-center min-h-screen bg-red-500 text-white text-2xl font-bold">
        Welcome to Stages
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center text-lg font-semibold mb-4">
          Stage {stage} / {totalStages}
        </div>
        
        <div className="p-4 text-center text-gray-700">
          {stage === 1 && <p>Welcome to Stage 1</p>}
          {stage === 2 && <p>You're now in Stage 2</p>}
          {stage === 3 && <p>This is Stage 3</p>}
          {stage === 4 && <p>Final Stage! You've made it.</p>}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={prevStage}
            disabled={stage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={nextStage}
            disabled={stage === totalStages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
