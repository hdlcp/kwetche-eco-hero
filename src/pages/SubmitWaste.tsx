
import React from "react";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import WasteSubmission from "@/components/WasteSubmission";
import WasteCategories from "@/components/WasteCategories";

const SubmitWaste = () => {
  return (
    <Layout>
      <div className="bemi-container py-6">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-2">
            <ArrowLeft size={20} />
          </Link>
          <h2 className="text-xl font-bold">Submit Waste</h2>
        </div>
        
        <WasteSubmission />
        
        <WasteCategories />
        
        <div className="bemi-card mb-4">
          <h3 className="text-lg font-semibold mb-3">Waste Quantity</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Quantity</label>
              <div className="flex items-center">
                <button className="border border-input rounded-l-lg p-2 hover:bg-muted/50">
                  -
                </button>
                <input
                  type="number"
                  className="border-y border-input w-full text-center py-2"
                  min="1"
                  max="100"
                  value="1"
                  readOnly
                />
                <button className="border border-input rounded-r-lg p-2 hover:bg-muted/50">
                  +
                </button>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Item Type</label>
              <select className="bemi-input w-full">
                <option value="plastic_bottle_small">Plastic Bottle (Small)</option>
                <option value="plastic_bottle_large">Plastic Bottle (Large)</option>
                <option value="glass_bottle">Glass Bottle</option>
                <option value="aluminum_can">Aluminum Can</option>
                <option value="paper_newspaper">Newspaper</option>
                <option value="cardboard_box_small">Cardboard Box (Small)</option>
                <option value="plastic_bag">Plastic Bag</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Estimated Weight</label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="bemi-input"
                  value="0.025"
                  readOnly
                />
                <span className="ml-2 text-muted-foreground">kg</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Based on the selected item type
              </p>
            </div>
          </div>
        </div>
        
        <div className="bemi-card mb-6">
          <h3 className="text-lg font-semibold mb-3">Potential Rewards</h3>
          
          <div className="bg-muted rounded-lg p-3 mb-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Base Points:</span>
              <span className="font-medium">50 pts/kg × 0.025 kg = 1.25 pts</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Location Bonus (Priority Zone):</span>
              <span className="text-bemi-success">+20%</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>Consistency Bonus (3 in a week):</span>
              <span className="text-bemi-success">+10%</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>User Level Bonus (Eco-Citizen):</span>
              <span className="text-bemi-success">+5%</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>Rarity Multiplier (Campaign):</span>
              <span className="text-bemi-success">×1.5</span>
            </div>
          </div>
          
          <div className="border-t border-border mt-3 pt-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Estimated Points:</span>
              <span className="text-lg font-bold text-bemi-primary">2.4 pts</span>
            </div>
          </div>
        </div>
        
        <button disabled className="bemi-button-primary w-full mb-4 opacity-50 cursor-not-allowed">
          Submit Deposit
        </button>
        <p className="text-sm text-center text-muted-foreground">
          Complete the image submission process to enable deposit
        </p>
      </div>
    </Layout>
  );
};

export default SubmitWaste;
