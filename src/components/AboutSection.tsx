import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import meImg from '@/assets/me.jpg';
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 bg-gradient-to-b from-background to-muted/30 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6 elbaroma-text-gradient">
            🍽️ elbaroma – Kulinarik mit Herz, Herkunft & Handschrift 🌊🌿
          </h2>
        </div>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Bild */}
              <div className="flex-shrink-0 w-full md:w-1/3">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.4 }}
                  src={meImg}
                  alt="Inhaberin von elbaroma lächelnd neben einer Meze-Platte"
                  className="w-full rounded-2xl shadow-lg object-cover aspect-square md:aspect-auto"
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 90vw"
                />
              </div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex-1 text-muted-foreground leading-relaxed text-lg space-y-6"
              >
                <p>
                  Hinter <strong>elbaroma</strong> steht keine anonyme Firma, sondern ich – 
                  eine Architektin aus Winsen, die ihre zweite große Leidenschaft zum Beruf gemacht hat: das Kochen.
                </p>
                <p>
                  Ich liebe es, Gäste zu bewirten, Teller mit Sorgfalt zu gestalten 
                  und Menschen mit gutem Essen ein Lächeln ins Gesicht zu zaubern.
                </p>
                <p>
                  Meine Inspiration finde ich in meinen Wurzeln – in den Aromen der Türkei, in der Weite der Elbe 
                  und in den Momenten, in denen Freunde und Familie sagten:
                  <em> „Mach das zu deinem Beruf!“</em>
                </p>
                <p>
                  So entstand <strong>elbaroma</strong> – ein Catering, das Geschichten auf den Tisch bringt, Erinnerungen weckt
                  und Menschen verbindet.
                </p>

                <div className="pt-4 border-t">
                  <h3 className="font-bold text-xl text-foreground mb-3">✨ Was Sie erwartet:</h3>
                  <ul className="space-y-2">
                    <li>⚓ Hamburg trifft Anatolien</li>
                    <li>🥙 Traditionelle Meze neu interpretiert</li>
                    <li>🌿 Würze mit Eleganz und Leichtigkeit</li>
                  </ul>
                </div>

                <p className="pt-4 border-t">
                  Mit frischen Zutaten, Liebe zum Detail und architektonischem Blick 
                  für Form und Gestaltung mache ich jedes Event zu etwas Besonderem.
                </p>

                <p className="text-center font-semibold text-foreground text-lg pt-4">
                  elbaroma – aus Hamburg. Von Herzen. Mit Wurzeln. Mit Seele. Mit Geschmack.
                </p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
