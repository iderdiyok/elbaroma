import React from 'react';
import { Helmet } from "@dr.pogodin/react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Elbaroma Catering - Orientalische Küche für alle Anlässe',
  description = 'Elbaroma Catering bietet exquisite orientalische Küche für Hochzeiten, Firmenfeiern, Geburtstage und alle besonderen Anlässe. Frische Zutaten, traditionelle Rezepte und professioneller Service in Winsen und Umgebung.',
  keywords = 'Catering, orientalische Küche, türkische Küche, Hochzeit, Firmenfeier, Winsen, Buffet, Meze, Köfte, Catering Service, Event Catering',
  image = '/og-image.jpg',
  url = 'https://elbaroma-catering.de',
  type = 'website'
}) => {
  const fullTitle = title.includes('Elbaroma') ? title : `${title} | Elbaroma Catering`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Elbaroma Catering" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="de" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Elbaroma Catering" />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="DE-NI" />
      <meta name="geo.placename" content="Winsen (Luhe)" />
      <meta name="geo.position" content="53.3567;10.2139" />
      <meta name="ICBM" content="53.3567, 10.2139" />

      {/* Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          "name": "Elbaroma Catering",
          "description": description,
          "url": url,
          "telephone": "+4917630508998",
          "email": "elbaroma.catering@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Winsen (Luhe)",
            "addressRegion": "Niedersachsen",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.3567",
            "longitude": "10.2139"
          },
          "servesCuisine": ["Turkish", "Middle Eastern", "Mediterranean"],
          "priceRange": "$$",
          "serviceType": "Catering",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "53.3567",
              "longitude": "10.2139"
            },
            "geoRadius": "10000"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
