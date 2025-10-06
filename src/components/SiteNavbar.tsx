import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const SiteNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Startseite", to: "/" },
    { name: "Menü", to: "/menu" },
    { name: "Über mich", to: "/#about" },
    { name: "Leistungen", to: "/#services" },
    { name: "Kontakt", to: "/contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-3"
          onClick={handleLinkClick}
        >
            <img 
              src="/elbaroma-logo.png" 
              alt="Elbaroma Catering Logo" 
              className="h-20 w-auto"
            />
          </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              onClick={handleLinkClick}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Button
          asChild
          className="elbaroma-gradient text-white font-semibold hidden md:flex"
        >
          <Link to="/contact" onClick={handleLinkClick}>
            Anfrage senden
          </Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Navigation öffnen/schließen"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                onClick={handleLinkClick}
                className="block text-gray-700 font-medium py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Button
              asChild
              className="elbaroma-gradient text-white w-full mt-3"
              onClick={handleLinkClick}
            >
              <Link to="/contact">Anfrage senden</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteNavbar;
