
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Map, Gift, User, Plus } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: "/home", icon: Home, label: "Accueil" },
    { path: "/map", icon: Map, label: "Carte" },
    { path: "/submit", icon: Plus, label: "Déposer" },
    { path: "/rewards", icon: Gift, label: "Récompenses" },
    { path: "/profile", icon: User, label: "Profil" },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col pb-16">
      <header className="bg-bemi-primary text-white py-4 px-4 shadow-md">
        <div className="bemi-container flex justify-between items-center">
          <div className="flex items-center">
            <img 
              alt="Logo Bè mì" 
              className="h-8 w-8 mr-2 rounded-full bg-white p-1"
              src="/lovable-uploads/a123446f-54fe-462b-9a8b-0414982a8abe.png" 
            />
            <h1 className="text-xl font-bold">Bè mì</h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
              1,250 Kwètché
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 shadow-lg border-t border-border z-10">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`flex flex-col items-center justify-center px-3 py-1 ${
                isActive(item.path) 
                  ? "text-bemi-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.path === "/submit" ? (
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bemi-primary text-white shadow-lg -mt-6">
                  <item.icon size={24} />
                </div>
              ) : (
                <>
                  <item.icon size={20} />
                  <span className="text-xs mt-1">{item.label}</span>
                </>
              )}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
