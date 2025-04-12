
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Leaf, Trash2, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const onboardingSteps = [
  {
    title: "Bienvenue chez Bè mì",
    description: "Rejoignez la révolution écologique du Bénin et gagnez des récompenses en recyclant vos déchets.",
    icon: Leaf,
    color: "bg-bemi-primary",
  },
  {
    title: "Collectez et Déposez",
    description: "Collectez vos déchets, prenez une photo avant/après, et déposez-les dans un point de collecte.",
    icon: Trash2,
    color: "bg-bemi-success",
  },
  {
    title: "Gagnez des Kwètché",
    description: "Gagnez des points Kwètché pour chaque dépôt validé que vous pourrez échanger contre des récompenses.",
    icon: CheckCircle,
    color: "bg-bemi-secondary",
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/auth");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    navigate("/auth");
  };

  const CurrentIcon = onboardingSteps[currentStep].icon;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-bemi-primary/5 to-background">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Progress indicator */}
        <div className="flex space-x-2 mb-8">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentStep ? "bg-bemi-primary" : "bg-bemi-primary/30"
              }`}
            />
          ))}
        </div>

        {/* Icon */}
        <div
          className={`w-24 h-24 rounded-full ${onboardingSteps[currentStep].color} flex items-center justify-center shadow-lg mb-8 animate-fade-in`}
        >
          <CurrentIcon size={48} className="text-white" />
        </div>

        {/* Logo image */}
        <div className="w-32 h-32 mb-6">
          <img
            src="/lovable-uploads/a123446f-54fe-462b-9a8b-0414982a8abe.png"
            alt="Bè mì Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-4">{onboardingSteps[currentStep].title}</h1>
          <p className="text-muted-foreground max-w-xs mx-auto">
            {onboardingSteps[currentStep].description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center space-y-4 w-full max-w-xs">
          <Button onClick={handleNext} className="w-full bemi-button-primary">
            {currentStep < onboardingSteps.length - 1 ? "Suivant" : "Commencer"}
            <ChevronRight size={16} />
          </Button>

          <div className="flex justify-between w-full">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={currentStep === 0 ? "invisible" : ""}
            >
              <ArrowLeft size={16} className="mr-1" />
              Précédent
            </Button>

            {currentStep < onboardingSteps.length - 1 && (
              <Button variant="ghost" onClick={handleSkip}>
                Passer
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
