
import React from "react";
import Layout from "@/components/Layout";
import { ArrowLeft, User, Settings, BarChart3, History, LogOut, HelpCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import UserProfile from "@/components/UserProfile";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const achievements = [
    {
      title: "First Deposit",
      description: "Made your first waste deposit",
      date: "June 10, 2025"
    },
    {
      title: "Eco-Citizen",
      description: "Reached 1,000 Kwètché points",
      date: "June 15, 2025"
    },
    {
      title: "Plastic Hero",
      description: "Collected 50 plastic items",
      date: "June 20, 2025"
    }
  ];

  return (
    <Layout>
      <div className="bemi-container py-6">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-2">
            <ArrowLeft size={20} />
          </Link>
          <h2 className="text-xl font-bold">Profile</h2>
        </div>
        
        <UserProfile
          name="Koffi Adedjro"
          level={2}
          levelName="Eco-Citizen"
          totalPoints={1250}
          joined="June 5, 2025"
          achievements={achievements}
        />
        
        <div className="bemi-card mb-4">
          <h3 className="text-lg font-semibold mb-4">Statistics</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-muted rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">Total Deposits</p>
              <p className="font-semibold">12</p>
            </div>
            
            <div className="bg-muted rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">Waste Collected</p>
              <p className="font-semibold">5.2 kg</p>
            </div>
            
            <div className="bg-muted rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">Challenges Completed</p>
              <p className="font-semibold">3</p>
            </div>
            
            <div className="bg-muted rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">Rewards Redeemed</p>
              <p className="font-semibold">0</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium mb-2">Waste Breakdown</h4>
            
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span>Plastic</span>
                <span>60%</span>
              </div>
              <div className="bemi-progress">
                <div className="bemi-progress-bar bg-waste-plastic" style={{ width: '60%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span>Glass</span>
                <span>20%</span>
              </div>
              <div className="bemi-progress">
                <div className="bemi-progress-bar bg-waste-glass" style={{ width: '20%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span>Paper</span>
                <span>15%</span>
              </div>
              <div className="bemi-progress">
                <div className="bemi-progress-bar bg-waste-paper" style={{ width: '15%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span>Metal</span>
                <span>5%</span>
              </div>
              <div className="bemi-progress">
                <div className="bemi-progress-bar bg-waste-metal" style={{ width: '5%' }} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bemi-card">
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          
          <div className="space-y-2">
            <Link to="/profile/edit" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
              <div className="flex items-center">
                <User size={18} className="mr-3 text-muted-foreground" />
                <span>Edit Profile</span>
              </div>
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
            
            <Link to="/settings" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
              <div className="flex items-center">
                <Settings size={18} className="mr-3 text-muted-foreground" />
                <span>Settings</span>
              </div>
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
            
            <Link to="/history" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
              <div className="flex items-center">
                <History size={18} className="mr-3 text-muted-foreground" />
                <span>Activity History</span>
              </div>
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
            
            <Link to="/stats" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
              <div className="flex items-center">
                <BarChart3 size={18} className="mr-3 text-muted-foreground" />
                <span>Detailed Statistics</span>
              </div>
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </div>
          
          <Separator className="my-3" />
          
          <div className="space-y-2">
            <Link to="/help" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
              <div className="flex items-center">
                <HelpCircle size={18} className="mr-3 text-muted-foreground" />
                <span>Help & Support</span>
              </div>
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
            
            <Link to="/rate" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
              <div className="flex items-center">
                <Star size={18} className="mr-3 text-muted-foreground" />
                <span>Rate the App</span>
              </div>
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
            
            <Link to="/auth" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted text-bemi-danger">
              <div className="flex items-center">
                <LogOut size={18} className="mr-3" />
                <span>Logout</span>
              </div>
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
