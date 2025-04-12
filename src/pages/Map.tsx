
import React from "react";
import Layout from "@/components/Layout";
import { ArrowLeft, Search, MapPin, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";
import DepositMap from "@/components/DepositMap";
import { Input } from "@/components/ui/input";

const Map = () => {
  return (
    <Layout>
      <div className="bemi-container py-6">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-2">
            <ArrowLeft size={20} />
          </Link>
          <h2 className="text-xl font-bold">Deposit Points</h2>
        </div>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search locations..." 
            className="pl-10 pr-10" 
          />
          <button className="absolute right-3 top-2.5 bg-muted rounded-md p-0.5">
            <MapPin size={16} className="text-bemi-primary" />
          </button>
        </div>
        
        <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
          <button className="bg-bemi-primary text-white px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
            Near Me
          </button>
          <button className="bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
            Fixed Bins
          </button>
          <button className="bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
            Shops
          </button>
          <button className="bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
            Zémidjans
          </button>
        </div>
        
        <div className="bg-slate-200 rounded-xl h-64 mb-4 flex items-center justify-center">
          <div className="text-center p-4">
            <MapPinned size={48} className="mx-auto mb-3 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Interactive map view would be displayed here
            </p>
          </div>
        </div>
        
        <DepositMap />
        
        <div className="bemi-card mb-4">
          <h3 className="text-lg font-semibold mb-3">Priority Zones</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Deposit in these areas to earn bonus points!
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-bemi-primary/10 rounded-lg">
              <div className="mr-3 p-2 bg-white rounded-full shadow-sm">
                <MapPin size={18} className="text-bemi-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Marché Dantokpa</h4>
                <p className="text-xs text-muted-foreground">1.2 km • +20% bonus points</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-bemi-primary/10 rounded-lg">
              <div className="mr-3 p-2 bg-white rounded-full shadow-sm">
                <MapPin size={18} className="text-bemi-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Lagune de Cotonou</h4>
                <p className="text-xs text-muted-foreground">2.5 km • +30% bonus points</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-bemi-primary/10 rounded-lg">
              <div className="mr-3 p-2 bg-white rounded-full shadow-sm">
                <MapPin size={18} className="text-bemi-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Plage de Fidjrossè</h4>
                <p className="text-xs text-muted-foreground">3.8 km • +30% bonus points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;
