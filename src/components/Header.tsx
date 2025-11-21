import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Accueil", href: "/dashboard" },
  { name: "Investissements", href: "/investments" },
  { name: "Premium Expertise", href: "/premium-expertise" },
  { name: "M'éduquer", href: "/education" },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
            <span className="text-xl font-semibold">BNP Paribas</span>
            <span className="text-sm text-muted-foreground font-light">Banque Privée</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
