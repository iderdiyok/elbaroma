import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Calendar, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-meze.jpg';
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -50]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.05]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Hintergrundbild mit Parallax + Zoom */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <img
          src={heroImage}
          alt="Bunte orientalische Meze-Platte, frisch angerichtet"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#1a0e00cc] to-black/70" />
      </motion.div>

      {/* Inhalt */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center text-white">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 text-sm sm:text-base shadow-lg"
          aria-label="Markenversprechen"
        >
          <Star className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
          <span>Authentische orientalische Küche mit Herz</span>
        </motion.div>

        {/* Überschrift */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 leading-tight tracking-tight"
        >
          <span className="block text-white/90 font-light text-2xl mb-1">Willkommen bei</span>
          <span className="elbaroma-text-gradient text-5xl md:text-7xl font-extrabold tracking-wide">elbaroma</span>
          <br />
          <span className="text-yellow-400 font-semibold tracking-wide">Catering mit Seele</span>
        </motion.h1>

        {/* Untertitel */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Frisch, aromatisch und mit Liebe zubereitet – inspiriert von den Düften Istanbuls und der Brise der Elbe.
        </motion.p>

        {/* Features */}
        <ul className="flex flex-wrap justify-center gap-6 mb-10 text-sm sm:text-base" aria-label="Leistungsmerkmale">
          <li className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-yellow-400" aria-hidden="true" />
            <span>Für alle Gruppengrößen</span>
          </li>
          <li className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-yellow-400" aria-hidden="true" />
            <span>Flexible Termine</span>
          </li>
          <li className="flex items-center space-x-2">
            <Heart className="h-4 w-4 text-yellow-400" aria-hidden="true" />
            <span>Mit Liebe & frischen Zutaten</span>
          </li>
        </ul>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="elbaroma-gradient text-white font-semibold w-full sm:w-auto shadow-lg hover:scale-105 transition-transform focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <Link to="/contact" aria-label="Jetzt anfragen – Kontaktformular öffnen">
              Jetzt Anfragen
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-white/10 border border-white/40 text-white font-semibold hover:bg-white/20 hover:scale-105 transition-transform w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <Link to="/#about" aria-label="Mehr über elbaroma erfahren">
              Mehr über mich
              <Heart className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>

        {/* Vertrauen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 py-6 px-4"
          aria-label="Vertrauenswerte"
        >
          <p className="text-white/70 mb-4 text-sm uppercase tracking-wide">Vertrauen Sie auf unsere Erfahrung</p>
          <div className="flex justify-center gap-8 sm:gap-16 text-yellow-400 font-semibold">
            <div className="text-center">
              <Users className="mx-auto mb-1 h-5 w-5" aria-hidden="true" />
              <div className="text-lg sm:text-xl">20 km</div>
              <div className="text-xs text-white/70">Lieferradius</div>
            </div>
            <div className="text-center">
              <Heart className="mx-auto mb-1 h-5 w-5" aria-hidden="true" />
              <div className="text-lg sm:text-xl">100%</div>
              <div className="text-xs text-white/70">Frische Zutaten</div>
            </div>
            <div className="text-center">
              <Calendar className="mx-auto mb-1 h-5 w-5" aria-hidden="true" />
              <div className="text-lg sm:text-xl">24/7</div>
              <div className="text-xs text-white/70">Beratung verfügbar</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
