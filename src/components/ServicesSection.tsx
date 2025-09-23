import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Building2, Cake, Users, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: 'Hochzeiten',
      description: 'Unvergessliche Momente mit exquisiten orientalischen Köstlichkeiten für Ihren besonderen Tag.',
      features: ['Individuelle Menüplanung', 'Elegante Präsentation', 'Kompletter Service']
    },
    {
      icon: Building2,
      title: 'Firmenfeiern',
      description: 'Professionelles Catering für Ihre Geschäftsveranstaltungen und Firmenevents.',
      features: ['Business-Lunch', 'Konferenz-Catering', 'Team-Events']
    },
    {
      icon: Cake,
      title: 'Geburtstage',
      description: 'Feiern Sie Ihren Geburtstag mit authentischen orientalischen Spezialitäten.',
      features: ['Familienfeiern', 'Große Gesellschaften', 'Kinderfreundliche Optionen']
    },
    {
      icon: Sparkles,
      title: 'Verlobungen',
      description: 'Romantische Atmosphäre mit liebevoll zubereiteten traditionellen Gerichten.',
      features: ['Romantisches Ambiente', 'Besondere Präsentation', 'Persönlicher Service']
    },
    {
      icon: GraduationCap,
      title: 'Einschulungen',
      description: 'Besondere Momente für die ganze Familie mit köstlichen Meze und mehr.',
      features: ['Familienfreundlich', 'Bunte Vielfalt', 'Flexible Portionen']
    },
    {
      icon: Users,
      title: 'Individuelle Konzepte',
      description: 'Maßgeschneiderte Lösungen für Ihre besonderen Wünsche und Anlässe.',
      features: ['Persönliche Beratung', 'Flexible Gestaltung', 'Alle Gruppengrößen']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="elbaroma-text-gradient">Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mit viel Liebe und Erfahrung bereiten wir traditionelle und moderne Gerichte zu, 
            die Ihre Gäste begeistern. Für jeden Anlass das passende Konzept.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="food-card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 elbaroma-gradient rounded-full mb-6 mx-auto">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 elbaroma-gradient rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Features */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold elbaroma-text-gradient mb-2">10km</div>
              <h4 className="font-semibold text-foreground mb-2">Kostenlose Lieferung</h4>
              <p className="text-sm text-muted-foreground">
                Auf- und Abbau sowie Lieferung innerhalb eines 10 km-Radius um Winsen inklusive.
              </p>
            </div>
            
            <div>
              <div className="text-3xl font-bold elbaroma-text-gradient mb-2">100%</div>
              <h4 className="font-semibold text-foreground mb-2">Frische Zutaten</h4>
              <p className="text-sm text-muted-foreground">
                Unsere Spezialitäten basieren auf frischen, regionalen Zutaten und traditionellen Rezepten.
              </p>
            </div>
            
            <div>
              <div className="text-3xl font-bold elbaroma-text-gradient mb-2">24/7</div>
              <h4 className="font-semibold text-foreground mb-2">Persönliche Beratung</h4>
              <p className="text-sm text-muted-foreground">
                Wir stehen für Fragen oder eine individuelle Beratung jederzeit gerne zur Verfügung.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Bereit für Ihr Event?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr perfektes Catering-Erlebnis planen. 
            Kontaktieren Sie uns für ein unverbindliches Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="elbaroma-gradient text-white px-8">
              Kostenlose Beratung
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Menü ansehen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
