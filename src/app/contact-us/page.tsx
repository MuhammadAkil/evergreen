import HeroTop from "../components/HeroTop";
import Subscribe from "../components/Subscribe";
import Hero from "./hero";
import  { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Contact Evergreen Septic Service LLC in Lake Geneva - Get Help Today",
    template: "%s | Evergreen Septic Service LLC",
  },
  description:
    "Need septic services in Lake Geneva? Contact Evergreen Septic Service LLC for expert pumping, inspections, and repairs. Call 262-949-3555 or fill out our form for prompt assistance.",
  keywords: [
    "contact Evergreen Septic Service LLC",
    "septic service contact Lake Geneva",
    "Lake Geneva septic support",
    "Evergreen Septic phone number",
    "septic inquiries Lake Geneva",
    "contact septic company Lake Geneva",
    "septic service help",
    "Evergreen Septic customer service",
  ],
  openGraph: {
    title: "Contact Evergreen Septic Service LLC in Lake Geneva - Get Help Today",
    description:
      "Need septic services in Lake Geneva? Contact Evergreen Septic Service LLC for expert pumping, inspections, and repairs. Call 262-949-3555 or fill out our form for prompt assistance.",
    url: "https://www.evergreensepticsvc.com/contact-us",
    siteName: "Evergreen Septic Service LLC",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        width: 1200,
        height: 630,
        alt: "Contact Evergreen Septic Service LLC in Lake Geneva",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Evergreen Septic Service LLC in Lake Geneva - Get Help Today",
    description:
      "Need septic help in Lake Geneva? Reach Evergreen Septic Service LLC at 262-949-3555 or use our contact form for fast, reliable service!",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        alt: "Contact Evergreen Septic Service LLC in Lake Geneva",
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
    canonical: "https://www.evergreensepticsvc.com/contact-us",
  },
  metadataBase: new URL("https://www.evergreensepticsvc.com/"),
};

export default function ContactUsPage() {
  return (
    <>
      <HeroTop
        title="Contact Us"
        description="Need septic services in Lake Geneva? Contact Evergreen Septic Service LLC for expert pumping, inspections, and repairs. Call 262-949-3555 or fill out our form for prompt assistance."
      />
      <Hero />
      <Subscribe />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "262-949-3555",
      email: "info@evergreensepticsvc.com",
      areaServed: "Lake Geneva, WI",
      availableLanguage: "English",
    }),
  }}
/>
    </>
  );
}