import { useState } from "react";
import { DecisionCard } from "@/components/Decision";
import { decisions } from "@/lib/decisions";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentDecisionId, setCurrentDecisionId] = useState("start");
  const [history, setHistory] = useState<string[]>([]);

  const handleChoice = (nextId: string) => {
    setHistory((prev) => [...prev, currentDecisionId]);
    setCurrentDecisionId(nextId);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const previousDecision = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setCurrentDecisionId(previousDecision);
    }
  };

  return (
    <div className="min-h-screen bg-story-background flex flex-col items-center justify-center p-4 gap-4">
      <DecisionCard
        decision={decisions[currentDecisionId]}
        onChoice={handleChoice}
      />
      {history.length > 0 && (
        <Button 
          variant="outline" 
          onClick={handleBack}
          className="mt-4"
        >
          Go Back
        </Button>
      )}
    </div>
  );
};

export default Index;