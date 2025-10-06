import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Mail, Phone, Eye, Lock, UserCheck } from 'lucide-react';

const DatenschutzPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="elbaroma-text-gradient">Datenschutz</span>erklärung
          </h1>
          <p className="text-xl text-muted-foreground">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-8">
              {/* Einleitung */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Datenschutz im Überblick</h2>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten 
                    ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen 
                    Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung 
                    im Rahmen unserer Website.
                  </p>
                </div>
              </section>

              {/* Verantwortlicher */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">1. Verantwortlicher</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground">
                    <strong>Verantwortlicher im Sinne der DSGVO:</strong><br />
                    <strong>Elbaroma Catering</strong><br />
                    Guelsuem Derdiyok<br />
                    Kiebitzweg 1<br />
                    21423 Winsen (Luhe)<br />
                    Deutschland<br /><br />
                    
                    <strong>Kontakt:</strong><br />
                    E-Mail: info@elb-aroma.de<br />
                    Telefon: 0176 305 08 998
                  </p>
                </div>
              </section>

              {/* Datenerfassung */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">2. Datenerfassung auf unserer Website</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Eye className="h-5 w-5 mr-2 text-primary" />
                      Automatische Datenerfassung
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. 
                      Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete 
                      Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-primary" />
                      Kontaktformular
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                      Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                      der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                    </p>
                  </div>
                </div>
              </section>

              {/* Zweck der Datenverarbeitung */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">3. Zweck der Datenverarbeitung</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">Website-Betrieb</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Bereitstellung der Website</li>
                      <li>• Gewährleistung der Systemsicherheit</li>
                      <li>• Optimierung der Website</li>
                      <li>• Statistische Auswertungen</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">Kundenbetreuung</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Bearbeitung von Anfragen</li>
                      <li>• Angebotserstellung</li>
                      <li>• Kundenberatung</li>
                      <li>• Vertragsabwicklung</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Rechtsgrundlage */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">4. Rechtsgrundlage</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage folgender Rechtsgrundlagen:<br /><br />
                    
                    <strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung<br />
                    <strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vertragserfüllung<br />
                    <strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigte Interessen
                  </p>
                </div>
              </section>

              {/* Speicherdauer */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">5. Speicherdauer</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die Erfüllung der 
                    Zwecke erforderlich ist, für die sie erhoben wurden, oder solange gesetzliche Aufbewahrungsfristen 
                    bestehen. Kontaktanfragen werden in der Regel nach 2 Jahren gelöscht, sofern keine 
                    Geschäftsbeziehung entstanden ist.
                  </p>
                </div>
              </section>

              {/* Ihre Rechte */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">6. Ihre Rechte</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <UserCheck className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Auskunftsrecht</h3>
                        <p className="text-sm text-muted-foreground">
                          Sie haben das Recht auf Auskunft über Ihre gespeicherten Daten.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Lock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Berichtigungsrecht</h3>
                        <p className="text-sm text-muted-foreground">
                          Sie haben das Recht auf Berichtigung unrichtiger Daten.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Löschungsrecht</h3>
                        <p className="text-sm text-muted-foreground">
                          Sie haben das Recht auf Löschung Ihrer Daten.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Eye className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Widerspruchsrecht</h3>
                        <p className="text-sm text-muted-foreground">
                          Sie haben das Recht, der Verarbeitung zu widersprechen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">7. Cookies</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem 
                    Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und 
                    sicherer zu machen. Einige Cookies sind "Session-Cookies". Solche Cookies werden nach Ende 
                    Ihrer Browser-Sitzung von selbst gelöscht.
                  </p>
                </div>
              </section>

              {/* SSL-Verschlüsselung */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">8. SSL-Verschlüsselung</h2>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, 
                    wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. 
                    Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" 
                    auf "https://" wechselt.
                  </p>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">9. Kontakt bei Datenschutzfragen</h2>
                <div className="bg-primary/10 rounded-lg p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:<br /><br />
                    
                    <strong>E-Mail:</strong> info@elb-aroma.de<br />
                    <strong>Telefon:</strong> 0176 305 08 998<br /><br />
                    
                    Sie haben auch das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere 
                    Verarbeitung personenbezogener Daten zu beschweren.
                  </p>
                </div>
              </section>

              {/* Hinweis */}
              <div className="mt-12 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong>Hinweis:</strong> Dies ist eine Platzhalter-Datenschutzerklärung. Die tatsächlichen Angaben 
                  müssen entsprechend der realen Datenverarbeitungspraktiken von Elbaroma Catering angepasst werden. 
                  Bitte konsultieren Sie einen Rechtsanwalt oder Datenschutzexperten für die korrekte Erstellung 
                  der Datenschutzerklärung.
                </p>
              </div>

              {/* Stand */}
              <div className="text-center pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  Stand dieser Datenschutzerklärung: September 2024
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DatenschutzPage;
