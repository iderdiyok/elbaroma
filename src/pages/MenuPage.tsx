import React from 'react';
import SEO from '@/components/SEO';
import MenuDisplay from '@/components/MenuDisplay';
import { Button } from "@/components/ui/button";

const MenuPage: React.FC = () => {
  return (
    <div>
        <SEO
            title="Menü – elbaroma Catering | Orientalische Spezialitäten & kreative Küche"
            description="Entdecken Sie das Menü von elbaroma – von Meze über Moussaka bis zu feinen Fleisch- und Gemüsegerichten. Vegane, vegetarische & glutenfreie Optionen verfügbar."
            keywords="Catering Menü, türkische Spezialitäten, orientalisches Buffet, vegane Gerichte Hamburg, vegetarische Speisen Winsen"
        />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/10 pt-24 pb-10 sm:pt-28 sm:pb-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
            Unser <span className="elbaroma-text-gradient">Menü</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Entdecken Sie die Vielfalt unserer orientalischen Küche – von traditionellen Meze
            bis hin zu modernen Interpretationen klassischer Gerichte.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="elbaroma-gradient text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <a href="/contact">Jetzt Catering anfragen</a>
            </Button>
          </div>
        </div>
      </section>
      <MenuDisplay />
    </div>
  );
};

export default MenuPage;
