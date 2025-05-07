import SuccessBanner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import HeroTop from "../components/HeroTop";
import Subscribe from "../components/Subscribe";
import Hero from "./hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About Evergreen Septic Service LLC - Septic Experts in Lake Geneva",
    template: "%s | Evergreen Septic Service LLC",
  },
  description:
    "Learn about Evergreen Septic Service LLC in Lake Geneva—your trusted septic experts providing top-quality pumping, inspections, maintenance, and emergency services with care.",
  keywords: [
    "about Evergreen Septic Service LLC",
    "septic experts Lake Geneva",
    "Evergreen Septic team",
    "septic company Lake Geneva",
    "septic services background",
    "reliable septic company",
    "septic maintenance experts",
    "emergency septic services Lake Geneva",
    "septic system professionals",
  ],
  openGraph: {
    title: "About Evergreen Septic Service LLC - Septic Experts in Lake Geneva",
    description:
      "Learn about Evergreen Septic Service LLC in Lake Geneva—your trusted septic experts providing top-quality pumping, inspections, maintenance, and emergency services with care.",
    url: "https://www.evergreensepticsvc.com/about-us",
    siteName: "Evergreen Septic Service LLC",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/AboutHeroSection.png",
        width: 1200,
        height: 630,
        alt: "About Evergreen Septic Service LLC in Lake Geneva",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Evergreen Septic Service LLC - Septic Experts in Lake Geneva",
    description:
      "Discover Evergreen Septic Service LLC in Lake Geneva—experts in septic pumping, inspections, and emergency services. Learn more about our team!",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/AboutHeroSection.png",
        alt: "About Evergreen Septic Service LLC in Lake Geneva",
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
    canonical: "https://www.evergreensepticsvc.com/about-us",
  },
  metadataBase: new URL("https://www.evergreensepticsvc.com/"),
};

export default function AboutPage() {
  return (
    <>
      <HeroTop
        title="About Us"
        description="Learn about Evergreen Septic Service LLC in Lake Geneva—your trusted septic experts providing top-quality pumping, inspections, maintenance, and emergency services with care."
      />
      <Hero />
      <SuccessBanner />
      <Subscribe />
      <CallToAction />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Evergreen Septic Service LLC",
            url: "https://www.evergreensepticsvc.com",
            logo: "https://www.evergreensepticsvc.com/assets/images/logo.png",
            description:
              "Evergreen Septic Service LLC in Lake Geneva provides top-quality septic solutions, including pumping, inspections, maintenance, and emergency services, with a focus on honesty, efficiency, and care.",
            telephone: "262-949-3555",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lake Geneva",
              addressRegion: "WI",
              postalCode: "53147",
              addressCountry: "US",
            },
            sameAs: [
              "https://www.facebook.com/evergreensepticsvc",
              "https://www.instagram.com/evergreensepticsvc",
            ],
          }),
        }}
      />
    </>
  );
}