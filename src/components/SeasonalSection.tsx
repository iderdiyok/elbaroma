import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Snowflake, Calendar, Gift, Star, ArrowRight } from 'lucide-react';
import turkishMezeImage from '@/assets/turkish-meze.jpg';

const SeasonalSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto">
              <img
                src={turkishMezeImage}
                alt="Orientalisches Weihnachtsbuffet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-red-600 text-white px-4 py-2 text-sm font-semibold">
                  <Snowflake className="h-4 w-4 mr-2" />
                  Saisonale Aktion
                </Badge>
              </div>
            </div>

            {/* Content Side */}
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Orientalisches 
                  <span className="block elbaroma-text-gradient">Weihnachtsbuffet</span>
                </h2>
                
                <div className="flex items-center space-x-4 mb-6">
                  <Badge variant="outline" className="border-accent text-accent">
                    <Calendar className="h-4 w-4 mr-1" />
                    November & Dezember
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    <Gift className="h-4 w-4 mr-1" />
                    Exklusiv
                  </Badge>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Lust auf ein orientalisches Buffet für Ihre Weihnachtsfeier? Die kalte Jahreszeit lädt zu 
                gemütlichen Feiern mit herzhaftem Essen ein – wie wäre es in diesem Jahr mit einem besonderen Highlight?
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Exklusives orientalisch-türkisches Buffet</h4>
                    <p className="text-sm text-muted-foreground">
                      Das Ihre Weihnachts- oder Winterfeier zu einem genussvollen Erlebnis macht.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Frische, regionale Zutaten</h4>
                    <p className="text-sm text-muted-foreground">
                      Mit leckeren Gewürzen und traditionellen Rezepten – ein Stück Orient auf Ihrem Tisch.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Kompletter Service inklusive</h4>
                    <p className="text-sm text-muted-foreground">
                      Auf- und Abbau sowie Lieferung innerhalb eines 10 km-Radius um Winsen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-foreground mb-3">Perfekt für:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Weihnachtsfeiern</div>
                  <div>• Winterfeste</div>
                  <div>• Firmenfeiern</div>
                  <div>• Familienfeiern</div>
                  <div>• Team-Events</div>
                  <div>• Private Feiern</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="elbaroma-gradient text-white flex-1">
                  Jetzt buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Menü ansehen
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                * Verfügbar von November bis Dezember. Frühzeitige Buchung empfohlen.
              </p>
            </CardContent>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <Snowflake className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Begrenzte Verfügbarkeit - Sichern Sie sich jetzt Ihren Termin!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection;
