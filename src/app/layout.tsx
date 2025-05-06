import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Instrument_Sans } from 'next/font/google';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import Seo from "../Seo";

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
        url: "https://www.evergreensepticsvc.com/assets/images/HeroSection.png",
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
    images: ["https://www.evergreensepticsvc.com/assets/images/HeroSection.png"],
  },
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
        <link href="https://fonts.googleapis.com/css2?family=Gilroy:wght@400&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${instrumentSans.className} font-sans`}>
        <Seo />
        <Navbar />
        {children}
        <Footer />
        <ToastContainer 
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}