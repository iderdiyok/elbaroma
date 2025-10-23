import React from 'react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
// import SeasonalSection from '@/components/SeasonalSection';
// import GalleryPreview from '@/components/GalleryPreview';
import InstagramSection from '@/components/InstagramSection';
import AboutSection from '@/components/AboutSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Elbaroma Catering – Orientalische Küche für jeden Anlass"
        description="Exquisites Catering mit traditioneller, orientalischer Küche: Hochzeiten, Firmenfeiern, Geburtstage u.v.m. Frische Zutaten, liebevolle Präsentation – in Winsen & Umgebung."
        keywords="Catering Winsen, orientalische Küche, türkische Küche, Hochzeit Catering, Firmenfeier Catering, Meze, Börek, Event Catering"
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
