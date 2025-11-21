import { Bell, MapPin, Phone, Shield, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-primary/5 to-background border-t border-border/50 mt-16">
      {/* Quick Links Bar */}
      <div className="border-b border-border/30">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              to="#" 
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">Urgence</span>
            </Link>
            
            <Link 
              to="#" 
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">Trouver un centre</span>
            </Link>
            
            <Link 
              to="#" 
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">Contact</span>
            </Link>
            
            <Link 
              to="#" 
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">Sécurité & bonnes pratiques</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* La banque Privée */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">La banque Privée</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Patrimoine
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Investissement
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Financement
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Services bancaires
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Être client
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Informations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Politiques
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Informations en matière de durabilité
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Banque en ligne : Bonnes pratiques
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Glossaire
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Données personnelles
                </Link>
              </li>
            </ul>
          </div>

          {/* Chartes & Réglementations */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Chartes & Réglementations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Loi Eckert
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Fonds de garantie
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  DSP2
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  CIF
                </Link>
              </li>
            </ul>
            
            <h3 className="font-bold text-lg mt-6 mb-4 text-foreground">Nos autres sites</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Groupe BNPP
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">BP</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">BNP PARIBAS</h3>
                  <p className="text-sm text-muted-foreground">BANQUE PRIVÉE</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-semibold">3273</p>
                    <p className="text-muted-foreground text-xs">Service gratuit + prix d'un appel</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-3 text-foreground">Suivez-nous</h3>
              <div className="flex gap-3">
                <Link 
                  to="https://instagram.com" 
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </Link>
                <Link 
                  to="https://linkedin.com" 
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BNP Paribas Banque Privée. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
