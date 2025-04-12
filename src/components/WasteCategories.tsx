
import React, { useState } from "react";
import { Trash2, Recycle, CheckCircle } from "lucide-react";

interface WasteCategory {
  id: string;
  name: string;
  icon: JSX.Element;
  color: string;
  basePoints: number;
  description: string;
}

const wasteCategories: WasteCategory[] = [
  {
    id: "plastic",
    name: "Plastic",
    icon: <Recycle size={24} />,
    color: "bg-waste-plastic/10 text-waste-plastic border-waste-plastic/30",
    basePoints: 50,
    description: "Bottles, containers, bags"
  },
  {
    id: "glass",
    name: "Glass",
    icon: <Trash2 size={24} />,
    color: "bg-waste-glass/10 text-waste-glass border-waste-glass/30",
    basePoints: 30,
    description: "Bottles, jars, containers"
  },
  {
    id: "paper",
    name: "Paper",
    icon: <Trash2 size={24} />,
    color: "bg-waste-paper/10 text-waste-paper border-waste-paper/30",
    basePoints: 25,
    description: "Newspapers, cardboard, packaging"
  },
  {
    id: "metal",
    name: "Metal",
    icon: <Recycle size={24} />,
    color: "bg-waste-metal/10 text-waste-metal border-waste-metal/30",
    basePoints: 60,
    description: "Cans, foil, scrap metal"
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: <Trash2 size={24} />,
    color: "bg-waste-electronics/10 text-waste-electronics border-waste-electronics/30",
    basePoints: 100,
    description: "Phones, cables, batteries"
  },
  {
    id: "organic",
    name: "Organic",
    icon: <Recycle size={24} />,
    color: "bg-waste-organic/10 text-waste-organic border-waste-organic/30",
    basePoints: 15,
    description: "Food waste, plant matter"
  }
];

const WasteCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="bemi-card mb-4">
      <h3 className="text-lg font-semibold mb-3">Select Waste Type</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Please select the primary type of waste you're depositing
      </p>
      
      <div className="grid grid-cols-2 gap-3">
        {wasteCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className={`relative flex flex-col items-center p-3 border rounded-lg transition-all ${
              selectedCategory === category.id
                ? `${category.color} border-2`
                : "border-muted bg-card hover:bg-muted/50"
            }`}
          >
            {selectedCategory === category.id && (
              <div className="absolute -top-2 -right-2 bg-bemi-primary text-white rounded-full p-0.5">
                <CheckCircle size={16} />
              </div>
            )}
            <div className="mb-1">{category.icon}</div>
            <span className="font-medium text-sm">{category.name}</span>
            <span className="text-xs text-muted-foreground">{category.basePoints} pts/kg</span>
          </button>
        ))}
      </div>
      
      {selectedCategory && (
        <div className="mt-4 p-3 bg-muted rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">
              {wasteCategories.find(c => c.id === selectedCategory)?.name} Waste
            </span>
            <span className="text-xs bg-bemi-primary/10 text-bemi-primary px-2 py-0.5 rounded-full">
              {wasteCategories.find(c => c.id === selectedCategory)?.basePoints} points/kg
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {wasteCategories.find(c => c.id === selectedCategory)?.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default WasteCategories;
