import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Calendar, ClipboardList, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-meze.jpg';
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll(); 
  const y = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Hintergrundbild */}
  <motion.div 
    className="absolute inset-0 z-0"
    style={{ y }}
  >
    <img
      src={heroImage}
      alt="Orientalische Meze-Platte von Elbaroma Catering"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
  </motion.div>

  {/* Inhalt */}
  <div className="relative z-20 max-w-5xl mx-auto px-4 text-center text-white">
    {/* Badge */}
    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-4 text-sm sm:text-base">
      <Star className="h-4 w-4 text-yellow-400 fill-current" />
      <span>Authentische orientalische Küche mit Herz</span>
    </div>

    {/* Überschrift */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} 
      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
        Willkommen bei{" "}
        <span className="elbaroma-text-gradient ">
          elbaroma
        </span>
        <br />
        <span className="text-yellow-400">Catering mit Seele</span>
    </motion.h1>

    {/* Untertitel */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }} 
      className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
        Mit Liebe gekocht, inspiriert von den Aromen der Türkei und der Elbe.
        Jedes Gericht erzählt eine Geschichte.
    </motion.p>

    {/* Features */}
    <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm sm:text-base">
      <div className="flex items-center space-x-1">
        <Users className="h-4 w-4 text-yellow-400" />
        <span>Für alle Gruppengrößen</span>
      </div>
      <div className="flex items-center space-x-1">
        <Calendar className="h-4 w-4 text-yellow-400" />
        <span>Flexible Termine</span>
      </div>
      <div className="flex items-center space-x-1">
        <Heart className="h-4 w-4 text-yellow-400" />
        <span>Mit Liebe & frischen Zutaten</span>
      </div>
    </div>

    {/* Buttons (mobil untereinander) */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }} 
      className="flex flex-col sm:flex-row gap-3 justify-center items-center"
    >
      <Button
        asChild
        size="lg"
        className="elbaroma-gradient text-white font-semibold w-full sm:w-auto"
      >
        <Link to="/contact">
          Jetzt Anfragen
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>

      <Button
        asChild
        size="lg"
        className="bg-white/10 border border-white/40 text-white font-semibold hover:bg-white/20 w-full sm:w-auto"
      >
        <Link to="/#about">
          Mehr über mich
          <Heart className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </motion.div>

    {/* Vertrauen */}
    <div className="mt-10 border-t border-white/20 pt-6 text-sm">
      <p className="text-white/60 mb-3">Vertrauen Sie auf unsere Erfahrung</p>
      <div className="flex justify-center gap-6 sm:gap-12 text-yellow-400 font-semibold">
        <div className="text-center">
          <div className="text-lg sm:text-xl">10km</div>
          <div className="text-xs text-white/70">Lieferradius</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl">100%</div>
          <div className="text-xs text-white/70">Frische Zutaten</div>
        </div>
        <div className="text-center">
          <div className="text-lg sm:text-xl">24/7</div>
          <div className="text-xs text-white/70">Beratung verfügbar</div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
