
import React from "react";
import Layout from "@/components/Layout";
import { ArrowLeft, Gift, Star, Clock, ChevronRight, ShoppingBag, Coffee, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RewardItem {
  id: string;
  name: string;
  pointsCost: number;
  image: JSX.Element;
  partner: string;
  description: string;
  isPopular?: boolean;
  expiry?: string;
}

const rewardItems: RewardItem[] = [
  {
    id: "reward1",
    name: "Free Coffee",
    pointsCost: 500,
    image: <Coffee size={32} className="text-bemi-dark" />,
    partner: "Café Tonakpa",
    description: "One free coffee at any Café Tonakpa location",
    isPopular: true
  },
  {
    id: "reward2",
    name: "10% Shopping Discount",
    pointsCost: 750,
    image: <ShoppingBag size={32} className="text-bemi-dark" />,
    partner: "Eco Shop Cadjehoun",
    description: "10% discount on your next purchase"
  },
  {
    id: "reward3",
    name: "Mobile Data Bundle",
    pointsCost: 1200,
    image: <Phone size={32} className="text-bemi-dark" />,
    partner: "MTN Benin",
    description: "1GB of mobile data for your phone",
    expiry: "3 days left"
  }
];

const Rewards = () => {
  return (
    <Layout>
      <div className="bemi-container py-6">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-2">
            <ArrowLeft size={20} />
          </Link>
          <h2 className="text-xl font-bold">Rewards</h2>
        </div>
        
        <div className="flex justify-between items-center mb-6 p-4 bg-bemi-primary/10 rounded-xl">
          <div>
            <p className="text-sm text-muted-foreground">Available Kwètché</p>
            <p className="text-2xl font-bold">1,250</p>
          </div>
          <div className="p-3 bg-white rounded-full shadow">
            <Gift size={24} className="text-bemi-primary" />
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="redeemed">Redeemed</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">Available Rewards</h3>
            
            {rewardItems.map(reward => (
              <div key={reward.id} className="bemi-card">
                <div className="flex">
                  <div className="mr-4 p-3 bg-muted rounded-lg flex items-center justify-center min-w-[60px]">
                    {reward.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">{reward.name}</h4>
                      <div className="flex items-center text-bemi-primary font-medium">
                        <Gift size={14} className="mr-1" />
                        {reward.pointsCost}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{reward.description}</p>
                    <p className="text-xs">Partner: {reward.partner}</p>
                  </div>
                </div>
                
                {(reward.isPopular || reward.expiry) && (
                  <div className="flex justify-between items-center mt-3 pt-2 border-t border-border">
                    {reward.isPopular && (
                      <div className="flex items-center text-xs text-bemi-secondary">
                        <Star size={12} className="mr-1" />
                        Popular
                      </div>
                    )}
                    {reward.expiry && (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock size={12} className="mr-1" />
                        {reward.expiry}
                      </div>
                    )}
                    <button className="ml-auto text-sm text-bemi-primary flex items-center">
                      Redeem <ChevronRight size={16} />
                    </button>
                  </div>
                )}
                
                {!reward.isPopular && !reward.expiry && (
                  <div className="flex justify-end mt-3 pt-2 border-t border-border">
                    <button className="text-sm text-bemi-primary flex items-center">
                      Redeem <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="redeemed" className="space-y-4">
            <div className="text-center py-8">
              <Gift size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No Redeemed Rewards</h3>
              <p className="text-sm text-muted-foreground mb-4">
                You haven't redeemed any rewards yet
              </p>
              <Link to="/rewards" className="text-bemi-primary hover:underline">
                Browse Rewards
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="favorites" className="space-y-4">
            <div className="text-center py-8">
              <Star size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No Favorite Rewards</h3>
              <p className="text-sm text-muted-foreground mb-4">
                You haven't added any rewards to favorites
              </p>
              <Link to="/rewards" className="text-bemi-primary hover:underline">
                Browse Rewards
              </Link>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bemi-card">
          <h3 className="text-lg font-semibold mb-3">Redeem for Cash</h3>
          
          <div className="p-3 bg-muted rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Exchange Rate</p>
                <p className="text-xs text-muted-foreground">Current value of Kwètché</p>
              </div>
              <div className="text-right">
                <p className="font-medium">500 Kwètché = 300 XOF</p>
                <p className="text-xs text-muted-foreground">Updated today</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <label className="text-sm font-medium">Amount to Redeem</label>
            <div className="flex items-center">
              <input
                type="number"
                placeholder="Enter Kwètché amount"
                className="bemi-input flex-1"
                min="500"
                step="100"
              />
              <span className="ml-2 whitespace-nowrap text-sm font-medium">Kwètché</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Minimum 500 Kwètché required for cash redemption
            </p>
          </div>
          
          <div className="p-3 bg-muted rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">You'll receive</span>
              <span className="font-medium">0 XOF</span>
            </div>
          </div>
          
          <button disabled className="bemi-button-primary w-full opacity-50 cursor-not-allowed">
            Redeem for Cash
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Rewards;
