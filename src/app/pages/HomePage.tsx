import Banner from '../components/Banner';
import HeroSection from '../components/HerSection';
import Services from '../components/Services';
import Industries from '../components/Industries';
import About from '../components/About';
import Pricing from '../components/Pricing';
import PricingPage from '../components/PriceDetail';
import Slider from '../components/Slider';
import Subscribe from '../components/Subscribe';
import CallToAction from '../components/CallToAction';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Septic & Holding Tank Experts in Lake Geneva - Evergreen Septic Service LLC",
    template: "%s | Evergreen Septic Service LLC",
  },
  description:
    "Evergreen Septic Service LLC offers expert septic and holding tank services in Lake Geneva—pumping, inspections, maintenance, and eco-friendly solutions for homes and businesses.",
  keywords: [
    "septic services Lake Geneva",
    "holding tank pumping Lake Geneva",
    "septic tank pumping",
    "septic system maintenance",
    "eco-friendly septic solutions",
    "Evergreen Septic Service LLC",
    "septic inspections Lake Geneva",
    "septic repairs Lake Geneva",
    "drain field restoration",
    "emergency septic services Lake Geneva",
    "septic installation Lake Geneva",
  ],
  openGraph: {
    title: "Septic & Holding Tank Experts in Lake Geneva - Evergreen Septic Service LLC",
    description:
      "Evergreen Septic Service LLC offers expert septic and holding tank services in Lake Geneva—pumping, inspections, maintenance, and eco-friendly solutions for homes and businesses.",
    url: "https://www.evergreensepticsvc.com",
    siteName: "Evergreen Septic Service LLC",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        width: 1200,
        height: 630,
        alt: "Septic and holding tank services in Lake Geneva",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Septic & Holding Tank Experts in Lake Geneva - Evergreen Septic Service LLC",
    description:
      "Need septic services in Lake Geneva? Evergreen Septic Service LLC offers pumping, inspections, and eco-friendly solutions—contact us today!",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        alt: "Septic and holding tank services in Lake Geneva",
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
    canonical: "https://www.evergreensepticsvc.com",
  },
  metadataBase: new URL("https://www.evergreensepticsvc.com/"),
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Services />
      <About />
      <Industries />
      <Pricing />
      <PricingPage />
      <Banner />
      <Slider />
      <Subscribe />
      <CallToAction />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://www.evergreensepticsvc.com",
            name: "Evergreen Septic Service LLC",
            description:
              "Evergreen Septic Service LLC offers expert septic and holding tank services in Lake Geneva—pumping, inspections, maintenance, and eco-friendly solutions for homes and businesses.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.evergreensepticsvc.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}