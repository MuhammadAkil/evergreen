import CallToAction from "../components/CallToAction";
import HeroTop from "../components/HeroTop";
import Slider from "../components/Slider";
import Hero from "./hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Client Testimonials for Septic Services in Lake Geneva - Evergreen Septic Service LLC",
    template: "%s | Evergreen Septic Service LLC",
  },
  description:
    "See testimonials from satisfied clients of Evergreen Septic Service LLC in Lake Geneva. Trusted for septic pumping, inspections, maintenance, and eco-friendly solutions.",
  keywords: [
    "septic service testimonials Lake Geneva",
    "Evergreen Septic Service reviews",
    "client feedback septic services",
    "trusted septic company Lake Geneva",
    "septic pumping reviews",
    "septic inspection testimonials",
    "eco-friendly septic service feedback",
    "Lake Geneva septic company reviews",
    "Evergreen Septic customer reviews",
  ],
  openGraph: {
    title: "Client Testimonials for Septic Services in Lake Geneva - Evergreen Septic Service LLC",
    description:
      "See testimonials from satisfied clients of Evergreen Septic Service LLC in Lake Geneva. Trusted for septic pumping, inspections, maintenance, and eco-friendly solutions.",
    url: "https://www.evergreensepticsvc.com/testimonials",
    siteName: "Evergreen Septic Service LLC",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        width: 1200,
        height: 630,
        alt: "Client testimonials for Evergreen Septic Service LLC in Lake Geneva",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials for Septic Services in Lake Geneva - Evergreen Septic Service LLC",
    description:
      "Read client testimonials for Evergreen Septic Service LLC in Lake Geneva—trusted for septic pumping, inspections, and eco-friendly solutions!",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
        alt: "Client testimonials for Evergreen Septic Service LLC in Lake Geneva",
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
    canonical: "https://www.evergreensepticsvc.com/testimonials",
  },
  metadataBase: new URL("https://www.evergreensepticsvc.com/"),
};

export default function TestimonialsPage() {
    const reviews = [
        {
          author: "John D.",
          reviewBody: "Evergreen Septic Service LLC did an amazing job with our septic tank pumping in Lake Geneva. Professional, timely, and eco-friendly!",
          rating: 5,
          datePublished: "2025-01-15",
        },
        {
          author: "Sarah M.",
          reviewBody: "Their certified inspection saved us from a major issue. Highly recommend Evergreen for septic services in the Lake Geneva area!",
          rating: 5,
          datePublished: "2025-02-10",
        },
        {
          author: "Mike H.",
          reviewBody: "Excellent service and very knowledgeable. They explained everything about our septic system in detail. Will use them again.",
          rating: 5,
          datePublished: "2025-03-01",
        },
        {
          author: "Emily R.",
          reviewBody: "Prompt and friendly crew. Evergreen made the inspection process stress-free before we sold our home.",
          rating: 5,
          datePublished: "2025-03-15",
        },
        {
          author: "Robert L.",
          reviewBody: "The best septic company in the foothills. Transparent pricing and a strong commitment to the environment.",
          rating: 5,
          datePublished: "2025-04-01",
        },
        {
          author: "Jessica T.",
          reviewBody: "Very professional and courteous. They were quick and left the yard spotless after pumping.",
          rating: 5,
          datePublished: "2025-04-20",
        },
        {
          author: "Brandon C.",
          reviewBody: "Called them for an emergency backup — they arrived within an hour. Exceptional service!",
          rating: 5,
          datePublished: "2025-04-25",
        },
        {
          author: "Linda P.",
          reviewBody: "Eco-conscious and efficient. I appreciate their use of safe cleaning products during service.",
          rating: 5,
          datePublished: "2025-05-01",
        },
        {
          author: "David W.",
          reviewBody: "We’ve used Evergreen twice now. Their team is respectful, on time, and highly skilled.",
          rating: 5,
          datePublished: "2025-05-03",
        },
        {
          author: "Natalie S.",
          reviewBody: "They provided a full inspection report with photos. Great communication throughout the process.",
          rating: 5,
          datePublished: "2025-05-05",
        },
        {
          author: "Chris B.",
          reviewBody: "Highly dependable and fairly priced. They came recommended and I now see why.",
          rating: 5,
          datePublished: "2025-05-06",
        },
      ];
      

  return (
    <>
      <HeroTop
        title="Testimonials"
        description="See testimonials from satisfied clients of Evergreen Septic Service LLC in Lake Geneva. Trusted for septic pumping, inspections, maintenance, and eco-friendly solutions."
      />
      <Slider/>
      <Hero />
      <CallToAction />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Evergreen Septic Service LLC",
            url: "https://www.evergreensepticsvc.com",
            review: reviews.map((review) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: review.author,
              },
              reviewBody: review.reviewBody,
              reviewRating: {
                "@type": "Rating",
                ratingValue: review.rating,
                bestRating: "5",
              },
              datePublished: review.datePublished,
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: reviews.length,
              bestRating: "5",
            },
          }),
        }}
      />
    </>
  );
}