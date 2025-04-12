
import React from "react";
import Layout from "@/components/Layout";
import { Leaf, TrendingUp, Map, CheckCircle, Award } from "lucide-react";
import ChallengeCard from "@/components/ChallengeCard";
import PointsDisplay from "@/components/PointsDisplay";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="bemi-container py-6">
        <h2 className="text-2xl font-bold mb-6">Welcome, Koffi!</h2>
        
        <PointsDisplay
          totalPoints={1250}
          level={2}
          levelName="Eco-Citizen"
          pointsToNextLevel={3750}
          progress={30}
          multiplier={1.2}
          className="mb-6"
        />
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button asChild variant="outline" className="h-20 rounded-xl flex flex-col items-center justify-center space-y-1 border-dashed">
            <Link to="/submit">
              <Leaf size={24} className="text-bemi-primary mb-1" />
              <span className="text-sm font-medium">Add Waste</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="h-20 rounded-xl flex flex-col items-center justify-center space-y-1 border-dashed">
            <Link to="/map">
              <Map size={24} className="text-bemi-secondary mb-1" />
              <span className="text-sm font-medium">Find Bins</span>
            </Link>
          </Button>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Current Challenges</h3>
          <Link to="/challenges" className="text-sm text-bemi-primary hover:underline">
            View All
          </Link>
        </div>
        
        <ChallengeCard
          title="Plastic Bottle Hunter"
          description="Collect 10 plastic bottles this week"
          reward={150}
          timeRemaining="3 days"
          progress={60}
          goal={10}
          current={6}
          category="Plastic"
          isSpecial={true}
        />
        
        <ChallengeCard
          title="Market Cleanup"
          description="Deposit waste at Dantokpa Market"
          reward={100}
          timeRemaining="5 days"
          progress={0}
          goal={1}
          current={0}
          category="Location"
        />
        
        <div className="flex items-center justify-between mt-6 mb-4">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <Link to="/history" className="text-sm text-bemi-primary hover:underline">
            View All
          </Link>
        </div>
        
        <div className="space-y-3">
          <div className="bemi-card flex items-center">
            <div className="mr-4 p-3 rounded-full bg-bemi-primary/10">
              <CheckCircle size={20} className="text-bemi-primary" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Plastic Waste Deposit</h4>
                <span className="text-bemi-primary font-medium">+85 pts</span>
              </div>
              <p className="text-sm text-muted-foreground">Cadjehoun Collection Point</p>
              <p className="text-xs text-muted-foreground">Today, 10:25 AM</p>
            </div>
          </div>
          
          <div className="bemi-card flex items-center">
            <div className="mr-4 p-3 rounded-full bg-bemi-secondary/10">
              <Award size={20} className="text-bemi-secondary" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Level Up!</h4>
                <span className="text-bemi-secondary font-medium">Eco-Citizen</span>
              </div>
              <p className="text-sm text-muted-foreground">Reached 1000+ points</p>
              <p className="text-xs text-muted-foreground">Yesterday, 4:12 PM</p>
            </div>
          </div>
          
          <div className="bemi-card flex items-center">
            <div className="mr-4 p-3 rounded-full bg-bemi-success/10">
              <TrendingUp size={20} className="text-bemi-success" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Glass Waste Deposit</h4>
                <span className="text-bemi-success font-medium">+65 pts</span>
              </div>
              <p className="text-sm text-muted-foreground">Marché Dantokpa Bin</p>
              <p className="text-xs text-muted-foreground">2 days ago, 2:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
