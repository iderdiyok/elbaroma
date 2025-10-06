import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';
import MenuImageModal from './MenuImageModal';
import sehriyeliPilav from '@/assets/menu-images/sehriyeli-pilav.jpg';
import kofte from '@/assets/menu-images/kofte.jpg';
import imamBayildi from '@/assets/menu-images/imam-bayildi.jpg';

const MenuDisplay: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<{ title: string; image: string; desc?: string } | null>(null);

  const menuImages: Record<string, { src: string; description: string }> = {
    "Şehriyeli Pilav": {
      src: sehriyeliPilav,
      description: "Türkischer Reis mit feinen Nudeln und Butteraroma – klassisch serviert.",
    },
    "Köfte": {
      src: kofte ,
      description: "Hausgemachte Rindfleischbällchen mit Gewürzen und Tomatensoße.",
    },
    "İmam Bayıldı": {
      src: imamBayildi,
      description: "Ofen-Aubergine mit Tomaten, Zwiebeln und feinem Olivenöl.",
    },
  };

  const sections = [
    {
      title: '🌱 Vegetarische & Vegane Hauptgerichte (Ana Yemekler)',
      groups: [
        {
          title: '🍚 Reisgerichte (Pilavlar)',
          items: [
            'Şehriyeli Pilav – Türkischer Reis mit Shirataki Reis 🌱🧀',
            'Bulgur Pilavı – Bulgur-Reis 🌱🧀',
            'Basmati Pilavı – Basmatireis mit Safran 🌱🧀 ✅',
            'İç Pilav – Orientalischer Reis mit Rosinen, Pinienkernen, Zimt & Piment 🌱🧀 ✅'
          ]
        },
        {
          title: '🥟 Pasta & Teiggerichte',
          items: [
            'Vegane Mantı – Türkische Tortellini mit Kartoffelfüllung 🌱',
            'Penne mit Basilikum Pesto 🌱',
            'Burrata Pasta – Pasta in Tomatensoße mit cremigem Burrata-Käse 🧀',
            'Pasta in Bechamelsauce 🧀'
          ]
        },
        {
          title: '🥔 Kartoffelgerichte',
          items: [
            'Fırında Patates – Ofenkartoffeln mit Rosmarin 🌱 ✅',
            'Patates Oturtma – Kartoffelscheiben mit Zwiebeln & Gemüse 🌱 ✅',
            'Batata Harra – Röstkartoffeln mit Paprika, Koriander & Knoblauch 🌱 ✅',
            'Süßkartoffelwürfel mit Feta, Schnittlauch 🧀'
          ]
        },
        {
          title: '🥒 Gefülltes Gemüse & Eintöpfe',
          items: [
            'Veggie Dolma – Mit Reis gefüllte Paprika, Zucchini oder Aubergine 🌱',
            'Fırında Sebze 🌱 ✅',
            'İmam Bayıldı – Ofen-Aubergine mit Tomaten & Zwiebeln 🌱 ✅',
            'Bulgurlu Tava – Gemüsepfanne mit gebratenem Gemüse & Bulgur 🌱'
          ]
        }
      ]
    },
    {
      title: '🍖 Fleischgerichte (Et Yemekleri)',
      groups: [
        {
          title: '🥩 Hackfleischgerichte',
          items: [
            'Köfte – Türkische Hackbällchen',
            'Domates Sosunda Köfte – Hackbällchen in Tomatensoße',
            'Patlıcanlı Kürdan Kebabı – Hackbällchen in Auberginen gerollt',
            'Mantı (klassisch) – Gefüllte Teigtaschen mit Hackfleisch, Joghurt & Paprika-Minzbutter',
            'Patates Oturtma (mit Fleisch) – Kartoffelauflauf mit Hackfleisch ✅',
            'Patlıcan Musakka – Auberginen-Moussaka mit Hackfleisch & Käse ✅',
            'Karnıyarık – Mit Hackfleisch gefüllte Auberginen ✅',
            'Dolma (mit Fleisch) – Gefüllte Paprika, Zucchini oder Aubergine',
            'İçli Köfte – Frittierte Bulgurbällchen mit Hackfleisch'
          ]
        },
        {
          title: '🍗 Geflügelgerichte',
          items: [
            'Tavuk Şiş – Gegrillte Hähnchenspieße mit Sesam ✅',
            'Tavuk Sote – Hähnchengeschnetzeltes in Sahnesoße mit Gemüse ✅',
            'Tavuk Incik – Marinierte Hähnchenkeulen ✅'
          ]
        },
        {
          title: '🐄 Rind- & Lammgerichte',
          items: [
            'Dana Sote – Türkischer Rindergulasch mit Paprika & Zwiebeln',
            'Kuzu Pirzola – Lammkoteletts',
            'Kuzu Sote – Lammgeschnetzeltes mit Paprika',
            'Adana – Hackfleischspieße'
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, i) => (
          <div key={i} className="my-16">
            <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>

            {section.groups.map((group, j) => (
              <Card key={j} className="mb-6 bg-white/70 backdrop-blur-sm shadow-md border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">{group.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {group.items.map((item, k) => {
                      const itemName = item.split("–")[0].trim();
                      const hasImage = menuImages[itemName];
                      return (
                        <li key={k} className="flex items-start justify-between space-x-2">
                          <div className="flex items-start space-x-2">
                            <span>•</span>
                            <span>{item}</span>
                          </div>
                          {hasImage && (
                            <button
                              onClick={() =>
                                setSelectedItem({
                                  title: itemName,
                                  image: menuImages[itemName].src,
                                  desc: menuImages[itemName].description,
                                })
                              }
                              className="text-primary hover:text-primary/80 transition"
                              aria-label={`${itemName} Bild anzeigen`}
                              title={`${itemName} Bild anzeigen`}
                            >
                              <ImageIcon className="h-5 w-5" />
                            </button>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>🔖 <strong>Hinweise</strong></p>
          <p>🌱 vegan 🧀 vegetarisch ✅ glutenfrei</p>
          <p>Einige Gerichte sind auf Wunsch vegan oder glutenfrei erhältlich – sprich uns gerne an!</p>
        </div>
      </div>
      {selectedItem && (
        <MenuImageModal 
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          imageSrc={selectedItem.image}
          description={selectedItem.desc}
        />
      )}
    </section>
  );
};

export default MenuDisplay;
