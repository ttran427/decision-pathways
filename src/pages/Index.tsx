import { useState } from "react";
import { DecisionCard } from "@/components/Decision";
import { decisions } from "@/lib/decisions";

const Index = () => {
  const [currentDecisionId, setCurrentDecisionId] = useState("start");

  const handleChoice = (nextId: string) => {
    setCurrentDecisionId(nextId);
  };

  return (
    <div className="min-h-screen bg-story-background flex items-center justify-center p-4">
      <DecisionCard
        decision={decisions[currentDecisionId]}
        onChoice={handleChoice}
      />
    </div>
  );
};

export default Index;