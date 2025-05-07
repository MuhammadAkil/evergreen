import Services from '../components/Services';
import ServiceBanner from './servicebanner';
import HeroTop from "../components/HeroTop";
import Subscribe from '../components/Subscribe';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Septic Pumping & Inspection Services in Lake Geneva - Evergreen Septic Service LLC",
    template: "%s | Evergreen Septic Service LLC",
  },
  description:
    "Discover expert septic pumping, certified inspections, maintenance, and eco-friendly solutions offered by Evergreen Septic Service LLC in Lake Geneva and the foothills.",
  keywords: [
    "septic pumping services Lake Geneva",
    "certified septic inspections",
    "Evergreen Septic Service LLC services",
    "foothills septic solutions",
    "septic maintenance Lake Geneva",
    "eco-friendly septic services",
    "septic repairs Lake Geneva",
    "drain field restoration services",
    "emergency septic services Lake Geneva",
    "septic installation services",
  ],
  openGraph: {
    title: "Septic Pumping & Inspection Services in Lake Geneva - Evergreen Septic Service LLC",
    description:
      "Discover expert septic pumping, certified inspections, maintenance, and eco-friendly solutions offered by Evergreen Septic Service LLC in Lake Geneva and the foothills.",
    url: "https://www.evergreensepticsvc.com/our-services",
    siteName: "Evergreen Septic Service LLC",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        width: 1200,
        height: 630,
        alt: "Septic services in Lake Geneva by Evergreen Septic Service LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Septic Pumping & Inspection Services in Lake Geneva - Evergreen Septic Service LLC",
    description:
      "Explore septic pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in Lake Geneva—contact us for reliable service!",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        alt: "Septic services in Lake Geneva by Evergreen Septic Service LLC",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.evergreensepticsvc.com/our-services",
  },
  metadataBase: new URL("https://www.evergreensepticsvc.com/"),
};

export default function ServicesPage() {
  const serviceData = [
    {
      name: "Septic Pumping",
      description: "Expert septic tank pumping to keep your system running efficiently.",
    },
    {
      name: "Certified Inspections",
      description: "Thorough inspections with detailed reports for your septic system.",
    },
    {
      name: "Eco-Friendly Solutions",
      description: "Environmentally safe methods to protect your property and ecosystem.",
    },
    {
        title: "Septic Tank Pumping",
        description: "Efficient and timely septic tank pumping to keep your system clean and operational.",
    },
    {
        title: "Septic System Inspections",
        description: "Thorough inspections to ensure your septic system meets local regulations and safety standards.",
    },
    {
        title: "Emergency Septic Services",
        description: "Professional repairs to address any issues and extend the life of your septic system.",
    },
    {
        title: "Drain Field Repair",
        description: "Quick and efficient drain cleaning to prevent backups and system failures.",
    },
    {
        title: "Grease Trap Services",
        description: "Cleaning and maintenance of grease traps for commercial kitchens.",
    },
    {
        title: "Emergency Services",
        description: "24/7 emergency response for urgent septic issues.",
    },
  ];

  return (
    <>
      <HeroTop
        title="Our Services"
        description="Discover expert septic pumping, certified inspections, maintenance, and eco-friendly solutions offered by Evergreen Septic Service LLC in Lake Geneva and the foothills."
      />
      <Services />
      <ServiceBanner />
      <Subscribe />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Septic System Services",
            provider: {
              "@type": "LocalBusiness",
              name: "Evergreen Septic Service LLC",
              url: "https://www.evergreensepticsvc.com/",
              telephone: "262-949-3555",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lake Geneva",
                addressRegion: "WI",
                postalCode: "53147",
                addressCountry: "US",
              },
            },
            areaServed: "Lake Geneva, WI",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Septic Services",
              itemListElement: serviceData.map((service, index) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.name,
                  description: service.description,
                },
                position: index + 1,
              })),
            },
          }),
        }}
      />
    </>
  );
}