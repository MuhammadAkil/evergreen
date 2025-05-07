import HeroTop from '../components/HeroTop';
import FAQSection from './FAQSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Septic System FAQs in Lake Geneva - Evergreen Septic Service LLC",
    template: "%s | Evergreen Septic Service LLC",
  },
  description:
    "Get answers to FAQs about septic system maintenance, pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in Lake Geneva.",
  keywords: [
    "septic system FAQs Lake Geneva",
    "septic maintenance questions",
    "Evergreen Septic Service FAQ",
    "Lake Geneva septic FAQs",
    "septic pumping FAQ",
    "septic inspections questions",
    "eco-friendly septic solutions FAQ",
    "septic emergency services FAQ",
    "septic tank care Lake Geneva",
    "Evergreen Septic support",
  ],
  openGraph: {
    title: "Septic System FAQs in Lake Geneva - Evergreen Septic Service LLC",
    description:
      "Get answers to FAQs about septic system maintenance, pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in Lake Geneva.",
    url: "https://www.evergreensepticsvc.com/faq",
    siteName: "Evergreen Septic Service LLC",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        width: 1200,
        height: 630,
        alt: "Septic System FAQs in Lake Geneva",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Septic System FAQs in Lake Geneva - Evergreen Septic Service LLC",
    description:
      "Find answers to septic system FAQs with Evergreen Septic Service LLC in Lake Geneva—maintenance, pumping, inspections, and more!",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        alt: "Septic System FAQs in Lake Geneva",
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
    canonical: "https://www.evergreensepticsvc.com/faq",
  },
  metadataBase: new URL("https://www.evergreensepticsvc.com/"),
};

export default function FAQPage() {
  // Example FAQ data to generate structured data (replace with actual data from FAQSection if available)
  const faqData = [
    {
      question: "How often should I pump my septic tank?",
      answer: "We recommend pumping your septic tank every 3-5 years, depending on usage, to prevent issues.",
    },
    {
      question: "What does a septic inspection involve?",
      answer: "Our inspections include a thorough check of your tank, drain field, and system components, with a detailed report.",
    },
    {
      question: "Are your services eco-friendly?",
      answer: "Yes, we use environmentally safe methods and products to protect your property and the local ecosystem.",
    },
  ];

  return (
    <>
      <HeroTop
        title="Frequently Asked Questions"
        description="Get answers to FAQs about septic system maintenance, pumping, inspections, and eco-friendly solutions with Evergreen Septic Service LLC in Lake Geneva."
      />
      <FAQSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}