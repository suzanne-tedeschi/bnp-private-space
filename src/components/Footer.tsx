import { Bell, MapPin, Phone, Shield, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-muted via-muted/90 to-muted border-t-2 border-border mt-16">
      {/* Quick Links Bar */}
      <div className="border-b border-border bg-muted/60">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              to="#" 
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">Emergency</span>
            </Link>
            
            <Link 
              to="#" 
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">Find a center</span>
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
              <span className="font-medium">Security & best practices</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Private Banking */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Private Banking</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Wealth
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Investment
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Financing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Banking Services
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Become a Client
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Policies
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Sustainability Information
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Online Banking: Best Practices
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Personal Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Charters & Regulations */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Charters & Regulations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Eckert Law
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Guarantee Fund
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
            
            <h3 className="font-bold text-lg mt-6 mb-4 text-foreground">Our Other Sites</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  BNPP Group
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
                  <p className="text-sm text-muted-foreground">PRIVATE BANKING</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-semibold">3273</p>
                    <p className="text-muted-foreground text-xs">Free service + call charge</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-3 text-foreground">Follow us</h3>
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
          <p>© {new Date().getFullYear()} BNP Paribas Private Banking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
