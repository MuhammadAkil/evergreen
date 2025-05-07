import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Instrument_Sans } from 'next/font/google';
import ClientToastContainer from "./components/ClientToastContainer";

export const metadata: Metadata = {
  title: {
    default: "Top Septic Pumping & Inspection in Lake Geneva - Evergreen Septic Service LLC",
    template: "%s | Evergreen Septic Service LLC",
  },
  description:
    "Evergreen Septic Service LLC offers top-rated septic pumping, certified inspections, maintenance, and emergency services in Lake Geneva and the foothills. Contact us for expert, eco-friendly solutions!",
  keywords: [
    "septic pumping Lake Geneva",
    "certified septic inspection Lake Geneva",
    "septic maintenance services",
    "emergency septic repair Lake Geneva",
    "eco-friendly septic solutions",
    "septic tank cleaning Lake Geneva",
    "septic system inspection",
    "holding tank services Lake Geneva",
    "drain field repair Lake Geneva",
    "Evergreen Septic Service LLC",
  ],
  openGraph: {
    title: "Top Septic Pumping & Inspection in Lake Geneva - Evergreen Septic Service LLC",
    description:
      "Evergreen Septic Service LLC offers top-rated septic pumping, certified inspections, maintenance, and emergency services in Lake Geneva and the foothills. Contact us for expert, eco-friendly solutions!",
    url: "https://www.evergreensepticsvc.com/",
    siteName: "Evergreen Septic Service LLC",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        width: 1200,
        height: 630,
        alt: "Evergreen Septic Service LLC in Lake Geneva",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Septic Pumping & Inspection in Lake Geneva - Evergreen Septic Service LLC",
    description:
      "Get expert septic pumping, inspections, and emergency services in Lake Geneva with Evergreen Septic Service LLC—eco-friendly and reliable!",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        alt: "Evergreen Septic Service LLC in Lake Geneva",
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
    canonical: "https://www.evergreensepticsvc.com/",
  },
  metadataBase: new URL("https://www.evergreensepticsvc.com/"),
};

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Gilroy:wght@400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Evergreen Septic Service LLC",
              description:
                "Evergreen Septic Service LLC offers top-rated septic pumping, certified inspections, maintenance, and emergency services in Lake Geneva and the foothills, with expert care.",
              url: "https://www.evergreensepticsvc.com/",
              telephone: "262-949-3555",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Septic Lane",
                addressLocality: "Lake Geneva",
                addressRegion: "WI",
                postalCode: "53147",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.5912,
                longitude: -88.4331,
              },
              openingHours: "Mo-Fr 08:00-17:00",
              sameAs: [
                "https://www.facebook.com/evergreensepticsvc",
                "https://www.instagram.com/evergreensepticsvc",
              ],
              image: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${instrumentSans.className} font-sans`}>
        <Navbar />
        {children}
        <Footer />
        <ClientToastContainer />
      </body>
    </html>
  );
}