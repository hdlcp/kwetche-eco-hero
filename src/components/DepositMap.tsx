
import React, { useState } from "react";
import { MapPin, Navigation, Store, Trash } from "lucide-react";

interface DepositPoint {
  id: string;
  name: string;
  type: "fixed" | "commercial" | "mobile";
  address: string;
  distance: string;
  lat: number;
  lng: number;
  icon: JSX.Element;
}

const sampleDepositPoints: DepositPoint[] = [
  {
    id: "fixed-1",
    name: "Marché Dantokpa Bin",
    type: "fixed",
    address: "Marché Dantokpa, Cotonou",
    distance: "0.6 km",
    lat: 6.3702,
    lng: 2.4343,
    icon: <Trash size={20} className="text-bemi-primary" />
  },
  {
    id: "commercial-1",
    name: "Eco Shop Cadjehoun",
    type: "commercial",
    address: "Rue 12.063, Cadjehoun",
    distance: "1.2 km",
    lat: 6.3612,
    lng: 2.3843,
    icon: <Store size={20} className="text-bemi-secondary" />
  },
  {
    id: "mobile-1",
    name: "Zémidjan #A245",
    type: "mobile",
    address: "Around Quartier Akpakpa",
    distance: "0.8 km",
    lat: 6.3522,
    lng: 2.4143,
    icon: <Navigation size={20} className="text-bemi-accent" />
  }
];

const DepositMap = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
  
  const filteredPoints = selectedFilter 
    ? sampleDepositPoints.filter(point => point.type === selectedFilter)
    : sampleDepositPoints;
    
  const filterOptions = [
    { id: "fixed", label: "Fixed Bins", icon: <Trash size={16} /> },
    { id: "commercial", label: "Shops", icon: <Store size={16} /> },
    { id: "mobile", label: "Zémidjans", icon: <Navigation size={16} /> },
  ];

  return (
    <div className="bemi-card mb-4">
      <h3 className="text-lg font-semibold mb-3">Nearby Deposit Points</h3>
      
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedFilter(null)}
          className={`flex items-center whitespace-nowrap px-3 py-1.5 rounded-full text-sm ${
            selectedFilter === null 
              ? "bg-bemi-primary text-white" 
              : "bg-muted text-muted-foreground"
          }`}
        >
          <MapPin size={16} className="mr-1" />
          All Points
        </button>
        
        {filterOptions.map(option => (
          <button
            key={option.id}
            onClick={() => setSelectedFilter(option.id as any)}
            className={`flex items-center whitespace-nowrap px-3 py-1.5 rounded-full text-sm ${
              selectedFilter === option.id 
                ? "bg-bemi-primary text-white" 
                : "bg-muted text-muted-foreground"
            }`}
          >
            {option.icon}
            <span className="ml-1">{option.label}</span>
          </button>
        ))}
      </div>
      
      <div className="relative bg-slate-200 rounded-lg h-64 mb-4 overflow-hidden">
        {/* This would be replaced with an actual map component in a real implementation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-muted-foreground text-sm">Interactive map would load here</p>
        </div>
        
        {/* Map location markers - these would be positioned properly in a real map */}
        <div className="absolute inset-0 p-4">
          {filteredPoints.map((point, index) => (
            <div 
              key={point.id}
              style={{
                position: 'absolute',
                top: `${30 + (index * 50)}px`,
                left: `${50 + (index * 70)}px`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => setSelectedPoint(point.id)}
              className={`cursor-pointer transition-all ${
                selectedPoint === point.id ? 'scale-125' : ''
              }`}
            >
              <div className="p-2 rounded-full bg-white shadow-md">
                {point.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="font-medium text-sm mb-2">Nearest Deposit Points</h4>
        
        {filteredPoints.map(point => (
          <div 
            key={point.id}
            onClick={() => setSelectedPoint(point.id)}
            className={`p-3 rounded-lg border cursor-pointer transition-all ${
              selectedPoint === point.id 
                ? 'border-bemi-primary bg-bemi-primary/5' 
                : 'border-border bg-card hover:bg-muted/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3 p-2 rounded-full bg-card shadow-sm">
                  {point.icon}
                </div>
                <div>
                  <h5 className="font-medium text-sm">{point.name}</h5>
                  <p className="text-xs text-muted-foreground">{point.address}</p>
                </div>
              </div>
              <div className="text-xs bg-muted rounded-full px-2 py-1">
                {point.distance}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepositMap;
