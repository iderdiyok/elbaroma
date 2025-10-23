import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Building2, Cake, Users, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';
import RequestModal from './RequestModal';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const services = [
    { icon: Heart, title: 'Hochzeiten', description: 'Feiern Sie Ihren schönsten Tag mit Aromen, die Liebe ausdrücken. Unsere orientalischen Menüs machen jeden Moment unvergesslich.', features: ['Individuelle Menüplanung', 'Elegante Präsentation', 'Kompletter Service'] },
    { icon: Building2, title: 'Firmenfeiern', description: 'Beeindrucken Sie Gäste & Kollegen mit stilvollem Catering – professionell, pünktlich und voller Geschmack.', features: ['Business-Lunch', 'Konferenz-Catering', 'Team-Events'] },
    { icon: Cake, title: 'Geburtstage', description: 'Genießen Sie den Tag mit Familie & Freunden – wir liefern das orientalische Festmenü für gute Laune und volle Teller.', features: ['Familienfeiern', 'Große Gesellschaften', 'Kinderfreundliche Optionen'] },
    { icon: Sparkles, title: 'Verlobungen', description: 'Romantische Atmosphäre mit liebevoll angerichteten Gerichten – für den Tag, an dem alles beginnt.', features: ['Romantisches Ambiente', 'Besondere Präsentation', 'Persönlicher Service'] },
    { icon: GraduationCap, title: 'Einschulungen', description: 'Ein Tag voller Stolz & Freude – wir sorgen für das passende Buffet, das Groß & Klein begeistert.', features: ['Familienfreundlich', 'Bunte Vielfalt', 'Flexible Portionen'] },
    { icon: Users, title: 'Individuelle Konzepte', description: 'So einzigartig wie Ihr Anlass – wir gestalten Ihr Wunsch-Catering mit Leidenschaft & Flexibilität.', features: ['Persönliche Beratung', 'Flexible Gestaltung', 'Alle Gruppengrößen'] }
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/texture-light.png')] opacity-10 pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Unsere <span className="elbaroma-text-gradient">Leistungen</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wir bringen orientalische Leidenschaft auf Ihre Veranstaltung – frisch, liebevoll angerichtet und auf Ihren Anlass abgestimmt.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                aria-labelledby={`service-${index}-title`}
              >
                <Card className="group border-0 shadow-md bg-gradient-to-b from-white/90 to-amber-50/60 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto bg-gradient-to-tr from-amber-400 to-yellow-300 shadow-md shadow-yellow-200/30 group-hover:scale-105 transition-transform">
                      <IconComponent className="h-8 w-8 text-white drop-shadow-sm" aria-hidden="true" />
                    </div>
                    
                    <h3 id={`service-${index}-title`} className="text-xl font-bold text-center mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-center mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-full mr-3 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full elbaroma-gradient text-white font-semibold hover:scale-105 transition-transform"
                      onClick={() => setSelectedEvent(service.title)}
                      type="button"
                      aria-label={`Anfrage für ${service.title} stellen`}
                      title={`Anfrage für ${service.title} stellen`}  
                    >
                      Anfrage erstellen
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-amber-100"
          aria-label="Service-Highlights"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-3xl font-bold elbaroma-text-gradient mb-2">🚚 20 km</div>
              <h4 className="font-semibold text-gray-900 mb-1">Kostenlose Lieferung</h4>
              <p className="text-sm text-gray-600">Auf- und Abbau sowie Lieferung innerhalb eines 20 km-Radius um Winsen inklusive.</p>
            </div>
            <div>
              <div className="text-3xl font-bold elbaroma-text-gradient mb-2">🌿 100%</div>
              <h4 className="font-semibold text-gray-900 mb-1">Frische Zutaten</h4>
              <p className="text-sm text-gray-600">Unsere Spezialitäten basieren auf frischen, regionalen Zutaten und traditionellen Rezepten.</p>
            </div>
            <div>
              <div className="text-3xl font-bold elbaroma-text-gradient mb-2">💬 24/7</div>
              <h4 className="font-semibold text-gray-900 mb-1">Persönliche Beratung</h4>
              <p className="text-sm text-gray-600">Wir sind jederzeit erreichbar und planen Ihr Event mit Liebe &amp; Erfahrung.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Abschluss */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Lassen Sie uns Ihr Fest unvergesslich machen.</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Gemeinsam planen wir ein Catering, das Ihre Gäste begeistert – liebevoll, frisch und einzigartig.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="elbaroma-gradient text-white px-8 shadow-lg hover:scale-105 transition-transform">
              <Link to="/contact">Jetzt Event planen</Link>
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-amber-300 text-gray-800 hover:bg-amber-50 transition-colors">
              <Link to="/menu">Menü entdecken</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <RequestModal open={!!selectedEvent} onClose={() => setSelectedEvent(null)} eventType={selectedEvent || ""} />
    </section>
  );
};

export default ServicesSection;
