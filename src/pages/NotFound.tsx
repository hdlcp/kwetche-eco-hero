
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Erreur 404: L'utilisateur a tenté d'accéder à une route inexistante:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-bemi-primary/5 to-background">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-20 h-20 rounded-full bg-bemi-primary flex items-center justify-center shadow-lg mb-6">
          <Leaf size={36} className="text-white" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oups! Page introuvable</p>
        
        <Link to="/home" className="bemi-button-primary flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Retour à l'Accueil
        </Link>
      </div>
      
      <div className="py-4 text-center text-xs text-muted-foreground">
        &copy; 2025 Bè mì. Tous droits réservés.
      </div>
    </div>
  );
};

export default NotFound;
