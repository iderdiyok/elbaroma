import React, { useState } from 'react';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  Instagram, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Calendar,
  Star
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die Form-Daten an ein Backend gesendet werden
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '0176 305 08 998',
      link: 'tel:+4917630508998',
      description: 'Rufen Sie uns direkt an'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      value: 'elbaroma.catering@gmail.com',
      link: 'mailto:elbaroma.catering@gmail.com',
      description: 'Schreiben Sie uns eine E-Mail'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@elb.aroma',
      link: '#',
      description: 'Folgen Sie uns auf Instagram'
    },
    {
      icon: MapPin,
      title: 'Standort',
      value: 'Winsen (Luhe)',
      link: '#',
      description: '10km Lieferradius inklusive'
    }
  ];

  const serviceFeatures = [
    {
      icon: Clock,
      title: 'Schnelle Antwort',
      description: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück'
    },
    {
      icon: Users,
      title: 'Persönliche Beratung',
      description: 'Individuelle Beratung für Ihr perfektes Event'
    },
    {
      icon: Star,
      title: 'Kostenlose Beratung',
      description: 'Unverbindliches Angebot ohne versteckte Kosten'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Kontakt - Elbaroma Catering"
        description="Kontaktieren Sie Elbaroma Catering für Ihr Event. Telefon: 0176 305 08 998, E-Mail: elbaroma.catering@gmail.com. Kostenlose Beratung und schnelle Antwort."
        keywords="Kontakt, Catering Anfrage, Beratung, Winsen Catering, Event Planung"
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="elbaroma-text-gradient">Kontakt</span> aufnehmen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? 
            Wir freuen uns auf Ihre Nachricht und beraten Sie gerne persönlich.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktinformationen</h2>
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="food-card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 elbaroma-gradient rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                            <a 
                              href={info.link}
                              className="text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                            <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Service Features */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-foreground mb-4">Unser Service</h3>
                <div className="space-y-4">
                  {serviceFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <IconComponent className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Opening Hours */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="font-bold text-foreground">Erreichbarkeit</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Montag - Freitag:</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samstag:</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sonntag:</span>
                      <span className="font-medium">Nach Vereinbarung</span>
                    </div>
                  </div>
                  <Badge className="mt-4 bg-green-100 text-green-800 border-green-200">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    WhatsApp 24/7 verfügbar
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Anfrage senden
                  </h2>
                  <p className="text-muted-foreground">
                    Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen zurück. 
                    Alle Felder mit * sind Pflichtfelder.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Vielen Dank!</h3>
                    <p className="text-muted-foreground">
                      Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Vollständiger Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Max Mustermann"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-Mail-Adresse *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="max@beispiel.de"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Telefonnummer</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0176 123 456 789"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Anzahl Gäste *</Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          value={formData.guests}
                          onChange={handleInputChange}
                          placeholder="z.B. 25"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    {/* Event Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="eventType">Art der Veranstaltung</Label>
                        <Input
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          placeholder="z.B. Hochzeit, Firmenfeier, Geburtstag"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="eventDate">Gewünschtes Datum</Label>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Ihre Nachricht</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Beschreiben Sie Ihre Wünsche, besondere Anforderungen, Allergien oder andere wichtige Informationen..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full elbaroma-gradient text-white"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Anfrage senden
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      Mit dem Absenden stimmen Sie unserer{' '}
                      <a href="/datenschutz" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      zu. Ihre Daten werden vertraulich behandelt.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Map Info */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <MapPin className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold text-foreground">Unser Liefergebiet</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Wir liefern in einem Umkreis von 10 Kilometern um Winsen (Luhe). 
                    Die Lieferung, der Auf- und Abbau sind für Sie kostenfrei.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 elbaroma-gradient rounded-full"></div>
                      <span className="text-foreground">Kostenlose Lieferung & Aufbau</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 elbaroma-gradient rounded-full"></div>
                      <span className="text-foreground">10km Radius um Winsen</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 elbaroma-gradient rounded-full"></div>
                      <span className="text-foreground">Pünktliche Anlieferung</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 elbaroma-gradient rounded-full"></div>
                      <span className="text-foreground">Professioneller Service</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Außerhalb des Liefergebiets?</h4>
                    <p className="text-sm text-muted-foreground">
                      Kontaktieren Sie uns trotzdem! Für größere Events finden wir gerne eine Lösung.
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Google Maps Integration</h3>
                    <p className="text-muted-foreground max-w-xs">
                      Hier würde die interaktive Karte mit unserem Liefergebiet um Winsen angezeigt werden.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
