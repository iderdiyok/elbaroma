import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";

interface RequestFormProps {
  defaultEventType?: string;
  onSubmitted?: () => void;
}

const RequestForm: React.FC<RequestFormProps> = ({ defaultEventType = "", onSubmitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    eventType: defaultEventType,
    eventDate: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    onSubmitted?.();

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "",
        eventType: defaultEventType,
        eventDate: "",
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold">Vielen Dank!</h3>
        <p className="text-muted-foreground">Wir melden uns in Kürze bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Vollständiger Name *</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="email">E-Mail-Adresse *</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>

      {/* Telefon + Gäste */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Telefonnummer</Label>
          <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="guests">Anzahl Gäste *</Label>
          <Input id="guests" name="guests" type="number" value={formData.guests} onChange={handleChange} required />
        </div>
      </div>

      {/* EventType + Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="eventType">Art der Veranstaltung</Label>
          <Input id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="eventDate">Gewünschtes Datum</Label>
          <Input id="eventDate" name="eventDate" type="date" value={formData.eventDate} onChange={handleChange} />
        </div>
      </div>

      {/* Nachricht */}
      <div>
        <Label htmlFor="message">Ihre Nachricht</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} />
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full elbaroma-gradient text-white cursor-pointer">
        <Send className="mr-2 h-5 w-5" /> Anfrage senden
      </Button>
    </form>
  );
};

export default RequestForm;
