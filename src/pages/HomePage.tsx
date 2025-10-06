import React from 'react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SeasonalSection from '@/components/SeasonalSection';
// import GalleryPreview from '@/components/GalleryPreview';
import InstagramSection from '@/components/InstagramSection';
import AboutSection from '@/components/AboutSection';
import GalleryPreview from '@/components/GalleryPreview';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Elbaroma Catering - Orientalische Küche für alle Anlässe"
        description="Elbaroma Catering bietet exquisite orientalische Küche für Hochzeiten, Firmenfeiern, Geburtstage und alle besonderen Anlässe. Frische Zutaten, traditionelle Rezepte und professioneller Service in Winsen und Umgebung."
        keywords="Catering Winsen, orientalische Küche, türkische Küche, Hochzeit Catering, Firmenfeier Catering, Meze, Köfte, Event Catering"
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <SeasonalSection /> */}
      {/* <GalleryPreview /> */}
      <InstagramSection />
    </div>
  );
};

export default HomePage;
