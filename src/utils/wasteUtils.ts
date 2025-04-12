
// This file would contain utilities for waste categorization, image comparison, etc.

// Waste categories and their base points per kg
export const WASTE_CATEGORIES = {
  plastic: {
    id: "plastic",
    name: "Plastic",
    basePoints: 50,
    description: "Bottles, containers, bags"
  },
  glass: {
    id: "glass",
    name: "Glass",
    basePoints: 30,
    description: "Bottles, jars, containers"
  },
  paper: {
    id: "paper", 
    name: "Paper/Cardboard",
    basePoints: 25,
    description: "Newspapers, cardboard, packaging"
  },
  metal: {
    id: "metal",
    name: "Metal",
    basePoints: 60,
    description: "Cans, foil, scrap metal"
  },
  electronics: {
    id: "electronics",
    name: "Electronics",
    basePoints: 100,
    description: "Phones, cables, batteries"
  },
  organic: {
    id: "organic",
    name: "Organic",
    basePoints: 15,
    description: "Food waste, plant matter"
  }
};

// Standard item weights for common waste items
export const STANDARD_ITEM_WEIGHTS = {
  "plastic_bottle_small": 0.025, // 25g
  "plastic_bottle_large": 0.05, // 50g
  "glass_bottle": 0.2, // 200g
  "aluminum_can": 0.015, // 15g
  "paper_newspaper": 0.4, // 400g
  "smartphone": 0.15, // 150g
  "cardboard_box_small": 0.1, // 100g
  "plastic_bag": 0.01, // 10g
};

// In a real app, this would be an actual image comparison algorithm
// For the demo, it's just a placeholder function that always returns true
export const compareImages = (beforeImage: string, afterImage: string): boolean => {
  console.log("Comparing images...");
  console.log("Before image length:", beforeImage.length);
  console.log("After image length:", afterImage.length);
  
  // In a real implementation, this would actually analyze the images
  return true;
};

// Simulated waste categorization based on image
export const categorizeWasteFromImage = (imageData: string): string[] => {
  // In a real app, this would use image recognition
  // For demo purposes, we're just returning a random category
  const categories = Object.keys(WASTE_CATEGORIES);
  const randomIndex = Math.floor(Math.random() * categories.length);
  return [categories[randomIndex]];
};

// Estimate waste weight based on image and/or user input
export const estimateWasteWeight = (
  wasteType: string, 
  quantity: number, 
  itemType?: string
): number => {
  if (itemType && STANDARD_ITEM_WEIGHTS[itemType as keyof typeof STANDARD_ITEM_WEIGHTS]) {
    return STANDARD_ITEM_WEIGHTS[itemType as keyof typeof STANDARD_ITEM_WEIGHTS] * quantity;
  }
  
  // Default weight estimates by waste type (kg per item)
  const defaultWeights: Record<string, number> = {
    plastic: 0.03,
    glass: 0.2,
    paper: 0.1,
    metal: 0.05,
    electronics: 0.2,
    organic: 0.5
  };
  
  return (defaultWeights[wasteType] || 0.1) * quantity;
};
