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
  Leaf,
  Flame,
  Mail
} from 'lucide-react';
import QuantityInput from '@/components/QuantityInput';

interface MenuVariant {
  id: string;
  name: string; // z.B. "Standard-Portion"
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  image?: string;
  variants?: MenuVariant[];
}

interface CartItem {
  id: string; // unique key = itemId-variantId
  name: string;
  variant: string;
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
    category: 'vorspeisen',
    isVegetarian: true,
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'probier', name: 'Probiergröße' },
      { id: 'snack', name: 'Snack / Beilage' }
    ]
  },
  {
    id: 'ezme',
    name: 'Ezme',
    description: 'Scharfer Tomaten-Paprika-Dip mit Kräutern',
    category: 'vorspeisen',
    isVegetarian: true,
    isSpicy: true,
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'probier', name: 'Probiergröße' }
    ]
  },
  {
    id: 'haydari',
    name: 'Haydari mit Feta',
    description: 'Cremiger Joghurt-Dip mit Feta, Knoblauch & Minze',
    category: 'vorspeisen',
    isVegetarian: true,
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'snack', name: 'Snack / Beilage' }
    ]
  },
  {
    id: 'dolma',
    name: 'Dolma',
    description: 'Gefüllte Spitzpaprika mit Reis, Kräutern und Korinthen',
    category: 'vorspeisen',
    isVegetarian: true,
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'probier', name: 'Probiergröße' }
    ]
  },
  {
    id: 'sigara-boregi',
    name: 'Sigara Böreği',
    description: 'Knusprige Teigröllchen mit Feta-Käse',
    category: 'vorspeisen',
    isVegetarian: true,
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'snack', name: 'Snack / Beilage' }
    ]
  },
  {
    id: 'pogaca',
    name: 'Poğaça',
    description: 'Weiches Hefegebäck, gefüllt mit Käse, Hackfleisch oder Kartoffeln',
    category: 'vorspeisen',
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'snack', name: 'Snack / Beilage' }
    ]
  },

  // Hauptgerichte
  {
    id: 'tavuk-sis',
    name: 'Tavuk Şiş',
    description: 'Marinierte Hähnchenspieße mit orientalischen Gewürzen',
    category: 'hauptgerichte',
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'beilage', name: 'Snack / Beilage' }
    ]
  },
  {
    id: 'kofte',
    name: 'Köfte',
    description: 'Hausgemachte Rindfleischbällchen mit Gewürzen und Tomatensoße',
    category: 'hauptgerichte',
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'probier', name: 'Probiergröße' }
    ]
  },
  {
    id: 'vegetarische-moussaka',
    name: 'Vegetarische Moussaka',
    description: 'Auberginenauflauf mit Tomaten & Bechamel',
    category: 'hauptgerichte',
    isVegetarian: true,
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'probier', name: 'Probiergröße' }
    ]
  },
  {
    id: 'kovurma',
    name: 'Kovurma',
    description: 'Zart gebratene Hähnchen- oder Rinderpfanne mit Gemüse',
    category: 'hauptgerichte',
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'beilage', name: 'Snack / Beilage' }
    ]
  },
  {
    id: 'bulgur-pilav',
    name: 'Bulgur-Pilav',
    description: 'Traditioneller Bulgur-Reis als Beilage',
    category: 'hauptgerichte',
    isVegetarian: true,
    variants: [
      { id: 'standard', name: 'Standard-Portion' },
      { id: 'snack', name: 'Snack / Beilage' }
    ]
  },

  // Fingerfood
  {
    id: 'mini-sigara-boregi',
    name: 'Mini Sigara Böreği',
    description: 'Kleine knusprige Teigröllchen mit Feta-Käse',
    category: 'fingerfood',
    isVegetarian: true,
    variants: [
      { id: 'portion', name: 'Portion (ca. 6 Stück)' },
      { id: 'probier', name: 'Probiergröße' }
    ]
  },
  {
    id: 'mini-kofte',
    name: 'Mini Köfte',
    description: 'Kleine Rindfleischbällchen, perfekt als Häppchen',
    category: 'fingerfood',
    variants: [
      { id: 'portion', name: 'Portion (ca. 6 Stück)' },
      { id: 'probier', name: 'Probiergröße' }
    ]
  },
  {
    id: 'borek-happchen',
    name: 'Börek-Häppchen',
    description: 'Mit Spinat & Feta gefüllte Blätterteig-Häppchen',
    category: 'fingerfood',
    isVegetarian: true,
    variants: [
      { id: 'portion', name: 'Portion (ca. 6 Stück)' },
      { id: 'probier', name: 'Probiergröße' }
    ]
  },
  {
    id: 'sarma',
    name: 'Sarma',
    description: 'Gefüllte Weinblätter mit Reis und Kräutern',
    category: 'fingerfood',
    isVegetarian: true,
    variants: [
      { id: 'portion', name: 'Portion (ca. 6 Stück)' },
      { id: 'probier', name: 'Probiergröße' }
    ]
  },

  // Salate
  {
    id: 'coban-salatasi',
    name: 'Çoban Salatası',
    description: 'Frischer Bauernsalat mit Tomaten, Gurken und Zwiebeln',
    category: 'salate',
    isVegetarian: true,
    variants: [
      { id: 'schale', name: 'Schale (klein)' },
      { id: 'schuessel', name: 'Schüssel (groß)' }
    ]
  },
  {
    id: 'kisir',
    name: 'Kısır',
    description: 'Würziger Bulgursalat mit Kräutern und Tomatenmark',
    category: 'salate',
    isVegetarian: true,
    variants: [
      { id: 'schale', name: 'Schale (klein)' },
      { id: 'schuessel', name: 'Schüssel (groß)' }
    ]
  },
  {
    id: 'kartoffelsalat',
    name: 'Kartoffelsalat',
    description: 'Nach türkischer Art mit Olivenöl und Kräutern',
    category: 'salate',
    isVegetarian: true,
    variants: [
      { id: 'schale', name: 'Schale (klein)' },
      { id: 'schuessel', name: 'Schüssel (groß)' }
    ]
  },

  // Desserts
  {
    id: 'dessertplatte',
    name: 'Dessertplatte',
    description: 'Individuelle Auswahl nach Absprache - traditionelle türkische Süßspeisen',
    category: 'desserts',
    isVegetarian: true,
    variants: [
      { id: 'platte', name: 'Platte Standard' },
      { id: 'probier', name: 'Probiergröße' }
    ]
  },
  {
    id: 'obstplatte',
    name: 'Obstplatte',
    description: 'Saisonale Auswahl, kunstvoll angerichtet',
    category: 'desserts',
    isVegetarian: true,
    variants: [
      { id: 'platte', name: 'Platte Standard' },
      { id: 'gross', name: 'Große Platte' }
    ]
  }
];


  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item: MenuItem, variantId: string) => {
    const key = `${item.id}-${variantId}`;
    setCart(prevCart => {
      const existingItem = prevCart.find(ci => ci.id === key);
      if (existingItem) {
        return prevCart.map(ci =>
          ci.id === key ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      } else {
        return [
          ...prevCart,
          {
            id: key,
            name: item.name,
            variant: item.variants?.find(v => v.id === variantId)?.name || '',
            quantity: 1
          }
        ];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart =>
      prevCart.reduce((acc, ci) => {
        if (ci.id === itemId) {
          if (ci.quantity > 1) {
            acc.push({ ...ci, quantity: ci.quantity - 1 });
          }
        } else {
          acc.push(ci);
        }
        return acc;
      }, [] as CartItem[])
    );
  };

  const getQuantity = (itemId: string) => {
    return cart.find(ci => ci.id === itemId)?.quantity || 0;
  };

  const getTotalItems = () => cart.reduce((sum, ci) => sum + ci.quantity, 0);
  const updateQuantity = (key: string, newQty: number) => {
    if (newQty <= 0) {
      setCart(prev => prev.filter(ci => ci.id !== key));
    } else {
      setCart(prev =>
        prev.map(ci =>
          ci.id === key ? { ...ci, quantity: newQty } : ci
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Menü & Bestellung - Elbaroma Catering"
        description="Entdecken Sie unser vielfältiges Menü mit orientalischen Spezialitäten. Vorspeisen, Hauptgerichte, Fingerfood, Salate und Desserts. Stellen Sie Ihr individuelles Buffet zusammen."
        keywords="Menü, orientalische Gerichte, Meze, Köfte, Dolma, Humus, Catering Menü"
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unser <span className="elbaroma-text-gradient">Menü</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wählen Sie Ihre Lieblingsspeisen, entscheiden Sie über Varianten und Mengen,
            und senden Sie uns Ihre Anfrage. 
          </p>
            <div className="mt-8">
              <span className="text-base text-primary font-semibold">
                Wir freuen uns, Ihr Event kulinarisch zu bereichern!
              </span>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Kategorien */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold text-foreground mb-4">Kategorien</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'default' : 'ghost'}
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

              {/* Warenkorb */}
              {cart.length > 0 && (
                <div className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Ihre Auswahl</h4>
                    <Badge className="elbaroma-gradient text-white">
                      {getTotalItems()} Artikel
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>
                          {item.quantity}x {item.name} ({item.variant})
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          onClick={() => removeFromCart(item.id)}
                        >
                          ✕
                        </Button>
                      </div>
                    ))}
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

          {/* Menü Items */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map(item => (
                <Card
                  key={item.id}
                  className="food-card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                      {item.isVegetarian && (
                        <Badge variant="outline" className="border-green-500 text-green-600 ml-2">
                          <Leaf className="h-3 w-3 mr-1" />
                          Vegetarisch
                        </Badge>
                      )}
                      {item.isSpicy && (
                        <Badge variant="outline" className="border-red-500 text-red-600 ml-2">
                          <Flame className="h-3 w-3 mr-1" />
                          Scharf
                        </Badge>
                      )}
                      <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                    </div>

                    {/* Varianten-Auswahl */}
                    {item.variants && (
                      <div className="space-y-2">
                        {item.variants.map(variant => {
                          const key = `${item.id}-${variant.id}`;
                          const quantity = getQuantity(key);
                          return (
                            <div
                              key={variant.id}
                              className="flex items-center justify-between border rounded p-2"
                            >
                              <span>{variant.name}</span>
                              {/* <div className="flex items-center space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => removeFromCart(key)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span>{getQuantity(key)}</span>
                                <Button
                                  size="sm"
                                  className="elbaroma-gradient text-white"
                                  onClick={() => addToCart(item, variant.id)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div> */}
                              {quantity > 0 ? (
                                <QuantityInput
                                  value={quantity}
                                  onChange={(newQty) => updateQuantity(key, newQty)}
                                />
                              ) : (
                                <Button
                                  className="elbaroma-gradient text-white"
                                  onClick={() => addToCart(item, variant.id)}
                                >
                                  <Plus className="mr-2 h-4 w-4" />
                                  Hinzufügen
                                </Button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Anfrage Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Anfrage senden</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowOrderForm(false)}>
                  ✕
                </Button>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-3">Ihre Auswahl:</h3>
                <div className="space-y-2">
                  {cart.map(item => (
                    <div key={item.id} className="text-sm">
                      {item.quantity}x {item.name} ({item.variant})
                    </div>
                  ))}
                </div>
              </div>

              {/* Kontaktformular */}
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

                <div>
                  <Label htmlFor="phone">Telefonnummer</Label>
                  <Input id="phone" type="tel" placeholder="0176 123 456 789" />
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
                  <Button type="submit" className="flex-1 elbaroma-gradient text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Anfrage senden
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
