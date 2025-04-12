
import React, { useState } from "react";
import { Camera, UploadCloud, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WasteSubmission = () => {
  const [step, setStep] = useState<"before" | "after" | "processing" | "complete">("before");
  const [beforeImage, setBeforeImage] = useState<string | null>(null);
  const [afterImage, setAfterImage] = useState<string | null>(null);
  const [wasteConfirmed, setWasteConfirmed] = useState(false);

  const handleImageCapture = (type: "before" | "after") => {
    // In a real implementation, this would use the device camera
    // For this demo, we'll simulate it with a file input
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.capture = "environment";
    fileInput.click();

    fileInput.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        if (type === "before") {
          setBeforeImage(imageDataUrl);
          setStep("after");
        } else {
          setAfterImage(imageDataUrl);
          setStep("processing");
          // Simulate processing delay
          setTimeout(() => {
            setWasteConfirmed(true);
            setStep("complete");
          }, 2000);
        }
      };
      reader.readAsDataURL(file);
    };
  };

  const resetSubmission = () => {
    setBeforeImage(null);
    setAfterImage(null);
    setWasteConfirmed(false);
    setStep("before");
  };

  return (
    <div className="bemi-card mb-4">
      <h3 className="text-lg font-semibold mb-4">Waste Submission</h3>
      
      {step === "before" && (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-muted rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <Camera size={48} className="text-muted-foreground mb-2" />
            <p className="text-muted-foreground mb-4">
              Take a "before" photo of the waste container before depositing your waste
            </p>
            <Button 
              onClick={() => handleImageCapture("before")} 
              className="bemi-button-primary"
            >
              <Camera size={16} className="mr-2" />
              Take Before Photo
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="flex items-start mb-1">
              <AlertCircle size={16} className="mr-1 mt-0.5 flex-shrink-0" />
              Make sure the container is clearly visible
            </p>
            <p className="flex items-start">
              <AlertCircle size={16} className="mr-1 mt-0.5 flex-shrink-0" />
              Ensure good lighting for accurate verification
            </p>
          </div>
        </div>
      )}
      
      {step === "after" && beforeImage && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-1">Before:</p>
              <img 
                src={beforeImage} 
                alt="Before waste deposit" 
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-sm font-medium mb-1">After:</p>
              <div className="border-2 border-dashed border-muted rounded-lg h-32 flex flex-col items-center justify-center">
                <Button 
                  onClick={() => handleImageCapture("after")} 
                  variant="outline" 
                  size="sm" 
                  className="text-xs"
                >
                  <Camera size={14} className="mr-1" />
                  Capture
                </Button>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Now take an "after" photo showing the waste added to the container
          </p>
        </div>
      )}
      
      {step === "processing" && beforeImage && afterImage && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-1">Before:</p>
              <img 
                src={beforeImage} 
                alt="Before waste deposit" 
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-sm font-medium mb-1">After:</p>
              <img 
                src={afterImage} 
                alt="After waste deposit" 
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="animate-pulse flex flex-col items-center">
              <UploadCloud size={32} className="text-bemi-primary mb-2" />
              <p className="text-sm font-medium">Processing images...</p>
              <p className="text-xs text-muted-foreground">
                Verifying waste deposit
              </p>
            </div>
          </div>
        </div>
      )}
      
      {step === "complete" && wasteConfirmed && (
        <div className="space-y-4">
          <div className="flex items-center justify-center bg-bemi-success/10 rounded-lg p-4">
            <CheckCircle size={32} className="text-bemi-success mr-3" />
            <div>
              <h4 className="font-semibold">Waste Validated!</h4>
              <p className="text-sm">Your contribution has been confirmed</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-1">Before:</p>
              <img 
                src={beforeImage} 
                alt="Before waste deposit" 
                className="w-full h-24 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-sm font-medium mb-1">After:</p>
              <img 
                src={afterImage} 
                alt="After waste deposit" 
                className="w-full h-24 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-3">
            <p className="text-sm font-medium mb-1">Earned Kwètché:</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-bemi-primary">+125</span>
              <Button onClick={resetSubmission} variant="outline" size="sm">
                New Submission
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WasteSubmission;
