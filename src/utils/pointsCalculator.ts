
import { WASTE_CATEGORIES } from "./wasteUtils";

// Location multipliers
const LOCATION_MULTIPLIERS = {
  default: 1.0,
  priorityZone: 1.2, // Markets, riverbanks
  pollutedArea: 1.3, // Visibly polluted areas
};

// Time-based bonuses
const TIME_BONUSES = {
  default: 1.0,
  offPeak: 1.15, // Off-peak hours
  greenHours: 1.25, // Designated "green hours"
};

// User level bonuses
const LEVEL_BONUSES = {
  1: 0.0, // Beginner (0–1,000): Base points only
  2: 0.05, // Eco-Citizen (1,001–5,000): +5% bonus
  3: 0.1, // Eco-Warrior (5,001–15,000): +10% bonus
  4: 0.15, // Ecological Champion (15,001–50,000): +15% bonus
  5: 0.2, // Master Recycler (50,001+): +20% bonus
};

// Consistency bonuses
const CONSISTENCY_BONUSES = {
  default: 0.0,
  threeInWeek: 0.1, // +10% after 3 deposits in the same week
  fiveConsecutive: 0.2, // +20% after 5 consecutive deposits
  dailyTwoWeeks: 0.3, // +30% for daily actions over 2 consecutive weeks
};

// Rarity multipliers
const RARITY_MULTIPLIERS = {
  default: 1.0,
  campaign: 1.5, // Waste targeted in a temporary campaign
  wasteOfMonth: 2.0, // "Waste of the month"
};

// Calculate points for a waste deposit
export const calculatePoints = (
  wasteType: string,
  weightInKg: number,
  options: {
    location?: "default" | "priorityZone" | "pollutedArea";
    time?: "default" | "offPeak" | "greenHours";
    userLevel?: 1 | 2 | 3 | 4 | 5;
    consistency?: "default" | "threeInWeek" | "fiveConsecutive" | "dailyTwoWeeks";
    rarity?: "default" | "campaign" | "wasteOfMonth";
  } = {}
): { totalPoints: number; breakdown: Record<string, number> } => {
  // Set default options
  const {
    location = "default",
    time = "default",
    userLevel = 1,
    consistency = "default",
    rarity = "default",
  } = options;

  // Get base points based on waste type
  const wasteCategory = WASTE_CATEGORIES[wasteType as keyof typeof WASTE_CATEGORIES];
  const basePoints = wasteCategory ? wasteCategory.basePoints * weightInKg : 0;

  // Calculate multipliers
  const locationMultiplier = LOCATION_MULTIPLIERS[location] || LOCATION_MULTIPLIERS.default;
  const timeBonus = TIME_BONUSES[time] || TIME_BONUSES.default;
  const levelBonus = 1 + (LEVEL_BONUSES[userLevel] || LEVEL_BONUSES[1]);
  const consistencyBonus = 1 + (CONSISTENCY_BONUSES[consistency] || CONSISTENCY_BONUSES.default);
  const rarityMultiplier = RARITY_MULTIPLIERS[rarity] || RARITY_MULTIPLIERS.default;

  // Calculate total points with all multipliers and bonuses
  const pointsWithLocation = basePoints * locationMultiplier;
  const pointsWithTime = pointsWithLocation * timeBonus;
  const pointsWithRarity = pointsWithTime * rarityMultiplier;
  const pointsWithConsistency = pointsWithRarity * consistencyBonus;
  const totalPoints = Math.round(pointsWithConsistency * levelBonus);

  // Return total points and breakdown for transparency
  return {
    totalPoints,
    breakdown: {
      basePoints: Math.round(basePoints),
      locationBonus: Math.round(pointsWithLocation - basePoints),
      timeBonus: Math.round(pointsWithTime - pointsWithLocation),
      rarityBonus: Math.round(pointsWithRarity - pointsWithTime),
      consistencyBonus: Math.round(pointsWithConsistency - pointsWithRarity),
      levelBonus: Math.round(totalPoints - pointsWithConsistency),
    },
  };
};

// Calculate user level based on total points
export const calculateUserLevel = (totalPoints: number): {
  level: 1 | 2 | 3 | 4 | 5;
  levelName: string;
  pointsToNextLevel: number;
  progress: number;
} => {
  if (totalPoints >= 50000) {
    return {
      level: 5,
      levelName: "Master Recycler",
      pointsToNextLevel: 0,
      progress: 100,
    };
  } else if (totalPoints >= 15000) {
    const pointsToNextLevel = 50000 - totalPoints;
    const progress = ((totalPoints - 15000) / (50000 - 15000)) * 100;
    return {
      level: 4,
      levelName: "Ecological Champion",
      pointsToNextLevel,
      progress,
    };
  } else if (totalPoints >= 5000) {
    const pointsToNextLevel = 15000 - totalPoints;
    const progress = ((totalPoints - 5000) / (15000 - 5000)) * 100;
    return {
      level: 3,
      levelName: "Eco-Warrior",
      pointsToNextLevel,
      progress,
    };
  } else if (totalPoints >= 1000) {
    const pointsToNextLevel = 5000 - totalPoints;
    const progress = ((totalPoints - 1000) / (5000 - 1000)) * 100;
    return {
      level: 2,
      levelName: "Eco-Citizen",
      pointsToNextLevel,
      progress,
    };
  } else {
    const pointsToNextLevel = 1000 - totalPoints;
    const progress = (totalPoints / 1000) * 100;
    return {
      level: 1,
      levelName: "Beginner",
      pointsToNextLevel,
      progress,
    };
  }
};
