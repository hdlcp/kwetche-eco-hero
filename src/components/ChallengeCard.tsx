
import React from "react";
import { LightbulbIcon, Timer, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ChallengeCardProps {
  title: string;
  description: string;
  reward: number;
  timeRemaining: string;
  progress: number;
  goal: number;
  current: number;
  category?: string;
  isSpecial?: boolean;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  description,
  reward,
  timeRemaining,
  progress,
  goal,
  current,
  category,
  isSpecial = false,
}) => {
  return (
    <div className={`bemi-card mb-3 ${isSpecial ? 'border-bemi-secondary border-2' : ''}`}>
      {isSpecial && (
        <div className="bg-bemi-secondary text-bemi-dark text-xs font-medium py-1 px-3 rounded-t-lg -mt-4 -mx-4 mb-3 flex items-center justify-center">
          <LightbulbIcon size={14} className="mr-1" />
          Special Challenge
        </div>
      )}
      
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-medium text-base">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="bg-bemi-primary/10 text-bemi-primary rounded-full px-2.5 py-1 text-sm font-medium whitespace-nowrap">
          +{reward} pts
        </div>
      </div>
      
      {category && (
        <div className="mb-3">
          <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
            {category}
          </span>
        </div>
      )}
      
      <div className="mb-3">
        <div className="flex justify-between text-xs mb-1">
          <span>{current} of {goal} completed</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center text-xs text-muted-foreground">
          <Timer size={14} className="mr-1" />
          {timeRemaining} remaining
        </div>
        
        <Button size="sm" className="rounded-full">
          <TrendingUp size={14} className="mr-1" />
          Track
        </Button>
      </div>
    </div>
  );
};

export default ChallengeCard;
