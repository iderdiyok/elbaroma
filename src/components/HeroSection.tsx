import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Calendar, ClipboardList } from 'lucide-react';
import heroImage from '@/assets/hero-meze.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Orientalische Meze-Platte von Elbaroma Catering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/80 to-black/70"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 oriental-pattern opacity-20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">Authentische orientalische Küche</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Catering für</span>
            <span className="block elbaroma-text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              alle Anlässe
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Feiern, genießen, verwöhnen – wir bringen Geschmack auf Ihr Event! 
            Von stilvoll bis außergewöhnlich: Wir liefern das passende Catering-Konzept für jeden Anlass.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 text-white/80">
              <Users className="h-5 w-5 text-yellow-400" />
              <span>Für alle Gruppengrößen</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Calendar className="h-5 w-5 text-yellow-400" />
              <span>Flexible Termine</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>Frische Zutaten</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Jetzt Anfragen */}
            <Button
              asChild
              size="lg"
              className="elbaroma-gradient text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <Link to="/contact">
                Jetzt Anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            {/* Menü entdecken */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="elbaroma-gradient text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <Link to="/menu">
                Menü entdecken
                <ClipboardList className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4">Vertrauen Sie auf unsere Erfahrung</p>
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">10km</div>
                <div className="text-sm">Lieferradius um Winsen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-sm">Frische Zutaten</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm">Beratung verfügbar</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
