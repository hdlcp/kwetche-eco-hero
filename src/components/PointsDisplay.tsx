
import React from "react";
import { TrendingUp, Award, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface PointsDisplayProps {
  totalPoints: number;
  level: number;
  levelName: string;
  pointsToNextLevel: number;
  progress: number;
  multiplier: number;
  className?: string;
}

const PointsDisplay: React.FC<PointsDisplayProps> = ({
  totalPoints,
  level,
  levelName,
  pointsToNextLevel,
  progress,
  multiplier,
  className
}) => {
  return (
    <div className={cn("bemi-card", className)}>
      <h3 className="text-lg font-semibold mb-3">Your Kwètché Points</h3>
      
      <div className="bg-bemi-primary/10 rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-bemi-primary">Total Points</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">{totalPoints.toLocaleString()}</span>
              {multiplier > 1 && (
                <span className="text-xs ml-2 text-bemi-success font-medium">
                  {multiplier}x Multiplier
                </span>
              )}
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-full p-3 shadow-sm">
            <TrendingUp size={24} className="text-bemi-primary" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center mb-2">
        <div className="bg-bemi-secondary/10 rounded-full p-2 mr-3">
          <Award size={20} className="text-bemi-secondary" />
        </div>
        <div>
          <div className="flex items-center">
            <span className="text-sm font-medium">{levelName}</span>
            <span className="ml-2 text-xs bg-bemi-secondary/20 text-bemi-secondary px-2 py-0.5 rounded-full">
              Level {level}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {pointsToNextLevel.toLocaleString()} points to next level
          </p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="bemi-progress">
          <div className="bemi-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
      
      <div className="bg-muted rounded-lg p-3">
        <div className="flex items-center">
          <Clock size={18} className="text-muted-foreground mr-2" />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium">Daily streak</span>
              <span className="text-xs text-bemi-success">+10% bonus</span>
            </div>
            <div className="flex space-x-1">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${
                    i < 5 ? 'bg-bemi-success' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsDisplay;
