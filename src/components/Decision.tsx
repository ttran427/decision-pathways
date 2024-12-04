import { useState } from "react";
import { Decision } from "@/lib/decisions";
import { cn } from "@/lib/utils";

interface DecisionProps {
  decision: Decision;
  onChoice: (nextId: string) => void;
}

export const DecisionCard = ({ decision, onChoice }: DecisionProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 animate-fade-in">
      <div className="relative rounded-lg overflow-hidden shadow-xl bg-story-background">
        <div className="relative h-[40vh] md:h-[60vh]">
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              isImageLoaded ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={decision.image}
              alt="Scene"
              className="w-full h-full object-cover"
              onLoad={() => setIsImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="text-story-text text-xl md:text-2xl mb-6 font-medium">
            {decision.text}
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            {decision.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => onChoice(choice.nextId)}
                className="flex-1 px-6 py-3 text-lg font-medium text-white bg-story-accent hover:bg-opacity-90 rounded-lg transition-colors duration-200"
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};