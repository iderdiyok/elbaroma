import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Heart } from 'lucide-react';
import heroMeze from '@/assets/hero-meze.jpg';
import turkishMeze from '@/assets/turkish-meze.jpg';
import mediterraneanMeze from '@/assets/mediterranean-meze.jpg';
import mezeSpread from '@/assets/meze-spread.jpg';

const GalleryPreview: React.FC = () => {
  const galleryImages = [
    {
      src: heroMeze,
      alt: 'Orientalische Meze-Platte',
      title: 'Traditionelle Meze',
      description: 'Vielfältige Vorspeisen-Auswahl'
    },
    {
      src: turkishMeze,
      alt: 'Türkische Spezialitäten',
      title: 'Türkische Köstlichkeiten',
      description: 'Authentische Rezepte'
    },
    {
      src: mediterraneanMeze,
      alt: 'Mediterrane Meze-Platte',
      title: 'Mediterrane Vielfalt',
      description: 'Frische Zutaten'
    },
    {
      src: mezeSpread,
      alt: 'Großes Meze-Buffet',
      title: 'Buffet-Präsentation',
      description: 'Für große Feiern'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="elbaroma-text-gradient">Kreationen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie die Vielfalt unserer orientalischen Küche. Jedes Gericht wird mit Liebe 
            und traditionellen Rezepten zubereitet, um Ihre Gäste zu begeistern.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg food-card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{image.description}</p>
                  
                  <div className="flex items-center space-x-3">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary">
                      <Eye className="h-4 w-4 mr-2" />
                      Ansehen
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-xs font-semibold text-primary">#{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 elbaroma-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Mit Liebe zubereitet</h3>
            <p className="text-muted-foreground">
              Jedes Gericht wird mit traditionellen Rezepten und viel Hingabe zubereitet.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 elbaroma-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Ansprechende Präsentation</h3>
            <p className="text-muted-foreground">
              Wir legen großen Wert auf die optische Präsentation unserer Speisen.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 elbaroma-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Vielfältige Auswahl</h3>
            <p className="text-muted-foreground">
              Von Vorspeisen bis Desserts - entdecken Sie die ganze Vielfalt der orientalischen Küche.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Neugierig geworden?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entdecken Sie unser komplettes Menü mit allen Kategorien und lassen Sie sich von 
            der Vielfalt unserer orientalischen Küche inspirieren.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="elbaroma-gradient text-white px-8">
              Komplettes Menü ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Galerie durchstöbern
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
