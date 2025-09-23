import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  Instagram, 
  MapPin, 
  Clock, 
  Heart,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-primary/5 to-primary/10 border-t">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-3xl font-bold elbaroma-text-gradient">
                Elbaroma
              </div>
              <div className="text-lg text-muted-foreground">Catering & more</div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Mit viel Liebe und Erfahrung bereiten wir traditionelle und moderne Gerichte zu, 
              die Ihre Gäste begeistern. Authentische orientalische Küche für alle Anlässe.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Genuss, der verbindet</span>
            </div>
            
            <Button className="elbaroma-gradient text-white">
              Jetzt Anfragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Menü & Bestellung
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link 
                  to="/impressum" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link 
                  to="/datenschutz" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+4917630508998" 
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>0176 305 08 998</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:elbaroma.catering@gmail.com" 
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>elbaroma.catering@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span>@elb.aroma</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-1" />
                  <div>
                    <div>Winsen (Luhe)</div>
                    <div className="text-sm">10km Lieferradius</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Info */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="h-8 w-8 elbaroma-text-gradient mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Flexible Zeiten</h4>
              <p className="text-sm text-muted-foreground">
                Wir richten uns nach Ihren Wünschen und Terminen
              </p>
            </div>
            
            <div>
              <MapPin className="h-8 w-8 elbaroma-text-gradient mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Kostenlose Lieferung</h4>
              <p className="text-sm text-muted-foreground">
                Innerhalb 10km um Winsen - Auf- und Abbau inklusive
              </p>
            </div>
            
            <div>
              <Heart className="h-8 w-8 elbaroma-text-gradient mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Persönlicher Service</h4>
              <p className="text-sm text-muted-foreground">
                Individuelle Beratung für Ihr perfektes Event
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary/10 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Elbaroma Catering. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                to="/impressum" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Impressum
              </Link>
              <Link 
                to="/datenschutz" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Datenschutz
              </Link>
              <div className="text-muted-foreground">
                Made with <Heart className="h-3 w-3 text-red-500 inline mx-1" /> in Winsen
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
