import React, { useState } from 'react';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Plus, 
  Minus, 
  ShoppingCart, 
  Star, 
  Leaf, 
  Flame,
  Users,
  Mail,
  Phone,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  image?: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('vorspeisen');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const categories = [
    { id: 'vorspeisen', name: 'Vorspeisen - Meze', icon: '🥗' },
    { id: 'hauptgerichte', name: 'Hauptgerichte', icon: '🍖' },
    { id: 'fingerfood', name: 'Fingerfood-Platte', icon: '🥙' },
    { id: 'salate', name: 'Salate', icon: '🥬' },
    { id: 'desserts', name: 'Desserts & Obst', icon: '🍯' }
  ];

  const menuItems: MenuItem[] = [
    // Vorspeisen - Meze
    {
      id: 'humus',
      name: 'Humus',
      description: 'Kichererbsenpüree mit Sesampaste, Zitrone & Knoblauch',
      price: 8.50,
      category: 'vorspeisen',
      isVegetarian: true
    },
    {
      id: 'ezme',
      name: 'Ezme',
      description: 'Scharfer Tomaten-Paprika-Dip mit Kräutern',
      price: 7.50,
      category: 'vorspeisen',
      isVegetarian: true,
      isSpicy: true
    },
    {
      id: 'haydari',
      name: 'Haydari mit Feta',
      description: 'Cremiger Joghurt-Dip mit Feta, Knoblauch & Minze',
      price: 9.00,
      category: 'vorspeisen',
      isVegetarian: true
    },
    {
      id: 'dolma',
      name: 'Dolma',
      description: 'Gefüllte Spitzpaprika mit Reis, Kräutern und Korinthen',
      price: 12.00,
      category: 'vorspeisen',
      isVegetarian: true
    },
    {
      id: 'sigara-boregi',
      name: 'Sigara Böreği',
      description: 'Knusprige Teigröllchen mit Feta-Käse',
      price: 10.50,
      category: 'vorspeisen',
      isVegetarian: true
    },
    {
      id: 'pogaca',
      name: 'Poğaça',
      description: 'Weiches Hefegebäck, gefüllt mit Käse, Hackfleisch oder Kartoffeln',
      price: 6.50,
      category: 'vorspeisen'
    },

    // Hauptgerichte
    {
      id: 'tavuk-sis',
      name: 'Tavuk Şiş',
      description: 'Marinierte Hähnchenspieße mit orientalischen Gewürzen',
      price: 16.50,
      category: 'hauptgerichte'
    },
    {
      id: 'kofte',
      name: 'Köfte',
      description: 'Hausgemachte Rindfleischbällchen mit Gewürzen und Tomatensoße',
      price: 15.00,
      category: 'hauptgerichte'
    },
    {
      id: 'vegetarische-moussaka',
      name: 'Vegetarische Moussaka',
      description: 'Auberginenauflauf mit Tomaten & Bechamel',
      price: 14.50,
      category: 'hauptgerichte',
      isVegetarian: true
    },
    {
      id: 'kovurma',
      name: 'Kovurma',
      description: 'Zart gebratene Hähnchen- oder Rinderpfanne mit Gemüse',
      price: 17.00,
      category: 'hauptgerichte'
    },
    {
      id: 'bulgur-pilav',
      name: 'Bulgur-Pilav',
      description: 'Traditioneller Bulgur-Reis als Beilage',
      price: 5.50,
      category: 'hauptgerichte',
      isVegetarian: true
    },

    // Fingerfood
    {
      id: 'mini-sigara-boregi',
      name: 'Mini Sigara Böreği',
      description: 'Kleine knusprige Teigröllchen mit Feta-Käse',
      price: 2.50,
      category: 'fingerfood',
      isVegetarian: true
    },
    {
      id: 'mini-kofte',
      name: 'Mini Köfte',
      description: 'Kleine Rindfleischbällchen, perfekt als Häppchen',
      price: 3.00,
      category: 'fingerfood'
    },
    {
      id: 'borek-happchen',
      name: 'Börek-Häppchen',
      description: 'Mit Spinat & Feta gefüllte Blätterteig-Häppchen',
      price: 2.80,
      category: 'fingerfood',
      isVegetarian: true
    },
    {
      id: 'sarma',
      name: 'Sarma',
      description: 'Gefüllte Weinblätter mit Reis und Kräutern',
      price: 3.50,
      category: 'fingerfood',
      isVegetarian: true
    },

    // Salate
    {
      id: 'coban-salatasi',
      name: 'Çoban Salatası',
      description: 'Frischer Bauernsalat mit Tomaten, Gurken und Zwiebeln',
      price: 8.00,
      category: 'salate',
      isVegetarian: true
    },
    {
      id: 'kisir',
      name: 'Kısır',
      description: 'Würziger Bulgursalat mit Kräutern und Tomatenmark',
      price: 9.50,
      category: 'salate',
      isVegetarian: true
    },
    {
      id: 'kartoffelsalat',
      name: 'Kartoffelsalat',
      description: 'Nach türkischer Art mit Olivenöl und Kräutern',
      price: 7.50,
      category: 'salate',
      isVegetarian: true
    },

    // Desserts
    {
      id: 'dessertplatte',
      name: 'Dessertplatte',
      description: 'Individuelle Auswahl nach Absprache - traditionelle türkische Süßspeisen',
      price: 12.00,
      category: 'desserts',
      isVegetarian: true
    },
    {
      id: 'obstplatte',
      name: 'Obstplatte',
      description: 'Saisonale Auswahl, kunstvoll angerichtet',
      price: 10.00,
      category: 'desserts',
      isVegetarian: true
    }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => {
      return prevCart.reduce((acc, cartItem) => {
        if (cartItem.id === itemId) {
          if (cartItem.quantity > 1) {
            acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
          }
        } else {
          acc.push(cartItem);
        }
        return acc;
      }, [] as CartItem[]);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== itemId));
      return;
    }
    
    setCart(prevCart => {
      return prevCart.map(cartItem => {
        if (cartItem.id === itemId) {
          return { ...cartItem, quantity: Math.min(newQuantity, 999) };
        }
        return cartItem;
      });
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Menü & Bestellung - Elbaroma Catering"
        description="Entdecken Sie unser vielfältiges Menü mit orientalischen Spezialitäten. Vorspeisen, Hauptgerichte, Fingerfood, Salate und Desserts. Stellen Sie Ihr individuelles Buffet zusammen."
        keywords="Menü, orientalische Gerichte, Meze, Köfte, Dolma, Humus, Catering Menü, türkische Spezialitäten"
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unser <span className="elbaroma-text-gradient">Menü</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie die Vielfalt unserer orientalischen Küche. Stellen Sie Ihr individuelles Buffet zusammen 
            oder wählen Sie einzelne Gerichte für Ihr Event.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold text-foreground mb-4">Kategorien</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "ghost"}
                    className={`w-full justify-start text-left ${
                      activeCategory === category.id 
                        ? 'elbaroma-gradient text-white' 
                        : 'hover:bg-primary/10'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Button>
                ))}
              </div>

              {/* Cart Summary */}
              {cart.length > 0 && (
                <div className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Warenkorb</h4>
                    <Badge className="elbaroma-gradient text-white">
                      {getTotalItems()} Artikel
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-sm">
                        <span className="flex-1 truncate">{item.name}</span>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0"
                            onClick={() => addToCart(item)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-2 mb-4">
                    <div className="flex justify-between font-semibold">
                      <span>Gesamt:</span>
                      <span>{getTotalPrice().toFixed(2)} €</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full elbaroma-gradient text-white"
                    onClick={() => setShowOrderForm(true)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Anfrage senden
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              <p className="text-muted-foreground">
                {activeCategory === 'vorspeisen' && 'Traditionelle Meze - perfekt zum Teilen und Genießen'}
                {activeCategory === 'hauptgerichte' && 'Herzhafte Hauptspeisen mit authentischen Gewürzen'}
                {activeCategory === 'fingerfood' && 'Kleine Köstlichkeiten für Ihre Veranstaltung'}
                {activeCategory === 'salate' && 'Frische Salate nach orientalischer Art'}
                {activeCategory === 'desserts' && 'Süße Verführungen und frische Früchte'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="food-card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                          {item.isVegetarian && (
                            <Badge variant="outline" className="border-green-500 text-green-600">
                              <Leaf className="h-3 w-3 mr-1" />
                              Vegetarisch
                            </Badge>
                          )}
                          {item.isSpicy && (
                            <Badge variant="outline" className="border-red-500 text-red-600">
                              <Flame className="h-3 w-3 mr-1" />
                              Scharf
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold elbaroma-text-gradient">
                        {item.price.toFixed(2)} €
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {cart.find(cartItem => cartItem.id === item.id) ? (
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              min="1"
                              max="999"
                              value={cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-16 text-center font-semibold"
                            />
                            <Button
                              size="sm"
                              className="elbaroma-gradient text-white"
                              onClick={() => addToCart(item)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            className="elbaroma-gradient text-white"
                            onClick={() => addToCart(item)}
                          >
                            <Plus className="mr-2 h-4 w-4" />
                            Hinzufügen
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Anfrage senden</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowOrderForm(false)}
                >
                  ✕
                </Button>
              </div>

              {/* Order Summary */}
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-3">Ihre Auswahl:</h3>
                <div className="space-y-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.quantity}x {item.name}</span>
                      <span>{(item.price * item.quantity).toFixed(2)} €</span>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-3 pt-3 flex justify-between font-semibold">
                  <span>Gesamt:</span>
                  <span>{getTotalPrice().toFixed(2)} €</span>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Ihr vollständiger Name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" type="email" placeholder="ihre@email.de" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefonnummer</Label>
                    <Input id="phone" type="tel" placeholder="0176 123 456 789" />
                  </div>
                  <div>
                    <Label htmlFor="guests">Personenanzahl *</Label>
                    <Input id="guests" type="number" placeholder="z.B. 25" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="event-type">Event-Art</Label>
                  <Input id="event-type" placeholder="z.B. Hochzeit, Firmenfeier, Geburtstag" />
                </div>

                <div>
                  <Label htmlFor="event-date">Gewünschtes Datum</Label>
                  <Input id="event-date" type="date" />
                </div>

                <div>
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Besondere Wünsche, Allergien, zusätzliche Informationen..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    type="button"
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setShowOrderForm(false)}
                  >
                    Abbrechen
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 elbaroma-gradient text-white"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Anfrage senden
                  </Button>
                </div>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                * Pflichtfelder. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
