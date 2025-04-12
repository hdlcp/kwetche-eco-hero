
import React, { useEffect, useState } from "react";
import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      setTimeout(() => {
        navigate("/onboarding");
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-bemi-primary/5 to-background z-50 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 mb-6 relative">
          <img
            src="/lovable-uploads/a123446f-54fe-462b-9a8b-0414982a8abe.png"
            alt="Bè mì Logo"
            className={`w-full h-full object-contain animate-bounce-slow ${
              animationComplete ? "opacity-0 transition-opacity duration-500" : ""
            }`}
          />
        </div>
        
        <div 
          className={`text-center ${
            animationComplete ? "opacity-0 transition-opacity duration-500" : ""
          }`}
        >
          <h1 className="text-3xl font-bold mb-2 text-bemi-primary">Bè mì</h1>
          <p className="text-bemi-dark text-sm">
            La révolution écologique du Bénin
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-10 flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-bemi-primary animate-pulse delay-0"></div>
        <div className="w-2 h-2 rounded-full bg-bemi-primary animate-pulse delay-300"></div>
        <div className="w-2 h-2 rounded-full bg-bemi-primary animate-pulse delay-600"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
