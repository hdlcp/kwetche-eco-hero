
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Trash2, Mail, Lock, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Auth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dans une vraie application, cela authentifierait l'utilisateur
    navigate("/home");
  };
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Dans une vraie application, cela enregistrerait l'utilisateur
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-bemi-primary/5 to-background">
      <div className="flex-1 flex flex-col justify-center px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="/lovable-uploads/a123446f-54fe-462b-9a8b-0414982a8abe.png" 
                alt="Logo Bè mì"
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Bè mì</h1>
          <p className="text-muted-foreground">
            Rejoignez la révolution écologique du Bénin
          </p>
        </div>
        
        <div className="max-w-md w-full mx-auto rounded-xl bg-white shadow-lg border border-border overflow-hidden">
          <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 w-full rounded-none">
              <TabsTrigger value="login" className="rounded-none py-3">
                Connexion
              </TabsTrigger>
              <TabsTrigger value="signup" className="rounded-none py-3">
                Inscription
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="p-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votreemail@exemple.com" 
                      className="pl-10" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="text-sm font-medium">
                      Mot de passe
                    </label>
                    <a href="#" className="text-xs text-bemi-primary hover:underline">
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-10" 
                      required 
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bemi-button-primary">
                  Se connecter
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup" className="p-6">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="fullname" className="text-sm font-medium">
                    Nom complet
                  </label>
                  <Input 
                    id="fullname" 
                    type="text" 
                    placeholder="Votre nom complet" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="signup-email" className="text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="signup-email" 
                      type="email" 
                      placeholder="votreemail@exemple.com" 
                      className="pl-10" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="signup-password" className="text-sm font-medium">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="signup-password" 
                      type="password" 
                      placeholder="Créer un mot de passe" 
                      className="pl-10" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-bemi-primary focus:ring-bemi-primary"
                      required
                    />
                  </div>
                  <label htmlFor="terms" className="text-xs text-muted-foreground">
                    J'accepte les <a href="#" className="text-bemi-primary hover:underline">Conditions d'utilisation</a> et la <a href="#" className="text-bemi-primary hover:underline">Politique de confidentialité</a>
                  </label>
                </div>
                
                <Button type="submit" className="w-full bemi-button-primary">
                  Créer un compte
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-8 max-w-md mx-auto">
          <Separator className="my-4" />
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <div className="mx-auto w-10 h-10 rounded-full bg-bemi-success/10 flex items-center justify-center">
                <Trash2 size={20} className="text-bemi-success" />
              </div>
              <p className="text-xs font-medium">Collectez des déchets</p>
            </div>
            
            <div className="space-y-1">
              <div className="mx-auto w-10 h-10 rounded-full bg-bemi-primary/10 flex items-center justify-center">
                <CheckCircle size={20} className="text-bemi-primary" />
              </div>
              <p className="text-xs font-medium">Déposez & Vérifiez</p>
            </div>
            
            <div className="space-y-1">
              <div className="mx-auto w-10 h-10 rounded-full bg-bemi-secondary/10 flex items-center justify-center">
                <Leaf size={20} className="text-bemi-secondary" />
              </div>
              <p className="text-xs font-medium">Gagnez des récompenses</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-4 text-center text-xs text-muted-foreground">
        &copy; 2025 Bè mì. Tous droits réservés.
      </div>
    </div>
  );
};

export default Auth;
