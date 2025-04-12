
import React from "react";
import { Award, Trophy, BadgeCheck, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface UserProfileProps {
  name: string;
  level: number;
  levelName: string;
  totalPoints: number;
  joined: string;
  achievements: {
    title: string;
    description: string;
    date: string;
  }[];
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  level,
  levelName,
  totalPoints,
  joined,
  achievements
}) => {
  return (
    <div className="bemi-card mb-4">
      <div className="flex items-center">
        <div className="relative mr-4">
          <div className="w-16 h-16 rounded-full bg-bemi-primary/10 flex items-center justify-center">
            <span className="text-xl font-bold text-bemi-primary">
              {name.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-bemi-secondary text-bemi-dark rounded-full p-1 border-2 border-white dark:border-slate-800">
            <Award size={14} />
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center">
            <span className="text-xs bg-bemi-primary/10 text-bemi-primary px-2 py-0.5 rounded-full mr-2">
              Level {level}
            </span>
            <span className="text-xs text-muted-foreground">{levelName}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mt-4 mb-3">
        <div className="bg-muted rounded-lg p-3">
          <p className="text-xs text-muted-foreground mb-1">Total Points</p>
          <p className="font-semibold">{totalPoints.toLocaleString()} Kwètché</p>
        </div>
        
        <div className="bg-muted rounded-lg p-3">
          <p className="text-xs text-muted-foreground mb-1">Joined</p>
          <p className="font-semibold">{joined}</p>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div>
        <div className="flex items-center mb-3">
          <Trophy size={18} className="text-bemi-secondary mr-2" />
          <h4 className="font-medium">Recent Achievements</h4>
        </div>
        
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex">
              <div className="mr-3 mt-0.5">
                <BadgeCheck size={16} className="text-bemi-success" />
              </div>
              <div>
                <p className="text-sm font-medium">{achievement.title}</p>
                <p className="text-xs text-muted-foreground mb-1">
                  {achievement.description}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar size={12} className="mr-1" />
                  {achievement.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
