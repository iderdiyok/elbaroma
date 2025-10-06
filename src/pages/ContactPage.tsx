import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Instagram,
  MessageSquare,
} from "lucide-react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    eventType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "",
        eventType: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-muted/30">
      <SEO
        title="Kontakt – Elbaroma Catering"
        description="Kontaktieren Sie Elbaroma für Ihr Event. Persönlich, herzlich & unverbindlich."
        keywords="Kontakt Catering, Elbaroma, Anfrage Winsen, Event Catering"
      />

      {/* Header */}
      <section className="relative pt-28 pb-16 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-foreground">
            <span className="elbaroma-text-gradient">Kontakt</span> aufnehmen
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Sie planen ein Event oder möchten eine unverbindliche Anfrage stellen?
            <br className="hidden sm:block" />
            Wir freuen uns auf Ihre Nachricht – persönlich & herzlich.
          </p>
        </div>
      </section>

      {/* Kontaktbereich */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10">
        {/* Kontaktinfo */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-md">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Direkt Kontakt aufnehmen
              </h2>
              <p className="text-muted-foreground">
                Ob Hochzeit, Firmenfeier oder privates Dinner – wir beraten Sie gerne persönlich.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: "0176 305 08 998",
                  href: "tel:+4917630508998",
                },
                {
                  icon: Mail,
                  label: "E-Mail",
                  value: "elbaroma.catering@gmail.com",
                  href: "mailto:elbaroma.catering@gmail.com",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  value: "@elb.aroma",
                  href: "https://instagram.com/elb.aroma",
                },
                {
                  icon: MapPin,
                  label: "Standort",
                  value: "Winsen (Luhe) + 10 km Umkreis",
                  href: "#",
                },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-3 rounded-full elbaroma-gradient text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{label}</p>
                    <a
                      href={href}
                      className="text-primary hover:underline break-all"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-primary/5 rounded-xl text-sm text-muted-foreground">
              <p>📦 Lieferung & Aufbau im Umkreis von 10 km kostenlos.</p>
              <p>💬 WhatsApp oder E-Mail jederzeit möglich.</p>
            </div>
          </CardContent>
        </Card>

        {/* Formular */}
        <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-md">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Anfrage senden
            </h2>

            {isSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-1">
                  Vielen Dank für Ihre Nachricht!
                </h3>
                <p className="text-muted-foreground">
                  Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ihre@mail.de"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0176 123 456 789"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests">Gäste</Label>
                    <Input
                      id="guests"
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="z. B. 25"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="eventType">Event-Art</Label>
                  <Input
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    placeholder="z. B. Hochzeit, Firmenfeier …"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ihre Wünsche oder Fragen..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full elbaroma-gradient text-white py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Anfrage senden
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a
                    href="/datenschutz"
                    className="text-primary hover:underline"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </section>

      {/* CTA unten */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <MessageSquare className="mx-auto h-10 w-10 text-primary mb-3" />
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Lassen Sie uns über Ihr Event sprechen!
          </h3>
          <p className="text-muted-foreground mb-6">
            Individuelle Beratung, frische Ideen und echte Leidenschaft für gutes Essen.
          </p>
          <Button
            asChild
            className="elbaroma-gradient text-white px-8 py-6 font-semibold"
          >
            <a href="tel:+4917630508998">Jetzt anrufen</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
