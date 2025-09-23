import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Startseite', path: '/' },
    { name: 'Menü & Bestellung', path: '/menu' },
    { name: 'Kontakt', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/elbaroma-logo.png" 
              alt="Elbaroma Catering Logo" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="tel:+4917630508998" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>0176 305 08 998</span>
              </a>
              <a href="mailto:elbaroma.catering@gmail.com" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            <Button className="elbaroma-gradient text-white">
              Jetzt Anfragen
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-3 py-2 space-y-2">
                <a href="tel:+4917630508998" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary">
                  <Phone className="h-4 w-4" />
                  <span>0176 305 08 998</span>
                </a>
                <a href="mailto:elbaroma.catering@gmail.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary">
                  <Mail className="h-4 w-4" />
                  <span>elbaroma.catering@gmail.com</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary">
                  <Instagram className="h-4 w-4" />
                  <span>@elb.aroma</span>
                </a>
              </div>
              
              <div className="px-3 py-2">
                <Button className="w-full elbaroma-gradient text-white">
                  Jetzt Anfragen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
