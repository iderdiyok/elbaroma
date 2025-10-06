import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Building } from 'lucide-react';

const ImpressumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="elbaroma-text-gradient">Impressum</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Rechtliche Informationen gemäß § 5 TMG
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-8">
              {/* Angaben gemäß § 5 TMG */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Building className="h-6 w-6 mr-3 text-primary" />
                  Angaben gemäß § 5 TMG
                </h2>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground">Firmenname:</h3>
                      <p className="text-muted-foreground">Elbaroma Catering</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground">Inhaber/Geschäftsführer:</h3>
                      <p className="text-muted-foreground">Guelsuem Derdiyok</p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Anschrift:</h3>
                        <p className="text-muted-foreground">
                          Kiebitzweg 1<br />
                          21423 Winsen (Luhe)<br />
                          Deutschland<br /><br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Kontakt</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Telefon:</h3>
                      <a href="tel:+4917630508998" className="text-primary hover:underline">
                        0176 305 08 998
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">E-Mail:</h3>
                      <a href="mailto:info@elb-aroma.de" className="text-primary hover:underline">
                        info@elb-aroma.de
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Umsatzsteuer-ID */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Umsatzsteuer-ID</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    <span className="font-medium">50/109/07719</span>
                  </p>
                </div>
              </section>

              {/* Berufsbezeichnung */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Berufsbezeichnung</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground">
                    <strong>Berufsbezeichnung:</strong> Catering-Service<br />
                    <strong>Verliehen in:</strong> Deutschland<br />
                    <strong>Es gelten folgende berufsrechtliche Regelungen:</strong><br />
                    Lebensmittelhygiene-Verordnung (LMHV), Infektionsschutzgesetz (IfSG)
                  </p>
                </div>
              </section>

              {/* Verantwortlich für den Inhalt */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground">
                    Guelsuem Derdiyok<br />
                    Kiebitzweg 1<br />
                    21423 Winsen (Luhe)<br />
                    Deutschland<br /><br />
                  </p>
                </div>
              </section>

              {/* Haftungsausschluss */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Haftungsausschluss</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Haftung für Inhalte</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                      allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                      unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                      Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Haftung für Links</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                      Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Urheberrecht</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                      Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                      Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Streitschlichtung */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Streitschlichtung</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                      https://ec.europa.eu/consumers/odr/
                    </a><br /><br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /><br />
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </section>

              {/* Hinweis */}
              <div className="mt-12 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong>Hinweis:</strong> Dies ist ein Platzhalter-Impressum. Die tatsächlichen Angaben müssen 
                  entsprechend der realen Geschäftsdaten von Elbaroma Catering ausgefüllt werden. Bitte konsultieren 
                  Sie einen Rechtsanwalt für die korrekte Erstellung des Impressums.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImpressumPage;
