import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Evergreen Septic Service LLC",
    template: "%s | Evergreen Septic Service LLC",
  },
  description:
    "Reliable, eco-conscious septic pumping and certified inspections in the foothills. Evergreen Septics delivers expert service with a personal touch.",
  keywords: [
    "Septic pumping",
    "Septic inspections",
    "Foothills septic service",
    "Evergreen Septics",
    "Certified septic inspection",
    "Eco-friendly septic service",
  ],
  openGraph: {
    title: "Evergreen Septic Service LLC",
    description:
      "Reliable, eco-conscious septic pumping and certified inspections in the foothills. Evergreen Septics delivers expert service with a personal touch.",
    url: "https://www.evergreensepticsvc.com/",
    siteName: "Evergreen Septic Service LLC",
    images: [
      {
        url: "https://www.evergreensepticsvc.com/og-image.jpg", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen Septic Service LLC",
    description:
      "Top-rated septic pumping and inspections with an emphasis on education, customer care, and environmental responsibility.",
    images: ["https://www.evergreensepticsvc.com/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}